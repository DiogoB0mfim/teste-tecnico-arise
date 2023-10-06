import styled from "styled-components";

export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`

/*Estilização titulo do container */
export const ContainerTitle = styled.h1`
    color: #D56C02;
    
    @media(max-width: 768px) {
        margin-top: 50px;
        font-size: 1.8rem;
    }
`

export const RecipeImg = styled.img`
    width: 660px;

    @media(max-width: 768px) {
        width: 80%;
    }
`

export const InfoCategoryDiv = styled.div`
    display: flex;
    gap: 3rem;
    font-size: 1.3rem;
    width: 660px;

    @media(max-width: 768px) {
        width: 80%;
        gap: 0rem;
        flex-direction: column;
    }
`

export const RecipeDiv = styled.div`
    display: flex;
    width: 690px;
    gap: 3rem;
    
    @media(max-width: 768px) {
        width: 80%;
    }
`

export const EachInst = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H4Recipe = styled.h4`
    font-size: 1.3rem;
`

export const OLRecipe = styled.ol`
    font-size: 1.1rem;
`

export const RecipeInstruction = styled.p`
    width: 650px;
    font-size: 1.2rem;
    text-align: justify;

    @media(max-width: 768px) {
        width: 80%;
    }
`

export const ContainerMeal = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`

export const TheMeal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`