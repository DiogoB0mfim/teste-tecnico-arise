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

export const ContainerIngredients = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    gap: 3rem;
    flex-wrap: wrap;
`