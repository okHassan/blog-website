'use client'

import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
    const [blogPosts, setBlogPost]: any = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/blog')
            .then(response => response.json())
            .then(data => setBlogPost(data))
            .catch(error => console.error('Error fetching blog posts:', error));
    },[])

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post:any, index: any) => (
                        <BlogCard
                            key={index}
                            id={post?.id}
                            title={post?.title}
                            description={post?.description}
                            imageUrl={post?.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;