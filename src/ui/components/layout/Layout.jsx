import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <main className="container flex justify-center h-screen mx-auto p-4">
            <Outlet />
        </main>
    </>
  )
}
