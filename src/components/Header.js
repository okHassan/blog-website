'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")))
            setLogin(true)
        }
    }, [])

    const logout = (e) => {
        localStorage.removeItem("user")
        setLogin(false)
        window.location.href = "/"
    }

    return (
        <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>

                {login ? <div className='flex items-center'>
                    <div className='flex items-center gap-10 mr-6'>
                    <Link href="/" className="text-gray-800 hover:text-gray-600 font-extrabold">Home</Link>
                    <Link href="/blog" className="text-gray-800 hover:text-gray-600 font-extrabold">Blog</Link>
                    </div>
                    <div className="flex items-center">
                        <p className='mr-2'>{user?.name}</p>
                        <div className="w-10 h-10 rounded-full bg-red-500 mx-5 flex justify-center items-center" >
                            <p className='text-white font-bold'>{user?.name.charAt(0)}</p>
                        </div>
                    </div>
                    <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Logout</button>
                </div> : <div className='space-x-11'>
                    <Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                    <Link href="blog" className="text-gray-800 hover:text-gray-600">Blog</Link>
                    <Link href="login" className="text-gray-800 hover:text-gray-600">Login</Link>
                    <Link href="register" className="text-gray-800 hover:text-gray-600">Register</Link>
                </div>
                }
            </div>
        </header>
    )
}

export default Header