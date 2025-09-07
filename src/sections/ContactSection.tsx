import Image from "next/image";
import React from "react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full text-white py-16 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl font-bold mb-4">🚧 Under Construction</h2>
      <p className="mb-8 text-gray-400 max-w-md">
        My website is still under development. In the meantime, you can reach me
        directly through:
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Email */}
        <a
          href="mailto:dimas.ashar1997@gmail.com"
          className="px-6 py-3 flex flex-row gap-2 rounded-xl hover:bg-blue-700 transition-colors"
        >
           <Image
            src="assets/svg/email.svg"
            alt="Coding animation"
            width={16}
            height={16}
          />
          Email
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6282258610776"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 px-6 py-3  rounded-xl hover:bg-green-700 transition-colors"
        >
          <Image
            src="assets/svg/whatsapp.svg"
            alt="Coding animation"
            width={16}
            height={16}
          />
          WhatsApp
        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/dimas-ashar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row gap-2 px-6 py-3 bg-gray rounded-xl hover:bg-blue-600 transition-colors"
        >
          <Image
            src="assets/svg/linkedin.svg"
            alt="Coding animation"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
