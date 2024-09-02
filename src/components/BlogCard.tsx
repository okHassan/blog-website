'use client'

import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
    id: any;
    title: string;
    description: string;
    imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pb-5">

            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link href={`/blog/${id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-300">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;