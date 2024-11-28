import "./App.css";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { urls } from "./utils/routes";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="container mx-auto flex flex-col min-h-screen items-center bg-red-100">
          <Header />
          <Main>
            <Routes>
              <Route
                path={urls.home}
                element={<ItemListContainer item={"game"} />}
              />

              <Route
                path={urls.category}
                element={<ItemListContainer item={"album"} />}
              />

              <Route
                path={urls.category + "/:gameId"}
                element={<ItemListContainer item={"album"} />}
              />

              <Route
                path={urls.item + "/:albumId"}
                element={<ItemDetailContainer />}
              />

              <Route
                path={urls.cart} element={<Cart />}
              />
            </Routes>
          </Main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
