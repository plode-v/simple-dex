import { useState } from "react"

const TradeBox = ({placeholder, value, handleChange}) => {

    return (
        <div className="w-2/3 h-[45px] sm:w-1/2 sm:h-[80px] flex items-center justify-between rounded-full my-5">
            <input type="number" className="w-full h-full font-epilogue text-[30px] sm:text-[40px] font-semibold border-none focus:outline-none rounded-lg bg-gray-900 text-slate-300 placeholder:text-slate-600 pl-2" placeholder={placeholder} value={value} onChange={handleChange} min="0" />
        </div>
    )
}

export default TradeBox