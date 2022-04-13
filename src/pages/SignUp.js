<<<<<<< HEAD
import React from 'react';

const SignUp = () => {
    return (
        <div>
            hi ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ
        </div>
    );
};
=======
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import LoginGrid from '../components/LoginGrid';

import { actionCreators as userActions } from '../redux/modules/user';
import { apis } from '../shared/api';

//중복확인 유효성 체크
import {userIdCheck,checkName,checkPassword,checkEmail} from "../shared/signupCheck";

const SignUp = (props) => {
    const dispatch=useDispatch();

    const [userId,setUserId]=useState('');
    //const [checkUserId, setCheckUserId] = useState(false);
    const [nickname,setNickname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordCheck,setPasswordCheck]=useState('');

    // const onClickUserIdCheck=()=>{
    //     if(!userIdCheck(userId)){
    //         alert('아이디는 대,소문자 숫자로 이루어진 4~8자여야 합니다.🥲');
    //         return;
    //     }else{
    //         apis
    //         .checkUserId(userId)
    //         .then((res)=>{
    //            // window.alert(res.data);
    //             window.alert('사용가능한 아이디 입니다~');
    //             setCheckUserId(true);
    //         })
    //         .catch((err)=>{
    //             //window.alert(err.data);
    //             window.alert('중복된 아이디 입니다.');
    //             setCheckUserId(false);
    //         });
    //     }
        
    // }

    const signup=()=>{
        if(
            userId==="" ||
            nickname===""||
            email==="" ||
            password==="" ||
            passwordCheck===""
        ){
            window.alert('아이디, 닉네임, 이메일, 비밀번호 모두 입력해주세요.🤔');
            return;
        }
        if (!checkName(nickname)) {
            window.alert("닉네임: 2글자 이상 6글자 이하로 입력해주세요. 🥸");
            return;
          }
          if(!checkPassword(password)){
            window.alert('비밀번호는 특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다.🥸');
            return;
        }
        if(!userIdCheck(userId)){
            window.alert('아이디는 영문, 숫자로만 입력해주세요.🥲');
            return;
        }
        if (password.includes(userId)) {
            alert("비밀번호에 아이디가 포함되어 있습니다.🥲");
            return;
          }
        if(!checkEmail(email)){
            window.alert('이메일 형식이 아닙니다.🥲');
            return;
        }
        if (password !== passwordCheck) {
            alert("비밀번호가 다릅니다.");
            return;
          }
        
        dispatch(userActions.signupDB(userId, nickname,password, passwordCheck,email));

        
    }; //sign

 

    const {history}= props;
    return (
        <>

            <LoginGrid is_bg>
                <Back onClick={()=>{
                                history.push('/login')
                            }
                            }> &lt; BACK</Back>

                <LoginGrid width="700px">
                    <SignBox>
                        <h2>회원가입(SIGN UP)</h2>
                        <SingInputBox> 
                            <form>
                                <div>
                                    <input type="text" name="userId" onChange={(e)=>{
                                        setUserId(e.target.value);
                                    }}
                                    placeholder="아이디는 영문, 숫자로만 입력해주세요.🏝" />
                                    {/* <CheckBtn onClick={onClickUserIdCheck}>중복확인</CheckBtn> */}
                                </div>

                                <input type="text" name="nickname" onChange={(e)=>{
                                        setNickname(e.target.value);
                                    }}
                                placeholder="닉네임은 2글자 이상 6글자 이하로 입력해주세요.🏝" />
                                <input type="text" name="email" onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                placeholder="이메일을 입력해주세요.🏝" />
                                <input type="password" name="password" autoComplete="off" onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                 placeholder="비밀번호는 특수문자 영문, 숫자 포함, 최소 8자 이상이어야 합니다.🏝" />
                                <input type="password" name="passwordCheck" autoComplete="off"  onChange={(e)=>{
                                        setPasswordCheck(e.target.value);
                                    }}
                                placeholder="비밀번호를 다시 입력해주세요.🏝" />
                            </form>
                            <LogBtn onClick={signup}>Sign up</LogBtn>
                        </SingInputBox>
                        
                    </SignBox>
                </LoginGrid>
            </LoginGrid>
        </>
    );
};
const Back=styled.button`
    background:none;
    border:none;
    font-family:"Gugi";
    cursor:pointer;
    padding:20px;
    font-size:24px;
    @media screen and (max-width: 700px){
        font-size:18px;
}
`;

const SignBox=styled.div`
    width:100%;
    background:#fff;
    height:90vh;
    padding:30px 100px;
    border-radius:20px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 700px){
        padding: 30px 50px;
}

     & > h2{
        font-family:"Gugi";
        text-align:center;
        @media screen and (max-width: 700px){
        font-size:18px;
}
     }

     & form{
         display:flex;
         flex-direction:column;
     }
     & form div{
         position:relative;
     }

     &  input {
         width:100%;
         margin:10px 0;
         height:65px;
         text-indent:10px;
         border-radius:8px;
         border:1px solid #A6C4DC;
     }
     & button{
         cursor:pointer;
     }
`;
const CheckBtn=styled.button`
        position: absolute;
         right:0;
         top:10px;
         width:80px;
         height:65px;
         background:#A6C4DC;
         border:none;
         border-radius:8px;
         color:#fff;

         &:hover{
            border:1px solid #E7F6FD;
            background:#E7F6FD;
            color:#6F9FBE;
         }
`;
const SingInputBox=styled.div`
        width:100%;
         height:100%;
         display:flex;
         flex-direction:column;
         padding: 50px 0;
         text-align:center;
`;

const LogBtn=styled.button`
        background:#A6C4DC;
         border:none;
         border-radius:8px;
         width:100%;
         margin:30px 0;
         padding:20px;
         font-family:"Gugi";
         &:hover{
            border:1px solid #E7F6FD;
            background:#E7F6FD;
            color:#6F9FBE;
         }
`;



>>>>>>> 94d211f3ac1888fe75e811f89d3cdc74ee8284eb

export default SignUp;