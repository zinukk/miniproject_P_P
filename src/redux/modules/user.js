import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios  from "axios";
import {apis} from "../../shared/api";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";

// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialState = {
  
  userId: 'dfsdff',
  email: 'db1234@naver.com',
  nickname: '유짱',
  is_login: false,
};
//미들웨어

//로그인 
const loginDB = (userId, password) => {
  return function (dispatch, getState, { history }) {
    // 로그인 api
    // const user = {
    //   username: email,
    //   password: pwd,
    // };
    // apis
    //   .login(user)
    // axios
    //   .post("http://3.36.100.253/user/login", user)
    //   .then((res) => {
    //     const userId = res.data.userId;
    //     const email = res.data.email;
    //     const nickname = res.data.nickname;
    //     const jwtToken = res.headers.authorization;
    //     sessionStorage.setItem("token", jwtToken)
    //     sessionStorage.setItem("userId", userId)
    //     sessionStorage.setItem("nickname", nickname)
    //     sessionStorage.setItem("email", email)
    //     const user = {
    //       email: email,
    //       nickname: nickname,
    //       userId: userId,
    //     };
    //     console.log(user)
    //     dispatch(setUser(user));
    //     alert("정상적으로 로그인 되었습니다.");
    //     history.push('/')
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     window.alert("아이디 또는 비밀번호가 다릅니다.");
    //     return;
    //   });
  };
};
//회원가입 기능
const signupDB = (email, nickname, userId, password, passwordCheck) => {
  return function (dispatch, getState, { history }) {
    apis.signup(email, nickname, userId,password,passwordCheck).then(()=>{
      window.alert('회원가입 완료!!😇');
      history.replace('/login');
  }).catch(err=>{console.log('회원가입err',err)})
  };
};

const logincheckDB = () => {
  return function (dispatch, getState, { history }) {
    // const userId = sessionStorage.getItem("userId");
    // const nickname = sessionStorage.getItem("nickname");
    // const email = sessionStorage.getItem("email");
    // const user = {
    //   email: email,
    //   nickname: nickname,
    //   userId: userId,
    // };
    // dispatch(setUser(user));
  };
};

// 토큰삭제
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    return async function (dispatch, getState, { history }) {
      await deleteCookie("token");
      localStorage.removeItem("username");
      dispatch(logOut());
      history.push("/login");
    };
  };
};

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "SUCCESS");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie("is_login");
        // sessionStorage.removeItem("token");
        // sessionStorage.removeItem("useId");
        // window.sessionStorage.clear();
        // draft.user = null;
        // draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        // draft.user = action.payload.user;
        // draft.is_login = true;
      }),
  },
  initialState
);

const actionCreators = {
  logOut,
  getUser,
  signupDB,
  loginDB,
  logincheckDB,
  logoutDB,
  setUser,
};

export { actionCreators };
