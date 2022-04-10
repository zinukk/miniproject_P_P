import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { axios } from "axios";

// 액션
const ADD_POST = "ADD_POST";

// 액션 크레이터
const addPost = createAction(ADD_POST, (user) => ({ user }));

// 초기값
const initialState = {
  lists: [],
};

// 미들웨어
const sendWriteDataDB = (title, location, content, createdAt) => {
  return function (dispatch, getState) {
    axios
      .post("", {
        title: title,
        content: content,
        location: location,
        createdAt: createdAt,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
};

//리듀서
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  sendWriteDataDB,
  addPost,
};

export { actionCreators };
