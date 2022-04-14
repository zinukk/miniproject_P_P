import React from "react";
import styled from "styled-components";
import DeBtn from "./DeBtn";
import DeImg from "./DeImg";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as comActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const { commentId, comment, createdAt, nickname, imageUrl, id, postId, idx } =
    props;
  let _user_nickname = useSelector((state) => state.user.nickname);
  const one_post = useSelector((state) => state.post.one_post);

  const is_me = nickname === _user_nickname ? true : false;

  const token = sessionStorage.getItem("TT");

  return (
    <React.Fragment>
      {one_post?.comments?.map((c, idx) => {
        // return <CommentItem key={idx} {...c} />;
        return (
          <Grid key={idx}>
            <p>{one_post?.createdAt}</p>
            <div>
              <ComPro>
                <DeImg size="60" src={imageUrl} />
                <p>{one_post?.comments[idx].nickname}</p>
              </ComPro>
              <ComBox>
                {/* {is_me && 
            <div>
              <DeBtn is_del />
            </div>} */}
                <div>
                  <DeBtn
                    is_del
                    _onClick={() => {
                      window.confirm("댓글을 삭제하시겠습니까?")
                        ? dispatch(
                            comActions.delcommentDB(
                              one_post?.comments[idx].commentId,
                              postId,
                              token
                            )
                          )
                        : window.alert("삭제가 취소되었습니다");
                    }}
                  />
                </div>
                <p>{one_post?.comments[idx].comment}</p>
              </ComBox>
            </div>
          </Grid>
        );
      })}
    </React.Fragment>
  );
};

const Grid = styled.div`
  width: 100%;
  padding: 40px 0;

  & > div {
    display: flex;
  }
`;
const ComPro = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`;
const ComBox = styled.div`
  width: 80%;
  background: #e7f6fd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  @media screen and (max-width: 720px) {
    font-size: 12px;
  }

  & > p {
    width: 100%;
    padding-right: 10%;
    @media screen and (max-width: 720px) {
      padding-right: 20%;
    }
  }
  & > div {
    position: absolute;
    right: 10px;
  }
`;
export default CommentList;
