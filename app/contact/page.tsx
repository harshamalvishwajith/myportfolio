"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ email: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="bg-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Whether it&apos;s a question, a project proposal, or just a friendly
          hello - feel free to reach out. Let&apos;s create something amazing
          together!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="shadow-sm border text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500"
              placeholder="name@example.com"
              required={true}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              className="shadow-sm border text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500"
              placeholder="Let me know how I can help you"
              required={true}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg sm:w-fit focus:ring-4 focus:outline-none bg-blue-300 hover:bg-blue-700 focus:ring-blue-800"
          >
            Send message
          </button>
          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
