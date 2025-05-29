import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GlobalStyles } from "./styles/globalStyles";

function App() {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
                retry: false
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>

    );
}

export default App;
