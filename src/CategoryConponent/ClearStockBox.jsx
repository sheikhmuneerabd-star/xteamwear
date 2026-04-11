import { FaWindowClose } from "react-icons/fa";

function ClearStockBox({ setStockOpen, stockOpen, outStockOpen, setOutStockOpen }) {
  return (
    <div className={`p-4 ${stockOpen || outStockOpen ? "block" : "hidden"}`}>
        <div className="flex justify-between">
            <h2 className="font-medium">REFINED BY</h2>
            <span className="text-sm text-gray-600 underline cursor-pointer">Clear All</span>
        </div>
        <span className="text-sm text-gray-500 mt-1">14 results</span>
        <div className="flex gap-2">
            <div className={`mt-8 ${stockOpen ? "block" : "hidden"}`}>
                <div className="flex items-center bg-gray-100 text-gray-600 hover:bg-gray-400 transition-all duration-200 cursor-pointer hover:text-white gap-1 h-[30px] border w-fit px-2">
                    <span className="text-[14px]">In stock</span>
                    <FaWindowClose className="mt-[3px]" onClick={() => setStockOpen(false)} />
                </div>
            </div>
            <div className={`mt-8 ${outStockOpen ? "block" : "hidden"}`}>
                <div className="flex items-center bg-gray-100 text-gray-600 hover:bg-gray-400 transition-all duration-200 cursor-pointer hover:text-white gap-1 h-[30px] border w-fit px-2">
                    <span className="text-[14px]">Out of stock</span>
                    <FaWindowClose className="mt-[3px]" onClick={() => setOutStockOpen(false)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClearStockBox