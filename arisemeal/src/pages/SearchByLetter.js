import { useContext } from "react";
import Header from "../components/Header";
import * as S from "../styles/SearchByLetterStyled";
import * as C from "../styles/CardStyled";
import GlobalStateContext from "../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const SearchByLetter = () => {
    const navigate = useNavigate()
    const { getMealByLetter, mealsByLetter } = useContext(GlobalStateContext)

    const renderSelectedMeal = mealsByLetter && mealsByLetter.map((meal, index) => {
        return (
            <C.RecipeCard key={index}>
                <C.RecipeImg src={meal.strMealThumb} alt="thumb" onClick={() => navigate(`/meal/${meal.idMeal}`)} />
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
            <S.ContainerPage>
                <S.ContainerTitle>Receitas por Letra</S.ContainerTitle>
                <S.ContainerLetters>
                    <S.EachLetter onClick={() => getMealByLetter("A")}>A</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("B")}>B</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("C")}>C</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("D")}>D</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("E")}>E</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("F")}>F</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("G")}>G</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("H")}>H</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("I")}>I</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("J")}>J</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("K")}>K</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("L")}>L</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("M")}>M</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("N")}>N</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("O")}>O</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("P")}>P</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("Q")}>Q</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("R")}>R</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("S")}>S</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("T")}>T</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("U")}>U</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("V")}>V</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("W")}>W</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("X")}>X</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("Y")}>Y</S.EachLetter>
                    <S.EachLetter onClick={() => getMealByLetter("Z")}>Z</S.EachLetter>
                </S.ContainerLetters>
                <S.ContainerRecipes>
                    {renderSelectedMeal}
                </S.ContainerRecipes>
            </S.ContainerPage>
        </>
    );
}

export default SearchByLetter;