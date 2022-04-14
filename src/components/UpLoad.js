import React from "react";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";


const Upload =(props)=>{
    const fileInput =React.useRef();
    const dispatch =useDispatch();
    const [filevalue, setFileValue] = React.useState("");

    const is_uploading =useSelector(state=> state.image.uploading )
    const selectFile = (e)=>{

        const reader =new FileReader(); //파일리더 객체 만들기
        const file =fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend =()=>{
            dispatch(imageActions.setPreview(reader.result));
        };  //onloadend
        setFileValue(e.target.value.split("\\")[2]);

    }
   
    return(
        <React.Fragment>
            <label htmlFor ="UpInput" 
                style={{
                padding : "6px 25px",
                backgroundColor:"#E7F6FD",
                borderRadius: "4px",
                color:"#333",
                cursor: "pointer",
            }}>
                업로드</label>
                <input
                    width="100%"
                    type="text"
                    placeholder="사진을 선택해주세요"
                    value={filevalue}
                    margin="0"
                    disabled
                    style={{
                        padding : "6px 25px",
                        margin:"0 0 0 5px",
                        border:"1px solid #E7F6FD"
                    }}
                />
            <input id= "UpInput" type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading} 
            style={{display:"none",}}
            />
        </React.Fragment>
    )
};

export default Upload;