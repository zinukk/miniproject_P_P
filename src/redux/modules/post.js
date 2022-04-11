import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configStore";
import { apis } from "../../shared/api";

// 액션
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DEL_POST = "DEL_POST";

// 액션 크레이터
// const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));

// 초기값
const initialState = {};

// 미들웨어
const sendWriteDataDB = (
  title,
  location,
  content,
  createdAt,
  file,
  modifiedAt
) => {
  return function (dispatch, getState, { history }) {
    apis
      .addPost(title, location, content, createdAt, file, modifiedAt)
      .then((res) => {
        if (res.data === "게시글 작성이 완료되었습니다.") {
          alert(res.data);
          history.replace("/");
        } else {
          alert(res.data);
        }
      })
      .catch((e) => alert(e));
  };
};

const setpostDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        let post_list = res.data;
        dispatch(setPost(post_list));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//리듀서
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists.unshift(action.payload.post);
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload.post_list;
      }),
  },
  initialState
);

const actionCreators = {
  sendWriteDataDB,
  setpostDB,
};

export { actionCreators };
