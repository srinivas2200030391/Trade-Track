"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons
import { useTheme } from "next-themes"; // Import useTheme hook

const Footer = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <footer
      className={`py-10 mt-10 ${
        theme === "dark"
          ? "bg-gradient-to-br from-black to-gray-800 text-white"
          : "bg-white text-black"
      }`}>
      <div className="container mx-auto px-4">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links Section */}
          <div>
            <h3
              className={`font-semibold text-xl mb-4 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <p
                    className={`hover:${
                      theme === "dark" ? "text-cyan-400" : "text-blue-500"
                    }`}>
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <p
                    className={`hover:${
                      theme === "dark" ? "text-cyan-400" : "text-blue-500"
                    }`}>
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <p
                    className={`hover:${
                      theme === "dark" ? "text-cyan-400" : "text-blue-500"
                    }`}>
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3
              className={`font-semibold text-xl mb-4 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}>
              Follow Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl hover:${
                  theme === "dark" ? "text-cyan-400" : "text-blue-500"
                }`}>
                <FaTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl hover:${
                  theme === "dark" ? "text-cyan-400" : "text-blue-500"
                }`}>
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl hover:${
                  theme === "dark" ? "text-cyan-400" : "text-blue-500"
                }`}>
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl hover:${
                  theme === "dark" ? "text-cyan-400" : "text-blue-500"
                }`}>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3
              className={`font-semibold text-xl mb-4 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}>
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with our latest news and updates.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-black w-full md:w-64 mb-4"
              />
              <button
                type="submit"
                className={`${
                  theme === "dark" ? "bg-cyan-500" : "bg-blue-500"
                } text-white px-6 py-2 rounded-md hover:${
                  theme === "dark" ? "bg-cyan-400" : "bg-blue-400"
                } transition duration-300`}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Trade Track. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
