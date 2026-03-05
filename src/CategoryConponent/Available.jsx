import React from 'react'

function Available() {
  return (
    <div className='p-4 space-y-5 mt-6'>
        <h1 className='font-medium text-[15px] border-b pb-2 border-gray-600'>AVAILABILITY (1)</h1>
        <div className='flex flex-col gap-2'>
            <label className='flex items-center gap-2'>
                <input className='w-4 h-4 border border-gray-300 accent-black rounded-md checked:bg-black checked:border-black text-white' type="checkbox" />
                <span className='text-[15px]'>In Stock(3244)</span>
            </label>
            <label className='flex items-center gap-2'>
                <input className='w-4 h-4 border border-gray-300 accent-black rounded-md checked:bg-black checked:border-black text-white' type="checkbox" />
                <span className='text-[15px]'>Out Of Stock(14)</span>
            </label>
            <span className="text-sm text-gray-600 underline cursor-pointer">Clear All</span>
        </div>
    </div>
  )
}

export default Available