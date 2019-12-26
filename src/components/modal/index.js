import React, { useRef } from "react";
import styled from "styled-components";

export default props => {
  const { show, onCloseClick, children } = props;

  const Modal = styled.div`
    display: ${show ? "flex" : "none"};
    align-item: center;
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  `;

  const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    min-width: 50%;
    max-width: 70%;
    max-height: 70%;
    overflow: auto;
  `;

  const modalref = useRef();

  const close = e => {
    if (e.target === modalref.current) {
      onCloseClick();
    }
  };

  return (
    <Modal show={show} onClick={close} ref={modalref}>
      <ModalContent className="modal-content">{children}</ModalContent>
    </Modal>
  );
};
