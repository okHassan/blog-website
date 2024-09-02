import React from "react";
import Hero from '@/components/Hero'
import BlogSection from '@/components/BlogSection'; // Import the BlogSection component


export default function Home() {
    return (
        <React.Fragment>
            <Hero />
           <BlogSection />
        </React.Fragment>
    );
}
