import React from 'react';
import styled from 'styled-components';
import DeBtn from './DeBtn';
import DeImg from './DeImg';

const CommentList = (props) => {
    const {postId} =props;


    return (
        <React.Fragment>
                <CommentItem />
                <CommentItem />
        </React.Fragment>
    );
};

CommentList.defaultProps={
    postId: 1,
};

const CommentItem=(props)=>{
    const {comments,commentId,comment,createdAt}=props;

    return (
        <React.Fragment>
        <Grid>
            <p>{comments[0].createdAt}</p>
            <div>
                <ComPro>
                    <DeImg size="60"
                            src={props.imageUrl}/>
                    <p>누군구ㅜ님</p>
                </ComPro>
                <ComBox>
                    <div>
                        <DeBtn is_edit/>
                        <DeBtn is_del/>
                    </div>
                    <p>{comments[0].comment}</p>
                    
                </ComBox>
            </div>
        </Grid>
        </React.Fragment>
    );
}
CommentItem.defaultProps={
    comments: [
        {
          commentId: 1,
          comment: "나도 반가워요",
          createdAt: "2022-04-09 12:00:00", //LocalDateTime
        },
        {
          commentId: 2,
          comment: "거짓말이에요",
          createdAt: "2022-04-09 12:00:00", //LocalDateTime
        }
      ]
}

const Grid=styled.div`
    width:100%;
    padding: 40px 0;

    & > div{
        display: flex;
    }

`;
const ComPro=styled.div`
    width:20%;
    display:flex;
    align-items:center;
    @media screen and (max-width: 720px){ font-size:12px; }
`;
const ComBox=styled.div`
    width:80%;
    background:#E7F6FD;
    border-radius:8px;
    padding:10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position:relative;
    @media screen and (max-width: 720px){ font-size:12px; }

    & > p{
        width:100%;
        padding-right:10%;
        @media screen and (max-width: 720px){ padding-right:20%; }
    }
    & >div {
        position:absolute;
        right:10px;
    }
`;
export default CommentList;