import React from "react";
import styled from "styled-components";

export default props => {
  const { item, onEditClick, onDeleteClick, listView } = props;

  const ContainerItem = styled.div`
    box-sizing: border-box;
    height: ${listView ? "150px" : "300px"};
    margin: 10px;
    width: ${listView ? "100%" : "250px"};
    background-color: ;
    font-size: 16px;
    border: 1px solid #9e9e9e99;
    border-radius: 5%;
    overflow: hidden;
    display: ${listView ? "flex" : ""};
    @media (max-width: 700px) {
      height: ${listView ? "100px" : "300px"};
    }
  `;

  const Image = styled.img`
    display: block;
    width: ${listView ? "170px" : "250px"};
    height: ${listView ? "100px" : "145px"};
    overflow: hidden;
    @media (min-width: 700px) {
      width: ${listView ? "260px" : "250px"};
      height: ${listView ? "150px" : "145px"};
    }
    @media (max-width: 400px) {
      width: ${listView ? "120px" : ""};
    }
  `;

  const Content = styled.div`
    display: flex;
    height: 150px;
    width: ${listView ? "100%" : ""};
    flex-direction: ${listView ? "" : "column"};
    align-content: ${listView ? "" : "space-between"};
    @media (max-width: 700px) {
      height: ${listView ? "100px" : ""};
    }
  `;

  const TextField = styled.div`
    padding: 5px;
    width: ${listView ? "" : "220px"};
    flex-grow: ${listView ? "1" : ""};
    margin: auto;
    @media (max-width: 700px) {
      margin: ${listView ? "0" : ""};
    }
  `;
  const Text = styled.div`
    font-family: Roboto;
    text-align: left;
    margin: ${listView ? "10px 0 0 10px" : ""};
    color: ${props => props.inputColor || "black"};
    font-size: ${props => props.font || "16px"};
    @media (max-width: 700px) {
      font-size: ${listView ? "12px" : ""};
      margin: ${listView ? "0" : ""};
    }
  `;
  const ButtonField = styled.div`
    display: ${listView ? "" : "flex"};
    align-items: ${listView ? "" : ""};
    max-width: ${listView ? "150px" : ""};
    min-width: ${listView ? "50px" : ""};
    width: ${listView ? "20%" : ""};
    margin: ${listView ? "auto" : ""};
    @media (max-width: 700px) {
      height: ${listView ? "100px" : ""};
      margin: ${listView ? "0" : ""};
    }
  `;

  const Button = styled.div`
    component: block;
    border: 2px solid;
    max-width: ${listView ? "150px" : ""};
    min-width: ${listView ? "50px" : ""};
    width: ${listView ? "" : "40%"};
    margin: 5px auto;
    padding: 5px;
    font-family: Roboto;
    font-size: 14px;
    background-color: transparent;
    color: ${props => props.inputColor || "#1976d2"};
    border-color: ${props => props.inputColor || "#1976d2"};
    border-radius: 5%;
    cursor: pointer;
    text-align: center;
    @media (max-width: 700px) {
      box-sizing: border-box;
      font-size: ${listView ? "12px" : ""};
      margin: ${listView ? "5px auto" : ""};
    }
  `;

  return (
    <ContainerItem>
      <div>
        <Image src={item.avatar} alt={item.title} />
      </div>
      <Content>
        <TextField>
          <Text inputColor="grey">{item.category}</Text>
          <Text font="18px">{item.title}</Text>
        </TextField>
        <ButtonField>
          <Button onClick={() => onEditClick && onEditClick()}>Edit</Button>
          <Button
            onClick={() => onDeleteClick && onDeleteClick()}
            inputColor="#ec008c"
          >
            Delete
          </Button>
        </ButtonField>
      </Content>
    </ContainerItem>
  );
};
