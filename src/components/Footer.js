import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className="text-blue-400 hover:text-blue-600">Privacy Policy</a> | 
                    <a href="/terms-of-service" className="text-blue-400 hover:text-blue-600"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;