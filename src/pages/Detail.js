import React from 'react';
import Header from '../components/Header';
import DePost from '../components/DePost';
import styled from 'styled-components';
import Comment from '../components/Comment';

const Detail = (props) => {
    return (
        <React.Fragment>
            <Header/>
            <DeOutter>
                <DeInner>
                    <DePost />
                    <Comment />
                </DeInner>
            </DeOutter>
        </React.Fragment>
            
    );
};


const DeOutter=styled.div`
    width:100%;
    min-height:1200px;
   // background:#eee;
    position:relative;
    top:70px;
    padding:70px 0 30px 0 ;
    
`
const DeInner =styled.div`
    width:980px;
    margin:0 auto;
    position:relative;
    height:500px;
    @media screen and (max-width: 980px){ width:100%; }
`;
export default Detail;