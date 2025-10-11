import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-2">We would love to hear from you!</p>
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input className="border rounded w-full py-2 px-3" type="text" id="name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input className="border rounded w-full py-2 px-3" type="email" id="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea className="border rounded w-full py-2 px-3" id="message" rows="4" required></textarea>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;