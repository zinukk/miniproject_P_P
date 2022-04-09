import React from "react";
import styled from "styled-components";

import { BsFillGeoAltFill,BsPencilSquare,BsFillTrashFill } from "react-icons/bs";

const DeBtn =(props) =>{
    const {width,height,margin,padding,bg,text,_onClick,children,is_edit,_disabled,is_del,is_loc} =props;
    const styles={
        width:width,
        margin:margin,
        padding:padding,
        bg:bg,
        height:height,

    }
    if(is_edit){
        return (
            <React.Fragment>
                <EditBox onClick={_onClick}>
                    <EditButton />
                </ EditBox>
            </React.Fragment>
        )
    }

    if(is_del){
        return (
            <React.Fragment>
                <EditBox onClick={_onClick}>
                    <DelButton />
                </ EditBox>
            </React.Fragment>
        )
    }
    if(is_loc){
        return (
            <React.Fragment>
                <EditBox onClick={_onClick}>
                    <LocationBtn />
                </ EditBox>
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            <ButtonBox {...styles} onClick={_onClick} disabled={_disabled}>
                {text? text:children}
            </ButtonBox>
        </React.Fragment>
    );
};

DeBtn.defaultProps ={
    children:null,
    width:"100%",
    height:"100%",
    margin:false,
    padding:false,
    bg: false,
    text:"텍스트",
    is_float:false,
    _disabled: false,
};

const ButtonBox = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border:none;
    box-sizing:border-box;
    border-radius:8px;
    cursor:pointer;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
    background-color: ${(props) => (props.disabled ? "#E7F6FD" : "#E7F6FD")};
    color:#6F9FBE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 720px){ height:60px; }
`;
const EditBox=styled.button`
    background:none;
    border:none;
    cursor:pointer;
    padding:0 10px;
`;

const EditButton=styled(BsPencilSquare)`
    width:20px;
    height:20px;
    color: #6F9FBE;
`
const DelButton =styled(BsFillTrashFill)`
    width:20px;
    height:20px;
    color: #6F9FBE;
`
const LocationBtn=styled(BsFillGeoAltFill)`

    width:20px;
    height:20px;
    color: #6F9FBE;
`;

export default DeBtn;