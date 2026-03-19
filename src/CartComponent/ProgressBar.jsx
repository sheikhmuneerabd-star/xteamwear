import { useState } from "react";

function ProgressBar() {
  const target = 150;
  const [cartTotal, setCartTotal] = useState(8.58);

  const remaining = (target - cartTotal).toFixed(2);
  const progress = Math.min((cartTotal / target) * 100, 100);

  return (
    <div className="w-full py-4">
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden relative">
        
        {/* Filled Part */}
        <div
          className="bg-red-500 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Truck Icon */}
        <div
          className="absolute top-[-10px] text-red-500 transition-all duration-500"
          style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
        >
            🚚
        </div>
      </div>

      {/* Text */}
      <p className="text-sm mt-2 text-gray-700">
        Only <span className="font-semibold">${remaining} USD</span> away from Free Shipping
      </p>

      {/* Demo Button */}
      <button
        onClick={() => setCartTotal(cartTotal + 20)}
        className="mt-3 px-4 py-1 bg-black text-white rounded"
      >
        Add $20
      </button>
    </div>
  );
}

export default ProgressBar