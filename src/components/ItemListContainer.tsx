import React from "react";
import {  useState } from "react";
import { GameData } from "../utils/utils";
import GameList from "./GameList";



interface ItemListContainerProps {
    item: string
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ item }) => {
    const [data] = useState<GameData[]>([])
    
    return(
        
            <>
                {data && item === "game" && <GameList  />}
                {data && item === "album" && <GameList />}
            </>
        )
    
};

export default ItemListContainer