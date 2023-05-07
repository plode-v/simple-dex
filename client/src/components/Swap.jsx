import { useState } from 'react'
import { Switch, TradeBox } from "./"

const Swap = () => {

    const [visible, setVisible] = useState(false)
    const [amountOne, setAmountOne] = useState(null)

    const handleChangeOne = (e) => {
        setAmountOne(e.target.value)
    }

    const handleModal = () => {
        setVisible(!visible)
    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='sm:w-1/2 sm:h-2/3 w-3/4 h-1/2 rounded-xl flex flex-col from-slate-800 to-slate-900 bg-gradient-to-bl'>
                <div className='flex w-full justify-between h-min p-5 font-epilogue'>
                    <h4 className='text-[#F1F6F9] font-semibold'>Settings</h4>
                    <span className='text-[#9BA4B5] font-semibold cursor-pointer' onClick={handleModal}>Here</span>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <TradeBox 
                        placeholder="0"
                        value={amountOne}
                        onChange={handleChangeOne}
                    />
                    <Switch />
                    <TradeBox 
                        placeholder="0"
                    />
                </div>
            </div>
        </div>
    )
}

export default Swap