import ProductCarts from "../CartComponent/ProductCarts"
import ProductDetails from "../CartComponent/ProductDetails"
import ProgressBar from "../CartComponent/ProgressBar"
import Timer from "../CartComponent/Timer"
import TopLinks from "../CartComponent/TopLinks"

function CartPage() {
  return (
    <div className="lg:w-[92%] w-[95%] mx-auto">
        <TopLinks />
        <h2 className="text-[28px]">YOUR CART</h2>
        <ProgressBar />
        <Timer />
        <ProductDetails />
        <ProductCarts />
    </div>
  )
}

export default CartPage