import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import leftCategoriesData from "./LeftCategoryData";

function LeftCate({ setActiveCategory, activeCategory, setSubActiveCategory, subActiveCategory }) {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const index = leftCategoriesData.findIndex(
      (c) => c.title === activeCategory
    );

    if (index !== -1) {
      setOpenIndex(index);
    }
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      <div className="p-4 pt-1">
        <h2 className="font-medium border-b border-gray-900 pb-2">
          CATEGORIES
        </h2>

        <div className="mt-3">
          {leftCategoriesData.map((cate, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef(null);

            return (
              <div key={cate.id} className="mb-2">
                {/* Header */}
                <button
                  onClick={() =>
                  {
                    setOpenIndex(isOpen ? null : index);
                    setActiveCategory(cate.title);
                  }
                  }
                  aria-expanded={isOpen}
                  aria-controls={`section-${index}`}
                  className="w-full flex justify-between items-center pl-0 p-2 group"
                >
                  <div className="flex w-full items-center relative">
                    <IoIosArrowForward className="text-[15px] mt-[3.3px]" />
                    <p className={`text-sm font-medium absolute top-0 left-1 bg-white group-hover:translate-x-3 transition-all duration-200 ${activeCategory === cate.title ? "translate-x-3 text-black" : "text-gray-600"}`}>
                      {cate.title}
                    </p>
                  </div>

                  <div className="relative mb-2">
                    <div className={`absolute transition-all duration-500 ${openIndex === index ? "rotate-90" : ""} top-0 left-1 w-[2px] h-[10px] bg-gray-800`}></div>
                    <div className={`absolute transition-all duration-500 ${openIndex === index ? "rotate-180" : ""} top-1 w-[10px] h-[2px] bg-gray-800`}></div>
                  </div>
                </button>

                {/* Content */}
                <div
                  id={`section-${index}`}
                  role="region"
                  ref={contentRef}
                  style={{
                    height: isOpen
                      ? contentRef.current?.scrollHeight + "px"
                      : "0px"
                  }}
                  className="overflow-hidden transition-all duration-500"
                >
                  <div className="pl-4 pb-2 space-y-1">
                    {cate.items.map((item, i) => (
                      <div key={i} className="relative h-[30px] flex items-center cursor-pointer group" onClick={() => setSubActiveCategory(item)}>
                        <IoIosArrowForward className="text-sm text-gray-600" />
                        <p
                          className={`absolute top-[3.3px] left-1 bg-white text-sm group-hover:translate-x-3 transition-all duration-200 ${subActiveCategory ? "translate-x-3 text-black" : "text-gray-600"}`}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LeftCate;