export interface ItemCountProps {
  itemsLeft: number;
}
export const ItemCount = ({ itemsLeft }: ItemCountProps) => (
  // <span class="todo-count" id="todo-count" hx-swap-oob="true">
  <span id="todo-count" hx-swap-oob="true">
    <strong>{itemsLeft} | item left</strong>
  </span>
);
