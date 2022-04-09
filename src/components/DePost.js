import React from 'react';
import DeImg from '../components/DeImg';
import DeBtn from './DeBtn';
import styled from 'styled-components';

const DePost = (props) => {
    const {postId,title,content,location,nickname,imageUrl,createdAt} =props;
    return (
        <React.Fragment>
            <Outter>
                <div>
                    <h1>{title}</h1>
                </div>
                <DeHeader>
                    <Grid>
                        <DeImg size="60"
                        src={imageUrl}/>
                        <p>{nickname}님</p>
                        <p>{createdAt}</p>
                    </Grid>
                    <Grid>
                        <DeBtn is_loc/>
                        <DeBtn is_edit/>
                        <DeBtn is_del/>
                    </Grid>
                </DeHeader>
                    <DeImg shape="rectangle" src="https://velog.velcdn.com/images/ryurim0109/post/5432eec7-b7ea-4ca7-8315-e929e04c7a54/KakaoTalk_Photo_2022-04-09-10-15-54.jpeg"/>
                    <Desc>
                        {content}
                    </Desc>
            </Outter>
        </React.Fragment>
            
    );
};
DePost.defaultProps={
    postId: 1,
    title: "제목입니다",
    content: "반가워요",
    location: "경주",
    nickname: "닉네임",
    imageUrl:  "https://velog.velcdn.com/images/ryurim0109/post/ece967a7-45f6-4479-b819-639a38063ca1/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png",
    // "/images/cancle.png"
    createdAt: "2022-04-09 10:00:00", //LocalDateTime
};

const Outter=styled.div`
    width:100%;
    position:relative;

    & h1{
        text-align:center;
    }

`;
const DeHeader=styled.div`
    width:100%;
    position:relative;
    display:flex;
    justify-content:space-between;
    padding:10px 0;

`;
const Grid=styled.div`
    width:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;

    & >p{
        padding:0 10px;
    }
`;
const Desc =styled.div`
    width:100%;
    height:200px;
    margin-top:20px;
    background:#fff;
    border: 1px solid #C4C4C4;
    border-radius: 20px;
    padding:20px;
    overflow:scroll;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    
`;
export default DePost;