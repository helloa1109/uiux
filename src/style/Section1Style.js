import { styled } from "styled-components";

export const ContentnWrapper  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 20px;
`;

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    width: 100%;
    height: 3vh;
`;
export const MainContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 15vh;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 32px;
    font-weight: 700;
`;

export const MainBtn = styled.button`
    width: 80px;
    height: 34px;
    background-color: black;
    border: none;
    border-radius: 50px;
    margin-top: 20px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
`;