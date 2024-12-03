//import React from "react";
//import Header from "../src/app/components/Header";
//import Footer from "../src/app/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-600 text-lg">
          I'd love to hear from you! Whether you have a question, a project idea,
          or just want to say hello, feel free to reach out.
        </p>
        <div className="mt-6">
          <p className="text-gray-800 text-lg">
            <strong>Email:</strong> your.email@example.com
          </p>
          <p className="text-gray-800 text-lg mt-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-800 text-lg mt-2">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/yourusername/
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
