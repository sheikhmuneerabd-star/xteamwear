import { useState } from "react"

function Faqs() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(true);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(true);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(true);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(true);
  return (
    <div className="xl:w-[92%] w-[95%] mx-auto xl:mt-0 mt-16">
        <h1 className="text-[30px] mt-6">FAQ</h1>
        <div className="xl:w-[60%] lg:w-[70%] w-[90%] lg:mt-0 mt-6 mx-auto">
            <h1 className="text-[23px]">Frequently Asked Questions</h1>
            <div className="mt-[50px] space-y-7">
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen1(!open1)}>How long does production take?</h3>
                    <p className={`text-gray-800 text-[14px] ${open1 ? 'flex' : 'hidden'}`}>Production begins within 24 hours after order placement and typically completes within 7 days, depending on order volume.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen2(!open2)}>What is the estimated delivery time?</h3>
                    <p className={`text-gray-800 text-[14px] ${open2 ? 'flex' : 'hidden'}`}>Delivery usually takes 5–7 business days to USA, UK, Canada, Australia; 5–15 business days to other regions. Actual timing depends on local carriers and customs.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen3(!open3)}>Can I cancel or change my order?</h3>
                    <p className={`text-gray-800 text-[14px] ${open3 ? 'flex' : 'hidden'}`}>Cancellations or modifications are accepted within 24 hours of ordering. Once production starts or your item ships, changes cannot be made.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen4(!open4)}>Do you accept returns or refunds?</h3>
                    <p className={`text-gray-800 text-[14px] ${open4 ? 'flex' : 'hidden'}`}>Returns or refunds are granted only if the issue is our mistake (incorrect customization, sizing error, or shipping damage). Custom items cannot be returned otherwise.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen5(!open5)}>How long does production take?</h3>
                    <p className={`text-gray-800 text-[14px] ${open5 ? 'flex' : 'hidden'}`}>Production begins within 24 hours after order placement and typically completes within 7 days, depending on order volume.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen6(!open6)}>What printing method do you use?</h3>
                    <p className={`text-gray-800 text-[14px] ${open6 ? 'flex' : 'hidden'}`}>We use sublimation printing where your design is embedded into the fabric—resulting in vibrant, durable, fade-resistant graphics. :</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen7(!open7)}>Is there a minimum order quantity?</h3>
                    <p className={`text-gray-800 text-[14px] ${open7 ? 'flex' : 'hidden'}`}>There is no minimum order requirement – customization is available from just 1 piece. :contentReference</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen8(!open8)}>Can I request design changes after ordering?</h3>
                    <p className={`text-gray-800 text-[14px] ${open8 ? 'flex' : 'hidden'}`}>Yes—contact us within 24 hours of placing your order. If production hasn’t started, we can apply your requested changes.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen9(!open9)}>Can you produce any custom design?</h3>
                    <p className={`text-gray-800 text-[14px] ${open9 ? 'flex' : 'hidden'}`}>Yes—we create fully bespoke designs tailored to your branding. Upload your artwork and receive a free digital proof before production.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen10(!open10)}>Who is XTeamwear?</h3>
                    <p className={`text-gray-800 text-[14px] ${open10 ? 'flex' : 'hidden'}`}>XTeamwear is an in‑house teamwear manufacturer serving nearly one million teams worldwide. We oversee design, production, and delivery to ensure speed and quality.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="hover:text-orange-400 cursor-pointer w-fit font-medium text-[14px]" onClick={() => setOpen11(!open11)}>How can I contact support?</h3>
                    <p className={`text-gray-800 text-[14px] ${open11 ? 'flex' : 'hidden'}`}>Email us at support@xteamwear.com or message via WhatsApp. We respond within 12 hours (9 AM–6 PM EST, 7 days/week).</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs