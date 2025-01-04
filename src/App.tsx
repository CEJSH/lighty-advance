import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route
          path="/form"
          element={
            <Suspense fallback={<></>}>
              <FormPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
