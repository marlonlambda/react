import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const Contador = () => {
    const { increment, decrement, counter } = useCounter(1)

    return (
        <div className='flex justify-end w-full gap-1'>
            <button className='flex justify-center items-center w-6 bg-black rounded-full text-white cursor-pointer' onClick={() => increment(1)}>
                +
            </button>
            { counter }
            <button className='flex justify-center items-center w-6 bg-black rounded-full text-white cursor-pointer' onClick={() => decrement(1)}>
                -
            </button>
        </div>
    )
}
