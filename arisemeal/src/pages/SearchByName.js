import { useContext, useState } from "react";
import Header from "../components/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import * as C from "../styles/CardStyled";
import * as S from "../styles/SearchByNameStyled";

const SearchByName = () => {
    const { getMealByName, mealsByName } = useContext(GlobalStateContext)
    const [mealToSearch, setMealToSearch] = useState("");

    const onChangeMeal = (event) => {
        setMealToSearch(event.target.value);
    }

    const renderSelectedMeal = mealsByName && mealsByName.map((meal, index) => {
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
            <S.ContainerPage>
                <S.ContainerTitle>Pesquisar receita pelo nome</S.ContainerTitle>
                <S.ContainerInput>
                    <S.InputStyled
                        placeholder="Procurar receita"
                        value={mealToSearch}
                        onChange={onChangeMeal}
                    />
                    <S.BtnSearched onClick={() => getMealByName(mealToSearch)}>Procurar</S.BtnSearched>
                </S.ContainerInput>
                <S.ContainerRecipes>
                    {mealsByName !== null ? renderSelectedMeal : <S.NotFoundP>Receita não encontrada :{"("}</S.NotFoundP>}
                </S.ContainerRecipes>
            </S.ContainerPage>
        </>
    );
}

export default SearchByName;