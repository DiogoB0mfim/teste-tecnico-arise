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

/*Estilização container de receitas buscadas */
export const ContainerRecipes = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    padding: 3rem;
    gap: 1rem;
`

export const InputStyled = styled.input`
    padding: 5px;
    width: 320px;
    border: 2px solid #e9e9e9;
    outline: none;
    
    &:focus {
        border-color: #D56C02;
    }

    @media(max-width: 768px) {
        width: 180px;
    }
`

export const NotFoundP = styled.p`
    color: #808080 ;
`

export const BtnSearched = styled.button`
    border: none;
    background-color: #D56C02;
    color: #ffff;
    padding: 10px;
    font-weight: bolder;
    border-radius: 5px;
    cursor: pointer;
`