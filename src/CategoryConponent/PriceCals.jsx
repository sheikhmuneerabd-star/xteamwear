import { Range } from "react-range";
import { useState } from "react";

function PriceCals() {
    const [values, setValues] = useState([0, 180]);
  return (
    <div className="p-4 mt-6">
        <h1 className='font-medium text-[15px] border-b pb-2 border-gray-600'>PRICE</h1>
        <div className="w-[200px] mt-9">
        
        <Range
            step={1}
            min={0}
            max={180}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
            <div
                {...props}
                className="h-2 bg-black rounded"
                style={{ ...props.style }}
            >
                {children}
            </div>
            )}
            renderThumb={({ props }) => {
                const { key, ...rest } = props;
                <div
                    key={key}
                    {...rest}
                    className="h-5 w-5 bg-white border-2 border-black rounded-full"
                />
            }}
        />

        <div className="flex items-center gap-4 mt-6">
            <div className="relative">
                <span className="absolute top-3 left-[7px]">$</span>
                <input
                type="text"
                value={values[0]}
                className="border p-2 text-end w-20 h-[50px] rounded-md border-gray-600 outline-none"
                onChange={(e) => {
                        let val = Number(e.target.value);
                        if(val > 180){
                            val = 180
                        }
                        if(val < 0){
                            val = 0
                        }
                        if(val < values[1]){
                            setValues([val, values[1]])
                        }
                    }}
                />
            </div>
            <span>to</span>
            <div className="relative">
                <span className="absolute top-3 left-[7px]">$</span>
                <input
                    type="text"
                    value={values[1]}
                    className="border text-end p-2 w-20 h-[50px] rounded-md border-gray-600 outline-none flex justify-between"
                    onChange={(e) => {
                        let val = e.target.value;
                        if(val === "" || Number(val) === 0){
                            setValues([values[0], 180]);
                            return;
                        }

                        val = Number(val);

                        if(val > 180){
                            val = 180
                        }
                        if(val > values[0]){
                            setValues([values[0], val])
                        }
                    }}
                />
            </div>
        </div>

        </div>
        <button className='rounded text-sm md:w-[210px] w-[280px] md:h-[45px] h-[42px] mt-5 border-yellow-400 hover:bg-yellow-400 border text-black font-medium transition-all duration-200 hover:-translate-y-1'>APPLY</button>
    </div>
  )
}

export default PriceCals