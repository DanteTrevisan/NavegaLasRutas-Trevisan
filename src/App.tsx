import "./App.css";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { urls } from "./utils/routes";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto flex flex-col min-h-screen items-center bg-red-100">
        <Header />
        <Main>
          <Routes>
            <Route
              path={urls.home}
              element={<ItemListContainer item={"game"}/>}
            />

            <Route 
              path={urls.category}
              element={<ItemListContainer item={"album"} />}
            />



            
          </Routes>
        </Main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
