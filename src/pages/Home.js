import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components'

const Home = () => {
    return (
        <React.Fragment>
            <Header></Header>
                {/* <HomeImg src="image/tree.png" />
                <HomeImgConvert src="image/tree.png" /> */}
            <PostBox>
                <PostInner>
                    <div></div>
                    <div></div>
                    <div></div>
                </PostInner>
            </PostBox>
        </React.Fragment>
    );
};

const HomeImg = styled.img`
    width: 300px;
    position: fixed;
    bottom: 0px;
`
const HomeImgConvert = styled.img`
    width: 300px;
    transform: rotate(180deg);
    position: fixed;
    top: 70px;
    right: 0px;
`
const CameraImg = styled.img`
    width: 130px;
    height:130px;
    border-radius: 130px;
    border: 1px solid #eee;
    background: white;
`

const WriteButton = styled.button`
    background: none;
    border: none;
    margin-right: 20px;
`

const Container = styled.div`
    
`
const HomeTextBox = styled.div`
    font-size: 20px;
    border-left: 3px solid gray;
    margin: auto 0px;
    padding:  20px 10px;
    align-items: center;
    width: 500px;
`
const FlexDiv = styled.div`
    width: 600px;
    display: flex;
    margin: auto;
    
`
const PostBox = styled.div`
    width:100%;
    min-height:1200px;
    position:relative;
    top:70px;
`
const PostInner=styled.div`
    width:1200px;
    margin:auto;
    height:100%;
    float:left;
    @media screen and (max-width: 1200px){ width:100%; }

    & > div{
        width: 250px;
        height: 250px;
        background: slateblue;
        float:left;
        position:relative;
    }
`;
const Posts = styled.div`
    
`
const HomeBody = styled.div`
    display: flex;
    margin: 0 auto;
`
export default Home;