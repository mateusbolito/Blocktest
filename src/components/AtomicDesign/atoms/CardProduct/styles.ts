import styled from "styled-components";

export const FooterCard = styled.div`
    background: linear-gradient(180deg, #FEFEFE 0%, #F8F8F8 100%);
    width: 100%;
    height: 36px;
    
    border-radius: 0px 0px 8px 8px;
    border: 1px solid #CCCCCC;
    border-top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-weight: 600;
        font-size: 10px;
        color: #202020;
        max-width: 128px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    p:hover {
        text-decoration: underline;
    }
    @media(max-width: 880px) {
        height: 46px;
    }
`

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
aling-items: flex-start;

width: 176px;
height: 234px;

cursor: pointer;

    @media(max-width: 880px) {
        width: 138px;
        height: 137px;
    }

`


export const ContentImg = styled.div`

border: 1px solid #CCCCCC;
border-radius: 8px 8px 0px 0px;

display: flex;
justify-content: center;
align-items: center;

img {
    width: 92px;
    height: 149px;
}

@media(max-width: 880px) {
    img {
        width: 70px;
        height: 114px;
    }
}
`