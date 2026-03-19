import ProgressBar from "../CartComponent/ProgressBar"
import TopLinks from "../CartComponent/TopLinks"

function CartPage() {
  return (
    <div className="w-[92%] mx-auto">
        <TopLinks />
        <h2 className="text-[28px]">YOUR CART</h2>
        <ProgressBar />
    </div>
  )
}

export default CartPage