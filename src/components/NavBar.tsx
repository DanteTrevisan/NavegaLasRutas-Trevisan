import NavItem from "./NavItem";

const NavBar = () => {
    return(
        <nav className="col-span-7 flex justify-start items-center px-3 font-bold">
            <ul className="flex space-x-2">
                <NavItem href="#" text="Inicio"  />
                <NavItem href="#" text="Juegos"  />
                <NavItem href="#" text="Bandas Sonoras"  />
            </ul>
        </nav>
    )
};

export default NavBar;