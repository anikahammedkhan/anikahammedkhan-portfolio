import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { toast } from 'react-hot-toast';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('anikahammedkhan', 'anikahammedkhan', form.current, 'LiZE4xNYq8quQzMvB')
            .then((result) => {
                toast.success('Message Sent Successfully!');
                form.current.reset();
            }, (error) => {
                toast.error(error.text);
            });
    };
    return (
        <div className='contact-us block md:flex items-center justify-evenly p-4 md:p-0'>
            <div className='w-full md:w-1/4 lg:w-1/2 my-8 md:my-0' data-aos="fade-right">
                <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold text-sky-400'>Let's Talk</h1>
                <p className='font-bold text-xl md:text-lg lg:text-2xl text-white'>To Request a quote or want to meet-up for a coffee, Contact me directly on What's App or fill out the form and I'will get back to you promptly!</p>
            </div>
            <div className='w-full md:w-1/3 lg:w-1/3 contact-form shadow-2xl' data-aos="fade-down-left">
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label className="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" name="user_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="youremail@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="text" name="user_name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Name" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave your message here..."></textarea>
                    </div>
                    <button type="submit" value="Send" className="py-3 px-5 text-lg font-bold text-center text-white rounded-lg bg-success sm:w-fit hover:bg-green-500 mt-4">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;