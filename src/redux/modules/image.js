import { createAction,handleActions } from "redux-actions";
import {produce} from "immer";



const UPLOADING = "UPLOADING";
const UPLOAD_IMG ="UPLOAD_IMG"; //업로드 액션
const SET_PRE ="SET_PRE";

const uploading =createAction(UPLOADING,(uploading)=>({uploading}));
const uploadImage =createAction(UPLOAD_IMG,(imageUrl)=>({imageUrl}));
const setPreview =createAction(SET_PRE,(preview)=>({preview}));

const initialState={
    imageUrl: '',
    uploading:false,
    preview:null,
}

const uploadImageFB =(image)=>{
    return function(dispatch,getState,{history}){

        // dispatch(uploading(true));
        // const _upload =storage.ref( `images/${image.name}`).put(image);

        // _upload.then((snapshot)=>{
        //     console.log(snapshot);
        //     snapshot.ref.getDownloadURL().then((url)=>{
        //         dispatch(uploadImage(url));
        //     }).catch(err=>{
        //         dispatch(uploading(false));
        //     })
        // })

    }; //return
};//uploadImageFB

export default handleActions({
    [UPLOAD_IMG] : (state,action)=> produce(state, (draft)=>{
        draft.image_url = action.payload.image_url;
        draft.uploading =false;
    }),
    [UPLOADING]: (state,action)=> produce(state, (draft)=>{
        draft.uploading =action.payload.uploading;
    }),
    [SET_PRE]: (state,action)=> produce(state, (draft)=>{
        draft.preview =action.payload.preview;
    }),
},initialState);

const actionCreators = {
    uploadImage,
    uploadImageFB,
    setPreview,
}

export {actionCreators};