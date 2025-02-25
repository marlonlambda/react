import React from 'react'

export const ListaProductos = ({ productos }) => {
  return (
    <ul className='p-2'>
        {
            productos?.map( producto =>(
                <li key={ producto.id }>
                    Nombre: { producto.nombre } 
                    Precio: { producto.precio }
                </li>
            ))
        }
    </ul>
  )
}
