import Available from "../CategoryConponent/Available"
import CateLinkBar from "../CategoryConponent/CateLinkBar"
import ClearStockBox from "../CategoryConponent/ClearStockBox"
import FeaturedProducts from "../CategoryConponent/FeaturedProducts"
import LeftCate from "../CategoryConponent/LeftCate"
import PriceCals from "../CategoryConponent/PriceCals"

function CategorySection() {
  return (
    <div>
        <CateLinkBar />
        <div className="w-[19%]">
          <LeftCate />
          <ClearStockBox />
          <Available />
          <PriceCals />
          <FeaturedProducts />
        </div>
    </div>
  )
}

export default CategorySection