import React, { useContext } from "react";
import styled from "styled-components";
import Item from "../components/item";
import Context from "./context";

const Items = styled.div`
  display: flex;
  margin: 70px 0 0 0;
  flex-wrap: wrap;
  justify-content: center;
`;

export default () => {
  const {
    items,
    setSample,
    setDeleteItem,
    setEditItem,
    setItemIndex,
    listView
  } = useContext(Context);

  const onEditClick = index => {
    setSample(items[index]);
    setItemIndex(index);
    setEditItem(true);
  };

  const onDeleteClick = index => {
    setSample(items[index]);
    setItemIndex(index);
    setDeleteItem(true);
  };

  return (
    <Items>
      {items.map((item, index) => (
        <Item
          item={item}
          key={item.id}
          listView={listView}
          onEditClick={() => onEditClick(index)}
          onDeleteClick={() => onDeleteClick(index)}
        />
      ))}
    </Items>
  );
};
