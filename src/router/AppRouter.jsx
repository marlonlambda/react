import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../ui/components/layout/Layout'
import { ListaProductos } from '../modules/ListarProductos/ListaProductos'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />} >
            <Route path='/products' element={<ListaProductos />} />
            <Route path='contacto' element={'<h1>Contacto</h1>'} />
        </Route>
    </Routes>
  )
}
