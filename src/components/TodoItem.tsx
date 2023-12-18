import { Todo } from "../db";

export interface TodoItemProps {
  todo: Todo;
}
export const TodoItem = ({ todo }: TodoItemProps) => (
  // <li id={"todo-" + todo.id} class={todo.done ? "completed" : ""}>
  <li
    id={"todo-" + todo.id}
    class={
      "py-2 px-1 border-t border-b text-lg " + (todo.done ? "line-through" : "")
    }
  >
    {/* <div class="view"> */}
    <div class="flex">
      <input
        type="checkbox"
        checked={todo.done}
        // class="toggle"
        hx-patch={"/todos/" + todo.id}
        hx-target={"#todo-" + todo.id}
        hx-swap="outerHTML"
      />
      <label
        hx-get={"/todos/edit/" + todo.id}
        hx-target={"#todo-" + todo.id}
        hx-swap="outerHTML"
      >
        {todo.name}
      </label>
      <button
        // class="destroy"
        hx-delete={"/todos/" + todo.id}
        _={"on htmx:afterOnLoad remove #todo-" + todo.id}
      />
    </div>
  </li>
);
