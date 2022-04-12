import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import {history} from "../redux/configStore";
//액션크리에이터
import { actionCreators as userActions } from '../redux/modules/user';

import { getCookie,deleteCookie } from '../shared/Cookie';


const Header = (props) => {
    const dispatch= useDispatch();
    //데이터 주고 받을 때 주석 처리
    const [is_login, setIsLogin] =React.useState(false);
    
    React.useEffect(()=>{
        let cookie =getCookie('userId');
        console.log(cookie)

        if(cookie){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    }, []);
    //데이터 주고 받을 때 주석 풀기
    //const is_login = useSelector((store) => store.users.is_login);

    const logout= ()=>{
        dispatch(userActions.logoutDB());
    };

    if(is_login === true){
        return (
            <React.Fragment>
                <HeaderBox>
                    <HeaderLogo onClick={()=>{
                                    history.push('/')
                                }
                                }>🏝P_P🏝</HeaderLogo>
                    <FlexDiv>
                        <HeaderUserButton> {localStorage.getItem("nickname")}님, 안녕하세요!</HeaderUserButton>
                        <HeaderButton onClick={logout}
                        >Logout</HeaderButton>
                    </FlexDiv>
                </HeaderBox>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
                <HeaderBox>
                    <HeaderLogo onClick={()=>{
                                    history.push('/home')
                                }
                                }>🏝P_P🏝</HeaderLogo>
                    <FlexDiv>
                        <HeaderButton onClick={()=>{
                            history.push('/login')
                        }}>Login</HeaderButton>
                        <HeaderButton onClick={()=>{
                            history.push('/signup')
                        }}>Sign Up</HeaderButton>
                    </FlexDiv>
                </HeaderBox>
            </React.Fragment>
        )

    }


};

const HeaderBox = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #B2E1F4 ;
    padding: 0 20px;
    z-index:99;
`
const HeaderButton = styled.button`
    width: 100px;
    height : 40px;
    font-size: 15px;
    font-weight: bold;
    border: none;
    color: #6F7FBE;
    background: white;
    border-radius: 5px;
    margin-right: 40px;
    cursor:pointer;
`
const HeaderLogo = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #6F7FBE;
    font-family:"Gugi";
    cursor:pointer;
`

const HeaderUserButton = styled.button`
    width: fit-content;
    height : 40px;
    font-size: 15px;
    font-weight: bold;
    border: none;
    color: #6F7FBE;
    background: white;
    border-radius: 5px;
    margin-right: 40px;
    padding: 0 20px;
`

const FlexDiv = styled.div`
    display: flex;
`

export default Header;