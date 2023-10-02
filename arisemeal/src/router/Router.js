import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={""} />
                <Route path="/home" element={""} />
                <Route path="/signUp" element={""} />
                <Route path="*" element={""} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;