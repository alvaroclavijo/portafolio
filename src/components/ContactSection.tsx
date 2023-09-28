import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto text-left mb-4 pl-8">
        <h2 className="text-3xl font-semibold">Contact</h2>
      </div>
      <div className="max-w-5xl mx-auto flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/facebook-icon.png"
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/instagram-icon.png"
            alt="Instagram"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/linkedin-icon.png"
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
