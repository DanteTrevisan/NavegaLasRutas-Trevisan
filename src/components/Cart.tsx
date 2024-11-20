import { Link } from "react-router-dom"
import { urls } from "../utils/routes"

const Cart = () => {
    return(
        <section>
            <p>Este es el carrito</p>
        
            <Link
                to={urls.checkout}
            >
            Finalizar Compra
            </Link>
        </section>
        
        

    )
}

export default Cart
