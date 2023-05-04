import { Route, Routes } from "react-router-dom";
import { Suspense } from "react"
import { Home } from "./pages/Home/Home";

const Router = (): JSX.Element => {
    return(
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense>
                        <Home />
                    </Suspense>
                }
            />
        </Routes>
    )
}

export default Router;