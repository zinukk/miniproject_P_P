import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { actionCreators as postActions } from "./post";

import moment from "moment";
import { apis } from "../../shared/api";
import axios from "axios";

const ADD_COMMENT = "ADD_COMMENT";
const SET_COMMENT = "SET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const addComment = createAction(ADD_COMMENT, (comment, nickname) => ({
  comment,
  nickname,
}));
const setComment = createAction(SET_COMMENT, (list) => ({
  list,
}));
const deleteComment = createAction(DELETE_COMMENT, (id) => ({
  id,
}));

const initialState = {
  comments: [
    {
      commentId: "5fas4f5",
      nickname: "유쨩",
      comment: "오잉 ? 별론데요?",
      createdAt: "2022-04-11 11:00:02",
    },
    {
      commentId: "1ad6sg45",
      nickname: "둘리",
      comment: "전 괜찮던데요?",
      createdAt: "2022-04-11 11:00:17",
    },
    {
      commentId: "1dfh53z",
      userId: "키키",
      comment: "둘 다 싸우지 마세요",
      createdAt: "2022-04-11 11:00:17",
    },
  ],
};
//미들웨어

const addCommentDB = (comment, postId, token) => {
  return function (dispatch, getState, { history }) {
    axios
      .post(
        `http://54.180.90.59:8080/api/comments/${postId}`,
        {
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json,",

            // accept: "application/json,",
            // Authorization: token,
          },
        }
      )
      .then(() => {
        dispatch(postActions.getOnePostDB(postId));
      })
      .catch((err) => {
        console.log("나는 댓글작성 err", err);
      });
  };
};

const delcommentDB = (commentId, pId,token) => {
  return function (dispatch, getState, { history }) {
    axios
    .delete(
      `http://54.180.90.59:8080/api/comments/${commentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",

        },
      }
    ).then((res) => {
      console.log(res)
        dispatch(postActions.getOnePostDB(pId));
        history.push(`/detail/${pId}`);
      })
      .catch((err) => {
        console.log("나는 댓글삭제err", err.response);
      });
  };
};

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments.shift(action.payload.content);
        // unshift 는 최신이 맨앞에, shift는 최신이 맨 뒤에 배치, 이렇게하면 댓글달자마자 디테일페이지 가도 에러없음
      }),

    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comments = [...action.payload.comments];
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
          return{ ...state}
    
         
      }),
  },
  initialState
);

const actionCreators = {
  addCommentDB,
  // setcommentDB,
  delcommentDB,
};

export { actionCreators };
