import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import axios from "axios";
//import instance from "../../axios"

// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialStat = {
  user: {
    userId:null,
    email:null,
    nickname:null,
  },
  is_login: false,
};
//미들웨어
const sendWriteDataDB = (title, location, imageUrl, content) => {
  return function (params) {
    axios.post('',{
      title : title,
      content : content,
      location : location,
      imageUrl : imageUrl,
    })

    
  }
}

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

const signupDB = (email, nickname,userId, password, passwordCheck) => {
  return function (dispatch, getState, { history }) {
    //api
        const user ={
            userId: userId,
            nickname: nickname,
            password: password,
            passwordCheck: passwordCheck,
            email: email
        }
   
    // apis
    //   .signUp(user)
    // axios
    //   .post("http://3.36.100.253/user/signup", user)
    //   .then(() => {
    //     window.alert("회원가입을 축하드립니다!");
    //     history.push("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};

const loginCheckDB = () => {
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
    // dispatch(logOut());
    // alert("로그아웃 되었습니다.");
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("userId");
    // history.push("/login");
    // window.location.reload();
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
  initialStat
);

const actionCreators = {
  logOut,
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
  setUser,
};

export { actionCreators };