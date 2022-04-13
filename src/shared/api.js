import axios from "axios";

//document에 쿠키가 잇는지 확인 , 쿠키가 없다면 instance 헤더에는 토큰값이 null로 지정
const tokenCheck = document.cookie;
const token = tokenCheck.split("=")[1];

// export default instance;
const api = axios.create({
  baseURL: "http://54.180.90.59:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    // Authorization: token,
  },
});

const instance = axios.create({
  baseURL: "http://54.180.90.59:8080",
  headers: {
    "content-type": "multipart/form-data",
    accept: "application/json,",
    // Authorization: token,
  },
});

export const apis = {
  test: () => api.get("/"),

  // 포스팅 추가
  addPost: (title, content, location, file) =>
    instance.post("/api/posts", {
      title: title,
      content: content,
      imgUrl: file,
      location: location,
    }),

  //로그인
  login: (username, password) =>
    api.post("/api/login", { username: username, password: password }),

  //아이디 중복확인
  checkUserId: (userId) =>
    api.post("/api/user/checkid", {
      userId: userId,
    }),

  // 회원가입용 요청
  signup: (userId, nickname, password, passwordCheck, email) =>
    api.post("/api/signup", {
      userId: userId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
      email: email,
    }),
  // 로그아웃 요청
  //logout: ()=> api.post('/api/logout'),

  // 포스트 삭제
  delPost: (postId) => api.delete(`/api/posts/${postId}`),

  // 포스트 수정
  putPost: (title, location, content, file, createdAt, modifiedAt, postId) =>
    api.put(`/api/posts/${postId}`, {
      postId: postId,
      title: title,
      content: content,
      img: file,
      location: location,
      modifiedAt: modifiedAt,
    }),

  // 게시글 삭제
  deleting: (postId) => api.delete(`/api/posts/${postId}`),

  // 댓글 조회 완성
  getcom: (postId) => api.get(`/comments/${postId}`, {}),

  // 댓글 작성
  addcom: (postId, comment) =>
    api.post(`/api/comments/${postId}`, { comment: comment }),

  // 댓글 삭제
  delcom: (commentId) => api.delete(`/api/comments/${commentId}`, {}),

  // //참고댓글//
  // addComment: (id, username, commentcontent) =>
  //   api.post(`/api/posting/${id}/comment`, {
  //     username: username,
  //     commentcontent: commentcontent,
  //   }),
  // delComment: (id, commentId) =>
  //   api.delete(`/api/posting/${id}/comment/${commentId}`),
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
