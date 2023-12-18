import { Todo } from "../db";
import { ItemCount } from "./ItemCount";
import { TodoList } from "./TodoList";

export type AppProps = {
  todos: Todo[];
  filter: string;
  itemsLeft: number;
};
export const App = ({ todos, filter, itemsLeft }: AppProps) => (
  <>
    <div class="flex justify-center">
      <div class="w-1/2 flex flex-col">
        {/* <section class="todoapp"> */}
        <h1 class="my-10 text-2xl text-red-600 text-center">todos</h1>
        <section
          style="	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                              0 25px 50px 0 rgba(0, 0, 0, 0.1);"
        >
          {/* <header class="header"> */}
          <header>
            <form
              hx-post="/todos"
              hx-target="#todo-list"
              hx-swap="afterbegin"
              _="on htmx:afterOnLoad set #txtTodo.value to ''"
            >
              <input
                id="txtTodo"
                // class="new-todo"
                class="py-2 pl-4 w-full italic"
                name="todo"
                placeholder="What needs to be done?"
                autofocus
              />
            </form>
          </header>
          {/* <section class="main"> */}
          <section>
            {/* <input type="checkbox" id="toggle-all" class="toggle-all" /> */}
            <input type="checkbox" id="toggle-all" />
            <label for="toggle-all">Mark all as complete</label>
            <TodoList todos={todos} />
          </section>
          {/* <footer class="footer"> */}
          <footer class="flex justify-between mx-2 my-1 text-sm">
            <ItemCount itemsLeft={itemsLeft} />
            {/* <ul class="filters"> */}
            <ul>
              <li>
                {/* <a href="/?filter=all" class={filter === "all" ? "selected" : ""}> */}
                <a
                  class={"mx-1 px-1 " + (filter === "all" ? "border" : "")}
                  href="/?filter=all"
                >
                  All
                </a>
                <a
                  href="/?filter=active"
                  class={"mx-1 px-1 " + (filter === "active" ? "border" : "")}
                  // class={filter === "active" ? "selected" : ""}
                >
                  Active
                </a>
                <a
                  class={
                    "mx-1 px-1 " + (filter === "completed" ? "border" : "")
                  }
                  href="/?filter=completed"
                  // class={filter === "completed" ? "selected" : ""}
                >
                  Completed
                </a>
              </li>
            </ul>
            <button
              // class="clear-completed"
              hx-post="/todos/clear-completed"
              hx-target="#todo-list"
              hx-swap="outerHTML"
            >
              Clear Completed
            </button>
          </footer>
        </section>
        {/* <footer class="info"> */}
        <footer class="mt-8 text-xs text-center">
          <p>Click to edit todo</p>
        </footer>
      </div>
    </div>
  </>
);
