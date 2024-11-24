import { Link } from "react-router-dom"
import { urls } from "../utils/routes"

const Cart = () => {
    return(
        <section className="flex flex-col justify-center items-center m-5">
            <h2 className="font-semibold">COntenido del Carrito</h2>
            <ul>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
                <p>ACA DEBERIA IR LO QUE TIENE EL CARRITO PERO TENGO QUE VER BIEN COMO SE HACE</p>
            </ul>

            <div className="flex gap-2">
                <h4 className="font-sans">Precio Total $</h4>
                <h4 className="font-semibold">ACA LLAMO LA FUNCION PARA CALCULAR EL PRECIO TOTAL PERO NO SE COMO SE HACE</h4>
            </div>

            <p>ALGUN BOTON PARA VARCIAR EL CARRITO/TERMINAR DE COMPRAR</p>
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
