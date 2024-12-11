import { create } from "zustand";
import { Items } from "../types/product";

export type CartItem = Items & { quantity: number };

export type CartStore = {
    cartData: CartItem[];
    setCartData: (data: Items) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
    cartData: [],
    setCartData: (data: Items) =>
        set((state) => {
            const existingItemIndex = state.cartData.findIndex(
                (item) => item.id === data.id
            );

            if (existingItemIndex >= 0) {
                const updatedCartData = [...state.cartData];
                updatedCartData[existingItemIndex].quantity += 1;
                return { cartData: updatedCartData };
            } else {
                return {
                    cartData: [...state.cartData, { ...data, quantity: 1 }],
                };
            }
        }),
    incrementQuantity: (id: number) =>
        set((state) => {
            const updatedCartData = state.cartData.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { cartData: updatedCartData };
        }),
    decrementQuantity: (id: number) =>
        set((state) => {
            const updatedCartData = state.cartData.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            return { cartData: updatedCartData };
        }),
    removeItem: (id: number) =>
        set((state) => {
            const updatedCartData = state.cartData.filter((item) => item.id !== id);
            return { cartData: updatedCartData };
        }),
    clearCart: () =>
        set({
            cartData: [],
        }),
}));
