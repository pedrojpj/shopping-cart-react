import React, { useEffect } from "react";

export function List({ state, dispatch }) {
  const addItem = id => {
    if (state.items.includes(id)) {
      dispatch({ type: "remove", payload: { id } });
    } else {
      dispatch({ type: "add", payload: { id } });
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <ul>
        {state.list.map(item => (
          <li key={item.id} onClick={() => addItem(item.id)}>
            <p>{item.title}</p>
            <p>Price: {item.price}€</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
