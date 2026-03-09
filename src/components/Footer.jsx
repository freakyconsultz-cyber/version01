
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">f</span>
              </div>
              <span className="text-xl font-bold">freakytourz</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for exploring India's sacred and scenic destinations. Experience comfort, safety, and unforgettable journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  India Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/custom-request" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Custom Request
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
               <li>
                <Link to="/admin/login" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Popular Tours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Char Dham Yatra 2026</li>
              <li>Jaipur Heritage</li>
              <li>Andaman Islands</li>
              <li>Taj Mahal Agra</li>
              <li>Goa Beaches</li>
              <li>Brij Darshan</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                <span>123 Tourist Plaza, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <span>info@freakytourz.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} freakytourz. All rights reserved. | Crafted with ❤️ for travelers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
