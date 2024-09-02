'use client'

import axios from 'axios';
import React, { useState } from 'react';
import axiosInstance from '@/api/api'
import Link from 'next/link';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        let res = await axiosInstance.post('/user', { name, email, password });

        if (res.status === 201 || res.status === 200) {
            alert('Register Successfully');
            localStorage.setItem('user', JSON.stringify(res.data));

            window.location.href = '/';

        } else {
            alert('Register Failed');
        }
        
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-[length:600%_600%] animate-gradient-animation">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-105">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;