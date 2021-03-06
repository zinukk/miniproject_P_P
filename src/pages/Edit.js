import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import moment from "moment";
import axios from "axios";
import { history } from "../redux/configStore";
import imageCompression from "browser-image-compression";
import { useLocation } from "react-router-dom";

const Edit = (props) => {
  const dispatch = useDispatch();
  const locat = useLocation();

  const token = sessionStorage.getItem("TT");

  const postData = locat.state.one_post;

  const pId = postData.postId;

  //useState
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  // const createdAt = moment().format("YYYY-MM-DD hh:mm:ss");
  // const modifiedAt = moment().format("YYYY-MM-DD hh:mm:ss");

  // const post_value = locat.state.one_post;

  const data = { title, location, imageUrl, content };

  const editData = () => {
    dispatch(postActions.editDataDB(data, pId, token));
  };

  console.log(imageUrl);

  //미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div>
      <Header></Header>
      <Container>
        <TravelImg src="/image/write.png"></TravelImg>
        <FlexBox>
          <ImgBox>
            <h2>게시물을 수정해주세요!</h2>
            <UploadFileInput
              type="file"
              accept={"image/*"}
              defaultValue={postData.imgUrl}
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
                setImageUrl(e.target.files[0]);
              }}
            />
            <PreviewBox>
              {imageSrc && <PreviewImg src={imageSrc} alt="preview-img" />}
            </PreviewBox>
          </ImgBox>
          <DataBox>
            <DataInput
              type="text"
              defaultValue={postData.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br />
            <DataInput
              type="text"
              defaultValue={postData.location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />{" "}
            <br />
            <TextArea
              defaultValue={postData.content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />{" "}
            <br />
            <DataButton
              onClick={() => {
                editData();
              }}
            >
              게시물 수정
            </DataButton>
          </DataBox>
        </FlexBox>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: fit-content;
  height: 500px;
  border-radius: 10px;
  margin: 200px auto;
  display: flex;
  padding-right: 40px;
  background: RGB(137, 205, 221);
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
const ImgBox = styled.div`
  width: 400px;
  height: 450px;
  margin: 25px 5px;

  & > h2 {
    font-family: "Gugi";
  }
`;
const PreviewBox = styled.div`
  width: 450px;
  height: 300px;
`;
const PreviewImg = styled.img`
  width: 86.5%;
  height: 250px;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
const DataBox = styled.div`
  width: 300px;
  height: 450px;
  margin: 25px 5px;
`;
const UploadFileInput = styled.input`
  border: 3px solid #b2e1f4;
  width: 97%;
  padding: 10px;
  border-radius: 5px;
  margin: 20px 0px;
`;
const DataInput = styled.input`
  background: #e7f6fd;
  width: 300px;
  border: none;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  overflow: scroll;
  margin-bottom: 25px;
`;
const TextArea = styled.textarea`
  background: #e7f6fd;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin-bottom: 25px;
`;
const DataButton = styled.button`
  background: #e7f6fd;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #eee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;
const TravelImg = styled.img`
  width: 500px;
  height: 500px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const FlexBox = styled.div`
  display: flex;
  width: fit-content;
  margin: 25px 5px;
  background: white;
  border-radius: 10px;
  padding: 0 20px;
`;

export default Edit;
