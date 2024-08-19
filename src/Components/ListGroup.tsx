import { MouseEvent } from "react";

function ListGroup() {
  let items = ["new york", "london", "boston", "chicago"];

  const handleClick = (event: MouseEvent) => console.log(event);

  const message = items.length === 0 && <p>No item found</p>;

  let selectedIndex = -1;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group"></ul>
      {message}
      {items.map((item) => (
        <li className="list=group-item active" key={item} onClick={handleClick}>
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
