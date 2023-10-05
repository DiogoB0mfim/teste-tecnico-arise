import Header from "../components/Header";
import * as S from "../styles/IngredientsStyled";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Ingredients = () => {
    const navigate = useNavigate();
    const { getAllIngredients, allIngredients } = useContext(GlobalStateContext)
    const [filteredIngredient, setFilteredIngredient] = useState("")

    useEffect(() => { getAllIngredients(); }, [])

    const onChangeIngredient = (event) => {
        setFilteredIngredient(event.target.value)
    }

    const renderIngredients = allIngredients && allIngredients.map((ingredient, index) => {
        if (ingredient.strIngredient.toUpperCase().includes(filteredIngredient.toUpperCase())) {
            return (
                <S.DivIngredient key={index}>
                    <S.EachIngredient onClick={() => navigate(`/ingredients/filteredIngredient/${ingredient.strIngredient}`)}>{ingredient.strIngredient}</S.EachIngredient>
                </S.DivIngredient>
            );
        }

        else if (filteredIngredient === "") {
            return (
                <S.DivIngredient key={index}>
                    <S.EachIngredient>{ingredient.strIngredient}</S.EachIngredient>
                </S.DivIngredient>
            );
        }

        else {
            return undefined
        }
    })

    return (
        <>
            <Header />
            <S.ContainerPage>
                <S.ContainerTitle>Ingredientes</S.ContainerTitle>
                <S.ContainerInput>
                    <S.InputStyled placeholder="Procure por um ingrediente" value={filteredIngredient} onChange={onChangeIngredient} />
                    <S.BtnSearched>Procurar</S.BtnSearched>
                </S.ContainerInput>
                <S.ContainerIngredients>
                    {renderIngredients}
                </S.ContainerIngredients>
            </S.ContainerPage>
        </>
    );
}

export default Ingredients;