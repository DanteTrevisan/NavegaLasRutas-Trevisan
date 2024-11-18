import Brand from "./Brand";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

const Header = () => {
    return(
        <header className="container grid grid-cols-10 bg-red-900 text-sky-50 fixed w-full top-0 z-50 h-12">
            <Brand/>
            <NavBar/>
            <CartWidget/>

        </header>
    )
};

export default Header;
