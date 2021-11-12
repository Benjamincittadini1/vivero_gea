import { createContext, useState } from "react";

export const storeContext = createContext();

const { Provider } = storeContext;

const ShoppingContext = ({children}) => {

    const [products, setProducts] = useState([])

    const addItem = (plants, dataCounter) => {
        const proof = isInCart(plants)
        if (proof) {
            setProducts(products.map(item => item.id === plants.id ? {...plants, dataCounter: item.dataCounter + dataCounter } : item))
        } else {
            setProducts([...products, {...plants, dataCounter }])
        }
    }

    const isInCart = (plants) => {
        return products.find(item => item.id === plants.id)
    }

    const removeItem = (id) => {
        setProducts(products.filter(item => item.id !== id))
    }

    const totalProductsPrice = () => {
        return products.reduce((add, item) => add + item.price * item.dataCounter, 0)  
    }

    const cartWidgetCount = () => {
        return products.reduce((add, item) => (add += item.dataCounter), 0)
    }

    const clearCart = () => {
        setProducts([])
    }

    const valueContext = {products, addItem, removeItem, totalProductsPrice, cartWidgetCount, clearCart}

    return (
        <Provider value={valueContext}>
            {children}
        </Provider>
    )
}

export default ShoppingContext;