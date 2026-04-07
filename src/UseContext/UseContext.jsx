import { createContext, useState } from "react"

export const dataContext = createContext();
function UseContext({children}) {
    const [cart, setCart] = useState([]);
    const [sizingDetailData, setSizingDetailData] = useState();
    const [product, setProduct] = useState();

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : prev);
            }
            return [...prev, {...product, qty : 1}]
        })
    }

    const increase = (id) => {
        setCart((prev) => prev.map((item) => (item.id === id ? {...item, qty: item.qty + 1} : item)))
    }
    const decrease = (id) => {
        setCart((prev) => prev.map((item) => (item.id === id ? {...item, qty: item.qty - 1} : item)))
    }

    const data = {
        addToCart,
        cart,
        setSizingDetailData,
        sizingDetailData,
        product,
        setProduct,
        increase,
        decrease
    }
  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UseContext