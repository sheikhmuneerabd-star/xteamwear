import TeamBackgroundImage from '../assets/3manTeam.jpg';

function TeamImage() {

  return (
    <div className='h-[200vh]'>
        <div className='relative'>
          <img className='border-2 border-black w-full h-full object-cover' id='zoomImg' src={TeamBackgroundImage} alt="" />
          <div className='w-[46%] flex flex-col items-center gap-6 absolute top-[78px] right-[10%]'>
            <h1 className='font-medium text-white border-b w-fit'>CREATE TEAM UNIFORMS</h1>
            <span className='font-bold text-[30px] text-center text-white'>Trusted by more than 1 million teams worldwide | Focusing on customized jerseys for 10 years</span>
            <p className='text-white text-sm font-medium'>「2-3 days for sample → 6-14 days for quick delivery | Minimum order quantity: 1 set」</p>
            <button className='border-[2px] rounded text-white text-sm px-7 mt-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 font-medium transition-all duration-200 hover:-translate-y-2 py-3 border-white'>SHOP NOW</button>
          </div>
        </div>
    </div>
  )
}

export default TeamImage