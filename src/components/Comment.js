import React, { useState } from "react";
import styled from "styled-components";
import DeBtn from "./DeBtn";
import CommentList from "./CommentList";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const Comment = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);

  const [comment, setComment] = useState("");

  const addCom = () => {
    dispatch(commentActions.addCommentDB(comment));
  };

  return (
    <React.Fragment>
      <Outter>
        <ConInput>
          <form>
            <input
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </form>
          <DeBtn
            width="15%"
            text="댓글 남기기!"
            height="100px"
            onClick={() => {
              addCom();
            }}
          />
        </ConInput>
        <CommentList />
      </Outter>
    </React.Fragment>
  );
};

const Outter = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20px;
`;
const ConInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & form {
    width: 80%;
  }
  & input {
    background: #e7f6fd;
    width: 100%;
    border: none;
    height: 100px;
    border-radius: 8px;
    border: 1px solid #eee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px;
    overflow: scroll;
    @media screen and (max-width: 720px) {
      height: 60px;
    }

    &:focus {
      color: #6f9fbe;
      border: 3px solid #6f9fbe;
    }
  }
`;

export default Comment;
