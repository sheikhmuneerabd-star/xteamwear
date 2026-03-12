import { useRef, useState } from "react"
import Available from "../CategoryConponent/Available"
import CardCateSec from "../CategoryConponent/CardCateSec"
import CateLinkBar from "../CategoryConponent/CateLinkBar"
import ClearStockBox from "../CategoryConponent/ClearStockBox"
import FeaturedProducts from "../CategoryConponent/FeaturedProducts"
import LeftCate from "../CategoryConponent/LeftCate"
import PriceCals from "../CategoryConponent/PriceCals"
import RightViewPage from "../CategoryConponent/RightViewPage"
import categoryCardImg from "../CategoryCardImg"

function CategorySection() {
  const [grid, setGrid] = useState(3);
  const [itemPerPageCard, setItemPerPageCard] = useState(10);
  const options = [10, 20, 25, 30, 50];

  const handleShowMore = () => {

    const currentIndex = options.indexOf(itemPerPageCard);

    if(currentIndex < options.length - 1){
    setItemPerPageCard(options[currentIndex + 1]);
    }

    setTimeout(()=>{
    window.scrollBy({
    top:200,
    behavior:"smooth"
    });
    },100);

  }

  return (
    <div>
        <CateLinkBar />
        <div className="flex">
          <div className="w-[19%]">
            <LeftCate />
            <ClearStockBox />
            <Available />
            <PriceCals />
            <FeaturedProducts />
          </div>
          <div className="w-[78.7%] ml-4">
            <div className="h-[1px] w-[98%] bg-gray-300 mt-3"></div>
            <RightViewPage grid={grid} selectHandle={setGrid} options={options} itemPerPageCard={itemPerPageCard} setItemPerPageCard={setItemPerPageCard} />
            <CardCateSec grid={grid} itemPerPageCard={itemPerPageCard} />
            <div className="flex justify-center mt-3">
              {itemPerPageCard < categoryCardImg.length && (
                <button className='rounded text-sm md:w-[310px] w-[280px] md:h-[45px] h-[42px] mt-2 hover:bg-yellow-400 border-yellow-400 border-[1.5px] text-black font-medium transition-all duration-200 hover:-translate-y-1'
                  onClick={handleShowMore}
                >Show More</button>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CategorySection