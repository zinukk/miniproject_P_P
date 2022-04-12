import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
//그리드 컴포넌트
import LoginGrid from '../components/LoginGrid';
//리덕스 히스토리
import {history} from "../redux/configStore";
//import { setCookie } from '../shared/Cookie';
//아이디 유효성 검사
import {userIdCheck} from "../shared/signupCheck";
//액션크리에이터
import { actionCreators as userActions } from '../redux/modules/user';

const Login = (props) => {
    const dispatch=useDispatch();

    const [userId,setUserId]=useState('');
    const [password,setPassword]=useState('');
    //세션 체크
    const is_session = sessionStorage.getItem("token");

    const login = () => {
        if(userId===""){
            window.alert('아이디를 입력해주시죠?🥲');
            return;
        };
        if(password===""){
            window.alert('비밀번호를 입력해주시죠?🥲');
            return;
        };
        
        if(!userIdCheck(userId)){
            window.alert('아이디는 영문, 숫자로만 입력해주세요.🥲');
            return;
        }
        // //헤더분기 테스트
        // setCookie('userId',"uu",2)
        // setCookie('password',"1234",2)
        // history.push('/')
        dispatch(userActions.loginDB(userId,password));

      };
      //세션이 있다면, 바로 메인페이지로 한번만 실행
      useEffect(() => {
        if (is_session) {
          history.replace("/");
        }
      }, []);

    return (
        <>
            <LoginGrid is_bg>
                <LoginGrid width="700px">
                    <H1>🏝P_P🏝에 오신 것을 환영합니다.</H1>
                    <LoginBox>
                        <h2>로그인(LOGIN)</h2>
                        <div> 
                            <form>
                                <input type="text" name="user_id" id="user_id" placeholder="아이디를 입력해주세요.🏝" onChange={(e)=>{
                                    setUserId(e.target.value);
                                }} />
                                <input type="password" name="user_pwd" id="user_pwd" autoComplete="on" onChange={(e)=>{
                                    setPassword(e.target.value);
                                }}
                                placeholder="비밀번호를 입력해주세요.🏝" />
                           </form>
                            <LogBtn onClick={login}>Login</LogBtn>
                            <Gogo onClick={()=>{
                                history.push('/signup')
                            }
                            }>회원가입하러 가기 &gt;</Gogo>
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


     & > div{
         width:100%;
         height:100%;
         display:flex;
         flex-direction:column;
         padding: 50px 0;
         text-align:center;
     }
     & form{
        display:flex;
        flex-direction:column;
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

         &:hover{
            border:1px solid #E7F6FD;
            background:#E7F6FD;
            color:#6F9FBE;
         }
`;

const Gogo=styled.button`
    background:none;
    border:none;

`;


export default Login;