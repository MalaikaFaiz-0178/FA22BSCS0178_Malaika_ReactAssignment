import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-2xl shadow w-full max-w-md"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Contact Us
        </h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="border p-2 w-full mb-3 rounded"
          placeholder="Message"
          rows="4"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
          Send Message
        </button>

      </form>

    </div>
  );
}