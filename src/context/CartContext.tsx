import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";
import { ItemData } from "../utils/utils";

// Tipo Contexto Carrito
interface CartContextType {
    cart: ItemData[];
    setCart: Dispatch<SetStateAction<ItemData[]>>;
    addItemToCart: (newItem: ItemData) => void;
    clearCart: () => void;
    itemsInCart: () => number;
    isInCart: (id: number) => boolean;
    totalPrice: () => number;
}

//Cart Default
const CartContextDefaultValue: CartContextType = {
    cart: [],
    setCart: () => {},
    addItemToCart: () => {},
    clearCart: () => {},
    itemsInCart: () => 0,
    isInCart: () => false,
    totalPrice: () => 0,
};

//Context creacion
export const CartContext = createContext<CartContextType>(
    CartContextDefaultValue
)

// Props Cart Context
interface CartProviderProps{
    children: ReactNode;
}

//Cart Context Provider
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<ItemData[]>([])

    /**
     * @param {ItemData} item - Item a añadir al carro
     */
    const addItemToCart = (item:ItemData) =>{
        setCart([...cart, item])
    }

    /**
     * Carro vacio
     */
    const clearCart = () =>{
        setCart([])
    }

    /**
     * @returns {number} - Cantidad de items en el carrito
     */
    const itemsInCart = () => {
        return cart.reduce((acc,item) => acc + item.quantity,0)
    }

    /**
     * @param {number} id - item id
     * @returns {boolean}
     */
    const isInCart = (id:number): boolean =>{
        return cart.some((item) => item.id === id)
    }

    /**
     * @returns {number} - Precio total acumulado
     */
    const totalPrice = () => {
        return cart.reduce((acc,item) => acc + item.quantity * item.price,0)
    }

    const CartContextValue: CartContextType = {
        cart,
        setCart,
        addItemToCart,
        clearCart,
        itemsInCart,
        isInCart,
        totalPrice,
    };

    return (
        <CartContext.Provider value = {CartContextValue}>
            {children}
        </CartContext.Provider>
    )
    
}

