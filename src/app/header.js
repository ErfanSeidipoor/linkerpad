import React, { useContext } from "react";
import styled from "styled-components";
import Context from "./context";
import ItemModel from "../model/item";

const HeaderContainer = styled.div`
  background-color: #1976d2;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  height: 50px;
  top: 0;
  z-index: 1;
  align-items: center;
  width: 100vw;
  padding: 0 5%;
  color: #f5f5f5;
  font-size: 16px;
`;

const Elements = styled.div`
  display: flex;
  font-size: 14px;
`;
const HeaderElement = styled.div`
  padding: 5px;
  cursor: pointer;
  color: white;
  border-bottom: ${props => (props.display ? "2px solid" : "")};
`;

export default () => {
  const { listView, setListView, setSample, setCreateItem } = useContext(
    Context
  );

  const onAddClick = () => {
    setSample(new ItemModel());
    setCreateItem(true);
  };

  return (
    <HeaderContainer>
      Header
      <Elements>
        <HeaderElement onClick={() => setListView(true)} display={listView}>
          List View
        </HeaderElement>
        <HeaderElement onClick={() => setListView(false)} display={!listView}>
          Grid View
        </HeaderElement>
        <HeaderElement onClick={() => onAddClick()}>Add</HeaderElement>
      </Elements>
    </HeaderContainer>
  );
};
