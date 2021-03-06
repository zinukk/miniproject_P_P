import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { history } from "../configStore";
import { apis } from "../../shared/api";
import { instance } from "../../shared/api";

// 액션
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DEL_POST = "DEL_POST";
const GET_ONE_POST = "GET_ONE_POST";

// 액션 크레이터
// const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const delPost = createAction(DEL_POST, (postId) => ({ postId }));
const getOnePost = createAction(GET_ONE_POST, (one_post) => ({ one_post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));

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
const sendWriteDataDB = (data, token) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();

    file.append("title", data.title);
    file.append("content", data.content);
    file.append("location", data.location);
    file.append("file", data.imageUrl);

    axios
      .post(`http://54.180.90.59:8080/api/posts`, file, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      })
      .then((res) => {
        dispatch(setpostDB());
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

const setpostDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://54.180.90.59:8080/")
      .then((res) => {
        let post_list = res.data;
        dispatch(setPost(post_list));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

const getOnePostDB = (pid) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://54.180.90.59:8080/api/posts/${pid}`)
      .then((res) => {
        dispatch(getOnePost(res.data));
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
};

const delPostDB = (pId, token) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`http://54.180.90.59:8080/api/posts/${pId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json;charset=UTF-8",
          accept: "application/json,",

          // accept: "application/json,",
          // Authorization: token,
        },
      })
      .then((res) => {
        dispatch(setpostDB());
        console.log(res.data);
        history.replace("/");
      })
      .catch((err) => {
        console.log("err", err.response);
      });
  };
};

const editDataDB = (data, pId, token) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();

    file.append("title", data.title);
    file.append("content", data.content);
    file.append("location", data.location);
    file.append("file", data.imageUrl);

    axios
      .put(`http://54.180.90.59:8080/api/posts/${pId}`, file, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type":
            "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
        },
      })
      .then((res) => {
        dispatch(setpostDB(res.data));
        window.alert("수정을 성공했습니다!");
        history.push(`/detail/${pId}`);
        // history.push(`detail/${pId}`);
      })
      .catch((err) => {
        console.log("err", err.response);
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
    [GET_ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.one_post = action.payload.one_post;
        // console.log(action.payload.one_post);
      }),

    [DEL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists.filter((a) => a.id !== action.payload.postId);
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
  editDataDB,
  delPostDB,
};

export { actionCreators };
