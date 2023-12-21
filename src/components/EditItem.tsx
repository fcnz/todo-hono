import { Todo } from "../db";

export interface EditItemProps {
  todo: Todo;
}
export const EditItem = ({ todo }: EditItemProps) => (
  <form
    id={"todo-" + todo.id}
    hx-post={"/todos/update/" + todo.id}
    hx-trigger="focusout"
    hx-swap="outerHTML"
    class="flex h-full mb-0"
  >
    <input
      type="text"
      name="name"
      value={todo.name}
      class="flex-1 py-2 mx-8 px-2 focus text-lg"
      autofocus
    />
  </form>
);
