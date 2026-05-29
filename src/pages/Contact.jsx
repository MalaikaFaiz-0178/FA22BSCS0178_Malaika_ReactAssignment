import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${formData.name}! We will reply soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 p-8 flex items-center justify-center">
      <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm max-w-md w-full">
        
        {/* FORM TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Please fill out the form below to get in touch with us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* NAME INPUT */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* EMAIL INPUT */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@mail.com"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* MESSAGE INPUT */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Message
            </label>
            <textarea
              required
              rows="4"
              placeholder="Write your message here..."
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold text-sm py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow cursor-pointer uppercase"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}