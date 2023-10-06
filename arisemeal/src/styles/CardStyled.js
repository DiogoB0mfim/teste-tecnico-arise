import styled from "styled-components";

/*Estilização de cada card de receita */
export const RecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff;
    border-radius: 15px;
    width: 300px;
    transition:  0.5s ease;

    &:hover {
        transform: scale(1.1)
    }

    @media(max-width: 720px){
        width: 60%;
    }
`

export const RecipeImg = styled.img`
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    cursor: pointer;
`

export const InfosRecipe = styled.div`
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const RecipeTitle = styled.h3`
    font-size: 1.3rem;
`

export const RecipeDescription = styled.p`
    font-size: 1.1rem;
    text-align: justify;
`

export const RecipeBtn = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    color: #ffff;
    background-color: #D56C02;
    transition: background-color 0.3s ease;
    width: 70px;
    border-radius: 5px;
    padding: 10px;

    &:hover {
        background-color: #a46b14;
    }
`