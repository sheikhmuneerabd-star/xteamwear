import { useState } from "react";
import { Link } from 'react-router-dom';

function LastCateCard({shirt}) {
    const [active, setActive] = useState(shirt.variants[0]);
  return (
    <Link to={`/cardPage/${shirt.id}/${active.color}`} className="shirt2 block w-[99%] animate-[fadeIn_.4s_ease]">
        <div className='group'>
            <div className="space-y-3">
                <div className='cursor-pointer group/img group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden h-[100%]'>
                    <img className='w-full h-auto opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={active.images[0]} alt="" />
                    <img className='w-full h-auto absolute top-0 left-0 opacity-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out' src={active.images[1]} alt="" />
                    <div className='absolute flex flex-col items-end gap-1 right-0 top-0'>
                        <p className='bg-emerald-400 text-white rounded text-center xl:text-[13px] lg:text-[13px] text-[10px] xl:py-[1px] lg:py-[1px] py-0 xl:w-[42px] lg:w-[42px] w-[34px]'>New</p>
                        <p className='bg-red-600 text-white rounded text-center xl:text-[13px] lg:text-[13px] text-[11px] py-[1px] xl:w-[78px] lg:w-[78px] w-[62px]'>Sale 20%</p>
                    </div>
                </div>

                <div>
                    <p className='text-sm md:text-base lg:text-lg line-clamp-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300'>{shirt.name}</p>
                    <p className='text-gray-600 text-sm md:text-base lg:text-lg mt-2 line-through cursor-pointer'>Rs.{shirt.oldPrice.toLocaleString("en-PK")} PKR</p>
                    <div className='text-red-600 flex items-center gap-2 cursor-pointer text-sm md:text-base lg:text-lg font-medium'>Rs.{shirt.newPrice.toLocaleString("en-PK")} PKR <p className='bg-red-600 text-white xl:px-3 lg:px-3 px-2 xl:text-[15px] lg:text-[15px] text-[10px] xl:pt-1 lg:pt-1 pt-[2px] xl:pb-[5px] lg:pb-[5px] pb-[2px] rounded cursor-text hidden md:flex'>(-20%)</p></div>
                    <div className='flex gap-1'>
                        {shirt.variants.map((variant, index) => (
                            <div key={index} className={`${variant.icon} w-[30px] h-[30px] mt-3 rounded-full cursor-pointer border-[1.4px] p-[2px] border-gray-300`}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setActive(variant);
                                }}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default LastCateCard