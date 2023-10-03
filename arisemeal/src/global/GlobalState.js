import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [randomMeals, setRandomMeals] = useState([]);

  /*Função para pegar 10 receitas aleatórias e popular o estado randomMeals*/
  const getRandomMeals = () => {
    const newList = [];
    for (let i = 0; i < 10; i++) {
      axios
        .get(`${BASE_URL}random.php`)

        .then((res) => {
          newList.push(res.data.meals[0])
          if (newList.length === 10) {
            setRandomMeals(newList)
          }
        })

        .catch((error) => {
          console.log(error)
        })
    }
  }











  const data = {
    /* Estados */
    randomMeals,
    
    /* Funções */
    getRandomMeals,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;