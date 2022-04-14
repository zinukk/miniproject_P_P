import React from "react";
import styled from "styled-components";

const DeImg =(props)=>{
    const {shape, src, size} =props;

    const styles ={
        src:src,
        size:size,
    };
    if(shape==="circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        );
    };
    if(shape==="rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        );
    }

    return(
        <React.Fragment>

        </React.Fragment>
    );
};

DeImg.defaultProps={
    shape:"circle",
    src: "https://media.vlpt.us/images/ryurim0109/post/b7649924-95c0-469b-9933-45aa7c757d82/sss.png",
    size: 36,
};
const AspectOutter = styled.div`
    width:100%;
    min-width:250px;
`;
const AspectInner = styled.div`
    position:relative;
    padding-top: 80%;
    overflow:hidden;
    background-image: url('${(props)=>props.src}');
    background-size:cover;
    background-position: center;
`;

const ImageCircle =styled.div`
    --size: ${(props)=>props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius:  var(--size);
    background-image: url("${(props)=>props.src}");
    background-size: cover;
    margin:4px;
`;

export default DeImg;