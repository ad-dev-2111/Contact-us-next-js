'use client'
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null); // State to hold submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null); // Reset status before submission

    try {
      const response = await fetch('https://www.greatfrontend.com/api/questions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response.ok) {
        console.log('Success');
        setStatus('Message sent successfully!'); // Update status on success

        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.'); // Update status on error
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message. Please try again.'); // Update status on error
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border border-gray-300 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
      {status && (
        <div className="mt-4 text-center">
          <p className={`text-lg ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;