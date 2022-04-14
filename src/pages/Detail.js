import React from "react";
import Header from "../components/Header";
import DePost from "../components/DePost";
import styled from "styled-components";
import Comment from "../components/Comment";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as comActions } from "../redux/modules/comment";
import { actionCreators as postActions } from "../redux/modules/post";

const Detail = (props) => {
  const dispatch = useDispatch();
  //const is_login = useSelector((state)=> state.user.is_login);
  const postId = props.match.params.postId;

  const token = sessionStorage.getItem("TT");

  React.useEffect(() => {
    // dispatch(comActions.setcommentDB(postId));
    dispatch(postActions.getOnePostDB(postId));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <DeOutter>
        <DeInner>
          <DePost postId={postId} />
          <Comment postId={postId} />
        </DeInner>
      </DeOutter>
    </React.Fragment>
  );
};

const DeOutter = styled.div`
  width: 100%;
  min-height: 1200px;
  // background:#eee;
  position: relative;
  top: 70px;
  padding: 70px 0 30px 0;
`;
const DeInner = styled.div`
  width: 980px;
  margin: 0 auto;
  position: relative;
  height: 500px;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;
export default Detail;
