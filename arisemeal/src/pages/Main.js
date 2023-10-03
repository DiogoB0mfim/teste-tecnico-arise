import Header from "../components/Header";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import * as S from "../styles/MainStyled";
import * as C from "../styles/CardStyled";

const Main = () => {
    const { getRandomMeals, randomMeals } = useContext(GlobalStateContext)

    useEffect(() => { getRandomMeals(); }, [])

    const renderMeals = randomMeals && randomMeals.map((meal, index) => {
        return (
            <C.RecipeCard key={index}>
                <C.RecipeImg src={meal.strMealThumb} alt="thumb" />
                <C.InfosRecipe>
                    <C.RecipeTitle>{meal.strMeal}</C.RecipeTitle>
                    <C.RecipeDescription>{meal.strInstructions.slice(0, 120)}</C.RecipeDescription>
                    <C.RecipeBtn href={meal.strYoutube} target="blank">Youtube</C.RecipeBtn>
                </C.InfosRecipe>
            </C.RecipeCard>
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