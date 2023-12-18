import { Todo } from "../db";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {
  todos: Todo[];
}
export const TodoList = ({ todos }: TodoListProps) => (
  // <ul id="todo-list" class="todo-list">
  <ul id="todo-list" class="flex flex-col">
    {todos.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </ul>
);
