import { Todo } from "../db";

export interface TodoItemProps {
  todo: Todo;
}
export const TodoItem = ({ todo }: TodoItemProps) => (
  <li id={"todo-" + todo.id} class="border-t border-b text-lg">
    <div class="flex items-center">
      <input
        class="w-4 h-4 m-3 mr-2"
        type="checkbox"
        checked={todo.done}
        hx-patch={"/todos/" + todo.id}
        hx-target={"#todo-" + todo.id}
        hx-swap="outerHTML"
      />
      <label
        hx-get={"/todos/edit/" + todo.id}
        hx-target={"#todo-" + todo.id}
        hx-swap="outerHTML"
        class={"flex-1 " + (todo.done ? "text-gray-500 line-through" : "")}
      >
        {todo.name}
      </label>
      <button
        class="w-10 h-10 text-3xl text-orange-500 hover:text-red-500"
        hx-delete={"/todos/" + todo.id}
        _={"on htmx:afterOnLoad remove #todo-" + todo.id}
      >
        &times;
      </button>
    </div>
  </li>
);
