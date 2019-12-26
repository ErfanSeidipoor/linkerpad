import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "../components/modal";
import ItemModel from "../model/item";
import Context from "./context";

const ConfirmContainer = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 0 auto 20px auto;
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 10px 10%;
  justify-content: "center";
`;
const Button = styled.div`
  z-index: 3;
  width: 100px;
  margin: 20px auto;
  padding: 5px;
  font-size: 14px;
  background-color: ${props => props.color || "#1976d2"};
  color: black;
  border-radius: 10%;
  cursor: pointer;
`;

export default () => {
  const {
    createItem,
    setCreateItem,
    editItem,
    setEditItem,
    deleteItem,
    setDeleteItem,
    setItems,
    items,
    sample,
    setSample,
    itemIndex,
    setItemIndex,
    confirmation,
    setConfirmation
  } = useContext(Context);

  let word = "";
  if (editItem) {
    word = "edit";
  } else if (createItem) {
    word = "create";
  } else if (deleteItem) {
    word = "delete";
  }

  const onCancelClick = () => {
    setSample(new ItemModel());
    setDeleteItem(false);
    setEditItem(false);
    setCreateItem(false);
    setItemIndex(0);
  };

  const onYesClick = () => {
    if (createItem) {
      setItems([sample, ...items]);
    } else if (editItem) {
      setItems(
        items.map((item, index) => (index === itemIndex ? sample : item))
      );
    } else if (deleteItem) {
      setItems(items.filter((item, index) => index !== itemIndex));
    }
    setEditItem(false);
    setCreateItem(false);
    setSample(new ItemModel());
    setDeleteItem(false);
    setConfirmation(false);
    setItemIndex(0);
  };

  return (
    <Modal
      show={deleteItem || confirmation}
      onCloseClick={() => onCancelClick()}
    >
      <ConfirmContainer>
        {`Are you sure to want ${word} item with title = ${sample.title}`} ?
        <br></br>
        <ButtonContainer>
          <Button onClick={() => onYesClick()}>yes</Button>
          <Button onClick={() => onCancelClick()} color="grey">
            cancel
          </Button>
        </ButtonContainer>
      </ConfirmContainer>
    </Modal>
  );
};
