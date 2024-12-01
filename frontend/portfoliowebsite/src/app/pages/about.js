import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 text-lg">
          Hi, I'm [Your Name], a passionate developer specializing in [your
          skills or field of expertise]. I enjoy building innovative
          applications and solving challenging problems.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          With experience in [specific technologies or tools], I have worked on
          projects ranging from [type of projects] to [another type of project].
          My goal is to create impactful solutions that make a difference.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
