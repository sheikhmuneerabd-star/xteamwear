import whatsapp from '../assets/whatsapp/WhatsApp.svg';

function WhatsApp() {
  return (
    <div className='relative'>
        <div className='fixed z-50 bottom-5 left-5 hover:scale-125 cursor-pointer transition-all duration-500 w-[65px] h-[65px]'>
            <img className='w-full h-full object-contain drop-shadow-[0_0_12px_rgba(37,211,102,0.9)]' src={whatsapp} alt="Whatsapp" />
        </div>
    </div>
  )
}

export default WhatsApp