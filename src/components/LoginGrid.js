import React from "react";
import styled from "styled-components";

const LoginGrid =(props) =>{
    const {is_flex,width,margin,padding,bg,children, center, is_bg,_onClick} =props;
    const styles={
        is_flex:is_flex,
        width:width,
        margin:margin,
        padding:padding,
        bg:bg,
        center:center,
    }
    if(is_bg){
        return(
            <React.Fragment>
                <BgBox {...styles}>
                    {children}
                </BgBox>
            </React.Fragment>
        );
    }
    return(
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>
                {children}
            </GridBox>
        </React.Fragment>
    );
};

LoginGrid.defaultProps ={
    children:null,
    is_flex:false,
    width:"100%",
    padding:false,
    margin: false,
    bg:false,
    center:false,
    _onClick : ()=>{},
};

const GridBox = styled.div`
    width:${(props)=> props.width};
    ${(props)=> (props.padding? `padding:${props.padding};` :"" )};
    ${(props)=> (props.margin? `margin:${props.margin};` :"" )};
    ${(props)=> (props.bg? `background-color:${props.bg};` :"" )};
    ${(props)=> (props.center? `text-align:${props.center};` :"" )};
    position: absolute;
    top:70px;
    right:5%;
    border-radius:8px;
    ${(props)=> props.is_flex? `display:flex; align-items:center; justify-content: space-between;`: ""};
    @media screen and (max-width: 700px){
            width:100%;
            right:0;
}
`;

const BgBox =styled.div`
    width:100%;
    height:100vh;
    position:relative;
    background-image:url('https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/e8371bf2-ec57-4f2a-a897-1c5e1ee83b00/public');
    background-size: cover;
    background-repeat: no-repeat;
    ${(props)=> (props.padding? `padding:${props.padding};` :"" )};
`;
export default LoginGrid;