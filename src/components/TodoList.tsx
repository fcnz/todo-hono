import { Todo } from "../db";
import { EditItem } from "./EditItem";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {
  todos: Todo[];
}
export const TodoList = ({ todos }: TodoListProps) => (
  <ul id="todo-list" class="flex flex-col">
    {todos.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </ul>
);
