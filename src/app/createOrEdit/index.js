import React, { useContext } from "react";
import Form from "./form";
import Modal from '../../components/modal'
import Context  from "../context";

export default () => {

  const {
    editItem,
    setEditItem,
    createItem,
    setCreateItem,
  } = useContext(Context);

  const closeModal = () => {
    setEditItem(false)
    setCreateItem(false)
  }

  return (
    <>
      <Modal
        show={editItem || createItem}
        onCloseClick={()=>closeModal()}
      >
        <Form />
      </Modal>
    </>
  )
}