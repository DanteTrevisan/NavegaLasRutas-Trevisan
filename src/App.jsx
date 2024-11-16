import './App.css';
import "./styles/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom;';
import ItemListContainer from './components/ItemListContainer';



function App() {

  return (
    
    <BrowserRouter>
      <div className='container mx-auto flex flex-col min-h-screen items-center bg-red-100'>
        <Header />
        <Main />
          <Routes>
            <Route>
              path={urls.home}
              elemento={<ItemListContainer item={"game"} />}
            </Route>
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>



  );
};

export default App
