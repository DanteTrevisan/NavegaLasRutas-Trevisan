import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ordersCollection } from "../utils/utils";

const Checkout = () => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    emailRepeat: "",
  });
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //guardar esta orden en la base de datos
    const ordenCompra = {
      cliente: values,
      productos: cart,
      total: totalPrice(),
      fecha: new Date(),
      estado: "generada",
    };

    const ordersRef = collection(db, ordersCollection);
    addDoc(ordersRef, ordenCompra).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  // Conditional render
  if (orderId) {
    return(
        <div className="flex justify-center items-center w-full h-full">
            <p>
                Compra finalizada. Su codigo de orden es:{" "}
                <span className="font-semibold">{orderId}</span>
            </p>
        </div>
    )
  }

  
  return <p>Checkout: aca va un formulario</p>;
};

export default Checkout;
