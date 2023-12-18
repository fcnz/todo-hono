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
  >
    {/* <input class="edit" type="text" name="name" value={todo.name} autofocus /> */}
    <input type="text" name="name" value={todo.name} autofocus />
  </form>
);
