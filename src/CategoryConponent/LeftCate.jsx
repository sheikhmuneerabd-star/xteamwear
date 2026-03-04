import { useState } from "react"
import { IoIosArrowForward } from "react-icons/io";
import leftCategoriesData from "./LeftCategoryData";
function LeftCate() {
    const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="w-[19%]">
        <div className="p-4">
            <h2 className="font-medium border-b border-gray-900 pb-2">CATEGORIES</h2>
            <div>
                {
                    leftCategoriesData.map((cate, index) => (
                        <div key={cate.id}>
                            <div className="flex justify-between items-center w-[95%] relative group cursor-pointer" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <IoIosArrowForward className="text-gray-400 text-[13px] mt-1" />
                                <p className="text-sm absolute top-0 left-0 bg-white group-hover:translate-x-4 transition-all duration-300">{cate.title}</p>
                                <div className="relative mb-2">
                                    <div className={`absolute transition-all duration-300 ${openIndex === index ? "rotate-90" : ""} top-0 left-1 w-[2px] h-[10px] bg-gray-800`}></div>
                                    <div className={`absolute transition-all duration-300 ${openIndex === index ? "rotate-180" : ""} top-1 w-[10px] h-[2px] bg-gray-800`}></div>
                                </div>
                            </div>
                            <div className={`overflow-hidden space-y-5 mt-3 mb-3 ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} transition-all duration-700 ease-in-out`}>
                                    {cate.items.map((item, i) => (
                                        <div key={i} className="relative group flex items-center cursor-pointer">
                                            <IoIosArrowForward className="text-gray-400 text-[13px] mt-1" />
                                            <p className="text-sm absolute top-0 left-0 bg-white group-hover:translate-x-4 transition-all duration-300">{item}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default LeftCate