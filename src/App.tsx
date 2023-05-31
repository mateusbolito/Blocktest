import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes />
      <GlobalStyle />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
