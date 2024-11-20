import { Link } from "react-router-dom"
import { urls } from "../utils/routes"
import SongList from "./SongList";

interface ItemDetailProps{
    item: string
}

const ItemDetail : React.FC<ItemDetailProps> = ({ item }) => {
    return(
        <article className="flex flex-col items-center p-4">
            <p>Este es el detalle de un album entrando desde el link tienda</p>
            <Link
                to={urls.cart}    
            >
                IR AL CARRO
            </Link>

            <p>Lista de Canciones</p>
            <SongList {} />
        </article>
    )
}

export default ItemDetail
