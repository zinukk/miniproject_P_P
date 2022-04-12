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
const GET_ONE_POST = "GET_ONE_POST";

// 액션 크레이터
// const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const getOnePost = createAction(GET_ONE_POST, (one_post) => ({ one_post }));

// 초기값
const initialState = {};

const initialPost = {
  postId: 1,
  title: "제목입니다",
  content: "반가워요",
  location: "반가워요",
  nickname: "test",
  imageUrl: "/images/cancle.png",
  createdAt: "LocalDateTime",
  comments: [
    {
      commentId: 1,
      comment: "나도 반가워요",
      createdAt: "LocalDateTime",
    },
    {
      commentId: 2,
      comment: "거짓말이에요",
      createdAt: "LocalDateTime",
    },
  ],
};

// 미들웨어
const sendWriteDataDB = (title, location, content, createdAt, modifiedAt) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("", {
        title: title,
        location: location,
        content: content,
        createdAt: createdAt,
        modifiedAt: null,
      })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log("err", err);
      });
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

const getOnePostDB = () => {
  return function (dispatch, getState, { history }) {
    // axios.get("").then((res) => {
    //   dispatch(getOnePost(res.data));
    // });
    const data = { ...initialPost };
    dispatch(getOnePost(data));
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
    [GET_ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.one_post = action.payload.one_post;
        console.log(action.payload.one_post);
      }),
  },
  initialState
);

const actionCreators = {
  sendWriteDataDB,
  setpostDB,
  getOnePostDB,
  getOnePost,
  setPost,
};

export { actionCreators };
