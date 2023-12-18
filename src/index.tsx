import { v4 as uuid } from "uuid";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { Todo, todos } from "./db";
import { ItemCount } from "./components/ItemCount";
import { EditItem } from "./components/EditItem";
import { TodoItem } from "./components/TodoItem";
import { App } from "./components/App";
import { TodoList } from "./components/TodoList";
import { logger } from "hono/logger";
import { Page } from "./components/Page";

const app = new Hono();
app.get("/", (c) => {
  const { filter = "all" } = c.req.query();
  const itemsLeft = todos.filter((t) => !t.done).length;
  let filteredTodos: Todo[] = [];
  switch (filter) {
    case "active":
      filteredTodos = todos.filter((t) => !t.done);
      break;
    case "completed":
      filteredTodos = todos.filter((t) => t.done);
      break;
    default:
      filteredTodos = todos;
  }
  return c.html(
    <Page>
      <App filter={filter} todos={filteredTodos} itemsLeft={itemsLeft} />
    </Page>
  );
});

app.post("/todos", async (c) => {
  const { todo } = (await c.req.parseBody()) as { todo: string };
  const newTodo = {
    id: uuid(),
    name: todo,
    done: false,
  };
  todos.push(newTodo);
  return c.html(<TodoItem todo={newTodo} />);
});

app.get("/todos/edit/:id", (c) => {
  const id = c.req.param("id");
  const todo = todos.find((t) => t.id === id)!;
  return c.html(<EditItem todo={todo} />);
});

app.post("todos/update/:id", async (c) => {
  const id = c.req.param("id");
  const todo = todos.find((t) => t.id === id)!;
  const { name } = (await c.req.parseBody()) as { name: string };
  console.log("update", id, name);
  todo.name = name;
  const itemsLeft = todos.filter((t) => !t.done).length;
  return c.html(
    <>
      <TodoItem todo={todo} />
      <ItemCount itemsLeft={itemsLeft} />
    </>
  );
});

app.patch("todos/:id", (c) => {
  const id = c.req.param("id");
  const todo = todos.find((t) => t.id === id)!;
  todo.done = !todo.done;
  const itemsLeft = todos.filter((t) => !t.done).length;

  return c.html(
    <>
      <TodoItem todo={todo} />
      <ItemCount itemsLeft={itemsLeft} />
    </>
  );
});

app.delete("todos/:id", (c) => {
  const id = c.req.param("id");
  const todo = todos.find((t) => t.id === id)!;
  const idx = todos.indexOf(todo);
  todos.splice(idx, 1);
  const itemsLeft = todos.filter((t) => !t.done).length;
  return c.html(<ItemCount itemsLeft={itemsLeft} />);
});

app.post("todos/clear-completed", (c) => {
  todos
    .filter((t) => t.done)
    .forEach((toRemove) => {
      const idx = todos.indexOf(toRemove);
      todos.splice(idx, 1);
    });
  const itemsLeft = todos.filter((t) => !t.done).length;
  return c.html(
    <>
      <TodoList todos={todos} />
      <ItemCount itemsLeft={itemsLeft} />
    </>
  );
});

app.use("/static/*", serveStatic({ root: "./" }));

app.use("*", logger());

console.log("Serving application on: http://localhost:3000");

serve(app);
