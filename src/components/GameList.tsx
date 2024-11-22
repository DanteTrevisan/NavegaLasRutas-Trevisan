import { urls } from "../utils/routes";
import GameItem from "./GameItem";
import { GameData, toUrlFormat, gamesImagesPath, imagesExtension } from "../utils/utils";
import React from "react";

interface GameListProps {
    data: GameData[];
}

const GameList: React.FC<GameListProps> = ( { data } ) => {
    return(
        <>
            <p className="p-8">
                ¡Compra las bandas sonoras originales de los juegos clasicos y mas actuales de The King Of Fighters!
            </p>

            <section className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((game) => (
                    <GameItem
                        key={game.id}
                        name={game.name}
                        image={gamesImagesPath + game.image + imagesExtension}
                        url={urls.category + "/" + toUrlFormat(game.name)}
                        description={game.description}
                    />
                ))}
            </section>
        </>
    );
};

export default GameList