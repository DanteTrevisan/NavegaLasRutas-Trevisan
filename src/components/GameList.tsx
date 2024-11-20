import { urls } from "../utils/routes";
import GameItem from "./GameItem";
import { toUrlFormat } from "../utils/utils";

urls

const GameList = ( ) => {
    return(
        <>
            <p className="p-8">
                ¡Compra las bandas sonoras originales de los juegos clasicos y mas actuales de The King Of Fighters!
            </p>

            <section className="flex flex-row justify-around w-full">
                <GameItem url={urls.category + toUrlFormat("The King Of Fighters '94")}/>
            </section>
        </>
    );
};

export default GameList