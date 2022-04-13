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

const Write = (props) => {
  const dispatch = useDispatch();

  //useState
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState("");
  // const createdAt = moment().format("YYYY-MM-DD hh:mm:ss");
  // const modifiedAt = moment().format("YYYY-MM-DD hh:mm:ss");

  const data = { title, location, imageUrl, content };

  // const post_value = locat.state.one_post;

  const writeData = () => {
    dispatch(postActions.sendWriteDataDB(data));
  };

  //미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    console.log(reader);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageUrl(reader.result);
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
            <h2>사진을 업로드해주세요!</h2>
            <UploadFileInput
              type="file"
              accept={"image/*"}
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
              placeholder="제목을 입력해주세요"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />{" "}
            <br />
            <DataInput
              type="text"
              placeholder="찍으신 위치를 입력해주세요"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />{" "}
            <br />
            <TextArea
              placeholder="내용을 입력해주세요"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />{" "}
            <br />
            <DataButton
              onClick={() => {
                writeData();
              }}
            >
              저장하기
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

export default Write;
