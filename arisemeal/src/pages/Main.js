import Header from "../components/Header";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import * as S from "../styles/MainStyled";

const Main = () => {
    const { getRandomMeals, randomMeals } = useContext(GlobalStateContext)

    useEffect(() => { getRandomMeals(); }, [])

    const renderMeals = randomMeals && randomMeals.map((meal, index) => {
        return (
            <S.RecipeCard key={index}>
                <S.RecipeImg src={meal.strMealThumb} alt="thumb" />
                <S.InfosRecipe>
                    <S.RecipeTitle>{meal.strMeal}</S.RecipeTitle>
                    <S.RecipeDescription>{meal.strInstructions.slice(0, 180)}</S.RecipeDescription>
                    <S.RecipeBtn href={meal.strYoutube} target="blank">Youtube</S.RecipeBtn>
                </S.InfosRecipe>
            </S.RecipeCard>
        )
    })

    return (
        <>
            <Header />
            <S.Container>
                <S.ContainerTitle>Receitas aleatórias</S.ContainerTitle>
                <S.RecipesContainer>
                    {renderMeals}
                </S.RecipesContainer>
            </S.Container>
        </>
    );
}

export default Main;