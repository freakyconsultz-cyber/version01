import { Phone, Mail, MessageCircle, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ravi Sharma",
    city: "Delhi",
    text: "Our Char Dham Yatra was perfectly organized. Hotels and travel were seamless."
  },
  {
    name: "Sunita Verma",
    city: "Jaipur",
    text: "Very smooth journey. The support team helped us throughout the yatra."
  },
  {
    name: "Mahesh Gupta",
    city: "Lucknow",
    text: "Best travel experience for Char Dham. Everything was well managed."
  },
  {
    name: "Anita Desai",
    city: "Ahmedabad",
    text: "Felt safe and comfortable during the entire pilgrimage."
  },
  {
    name: "Vikram Singh",
    city: "Delhi",
    text: "Highly recommended for anyone planning Char Dham Yatra."
  }
];

function SupportSidebar() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (

    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">

      {/* Header */}
      <div className="mb-4">

        <h3 className="font-semibold text-lg text-[#b8336a]">
          Need Help Planning?
        </h3>

        <p className="text-sm text-gray-500">
          Our travel experts are available to assist you instantly.
        </p>

        {/* Urgency */}
        <p className="text-xs text-orange-600 mt-1 font-medium">
          ⚡ Limited seats for 2026 Yatra — secure your slot early
        </p>

      </div>

      {/* Contact Options */}
      <div className="space-y-3">

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border px-4 py-3 hover:bg-green-50 transition"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">
              WhatsApp Us
            </span>
          </div>

          <span className="text-sm font-semibold text-green-600">
            Chat Now
          </span>
        </a>

        <a
          href="tel:+919999999999"
          className="flex items-center justify-between rounded-lg border px-4 py-3 hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-[#b8336a]" />
            <span className="text-sm font-medium text-gray-700">
              Call Us
            </span>
          </div>

          <span className="text-sm font-semibold text-[#b8336a]">
            +91 99999 99999
          </span>
        </a>

        <a
          href="mailto:info@freakytourz.com"
          className="flex items-center justify-between rounded-lg border px-4 py-3 hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Email Support
            </span>
          </div>

          <span className="text-sm font-semibold text-gray-700">
            Send Mail
          </span>
        </a>

      </div>

      {/* Trust */}
      <p className="text-xs text-gray-400 mt-4 text-center">
        ⭐ Trusted by 500+ yatris every season
      </p>

      {/* Testimonials */}
      <div className="mt-5 pt-4 border-t">

        <h4 className="text-sm font-semibold text-gray-700 mb-2">
          What Our Travelers Say
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed">
          “{t.text}”
        </p>

        <div className="flex items-center justify-between mt-3">

          <span className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700">{t.name}</span>
            {" · "}
            {t.city}
          </span>

          <div className="flex text-yellow-500">
            <Star className="w-3 h-3 fill-yellow-400" />
            <Star className="w-3 h-3 fill-yellow-400" />
            <Star className="w-3 h-3 fill-yellow-400" />
            <Star className="w-3 h-3 fill-yellow-400" />
            <Star className="w-3 h-3 fill-yellow-400" />
          </div>

        </div>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-sm text-gray-600 mb-3">
          Still not satisfied or need a custom package?
        </p>

        <a
          href={`/custom-request`}
          className="block text-center bg-primary text-white py-3 rounded-lg font-semibold"
        >
          Plan My Trip
        </a>
      </div>

    </div>

  );
}

export default SupportSidebar;