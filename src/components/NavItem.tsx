import React from "react";

interface NavItemProps {
    href: string;
    text: string
}

const NavItem: React.FC<NavItemProps> = ({ href, text }) => {
    return(
        <a
            className="rounded p-1 px-3 font-semibold hover:bg-amber-300 text-sky-50 transition duration-500"
            href={href}
        >
            {text}
        </a>
    )
};

export default NavItem;