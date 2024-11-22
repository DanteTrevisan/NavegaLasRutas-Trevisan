import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toUrlFormat, AlbumData, albumsCollection } from "../utils/utils";
import ItemDetail from "./ItemDetail";
import { doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { getDoc } from "firebase/firestore";



const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    const [noItem, setNoItem] = useState(false);
    const { albumId: gameUrl } = useParams();

    let gameId = "";
    let albumName = "";

    if (gameUrl) {
        const url = gameUrl.split("_");
        gameId = url[0];
        albumName = url[2];
    }

    useEffect(() => {
        /*Referencia a firebase con gameid*/
        const docRef = doc(db,albumsCollection,gameId);

        /*Obtener de la db y filtrar por album*/
        getDoc(docRef).then((docSnapshot) => {
            const doc = docSnapshot.data();
            if (doc) {
                const album = doc.albums.find(
                    (album: AlbumData) => toUrlFormat(album.name) === albumName
                );
                setItem(album);
            } else {
                setNoItem(true)
            }
        });

    },[gameUrl])
    
    return(
        <>
            {item && <ItemDetail item={item} />}
            {noItem && <p>Producto Inexistente</p> }
        </>
    )
}

export default ItemDetailContainer;