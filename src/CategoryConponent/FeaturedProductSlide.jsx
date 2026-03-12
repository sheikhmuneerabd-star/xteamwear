import { useState } from "react";
import { Link } from "react-router-dom";

function FeaturedProductSlide({ item }) {
    const [active, setActive] = useState(item.variants[0]);
  return (
    <Link to={`/cardPage/${item.id}/${active.color}`}>
        <div className='group rounded-md shadow-lg shadow-gray-300 p-4 mb-8 mt-3'>
            <div>
                <div className='cursor-pointer group/img group-hover:-translate-y-2 transition-all duration-300 relative rounded aspect-[4/5] overflow-hidden'>
                    <img className='w-full h-full object-cover opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={active.images[0]} alt="" />
                    <img className='w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out' src={active.images[1]} alt="" />
                    <div className='absolute flex flex-col items-end gap-1 right-0 top-0'>
                        <p className='bg-red-600 text-white text-center xl:text-[13px] lg:text-[13px] text-[11px] py-[1px] xl:w-[70px] lg:w-[78px] w-[62px]'>Sale 20%</p>
                    </div>
                </div>

                <div className='md:pt-3 pt-3 pl-2 pb-0'>
                    <p className='text-sm md:text-base lg:text-md line-clamp-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300'>{item.name}</p>
                    <p className='text-gray-600 text-sm md:text-base lg:text-[14px] mt-2 line-through cursor-pointer'>{item.oldPrice}</p>
                    <div className='text-red-600 flex items-center cursor-pointer text-sm md:text-base lg:text-[14px] font-medium gap-1'>{item.newPrice} <p className='bg-red-600 text-white xl:px-2 lg:px-3 px-2 xl:text-[13px] lg:text-[15px] text-[10px] py-[2px] rounded cursor-text hidden md:flex'>(-20%)</p></div>
                    <div className='flex gap-1'>
                        {item.variants.map((variant, index) => (
                            <div key={index} className='w-[30px] mt-3 rounded-full cursor-pointer border-[1.4px] p-[2px] border-gray-300'
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setActive(variant);
                                }}>
                                <img className='rounded-full' title={variant.color} src={variant.icon} alt="dark-white" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default FeaturedProductSlide