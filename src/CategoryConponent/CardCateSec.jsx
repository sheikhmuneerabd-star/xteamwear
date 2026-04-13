import categoryCardImg from "../CategoryCardImg"
import CateShirtCard from "./CateShirtCard"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function CardCateSec({ categoryCardImg, stockOpen, outStockOpen, grid, itemPerPageCard, activeCategory }) {

    useGSAP(() => {
        ScrollTrigger.batch(".shirt2", {
            start: "top 85%",
            once: true,
            onEnter: (elements) => {
                gsap.from(elements, {
                    y: 80,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15
                });
            }
        });
    }, []);

    const filteredData = categoryCardImg
    .filter(item => item.category === activeCategory)
    .filter(item => {
        if (stockOpen && outStockOpen) return true;
        if (stockOpen) return item.available;
        if (outStockOpen) return !item.available;
        return true;
    })

  return (
    <div className="mt-10">
        <div className={`grid
            ${grid === 1 ? "grid-cols-1" : ""}
            ${grid === 2 ? "grid-cols-2" : ""}
            ${grid === 3 ? "grid-cols-3" : ""}
        w-full gap-4`}>
            {
                filteredData.filter((item) => item.category === activeCategory).slice(0, itemPerPageCard).map((shirt) => (
                    <CateShirtCard key={shirt.id} shirt={shirt} grid={grid} />
                ))
            }
        </div>
    </div>
  )
}

export default CardCateSec