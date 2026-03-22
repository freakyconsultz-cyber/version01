import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  CreditCard,
  Wallet,
  ShieldCheck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-gray-300 mt-12 rounded-t-2xl">

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-6 gap-10">

        {/* LOGO + BRAND */}
        <div>
          <img src="https://freakytourz.com/freakytourz-logo.png" alt="FreakyTourz" className="h-12 mb-3" />

          <p className="text-pink-400 text-xs tracking-widest mb-3">
            TRAVEL EXPERIENCES, NOT JUST TRIPS
          </p>

          <p className="text-sm text-gray-400 leading-relaxed">
            Discover curated travel experiences across India — from spiritual
            journeys and mountain adventures to beaches, road trips and more.
          </p>

          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <div key={i} className="w-9 h-9 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center">
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-l-4 border-pink-500 pl-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">All Packages</Link></li>
            <li><Link to="/blog">Travel Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* TRAVEL EXPERIENCES */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-l-4 border-pink-500 pl-3">
            Travel Experiences
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Mountain Trips</li>
            <li>Beach Vacations</li>
            <li>Road Trips</li>
            <li>Couple Trips</li>
            <li>Solo Trips</li>
            <li>Spiritual Yatra</li>
            <li>Family Tours</li>
          </ul>
        </div>

        {/* TOP DESTINATIONS */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-l-4 border-pink-500 pl-3">
            Top Indian Tour Packages
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/chardham-yatra-packages">Char Dham Yatra</Link></li>
            <li><Link to="/jaipur-tour-packages">Jaipur Tour Packages</Link></li>
            <li><Link to="/goa-tour-packages">Goa Tour Packages</Link></li>
            <li><Link to="/kerala-tour-packages">Kerala Tour Packages</Link></li>
            <li><Link to="/himachal-tour-packages">Himachal Tour Packages</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-l-4 border-pink-500 pl-3">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/packages">Train Booking</Link></li>
            <li><Link to="/cab-booking">Cab Booking</Link></li>
            <li><Link to="/bike-rentals">Bike Rentals</Link></li>
            <li><Link to="/hotel-booking">Hotel Booking</Link></li>
            <li><Link to="/flight-booking">Flight Booking</Link></li>
            <li><Link to="/corporate-tours">Corporate Tours</Link></li>
            <li><Link to="/custom-request">Custom Itineraries</Link></li>
          </ul>
        </div>

        {/* POPULAR SEARCHES */}
        <div>
          <h4 className="text-white font-semibold mb-4 border-l-4 border-pink-500 pl-3">
            Popular Searches
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/chardham-yatra-packages">Char Dham Yatra 2026</Link></li>
            <li><Link to="/kedarnath-tour-packages">Kedarnath Helicopter</Link></li>
          </ul>
        </div>

      </div>

      {/* SEO TEXT */}
      <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto mt-2 px-4">
        Book curated travel experiences across India including Char Dham Yatra, Goa, Jaipur, Kerala and more with trusted local experts.
      </p>

      {/* TRUST STRIP */}
      <div className="text-center text-xs text-gray-400 mt-4">
        Trusted by 5000+ Travelers • Local Experts • 24×7 Support
      </div>

      {/* PAYMENT ICONS */}
      <div className="flex justify-center gap-6 text-gray-400 mt-4">
        <div className="flex items-center gap-2">
          <CreditCard size={18} />
          <span className="text-xs">Cards</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet size={18} />
          <span className="text-xs">UPI / Wallets</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} />
          <span className="text-xs">Secure</span>
        </div>
      </div>

      {/* WHATSAPP CTA */}
      <div className="flex justify-center mt-4">
        <a
          href="https://wa.me/917017735435"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-2 rounded-full text-sm hover:bg-green-600"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-6 pt-4 pb-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="https://freakytourz.com/freakytourz-logo.png" className="h-6 opacity-70" alt="logo" />
          <p>© {new Date().getFullYear()} FreakyTourz</p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center mt-2 md:mt-0">
          <Link to="/sitemap">Sitemap</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
