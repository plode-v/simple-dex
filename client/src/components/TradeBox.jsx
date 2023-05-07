import { useState } from "react"

const TradeBox = ({placeholder, value, handleChange}) => {

    return (
        <div className="w-1/2 h-[80px] flex items-center justify-between rounded-full my-5">
            <input type="number" className="w-full h-full font-epilogue text-[40px] font-semibold border-none focus:border-none rounded-lg leading-[20px] bg-gray-900 placeholder:text-slate-800" placeholder={placeholder} value={value} onChange={handleChange} />
        </div>
    )
}

export default TradeBox