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
            <div key={index}>
                <h1>{meal.strMeal}</h1>
                <img src={meal.strMealThumb} />
                <p>Categoria: {meal.strCategory}</p>
                <p>Area: {meal.strArea}</p>
                <p>{meal.strInstructions}</p>
                <ol>
                    {ingredients.map((ingredient, index) => {
                        return (<li key={index}>{ingredient}</li>);
                    })}
                </ol>
                <ol>
                    {measurement.map((measurement, index) => {
                        return (<li key={index}>{measurement}</li>);
                    })}
                </ol>
                <C.RecipeBtn href={meal.strYoutube} target="blank">Youtube</C.RecipeBtn>
            </div>
        )
    })

    return (
        <>
            <Header />
            <div>
                <div>
                    {renderMeal}
                </div>
            </div>
        </>
    );
}

export default MealDetail;