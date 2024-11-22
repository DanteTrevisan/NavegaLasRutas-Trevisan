import SongList from "./SongList";
import { albumsImagesPath, imagesExtension, AlbumData } from "../utils/utils";


interface ItemDetailProps{
    item: AlbumData;
}

const ItemDetail : React.FC<ItemDetailProps> = ({ item }) => {
    return(
        <article className="flex flex-col items-center p-4">
            <div className="flex flex-row justify-around item-center">
                <div className="flex flex-col justify-content">
                    <h2 className="font-bold">{item.name}</h2>

                    <img
                        className="w-80"
                        src={albumsImagesPath + item.image + imagesExtension}
                        alt={item.name}
                    />
                </div>

                <div className="flex flex-col justify-between w-1/2">
                    <p className="font-light p-4">{item.description}</p>
                    <p className="p-4 font-extrabold">{item.price}</p>
                </div>
            </div>

            <p className="p-4">Lista de canciones</p>

            <SongList songs={item.songs}/>
        </article>
    )
}

export default ItemDetail
