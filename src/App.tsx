import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import { EAllRoutes } from "./routes/routes";
import Layout from "./components/layout/Layout";
import CheckboxSelect from "./pages/checkboxSelect/checkboxSelect";

function App() {
    return (
        <Routes>
            <Route path={EAllRoutes.MAIN} element={<Layout />}>
                <Route index element={<Main />} />
                <Route path={EAllRoutes.ABOUT} element={<About />} />
                <Route
                    path={EAllRoutes.COMPONENT1}
                    element={<CheckboxSelect />}
                />
                <Route path="*" />
            </Route>
        </Routes>
    );
}

export default App;
