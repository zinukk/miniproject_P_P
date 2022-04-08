import React from 'react';
import styled from 'styled-components';
import LoginGrid from '../components/LoginGrid';

const SignUp = (props) => {

    const {history}= props;
    return (
        <>

            <LoginGrid is_bg>
                <Back onClick={()=>{
                                history.push('/')
                            }
                            }> &lt; BACK</Back>

                <LoginGrid width="700px">
                    <SignBox>
                        <h2>회원가입(SIGN UP)</h2>
                        <SingInputBox> 
                            <form>
                                <div>
                                    <input type="text" name="user_id" placeholder="아이디를 입력해주세요.🏝" />
                                    <CheckBtn>중복확인</CheckBtn>
                                </div>

                                <input type="text" name="user_name" placeholder="닉네임은 2글자 이상 6글자 이하로 입력해주세요.🏝" />
                                <input type="password" name="user_pwd" autoComplete="on"  placeholder="비밀번호를 입력해주세요.🏝" />
                                <input type="password" name="user_pwdCheck" autoComplete="on"  placeholder="비밀번호를 다시 입력해주세요.🏝" />
                            </form>
                            <LogBtn >Sgin up</LogBtn>
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
         width:150px;
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




export default SignUp;