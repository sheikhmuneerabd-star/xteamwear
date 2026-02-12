import imageShirt from '../assets/factoryCardImage/shirt.webp';
import qsp from '../assets/factoryCardImage/quick-sample-production.webp';
import osm from '../assets/factoryCardImage/one-set-minimum.webp';
import wwd from '../assets/factoryCardImage/world-wide-delivery.webp';
import ed from '../assets/factoryCardImage/expert-designers.webp';
function FactoryCard() {
  return (
    <div className='flex p-10 gap-4'>
        <div className='border group hover:border-black cursor-pointer transition-all overflow-hidden duration-200 rounded-md space-y-2 w-fit text-center'>
            <img className='pt-2 hover:scale-105 transition-all duration-700' src={imageShirt} alt="" />
            <div className='pb-2'>
                <h2 className='text-[17.5px] group-hover:text-blue-600 transition-all duration-200 group-hover:underline'>Sublimation printing and dyeing . No fading</h2>
                <span className='text-gray-700 text-[13px]'>Vibrant one-piece molding, washable, high-freguency jerseys stay looking brand new for longer.</span>
            </div>
        </div>
        <div className='border group hover:border-black cursor-pointer transition-all overflow-hidden duration-200 rounded-md space-y-2 w-fit text-center'>
            <img className='pt-2 hover:scale-105 transition-all duration-700' src={qsp} alt="" />
            <div className='pb-2'>
                <h2 className='text-[17.5px] group-hover:text-blue-600 transition-all duration-200 group-hover:underline'>Quick sample production in 2-3 days</h2>
                <span className='text-gray-700 text-[13px]'>Vibrant one-piece molding, washable, high-freguency jerseys stay looking brand new for longer.</span>
            </div>
        </div>
        <div className='border group hover:border-black cursor-pointer transition-all overflow-hidden duration-200 rounded-md space-y-2 w-fit text-center'>
            <img className='pt-2 hover:scale-105 transition-all duration-700' src={osm} alt="" />
            <div className='pb-2'>
                <h2 className='text-[17.5px] group-hover:text-blue-600 transition-all duration-200 group-hover:underline'>One-set minimum order for flexibility.</h2>
                <span className='text-gray-700 text-[13px]'>Vibrant one-piece molding, washable, high-freguency jerseys stay looking brand new for longer.</span>
            </div>
        </div>
        <div className='border group hover:border-black cursor-pointer transition-all overflow-hidden duration-200 rounded-md space-y-2 w-fit text-center'>
            <img className='pt-2 hover:scale-105 transition-all duration-700' src={wwd} alt="" />
            <div className='pb-2'>
                <h2 className='text-[17.5px] group-hover:text-blue-600 transition-all duration-200 group-hover:underline'>Worldwide delivery . 7-15 days</h2>
                <span className='text-gray-700 text-[13px]'>Vibrant one-piece molding, washable, high-freguency jerseys stay looking brand new for longer.</span>
            </div>
        </div>
        <div className='border group hover:border-black cursor-pointer transition-all overflow-hidden duration-200 rounded-md space-y-2 w-fit text-center hidden xl:block'>
            <img className='pt-2 hover:scale-105 transition-all duration-700' src={ed} alt="" />
            <div className='pb-2'>
                <h2 className='text-[17.5px] group-hover:text-blue-600 transition-all duration-200 group-hover:underline'>Expert designers for diverse needs</h2>
                <span className='text-gray-700 text-[13px]'>Vibrant one-piece molding, washable, high-freguency jerseys stay looking brand new for longer.</span>
            </div>
        </div>
    </div>
  )
}

export default FactoryCard