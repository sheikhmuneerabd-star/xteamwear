import imageFront from '../assets/shirtsImages/front-shirt.jpg'
import imageBack from '../assets/shirtsImages/back-shirt.jpg'
import blueFront from '../assets/shirtsImages/blueFront.webp'
import blueBack from '../assets/shirtsImages/blueBack.webp'
import blueFrontTo from '../assets/shirtsImages/blueToFront.webp'
import blueBackTo from '../assets/shirtsImages/blueToBack.webp'
import redFront from '../assets/shirtsImages/redFront.webp'
import redBack from '../assets/shirtsImages/redBack.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function ShirtCard() {
    const data = [
    {id: 1, front:imageFront, back:imageBack, color:'GREEN & BLACK'}, 
    {id: 2, front:blueFront, back:blueBack, color:'Grey-Blue'}, 
    {id: 3, front:blueFrontTo, back:blueBackTo, color:'Blue'}, 
    {id: 4, front:redFront, back:redBack, color:'Red'}
    ]
    
    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".shirt", {
        y: 100,
        duration:0.9,
        opacity:0,
        stagger:0.4,
        delay:0.3,
        scrollTrigger:{
            trigger:".shirt",
            scroll:"body",
            scrub:1,
            once: true,
            start: "top 80%",
            end:"top 30%"
        }
        })
    }, []);

  return (
    <div className='shirt grid grid-cols-1 min-[375px]:grid-cols-2 min-[475px]:grid-cols-2 min-[768px]:grid-cols-3 min-[1024px]:grid-cols-4 min-[1440px]:grid-cols-4 w-full gap-4'>
        {data.map((shirt) => (
            <div key={shirt.id} className='group rounded-md shadow-lg shadow-gray-300 p-4'>
                <div>
                    <div className='cursor-pointer group/img group-hover:-translate-y-2 transition-all duration-300 relative rounded aspect-[4/5] overflow-hidden'>
                        <img className='w-full h-full object-cover opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={shirt.front} alt="" />
                        <img className='w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out' src={shirt.back} alt="" />
                        <div className='absolute flex flex-col items-end gap-1 right-0 top-0'>
                            <p className='bg-emerald-400 text-white rounded text-center xl:text-[13px] lg:text-[13px] text-[10px] xl:py-[1px] lg:py-[1px] py-0 xl:w-[42px] lg:w-[42px] w-[34px]'>New</p>
                            <p className='bg-red-600 text-white rounded text-center xl:text-[13px] lg:text-[13px] text-[11px] py-[1px] xl:w-[78px] lg:w-[78px] w-[62px]'>Sale 20%</p>
                        </div>
                    </div>

                    <div className='md:pt-4 md:pl-4 md:pr-4 pt-3 pl-2 pb-0'>
                        <p className='text-sm md:text-base lg:text-lg line-clamp-2 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300'>Dark Clouds - Custom Soccer Jersey For Men Sublimation FT060109S</p>
                        <p className='text-gray-600 text-sm md:text-base lg:text-lg mt-2 line-through cursor-pointer'>Rs.10,068.79 PKR</p>
                        <div className='text-red-600 flex items-center gap-2 cursor-pointer text-sm md:text-base lg:text-lg font-medium'>Rs.8,054,48 PKR <p className='bg-red-600 text-white xl:px-3 lg:px-3 px-2 xl:text-[15px] lg:text-[15px] text-[10px] xl:pt-1 lg:pt-1 pt-[2px] xl:pb-[5px] lg:pb-[5px] pb-[2px] rounded cursor-text hidden md:flex'>(-20%)</p></div>
                        <div>
                            <div className='w-[30px] mt-3 rounded-full cursor-pointer border-[1.4px] p-[2px] border-gray-300'>
                                <img className='rounded-full' title={shirt.color} src={shirt.front} alt="dark-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ShirtCard