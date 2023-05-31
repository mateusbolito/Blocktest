import styled from 'styled-components';

export const CatalogTitle = styled.div`
background: #FBFBFB;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
padding: 29px 199px;

border-top: 1px solid;
border-image: linear-gradient(#A11CF3, #D835C5) 1;

@media(max-width: 880px) {
    padding: 29px 14px;
}

.titleCatalog {
    font-size: 28px;
    font-weight: 700;
    color: #202020;
}
div {
    width: 34px;
    height: 5px;
    background: linear-gradient(to right, #a11cf3, #d835c5);
    border-radius: 25px;
}
`;

export const CatalogList = styled.div`
width: 100%;
padding: 34px 200px 48px;
.titleList {
    font-weight: 600;
    font-size: 24px;
    color: #202020;
    font-style: normal;
}
@media(max-width: 880px) {
    padding: 28px 14px 42px;
}
`
export const ContainerCatalog = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
`;

export const ContainerProducts = styled.div`
display: flex;
gap: 15px;
flex-wrap: wrap;
`