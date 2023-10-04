import styled from "styled-components";

/*Estilização do container da pagina */
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

export const BtnSearched = styled.button`
    border: none;
    background-color: #D56C02;
    color: #ffff;
    padding: 10px;
    font-weight: bolder;
    border-radius: 5px;
    cursor: pointer;
`

export const ContainerIngredients = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 50%;
`

export const DivIngredient = styled.div`
    width: 320px;
`

export const EachIngredient = styled.button`
    width: 300px;
    border: 1px solid #e9e9e9;
    background-color: #ffff;
    padding: 1rem;
    font-size: 1.1rem;
    transition: ease 0.5s;
    cursor: pointer;
    
    &:hover {
        background-color: #e9e9e9;
    }
`