import Header from "../components/Header";
import * as S from "../styles/IngredientsStyled";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

const Ingredients = () => {
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
                    <a target="blank" href="/"><S.EachIngredient>{ingredient.strIngredient}</S.EachIngredient></a>
                </S.DivIngredient>
            );
        }

        else if (filteredIngredient === "") {
            return (
                <S.DivIngredient key={index}>
                    <a target="blank" href="/"><S.EachIngredient>{ingredient.strIngredient}</S.EachIngredient></a>
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