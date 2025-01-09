import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AlertContextProvider } from "./contexts/AlertContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AlertContextProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </AlertContextProvider>
  </QueryClientProvider>
);
