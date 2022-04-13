import React, { useState } from "react";
import DeImg from "../components/DeImg";
import DeBtn from "./DeBtn";
import styled from "styled-components";
import axios from "axios";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { history } from "../redux/configStore";

const DePost = (props) => {
  const dispatch = useDispatch();

  const pId = props.postId;

  const one_post = useSelector((state) => state.post.one_post);

  React.useEffect(() => {
    dispatch(postActions.getOnePostDB(pId));
  }, []);

  const { postId, title, content, location, nickname, imageUrl, createdAt } =
    props;
  return (
    <React.Fragment>
      <Outter>
        <div>
          {/* <h1>{title}</h1> */}
          <h1>{one_post?.title}</h1>
        </div>
        <DeHeader>
          <Grid>
            {/* <DeImg size="60" src={imageUrl} /> */}
            <DeImg size="60" src={one_post?.imageUrl} />
            {/* <p>{nickname}님</p> */}
            <p>{one_post?.nickname}님</p>
            {/* <p>{createdAt}</p> */}
            <p>위치 : {one_post?.location}</p>
            <p>{one_post?.createdAt}</p>
          </Grid>
          <Grid>
            <DeBtn
              is_edit
              _onClick={() => {
                history.push({
                  pathname: `/detail/write/${postId}`,
                  state: { one_post },
                });
              }}
            />
            <DeBtn is_del />
          </Grid>
        </DeHeader>
        <DeGrid>
          <DeImg
            shape="rectangle"
            src="https://velog.velcdn.com/images/ryurim0109/post/5432eec7-b7ea-4ca7-8315-e929e04c7a54/KakaoTalk_Photo_2022-04-09-10-15-54.jpeg"
          />

          <Desc>
            {/* <p>{content}</p> */}
            <p>{one_post?.content}</p>
          </Desc>
        </DeGrid>
      </Outter>
    </React.Fragment>
  );
};
DePost.defaultProps = {
  postId: 1,
  title: "제목입니다",
  content: "반가워요",
  location: "경주",
  nickname: "닉네임",
  imageUrl:
    "https://velog.velcdn.com/images/ryurim0109/post/ece967a7-45f6-4479-b819-639a38063ca1/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
  // "/images/cancle.png"
  createdAt: "2022-04-09 10:00:00", //LocalDateTime
};

const Outter = styled.div`
  width: 100%;
  position: relative;

  & h1 {
    text-align: center;
    @media screen and (max-width: 720px) {
      font-size: 24px;
    }
  }
`;
const DeHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const Grid = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    padding: 0 10px;
    @media screen and (max-width: 720px) {
      font-size: 16px;
    }
  }
`;
const DeGrid = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
const Desc = styled.div`
  width: 100%;
  margin: 20px 0;
  background: #fff;
  padding: 20px;
  overflow: scroll;
`;
export default DePost;
