import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "Router";
import { BrowserRouter } from "react-router-dom";
import { globalStyles } from "./styles/globalStyles";

function App() {
    globalStyles();

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
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
