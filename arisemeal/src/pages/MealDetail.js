import Header from "../components/Header";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { useParams } from "react-router-dom";
import * as S from "../styles/MealDetailStyled";
import * as C from "../styles/CardStyled";

const MealDetail = () => {
    const { id } = useParams();
    const { geRecipeById, mealById } = useContext(GlobalStateContext)

    useEffect(() => { geRecipeById(id) }, [])

    const renderMeal = mealById && mealById.map((meal, index) => {
        const ingredients = []
        const measurement = []

        /*Função que pega todas propriedades de ingredientes e medida do array e jogar apenas a não vazias num array
        separado, afim de poder mapear para redenrizar junto a uma lista ORDENADA */
        const filterProperties = (param, array) => {
            for (let i = 1; i <= 20; i++) {
                const variableKey = `${param}${i}`;
                const variableValue = meal[variableKey];

                if (variableValue && variableValue.trim() !== '') {
                    array.push(variableValue);
                }
            }
        }

        filterProperties("strIngredient", ingredients);
        filterProperties("strMeasure", measurement);

        return (
            <S.TheMeal key={index}>
                <S.ContainerTitle>{meal.strMeal}</S.ContainerTitle>
                <S.RecipeImg src={meal.strMealThumb} alt="imagem da receita"/>
                <S.InfoCategoryDiv>
                    <p><b>Categoria:</b> {meal.strCategory}</p>
                    <p><b>Area:</b> {meal.strArea}</p>
                    <p><b>Tags:</b> {meal.strTags}</p>
                </S.InfoCategoryDiv>
                <S.RecipeInstruction>{meal.strInstructions}</S.RecipeInstruction>
                <S.RecipeDiv>
                    <S.EachInst>
                        <S.H4Recipe>Ingredientes</S.H4Recipe>
                        <S.OLRecipe>
                            {ingredients.map((ingredient, index) => {
                                return (<li key={index}>{ingredient}</li>);
                            })}
                        </S.OLRecipe>
                    </S.EachInst>
                    <S.EachInst>
                        <S.H4Recipe>Medidas</S.H4Recipe>
                        <S.OLRecipe>
                            {measurement.map((measurement, index) => {
                                return (<li key={index}>{measurement}</li>);
                            })}
                        </S.OLRecipe>
                    </S.EachInst>
                </S.RecipeDiv>
                <C.RecipeBtn href={meal.strYoutube} target="blank">Youtube</C.RecipeBtn>
            </S.TheMeal>
        )
    })

    return (
        <>
            <Header />
            <S.ContainerPage>
                <S.ContainerMeal>
                    {renderMeal}
                </S.ContainerMeal>
            </S.ContainerPage>
        </>
    );
}

export default MealDetail;