import React, { useContext, useState, createRef } from "react";
import styled from "styled-components";
import useForm from "react-hook-form";
import ItemModel from "../../model/item";
import Context from "../context";

const Errdiv = styled.div`
  height: 20px;
  border: none;
  display: block;
  border: 2px solid;
  width: 80%;
  margin: 10px auto;
  padding: 5px;
  font-size: 14px;
  background-color: red;
  color: white;
`;

const InputField = styled.input`
  display: block;
  height: 20px;
  border: none;
  border-bottom: 2px solid grey;
  width: 80%;
  padding: 5px;
  font-size: 14px;
  margin: 10px auto;
`;

const InputSubmit = styled.input`
  border: 2px solid #1976d2;
  width: 100px;
  margin: 20px auto;
  padding: 5px;
  font-size: 14px;
  background-color: transparent;
  color: #1976d2;
  border-radius: 5%;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 10px 10%;
  justify-content: "center";
`;
const Button = styled.div`
  width: 100px;
  margin: 20px auto;
  padding: 5px;
  font-size: 14px;
  border: 2px solid ${props => props.color || "transparent"};
  background-color: ${props => props.bgcolor || "transparent"};
  color: ${props => props.color || "black"};
  border-radius: 10%;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
`;
const Image = styled.img`
  display: block;
  width: 50%;
  margin: auto;
  overflow: hidden;
  max-height: 200px;
`;
const Fileinput = styled.input`
  display: none;
`;

export default () => {
  const {
    sample,
    setSample,
    setItemIndex,
    setEditItem,
    createItem,
    setCreateItem,
    setConfirmation
  } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const [avatar, setAvatar] = useState("");
  const inputFileRef = createRef();

  const onCloseModal = () => {
    setEditItem(false);
    setCreateItem(false);
    setSample(new ItemModel());
    setItemIndex(0);
  };

  const onClickSelectAvatar = () => {
    inputFileRef.current.click();
  };

  const onChangeAvatar = e => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = data => {
    if (avatar) {
      setSample({
        id: sample.id,
        avatar: avatar,
        title: data.title,
        category: data.category
      });
    } else {
      setSample({
        id: sample.id,
        avatar: data.avatar,
        title: data.title,
        category: data.category
      });
    }
    setConfirmation(true);
  };

  return (
    <>
      {!!sample.avatar && !avatar && (
        <Image src={sample.avatar} alt={sample.title} />
      )}
      {!avatar ? (
        <div>
          <Button onClick={onClickSelectAvatar} color="white" bgcolor="#1976d2">
            {createItem ? " Upload An Avatar " : " Change Avatar"}
          </Button>
          <Fileinput
            type="file"
            ref={inputFileRef}
            onChange={onChangeAvatar}
            accept="image/x-png,image/gif,image/jpeg"
          />
        </div>
      ) : (
        <Image src={avatar} alt={sample.title} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="category"
          placeholder="category"
          defaultValue={sample.category}
          ref={register({ required: true })}
        />
        {errors.category && <Errdiv>Category is required</Errdiv>}

        <InputField
          name="title"
          placeholder="title"
          defaultValue={sample.title}
          ref={register({ required: true, minLength: 5, maxLength: 99 })}
        />
        {errors.title && errors.title.type === "required" && (
          <Errdiv>Title is required</Errdiv>
        )}
        {errors.title && errors.title.type === "minLength" && (
          <Errdiv>Min Length is 5</Errdiv>
        )}
        <ButtonContainer>
          <InputSubmit type="submit" />
          <Button onClick={onCloseModal} color="#ec008c">
            Cancel
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
};
