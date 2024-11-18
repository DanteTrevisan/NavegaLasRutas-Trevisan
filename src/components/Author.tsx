import React from "react";

interface AuthorProps{
    author: string;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
    return (
        <p className="">
            Sitio creado por{" "}
            {author}{" "}2024.
        </p>
    );
};

export default Author;