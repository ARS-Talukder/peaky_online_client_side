import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { product_id: action.product_id, name: action.name, category: action.category, img: action.img, price: action.price, discount: action.discount, discount_price: action.discount_price, quantity: action.quantity }]

        case "UPDATE":
            var arr = [...state]
            arr.find((product, index) => {
                if (product.product_id === action.product_id) {
                    arr[index] = { ...product, quantity: action.quantity }
                    return arr
                }
                
            })
            return arr

        case "REMOVE":
            var newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        default:
            console.log("Error in Reducer")
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);