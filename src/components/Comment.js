import React from 'react';
import styled from 'styled-components';
import DeBtn from './DeBtn';
import CommentList from './CommentList';

const Comment = (props) => {
    return (
        <React.Fragment>
                <Outter>
                    <ConInput>
                    <form>
                        <input type="text" />
                    </form>
                        <DeBtn width="15%" text="댓글 남기기!" height="100px"/> 
                    </ConInput>
                    <CommentList />
                </Outter>
        </React.Fragment>
    );
};

const Outter=styled.div`
    width:100%;
    position:relative;
    margin-top:20px;

`;
const ConInput=styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
    & form{
        width:80%;
    }
    & input{
        background:#E7F6FD;
        width:100%;
        border:none;
        height:100px;
        border-radius:8px;
        border:1px solid #eee;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding:10px;
        overflow:scroll;
        @media screen and (max-width: 720px){ height:60px; }

        &:focus{
            color: #6F9FBE;
            border:3px solid #6F9FBE;
        }
    }
`;

export default Comment;