import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold text-[#131d3b]">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#ff4f01] focus:ring focus:ring-[#ff4f01] focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#ff4f01] focus:ring focus:ring-[#ff4f01] focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-[#ff4f01] focus:ring focus:ring-[#ff4f01] focus:ring-opacity-50"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#ff4f01] text-white font-semibold rounded hover:bg-[#ff5d1c]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
