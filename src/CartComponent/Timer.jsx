import { useEffect, useState } from "react"
import { PiWarningCircle } from "react-icons/pi";

function Timer() {
    const [leftTime, setLeftTime] = useState(600);

    useEffect(() => {
        let interval = setInterval(() => {
            setLeftTime(prev => prev > 0 ? prev - 1 : 0);
        }, 1000)

        return () => clearInterval(interval);
    }, [leftTime])

    const minutes = Math.floor(leftTime / 60);
    const second = leftTime % 60;
  return (
    <div>
        <div className="md:flex hidden justify-center gap-2 items-center bg-orange-100 h-[50px]">
            <PiWarningCircle className="text-2xl lg:block hidden" />
            <span className="lg:text-sm text-[13px]">Please, hurry! Someone has placed an order on one of the items you have in the cart. We'll keep it for you for <span className="font-medium">{minutes}:{second.toString().padStart(2, "0")}</span> minutes.</span>
        </div>
    </div>
  )
}

export default Timer