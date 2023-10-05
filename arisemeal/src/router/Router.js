import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Ingredients from "../pages/Ingredients";
import SearchByLetter from "../pages/SearchByLetter";
import SearchByName from "../pages/SearchByName";
import ChoosedIngredient from "../pages/ChoosedIngredient";
import MealDetail from "../pages/MealDetail";
import Error from "../pages/Error";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/searchByLetter" element={<SearchByLetter />} />
                <Route path="/searchByName" element={<SearchByName />} />
                <Route path="/ingredients/filteredIngredient/:ingredient" element={<ChoosedIngredient />} />
                <Route path="/meal/:id" element={<MealDetail />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;