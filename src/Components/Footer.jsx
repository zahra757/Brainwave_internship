import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // For social media icons

export default function Footer() {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: contact@example.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Address: 123 Main St, City, Country</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="text-sm hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-blue-400">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full rounded-md text-black"
              />
              <button
                type="submit"
                className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>


    </div>
  )
}
