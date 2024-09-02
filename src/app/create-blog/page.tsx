'use client'

import axiosInstance from '@/api/api';
import React, { useState } from 'react';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        const reader: any = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        let data = new Object();
        data = {
            author: JSON.parse(localStorage.getItem("user") as string).name,
            title: title,
            description: description,
            image: image,
        };

        let res = await axiosInstance.post('/blog', data);

        if (res.status === 201 || res.status === 200) {
            alert('blog created successfully');
            window.location.href = '/blog';
        } else {
            alert('created Failed');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-[length:600%_600%] animate-gradient-animation">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4">Create Blog</h2>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Image</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;