import { styled } from "styled-components";

export const Section2MobileContainer = styled.div`
    display: flex; 
    background-attachment: fixed;

`;

export const Section2Title = styled.span`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 34px;
    font-weight: 600;

    & span:nth-child(2){
        margin-top: 10px;
        color: white;
        background-color:  #5360ea;
        border-radius: 50px;
        width: 100px;
    }

    & span:nth-child(3) {
        margin-top: 10px;
    }
`;

export const ScrollImage1 = styled.img`
    width: 100%;
    background: url("../img/1.jpeg") no-repeat;
    background-attachment: fixed;
`;

export const ScrollImage2 = styled.img`
    background: url("../img/2.jpeg") no-repeat;
    background-attachment: fixed;
`;