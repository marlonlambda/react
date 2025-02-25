import React, { useState } from 'react'

export const Formulario = () => {
    const [inputValue, setInputValue] = useState()

    const onInputChange = ({ target }) => {
        const { value } = target
        setInputValue( value )
    }

    return (
        <div className='flex justify-between items-center w-full bg-black/5 gap-4 p-4 rounded-md border border-black/15 shadow-sm'>
            <div className="flex items-center gap-2">
                <label htmlFor="">Buscar: </label>
                <input className='bg-white text-md outline-none border border-blue-500 focus:border-blue-800 px-2 h-9 p-3 rounded-md' onChange={onInputChange} type="text" name="" id="" />
            </div>
            <div className="flex justify-around items-center gap-4">
                <span className='flex justify-start text-lg font-semibold text-black/80'>Busqueda: </span>
                <span> { inputValue } </span>
            </div>
        </div>
    )
}
