import axios from "axios";

//document에 쿠키가 잇는지 확인 , 쿠키가 없다면 instance 헤더에는 토큰값이 null로 지정
const tokenCheck = document.cookie;
const token = tokenCheck.split('=')[1];

// export default instance;
const api = axios.create({
  baseURL: 'http://3.35.133.127',
  headers: {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json,",
      Authorization : token,
    },
});



export const apis = {
  test: () => api.get("/"),

  //포스팅
  // 포스팅 추가
  addPost: (title, location, content, file, createdAt, modifiedAt) =>
    api.post("/api/posts", {
      title: title,
      content: content,
      imgUrl: file,
      location: location,
      createdAt: createdAt,
      modifiedAt: modifiedAt,
    }),

  //로그인//
  login: (username, password) =>
    api.post("/api/user/login", { username: username, password: password }),
  
  // 회원가입용 요청 완성
  signup: (userId,nickname,password,passwordCheck,email) => api.post('/api/signup',{
    userId:userId,
    nickname:nickname,
    password:password,
    passwordCheck:passwordCheck,
    email:email
  }),

  // 로그인 체크 완성
  usercheck: () => api.post('/user/check'),

  // 로그아웃 요청 완성
  logout: ()=> api.post('/user/logout'),
  // 포스트 삭제
  delPost: (id) => api.delete(`/api/posting/${id}`),
  // 포스트 수정
  putPost: (id, username, title, content, file, categoryname) =>
    api.put(`/api/posting/${id}`, {
      username: username,
      title: title,
      content: content,
      img: file,
      categoryname: categoryname,
    }),

  // 메인페이지 카드 뷰
 
  //댓글//
  addComment: (id, username, commentcontent) =>
    api.post(`/api/posting/${id}/comment`, {
      username: username,
      commentcontent: commentcontent,
    }),
  delComment: (id, commentId) =>
    api.delete(`/api/posting/${id}/comment/${commentId}`),
  editComment: (id, commentId, content) =>
    api.put(`/api/posting/${id}/comment/${commentId}`, { content }),

  // 회원가입 //
  signup: (username, pw, pw_chk, email) => {
    api.post("/api/user/signup", {
      username: username,
      password: pw,
      passwordCheck: pw_chk,
      email: email,
    });
  },
  //아이디 중복확인//
  checkUsername: (username) =>
    api.post("/api/user/checkid", {
      username: username,
    }),
 

};


//사용 X
// api.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

// apiMultipart.interceptors.request.use(function (config) {
//   const accessToken = document.cookie.split("=")[1];
//   config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//   return config;
// });

// export const apiMultiPart = {
//   addImg: (file) =>
//     apiMultipart.post("/api/v1/upload", {
//       file: file,
//     }),
// };
