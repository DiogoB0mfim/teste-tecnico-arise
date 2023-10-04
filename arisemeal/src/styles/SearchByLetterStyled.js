import styled from "styled-components";

/*Estilização container da página */
export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

/*Estilização titulo do container */
export const ContainerTitle = styled.h1`
    color: #D56C02;
    
    @media(max-width: 768px) {
        margin-top: 50px;
        font-size: 1.8rem;
    }
`

export const ContainerLetters = styled.div`
    display: flex;
    gap: 0.8rem;

    @media(max-width: 768px) {
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 80%;
    }
`
export const EachLetter = styled.p`
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        color: #D56C02;
    }
`

/*Estilização container de receitas */
export const ContainerRecipes = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`