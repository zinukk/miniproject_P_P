import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";
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

};
//미들웨어

//로그인
const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    // 로그인 api
    apis
      .login(username, password)
      .then((res) => {
        const token = res.headers.authorization.split(" ")[1];
        console.log(res, "로그인 성공!");
        sessionStorage.setItem('TT',token);
        const username = JSON.parse(atob(token.split(".")[1])).USER_NAME; 
        //console.log(username)

        dispatch(setUser({ username: username }));
        history.push("/");
        // window.alert(`${localStorage.getItem("nickname")}님 안녕하세요!`);
      })
      .catch((err) => {
        window.alert("아이디 혹은 비밀번호가 일치하지 않습니다");
        console.log(err.response, "나는 로그인 에러닷!!!");
        //history.replace('/login');
      });
  };
};
//회원가입 기능
const signupDB = (username, nickname, password, passwordCheck, email) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(username, nickname, password, passwordCheck, email)
      .then((res) => {
        window.alert("회원가입 완료!!😇");
        history.replace("/login");
        console.log(res);
      })
      .catch((err) => {
        console.log("나는회원가입err다", err.response);
      });
  };
};


//유저 정보
const checkUserDB = (token) => {
  return function (dispatch, getState, { history }) {
    
    axios.post(
      `http://54.180.90.59:8080/user/loginCheck`,{

      },{
        headers: { Authorization: `Bearer ${token}`, },
      }
      ).then((res)=>{
        console.log(res,"체크")
        dispatch(
          setUser(
           { nickname:res.data.nickname,
          is_login:res.data.is_login}
          )
        );
      }).catch((err) => {
        console.log("체크에러다!!!!", err.response);
      }); 
  };
};

// 로그아웃토큰삭제
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
   
      
      apis.logout()
      .then((res)=>{
        //console.log(res)
        sessionStorage.removeItem("TT");
        dispatch(logOut());
        history.push("/login");
      }).catch((e)=>{
        console.log('로그아웃 에러닷',e)
      })
      
    
  };
};

//리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;

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
  logoutDB,
  setUser,
  checkUserDB,
};

export { actionCreators };
