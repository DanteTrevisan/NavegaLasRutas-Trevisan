import { Link } from "react-router-dom"
import { urls } from "../utils/routes"
import { useContext } from "react"
import { albumsImagesPath, imagesExtension } from "../utils/utils"
import { CartContext } from "../context/CartContext"

const Cart = () => {
    const {cart, totalPrice, clearCart, itemsInCart} = useContext(CartContext)
    return(
        <section className="flex flex-col justify-center items-center m-5">
            <h2 className="font-semibold">Contenido del Carrito</h2>
            <ul>
                {cart.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center p-3 gap-6 flex-wrap my-4 bg-amber-200 rounded-lg shadow-lg overflow-hidden transition duration-500 hover:bg-amber-300"
                    >
                        <img
                            className="w-20"
                            src={albumsImagesPath + item.image + imagesExtension}
                            alt={item.name}
                        />
                        <h3 className="">{item.name}</h3>
                        <p className="font-semibold">$ {item.price}</p>
                        <p className="font-light">{item.quantity}</p>
                        <p className="font-bold">Total $: {item.price * item.quantity}</p>
                    </li>
                ))}
            </ul>

            <div className="flex gap-2">
                <h4 className="font-sans">Precio Total $</h4>
                <h4 className="font-semibold">{totalPrice()}</h4>
            </div>

            {itemsInCart() > 0 && (
                <button
                    className="bg-amber-900 text-amber-50 font-semibold px-2 py-1 rounded-md"
                    onClick={clearCart}
                >
                    Vaciar Carrito
                </button>
            )}

            <Link
                className="bg-amber-900 text-amber-50 font-semibold px-2 py-1 rounded-md mt-4"
                to={urls.checkout}
            >
            Finalizar Compra
            </Link>
        </section>
        
        

    )
}

export default Cart
