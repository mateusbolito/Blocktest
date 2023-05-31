import styled from "styled-components";

export const ContainerFooter = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
background: #E9E9E9;
gap: 28px;
padding: 24px 200px;
position: fixed;
bottom: 0;
    p {
        cursor: pointer;
    }
    p:hover {
        text-decoration: underline;
    }
    @media(max-width: 880px) {
        display: flex;
        flex-direction: column;
        padding: 24px 14px;
        align-items: initial;
    }
`