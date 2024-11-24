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

