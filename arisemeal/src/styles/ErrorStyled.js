import styled from "styled-components";

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #D56C02;
    height: 100vh;
`

/*Estilização título do container */
export const ContainerTitle = styled.h1`
    padding-bottom: 2rem;
    padding-top: 1rem;
    color: #ffff;
`

export const BackButton = styled.button`
    border: none;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: #ffff;
    color: #D56C02;
    cursor: pointer;
`