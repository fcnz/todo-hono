import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

export let todos: Todo[] = [
  {
    id: uuid(),
    name: "Taste htmx",
    done: true,
  },
  {
    id: uuid(),
    name: "Buy a unicorn",
    done: false,
  },
  {
    id: uuid(),
    name: "Other stufs",
    done: false,
  },
];
