'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Post = () => {
    const params = useParams();
    const { id } = params;
    const [blogPost, setBlogPost]: any = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/blog/${id}`)
            .then(response => response.json())
            .then(data => setBlogPost(data))
            .catch(error => console.error('Error fetching blog posts:', error));
    },[])
    return (
        <div className="max-w-4xl mx-auto p-5 hero flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">{blogPost?.title}</h1>
            <div className="text-gray-300 mb-4 text-center">
                <span>By <span className="font-extrabold text-green-600">{blogPost?.author}</span></span>
            </div>
            <img className="w-full mb-4 rounded-lg" src={blogPost?.image} alt={blogPost?.title} />
            <div className="text-lg leading-relaxed text-gray-300">
                {blogPost?.description?.split('\n').map((paragraph:any, index:any) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default Post