import React from 'react';
import styled from 'styled-components';
import LoginGrid from '../components/LoginGrid';

const Login = (props) => {
    return (
        <>
            <LoginGrid is_bg>
                <LoginGrid width="700px">
                    <H1>🏝P_P🏝에 오신 것을 환영합니다.</H1>
                    <LoginBox>
                        <h2>로그인(LOGIN)</h2>
                        <div> 
                            <input type="text" name="user_id" placeholder="아이디를 입력해주세요.🏝" />
                            <input type="password" name="user_id" placeholder="비밀번호를 입력해주세요.🏝" />
                            <LogBtn >Login</LogBtn>
                            <Gogo>회원가입하러 가기 &gt;</Gogo>
                        </div>
                        
                    </LoginBox>
                </LoginGrid>
            </LoginGrid>
        </>
    );
};

const H1=styled.h1`
    width: 700px;
    font-family:"Gugi";
    font-size:24px;
    padding:50px;
    text-align:center;
    @media screen and (max-width: 700px){
        width:100%;
        font-size:18px;
        padding:50px 0;
}
`;

const LoginBox=styled.div`
    width:100%;
    background:#fff;
    height:70vh;
    padding:30px 100px;
    border-radius:20px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

     & > h2{
        font-family:"Gugi";
        text-align:center;
        @media screen and (max-width: 700px){
        font-size:18px;
}
     }

     & label{
        font-family:"Gugi";
     }

     & > div{
         width:100%;
         height:100%;
         display:flex;
         flex-direction:column;
         padding: 50px 0;
         text-align:center;
     }

     &  input {
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
const LogBtn=styled.button`
        background:#A6C4DC;
         border:none;
         border-radius:8px;
         width:100%;
         margin:30px 0;
         padding:20px;
         font-family:"Gugi";
`;

const Gogo=styled.button`
    background:none;
    border:none;
`;


export default Login;