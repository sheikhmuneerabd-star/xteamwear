import imageFront from '../assets/shirtsImages/front-shirt.jpg'
import imageBack from '../assets/shirtsImages/back-shirt.jpg'
import blueFront from '../assets/shirtsImages/blueFront.webp'
import blueBack from '../assets/shirtsImages/blueBack.webp'
import blueFrontTo from '../assets/shirtsImages/blueToFront.webp'
import blueBackTo from '../assets/shirtsImages/blueToBack.webp'
import redFront from '../assets/shirtsImages/redFront.webp'
import redBack from '../assets/shirtsImages/redBack.webp'
function ShirtCard() {
    const data = [
    {id: 1, front:imageFront, back:imageBack, color:'GREEN & BLACK'}, 
    {id: 2, front:blueFront, back:blueBack, color:'Grey-Blue'}, 
    {id: 3, front:blueFrontTo, back:blueBackTo, color:'Blue'}, 
    {id: 4, front:redFront, back:redBack, color:'Red'}
    ]
  return (
    <div className='flex flex-wrap w-full gap-4'>
        {data.map((shirt) => (
            <div key={shirt.id} className='group rounded-md shadow-lg shadow-gray-300 xl:w-[23%] md:max-w-[31%] sm:w-[23%] w-full p-4'>
                <div>
                    <div className='cursor-pointer group/img group-hover:-translate-y-2 transition-all duration-300 relative rounded overflow-hidden'>
                        <img className='w-full opacity-100 group-hover/img:opacity-0 transition-opacity duration-700 ease-in-out' src={shirt.front} alt="" />
                        <img className='w-full absolute top-0 left-0 opacity-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out' src={shirt.back} alt="" />
                        <div className='absolute flex flex-col items-end gap-1 right-0 top-0'>
                            <p className='bg-emerald-400 text-white rounded text-center text-[13px] py-[1px] w-[45px]'>New</p>
                            <p className='bg-red-600 text-white rounded text-center text-[13px] py-[1px] w-[78px]'>Sale 20%</p>
                        </div>
                    </div>

                    <div className='pt-4 pl-4 pr-4 pb-0'>
                        <p className='text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300'>Dark Clouds - Custom Soccer Jersey For Men Sublimation FT060109S</p>
                        <p className='text-gray-600 text-[15px] mt-2 line-through cursor-pointer'>Rs.10,068.79 PKR</p>
                        <div className='text-red-600 flex items-center gap-2 cursor-pointer text-[15px] font-medium'>Rs.8,054,48 PKR <p className='bg-red-600 text-white px-3 text-sm pt-1 pb-[5px] rounded cursor-text'>(-20%)</p></div>
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