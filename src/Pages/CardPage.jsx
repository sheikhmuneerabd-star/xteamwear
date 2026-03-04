import ImageLeftPart from "../ComponentsCardPage/ImageLeftPart"
import LinkBar from "../ComponentsCardPage/LinkBar"
import SizingSystem from "../ComponentsCardPage/SizingSystem"

import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import data from "../ShirtData";
import Description from "../ComponentsCardPage/Description";
import ProductSec from "../ComponentsCardPage/ProductSec";
import sPShirtData from "../SizingPageShirt";

function CardPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id, color } = useParams();

  const product = data.find((item) => item.id === Number(id)) || sPShirtData.find((item) => item.id === Number(id));

  if (!product) return <div>Product Not Found</div>;

  const defaultVariant = product.variants[0];

  const [selectedColor, setSelectedColor] = useState(
    color || defaultVariant.color
  );

  const detailRef = useRef(null);
  const handleClick = () => {
    detailRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="xl:w-[92%] w-[97%] mx-auto xl:mt-[0px] mt-[55px]">
        <LinkBar />
        <div className="flex items-start md:flex-row flex-col" ref={detailRef}>
          <ImageLeftPart product={product} selectedColor={selectedColor} />
          <SizingSystem product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        </div>
        <Description />
        <ProductSec handleClick={handleClick} />
    </div>
  )
}

export default CardPage