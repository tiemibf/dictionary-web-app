import Router from "Router";
import { BrowserRouter } from "react-router-dom";
import { globalStyles } from "./styles/globalStyles";

function App() {
    globalStyles();

    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
