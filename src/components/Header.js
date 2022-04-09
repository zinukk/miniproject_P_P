import React from 'react';
import styled from 'styled-components'

const Header = (props) => {
    return (
        <React.Fragment>
            <HeaderBox>
                <HeaderLogo>🏝P_P🏝</HeaderLogo>
                <FlexDiv>
                    <HeaderUserButton>@@@님, 안녕하세요!</HeaderUserButton>
                    <HeaderButton>Logout</HeaderButton>
                </FlexDiv>
            </HeaderBox>
        </React.Fragment>
    )
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
`
const HeaderLogo = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #6F7FBE;
    font-family:"Gugi";
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