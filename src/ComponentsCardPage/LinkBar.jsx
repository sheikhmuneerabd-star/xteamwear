import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function LinkBar() {
  return (
    <div className="xl:py-5 lg:py-3 md:py-2 py-3">
        <div className="flex gap-1 items-center">
            <div className="flex gap-1 items-center">
                <h1 className="text-gray-400 md:text-[14px] text-[10.8px] hover:text-black cursor-pointer transition-all duration-200">Home</h1>
                <MdOutlineKeyboardArrowRight className="text-gray-400 text-[15px] md:mt-1 mt-[1.5px]" />
            </div>
            <div className="flex gap-1 items-center">
                <h1 className="text-gray-400 md:text-[14px] text-[10.8px] hover:text-black cursor-pointer transition-all duration-200">Products</h1>
                <MdOutlineKeyboardArrowRight className="text-gray-400 text-[15px] md:mt-1 mt-[1.5px]" />
            </div>
            <span className="text-gray-400 md:text-[14px] text-[10.8px]">Camouflage Line - Custom Soccer</span>
        </div>
    </div>
  )
}

export default LinkBar