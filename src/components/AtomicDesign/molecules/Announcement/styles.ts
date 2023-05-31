import styled  from 'styled-components';

export const Container = styled.div`
background: #1E1E1E;
backdrop-filter: blur(20px);
width: 100%;
height: 64px; 
display: flex;
align-items: center;
justify-content: center;
color: var();

p {
width: 100%;
font-family: Open Sans;
font-weight: 400;
font-size: 18px;
line-height: 25px;
color: #fff;
margin-top: 10px;
}
.BoxContent {
display: flex;
justify-content: center;
}

span {
    display: none;
}

@media(max-width: 880px) {
    position: fixed;
    bottom: 0;
    z-index: 9999;

    height: fit-content;
    padding: 24px 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    .BoxContent {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    p {
        max-width: 292px;
    }

    span {
        display: flex;
        gap: 9px;
        font-weight: 600;
        font-size: 15px;
        color: #fff;
        margin: 0 auto;
        cursor: pointer;
    }
}
`