import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios  from "axios";
import {apis} from "../../shared/api";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";

// 액션
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const CHECK_USER ="CHECK_USER";

// 액션 크리에이터
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const checkUser = createAction(SET_USER, (user) => ({ user }));

// 초기값
const initialState = {
  
  user: {},
  is_login: false,
};
//미들웨어

//로그인 
const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    // 로그인 api
    apis
    .login(username, password)
      .then((res) => {
        setCookie("token", res.data[1].token, 5);
        //setCookie('token', res.data.token, 3);
        localStorage.setItem("username", res.data[0].username);
        dispatch(setUser({ username: username }));
        history.goBack();
        window.alert(
          `${localStorage.getItem("nickname")}님 안녕하세요!`,
          "P_P에 방문해주셔서 감사합니다!",
          "success"
        );
      })
      .catch((err) => {
        window.alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        console.log(err, '나는 로그인 에러닷!!!');
        //history.replace('/login');
      });
  };
};
//회원가입 기능
const signupDB = (userId, nickname,password, passwordCheck,email) => {
  return function (dispatch, getState, { history }) {
    apis.signup(userId, nickname,password, passwordCheck,email).then((res)=>{
      window.alert('회원가입 완료!!😇');
      history.replace('/login');
      console.log(res)
  }).catch((err)=>{
    console.log('나는회원가입err다',err)
  });
  };
};

//로그인 여부 확인 기능
const logincheckDB = () => {
  return function (dispatch, getState, { history }) {
    const username = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setUser({ username: username }));
    } else {
      dispatch(logOut());
    }
  };
};

//유저 정보
const logincheckDB = () => {
  return function(dispatch, getState, {history}){
      let token = document.cookie.split('=')[1];
     
      if(token){
          apis.usercheck()
          .then(res => {
              let username = res.data.username;
              let nickname = res.data.nickname;
              dispatch(logIn(id, nick));
          })
          .catch(err=>{
              console.log('error:',err);
          })
      }else{
          dispatch(logOut())
      }
      
  }
}

// 로그아웃토큰삭제
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
        deleteCookie("is_login");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        window.sessionStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
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
