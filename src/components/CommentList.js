import React from "react";
import styled from "styled-components";
import DeBtn from "./DeBtn";
import DeImg from "./DeImg";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as comActions } from "../redux/modules/comment";

const CommentList = (props) => {
  //   const comment_list = useSelector((state) => state.comment.list);
  const one_post = useSelector((state) => state.post.one_post);

  console.log(one_post?.comments);
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
      {one_post?.comments.map((c) => {
        return <CommentItem key={c.commentid} {...c} />;
      })}
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  postId: 1,
};

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const { commentId, comment, createdAt, nickname, imageUrl, id, postId } =
    props;
  let _user_nickname = useSelector((state) => state.user.nickname);
  const one_post = useSelector((state) => state.post.one_post);

  const is_me = nickname === _user_nickname ? true : false;

  const delCom = () => {
    dispatch(comActions.delcommentDB(id, postId));
  };

  return (
    <React.Fragment>
      <Grid>
        <p>{one_post?.createdAt}</p>
        <div>
          <ComPro>
            <DeImg size="60" src={one_post?.imageUrl} />
            <p>{one_post?.nickname}</p>
          </ComPro>
          <ComBox>
            {/* {is_me && 
            <div>
              <DeBtn is_del />
            </div>} */}
            <div>
              <DeBtn is_del onClick={delCom} />
            </div>
            <p>{one_post?.comment}</p>
          </ComBox>
        </div>
      </Grid>
    </React.Fragment>
  );
};
CommentItem.defaultProps = {
  commentId: "5fas4f5",
  nickname: "유쨩",
  comment: "오잉 ? 별론데요?",
  createdAt: "2022-04-11 11:00:02",
  imageUrl:
    "https://velog.velcdn.com/images/ryurim0109/post/ece967a7-45f6-4479-b819-639a38063ca1/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
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
