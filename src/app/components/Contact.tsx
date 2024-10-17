import React from "react";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // form submission logic
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#08090A] via-[#022027] to-[#060606]">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-10"
        src="/tiger.png"
        alt="Decorative Tiger"
      />
      <div className="relative z-10 flex flex-col items-center w-full max-w-md mx-auto p-6">
       <h1 className="text-4xl text-white text-center mb-10 border border-green-200 p-2 shadow-md shadow-green-500 rounded-xl">Contact Me</h1>
        <form
          className="flex flex-col w-full bg-[#00696d4f] p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            className="mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40e2e7]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40e2e7]"
            required
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="mb-4 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40e2e7]"
            required
          ></textarea>
          <button
            type="submit"
            className="h-10 bg-[#40e1e76b] text-white rounded hover:bg-[#2b9094] transition duration-200"
          >
            Send
          </button>
        </form>
        <p className="text-gray-300 mt-4 text-center">
          We'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Contact;
