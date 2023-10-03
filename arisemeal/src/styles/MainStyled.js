import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f3f4f6;
    padding: 1rem;
`

export const ContainerTitle = styled.h1`
    padding-bottom: 2rem;
    padding-top: 1rem;
    color: #D56C02;
`

export const RecipesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    gap: 3rem;
`

export const RecipeCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffff;
    border-radius: 15px;
    width: 18%;
    transition:  0.5s ease;

    &:hover {
        width: 20%;
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
    padding: 5px;

    &:hover {
        background-color: #a46b14;
    }
`