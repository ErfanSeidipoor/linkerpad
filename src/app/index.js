import React, { useState } from "react";
import Context from "./context";
import Header from "./header";
import Items from "./items";
import Confirm from "./confirm";
import CreateOrEdit from "./createOrEdit";
import ItemModel from "../model/item";
import initialItems from "./assets/menu.json";
import './index.css'
const App = () => {
  const [items, setItems] = useState(
    initialItems.map(item => new ItemModel(item))
  );
  const [sample, setSample] = useState(new ItemModel());
  const [createItem, setCreateItem] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [listView, setListView] = useState(true);
  const [confirmation, setConfirmation] = useState(false);

  return (
    <>
      <Context.Provider
        value={{
          items,
          setItems,
          sample,
          setSample,
          createItem,
          setCreateItem,
          editItem,
          setEditItem,
          deleteItem,
          setDeleteItem,
          listView,
          setListView,
          itemIndex,
          setItemIndex,
          confirmation,
          setConfirmation
        }}
      >
        <CreateOrEdit />
        <Header />
        <Items />
        <Confirm />
      </Context.Provider>
    </>
  );
};

export default App;
