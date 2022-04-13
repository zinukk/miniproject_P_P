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

  const delCom = () => {
    dispatch(comActions.delcommentDB(id, postId));
  };
  //awf
  //   const comment_list = useSelector((state) => state.comment.list);
  //   const { postId } = props;

  //   React.useEffect(() => {
  //     if (!comment_list[postId]) {
  //       //dispatch(commentActions.getCommentFB(postId));
  //     }
  //   }, []);
  //   if (!comment_list[postId] || !postId) {
  //     return null;
  //   }

  return (
    <React.Fragment>
      {one_post?.comments.map((c, idx) => {
        // return <CommentItem key={idx} {...c} />;
        return (
          <Grid key={idx}>
            <p>{one_post?.createdAt}</p>
            <div>
              <ComPro>
                <DeImg size="60" src={imageUrl} />
                <p>{one_post?.nickname}</p>
              </ComPro>
              <ComBox>
                {/* {is_me && 
            <div>
              <DeBtn is_del />
            </div>} */}
                <div>
                  <DeBtn is_del _onClick={delCom} />
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
