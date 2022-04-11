import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { GoMilestone, GoMegaphone } from "react-icons/go";
import { useHistory } from "react-router-dom";
import { RESP } from "../redux/modules/response";
import { useSelector } from "react-redux";

const Home = () => {
  const data = RESP;

  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  return (
    <div>
      <Header></Header>
      {/* <HomeImg src="image/tree.png" />
                <HomeImgConvert src="image/tree.png" /> */}
      <HomeBody>
        <FlexDiv>
          <WriteButton>
            <CameraImg src="image/camera.png" />
          </WriteButton>
          <HomeTextBox>당신만의 프라이빗한 장소를 올려주세요!</HomeTextBox>
        </FlexDiv>

        <PostBox>
          {post_list.map((cur, idx) => (
            <Posts key={idx}>
              {/* <ImgBox src={cur.imageUrl} /> */}
              <TextBox>
                <GoMegaphone />
                <p style={{ marginLeft: "10px", fontWeight: "600" }}>
                  {cur.title}
                </p>
              </TextBox>
              <TextBox>
                <GoMilestone />
                <p style={{ marginLeft: "10px", fontSize: "13px" }}>
                  {cur.body}
                </p>
              </TextBox>
            </Posts>
          ))}
        </PostBox>
      </HomeBody>
    </div>
  );
};

// const HomeImg = styled.img`
//   width: 300px;
//   position: fixed;
//   bottom: 0px;
// `;
// const HomeImgConvert = styled.img`
//   width: 300px;
//   transform: rotate(180deg);
//   position: fixed;
//   top: 70px;
//   right: 0px;
// `;
const CameraImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  border: 1px solid #eee;
  background: white;
`;

const WriteButton = styled.button`
  background: none;
  border: none;
`;
const HomeTextBox = styled.div`
  font-size: 20px;
  border-left: 3px solid gray;
  margin: 30px auto;
  padding: 20px 40px;
  align-items: center;
  width: fit-content;
  test-align: center;
`;
const FlexDiv = styled.div`
  width: 600px;
  display: flex;
  margin: 0 auto;
  margin-top: 150px;
`;
const PostBox = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3em;
  margin: 100px auto;
`;
const Posts = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  margin: auto;
  border-radius: 5px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
const HomeBody = styled.div`
  width: 1000px;
  margin: 90px auto;
`;
const ImgBox = styled.img`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const TextBox = styled.div`
  display: flex;
  width: fit-content;
  height: 35px;
  margin: 10px;
`;

export default Home;
