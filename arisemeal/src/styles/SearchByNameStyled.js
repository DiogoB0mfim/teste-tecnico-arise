import styled from "styled-components";

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerTitle = styled.h1`
    color: #D56C02;
`

export const ContainerRecipes = styled.div`
    justify-content: center;
    padding-bottom: 40px;
    display: flex;
    gap: 2rem;
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
    border-color: #D56C02; /* Cor da borda ao receber foco */
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