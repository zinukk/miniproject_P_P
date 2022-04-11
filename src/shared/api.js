import axios from "axios";

// const api = axios.create({
//     baseURL: "http://15.165.160.58",
//     headers: {
//       "content-type": "application/json;charset=UTF-8",
//       accept: "application/json,",
//     },
//   });

// const apiMultipart = axios.create({
//     baseURL: "http://15.165.160.58",
//     headers: {
//       "content-type":
//         "multipart/form-data; boundary=----WebKitFormBoundaryfApYSlK1ODwmeKW3",
//     },
//   });
  
//   api.interceptors.request.use(function (config) {
//     const accessToken = document.cookie.split("=")[1];
//     config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//     return config;
//   });
  
//   apiMultipart.interceptors.request.use(function (config) {
//     const accessToken = document.cookie.split("=")[1];
//     config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//     return config;
//   });

// export const apis = {
//     test: () => api.get("/"),


   
// import axios from "axios";

// const instance = axios.create({

//     // 기본적으로 우리가 바라볼 서버의 주소
//     baseURL: "http://3.36.100.253",
//     headers: {
//     "content-type": "application/json;charset=UTF-8",
//     // authorization: `Bearer ${localStorage.setItem("token", response.token)}`,
//     accept: "application/json",
//   },
// });

// export default instance;