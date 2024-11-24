import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { urls } from "../utils/routes";
const CartWidget =  () => {
    
        

        return(
            <div className="flex justify-center items-center">
                <Link
                    className="col-span-1 flex justify-center items-center"
                    to={urls.cart}
                >
                    <img src={cartIcon} alt="Cart Icon" className="w-6 m-1 text-amber-100" />
                </Link>
            </div>
    )
}

export default CartWidget