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
// const addPostDB = (title, content, location, file) => {
//   return function (dispatch, getState, { history }) {
//     apis
//       .addPost(title, content, location, file)
//       .then((res) => {
//         if (res.data === "게시글 작성이 완료되었습니다.") {
//           alert(res.data);
//           history.replace("/");
//         } else {
//           alert(res.data);
//         }
//       })
//       .catch((e) => alert(e));
//   };
// };

const sendWriteDataDB = (data) => {
  return function (dispatch, getState, { history }) {
    const file = new FormData();

    // file.append("title", data.title);
    // file.append("content", data.content);
    // file.append("location", data.location);
    file.append("imageUrl", data.imageUrl);
    // file.append(
    //   "imageUrl",
    //   new Blob([JSON.stringify(data.imageUrl)], { type: "application/json" })
    // );

    axios
      .post(
        "http://54.180.90.59:8080/api/posts",
        { ...file },
        {
          headers: {
            "content-type": "multipart/form-data",
            // accept: "application/json,",
            // Authorization: token,
          },
        }
        // {
        //   // title: data.title,
        //   // location: data.location,
        //   // content: data.content,
        //   imageUrl: data.imageUrl,
        // }
      )
      .then((res) => {
        dispatch(setpostDB());
        console.log(res.data);
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
        console.log("err", err.response);
      });
  };
};

const getOnePostDB = (pId) => {
  return function (dispatch, getState, { history }) {
    // axios
    //   .get(`http://54.180.90.59:8080/api/posts/${pId}`)
    //   .then((res) => {
    //     dispatch(getOnePost(res.data));
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
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
