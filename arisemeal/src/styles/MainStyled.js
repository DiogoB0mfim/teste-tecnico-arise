import styled from "styled-components";

/*Estilização container geral */
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
`

/*Estilização título do container */
export const ContainerTitle = styled.h1`
    padding-bottom: 2rem;
    padding-top: 1rem;
    color: #D56C02;
`

/*Estilização do container de receitas */
export const RecipesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    gap: 3rem;
    
    @media(max-width: 720px){
        flex-direction: column;
        align-items: center;
    }
`