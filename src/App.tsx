import { globalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  globalStyles();
  return (
    <BrowserRouter>
      <Router />
  </BrowserRouter>
  );
}

export default App;
