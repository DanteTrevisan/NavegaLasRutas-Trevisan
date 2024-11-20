import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { urls } from "../utils/routes";
const CartWidget =  () => {
    
        

        return(
            <div className="flex justify-center items-center">
                <Link
                    to={urls.cart}
                >
                    <img src={cartIcon} alt="" />
                </Link>
            </div>
    )
}

export default CartWidget