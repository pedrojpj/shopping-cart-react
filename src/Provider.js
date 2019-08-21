import React, { useReducer, cloneElement } from "react";
import { getItem, setItem } from "./localStorage";

const ShopData = [
  {
    id: 1,
    title: "item 1",
    price: 10
  },
  {
    id: 2,
    title: "item 2",
    price: 20
  },
  {
    id: 3,
    title: "item 3",
    price: 30
  },
  {
    id: 4,
    title: "item 4",
    price: 40
  },
  {
    id: 5,
    title: "item 5",
    price: 50
  },
  {
    id: 6,
    title: "item 6",
    price: 60
  },
  {
    id: 7,
    title: "item 7",
    price: 70
  },
  {
    id: 8,
    title: "item 8",
    price: 80
  },
  {
    id: 9,
    title: "item 9",
    price: 90
  },
  {
    id: 10,
    title: "item 10",
    price: 100
  },
  {
    id: 11,
    title: "item 11",
    price: 110
  },
  {
    id: 12,
    title: "item 12",
    price: 120
  },
  {
    id: 13,
    title: "item 13",
    price: 130
  }
];

const initialState = {
  items: getItem("items") || [],
  list: ShopData
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const items = [...state.items, action.payload.id];
      setItem("items", items);

      return {
        ...state,
        items
      };
    case "remove":
      const itemsRemove = state.items.filter(
        item => item !== action.payload.id
      );
      setItem("items", itemsRemove);

      return {
        ...state,
        items: itemsRemove
      };

    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {React.Children.map(children, child =>
        cloneElement(child, { state, dispatch })
      )}
    </div>
  );
};

export default Provider;
