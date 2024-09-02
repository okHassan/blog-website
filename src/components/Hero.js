'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const Hero = () => {
    const router = useRouter();

    const handleclick = () => {
        if(localStorage.getItem('user')){
            router.push('/create-blog');
        } else {
            router.push('/login');
        }
    }

    return (
        <section className="hero min-h-[80vh] flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl mb-8">We are glad to have you here. Explore our content and enjoy your stay!</p>
            <button onClick={handleclick} className="px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-700 transition duration-300">
                Create Blog
            </button>
        </section>
    );
};

export default Hero;