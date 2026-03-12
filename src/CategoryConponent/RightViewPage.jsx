import { useEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

import { IoIosArrowDown } from "react-icons/io";

function RightViewPage({ grid, selectHandle, options, itemPerPageCard, setItemPerPageCard }) {
  const [itemPerPage, setItemPerPage] = useState(false);
  const itemPerBoxRef = useRef(null);


  useGSAP(() => {
      gsap.to("#itemPerPage", {
        opacity:itemPerPage ? 1 : 0,
        y:itemPerPage ? 0 : -10,
        pointerEvents:itemPerPage ? "auto" : "none",
        duration:0.3,
        ease:"power2.out"
      })
    }, [itemPerPage]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if(itemPerBoxRef.current && !itemPerBoxRef.current.contains(event.target)){
          setItemPerPage(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside); 
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, []);

  return (
    <div className="w-[99.5%] mt-10">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-medium text-[15px]">VIEW AS</h2>
              <div className="flex gap-[5px]">
                  <div className="border border-black p-[3.5px] w-fit space-y-1 cursor-pointer" onClick={() => selectHandle(1)}>
                    <div className={`w-[21px] h-[4px] ${grid === 1 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                    <div className={`w-[21px] h-[4px] ${grid === 1 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                    <div className={`w-[21px] h-[4px] ${grid === 1 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                  </div>
                  <div className="border border-black p-[3.5px] w-fit flex gap-1 cursor-pointer" onClick={() => selectHandle(2)}>
                    <div className={`w-[4px] h-[21px] ${grid === 2 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                    <div className={`w-[4px] h-[21px] ${grid === 2 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                  </div>
                  <div className="border border-black p-[3.5px] w-fit flex gap-1 cursor-pointer" onClick={() => selectHandle(3)}>
                    <div className={`w-[4px] h-[21px] ${grid === 3 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                    <div className={`w-[4px] h-[21px] ${grid === 3 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                    <div className={`w-[4px] h-[21px] ${grid === 3 ? "bg-gray-900" : "bg-gray-500"}`}></div>
                  </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <h2 className="font-medium text-[15px]">ITEMS PER PAGE</h2>
              <div className="relative" ref={itemPerBoxRef}>
                <div className="flex cursor-pointer justify-between items-center px-3 border border-gray-300 w-[90px] h-[45px]" onClick={() => setItemPerPage(!itemPerPage)}>
                  <span>{itemPerPageCard}</span>
                  <IoIosArrowDown />
                </div>
                <div className="bg-white z-50 w-[90px] py-3 flex flex-col gap-[12px] justify-center items-start pl-3 rounded absolute top-[46px] right-0 shadowNavCon opacity-0 pointer-events-none" id="itemPerPage">
                  {options.map((num, i) => (
                    <span key={i} className={`cursor-pointer ${itemPerPageCard === num ? "border-b" : ""} border-gray-600`} onClick={() => {setItemPerPageCard(num); setItemPerPage(false)}}>{num}</span>
                  ))}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default RightViewPage