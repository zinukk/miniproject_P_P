import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";

// const ADD_COMMENT = "ADD_COMMENT";
// const SET_COMMENT = "SET_COMMENT";
// const DELETE_COMMENT = "DELETE_COMMENT"

// const addComment = createAction(ADD_COMMENT, (comment_list) => ({comment_list}));
// const setComment = createAction(SET_COMMENT, (comment_list)=>({comment_list}));
// const deleteComment = createAction(DELETE_COMMENT, (commentId)=>({commentId}));

// const initialState = {
//     list:[],
//   };

// const addCommentDB = (postId, content) =>{
//     return function(dispatch, getState, {history}){
//       const TOKEN = sessionStorage.getItem("token");
     
//       instance.post(`/api/comments/${postId}`,{content},{ headers: {
//           "authorization" : `${TOKEN}`
//         }}).then((response)=>{
         
//             let comment_list = {...response.data};
   
//             dispatch(addComment(comment_list))
            
//       dispatch(postActions.newComment(parseInt(postId)));
//       // 코멘트의 숫자를 셀때는 post정보에 포함된 comments 배열의 길이로 숫자를 세서 화면에 표현하므로 post 리덕스의 상태도 수정해주어야 한다.

//     })
// }
// }


// const deleteCommentDB = (commentId) => {
// return function (dispatch, getState, { history }) {

//   const TOKEN = sessionStorage.getItem("token");

//   instance
//     .delete(`/api/comments/${commentId}`, {
//       headers: {
//         authorization: `${TOKEN}`,
//       },
//     })
//     .then((res) => {
  
//       dispatch(deleteComment(commentId));
//     })
//     .catch((err) => {
//       console.log("withdraw : 에.러", err);
//     });
// };
// };

// const getComment = (postId) => {
// return function (dispatch, getState, { history }) {
//   const TOKEN = sessionStorage.getItem("token");
//   instance.get("/",{
//     headers: {
//       authorization: `${TOKEN}`,
//     }}).then((response) => {
//     // console.log(postId);
   
//     const _post = response.data.filter((list)=>list.postId===postId)
   
//     const comment_list= _post[0].commentList;
//     dispatch(setComment(comment_list));
 
   
//   });
// }
// }
// export default handleActions(
// {
//   [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {
   
//       draft.list.shift(action.payload.content);    //unshift 는 최신이 맨앞에, shift는 최신이 맨 뒤에 배치, 이렇게하면 댓글달자마자 디테일페이지 가도 에러없음
     

//     }),

//     [SET_COMMENT]: (state, action) => produce(state, (draft)=> {
//         draft.list = action.payload.comment_list;
      
//     }),
//     [DELETE_COMMENT]: (state, action) => produce(state, (draft)=> {
//       let new_comment_list = draft.list.filter((v) => {
//         if(v.commentId !== action.payload.commentId){
//           return v
//         }
//       })
//       draft.list = new_comment_list;
//   }),
    
// }, initialState)


// const actionCreators ={
//   addComment,
//   addCommentDB,
//   getComment,
//   setComment,
//   deleteCommentDB,
// }

// export {actionCreators};