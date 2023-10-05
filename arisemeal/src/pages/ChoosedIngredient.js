
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import Header from "../components/Header";
import * as C from "../styles/CardStyled";
import * as S from "../styles/ChoosedIngredientsStyled";

const ChoosedIngredient = () => {
    const { ingredient } = useParams();
    const { getRecipeByIngredient, mealByIngredient } = useContext(GlobalStateContext)

    useEffect(() => { getRecipeByIngredient(ingredient) }, [])

    const renderSelectedMeal = mealByIngredient && mealByIngredient.map((meal, index) => {
        return (
            <C.RecipeCard key={index}>
                <C.RecipeImg src={meal.strMealThumb} alt="thumb" />
                <C.InfosRecipe>
                    <C.RecipeTitle>{meal.strMeal}</C.RecipeTitle>
                    <C.RecipeBtn href={meal.strYoutube} target="blank">Youtube</C.RecipeBtn>
                </C.InfosRecipe>
            </C.RecipeCard>
        )
    })

    return (
        <>
            <Header />
            <S.ContainerPage>
                <S.ContainerTitle>Receitas com {ingredient}</S.ContainerTitle>
                <S.ContainerIngredients>
                    {renderSelectedMeal}
                </S.ContainerIngredients>
            </S.ContainerPage>

        </>
    );
}
export default ChoosedIngredient;
