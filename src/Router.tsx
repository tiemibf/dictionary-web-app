import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const DictionaryPage = lazy(
    () => import("./pages/DictionaryPage/DictionaryPage")
);
const Home = lazy(() => import("./pages/Home/Home"));

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense>
                        <Home />
                    </Suspense>
                }
            />
            <Route
                path="/dictionary"
                element={
                    <Suspense>
                        <DictionaryPage />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default Router;
