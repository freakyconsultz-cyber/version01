import React, { useState } from "react";
import { Helmet } from "react-helmet";
import packages from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import SupportSidebar from "@/components/SupportSidebar";
import FAQAccordion from "@/components/FAQAccordion";
import { Plus, Minus, HelpCircle } from 'lucide-react';

/* FAQ DATA */
const faqData = [
  {
    question: "Which dham should we go to first?",
    answer:
      "The Chardham yatra should be done in a clockwise direction, starting from the Yamunotri temple darshan. Then visit Gangotri temple, then Kedarnath temple, and complete your yatra by visiting Badrinath Dham."
  },
  {
    question: "How many days to complete the 4 dham yatra?",
    answer:
      "The number of days required to complete the 4 Dham yatra depends on your mode of transportation. If you travel by road, it will take around 10-12 days from Haridwar and Rishikesh. Whereas, if you are travelling by helicopter, it will take around 4-5 days."
  },
  {
    question: "How much time does it take for the Char Dham yatra by Helicopter?",
    answer:
      "The chardham yatra is around 5-6 days by helicopter from Dehradun."
  },
  {
    question: "How can I register for Char Dham Yatra 2026?",
    answer:
      "You can register for Chardham 2026 by applying online at registrationandtouristcare.uk.gov.in or Tourist Care Uttarakhand App, WhatsApp at 8394833833, call at toll-free number 0135-1364, or offline at various registration spots around the Chardham circuit."
  },
  {
    question: "How much does a 4 Dham Yatra cost per person?",
    answer:
      "Chardham yatra cost depends on various factors such as travelling style, hotels booked, travel month, transportation mode, and extra costs like temple offerings, shopping, food, and all. On average, the chardham taxi package costs somewhere between Rs. 25,000 to Rs. 55,000, and the helicopter chardham package will cost around Rs. 90,000 to Rs. 1.5 lakhs."
  },
  {
    question: "Can we do the Char Dham Yatra without registration?",
    answer:
      "No, you can't do chardham yatra without registration."
  },
  {
    question: "Is there any registration fee for the 4 Dham Yatra?",
    answer:
      "The registration for the Chardham yatra is free of cost for every visitor. Lately, the Government of Uttarakhand is also proposing to start a registration fee of Rs. 10 or Rs. 20. However, no fee has been finalized till now."
  },
  {
    question: "What is the age limit for Chardham?",
    answer:
      "There is no age minimum or maximum age limitation for the Chardham yatra. However, if your age is beyond 50 years, you are advised to follow all the precautions and healthline advisories."
  },
  {
    question: "How should old age people do Chardham?",
    answer:
      "Old-age people should do the Chardham yatra with careful planning. Adhere to the health advisories, consult your doctors, take precautions, and follow prevention in case of emergencies. View Freakytourz’s Senior-Friendly Chardham Packages."
  },
  {
    question: "Do Dham vs Char Dham Yatra?",
    answer:
      "The Do Dham Yatra (typically Kedarnath-Badrinath or Yamunotri-Gangotri) is a 5-7-day journey, while the Char Dham Yatra (Yamunotri-Gangotri-Kedarnath-Badrinath) is a 10-12-day journey."
  },
  {
    question: "Which month is less crowded for the Chardham Yatra?",
    answer:
      "After the monsoon month, September and October are the least crowded months for the Chardham yatra."
  },
  {
    question: "Can the Chardham Yatra itinerary be customised?",
    answer:
      "Yes, at freakytourz, you can customize your chardham yatra. Just reach out to our team of experts, and we will create the itinerary that you want."
  },
  {
    question: "Which is difficult, Badrinath or Kedarnath?",
    answer:
      "Kedarnath is more difficult. The 16 km Kedarnath trek can challenge your physical strength. On the other hand, Badrinath Dham is well connected by road, and you do not have to walk much."
  },
  {
    question: "How do I book a Chardham Yatra package with Freakytourz?",
    answer:
      "To book the 2026 Chardham Yatra with Freakytourz, select the package you want and either send us a request or book directly from the website. If you want to customize chardham yatra package, you can always reach out to us."
  }
];

/* SCHEMAS */

const touristTripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Char Dham Yatra Package 2026",
  description:
    "Complete Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
  provider: {
    "@type": "TravelAgency",
    name: "FreakyTourz",
    url: "https://freakytourz.com"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://freakytourz.com/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Char Dham Yatra Packages",
      item: "https://freakytourz.com/chardham-yatra-packages/"
    }
  ]
};

function ChardhamListingPage() {

  const [sortBy, setSortBy] = useState("popular");
  const [filterOpen, setFilterOpen] = useState(false);

  // ADD THESE HERE
  const [searchTerm, setSearchTerm] = useState("");
  const [durationFilter, setDurationFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");

  const filteredPackages = packages
  .filter(pkg => pkg.cluster === "Char Dham")

  .filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  .filter(pkg => {
    if (durationFilter === "all") return true;
    return pkg.duration === durationFilter;
  })

  .filter(pkg => {
    if (budgetFilter === "all") return true;
    if (budgetFilter === "low") return pkg.price < 20000;
    if (budgetFilter === "mid") return pkg.price >= 20000 && pkg.price <= 40000;
    if (budgetFilter === "high") return pkg.price > 40000;
    return true;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Helmet>

        {/* META1 SEO */}

        <title>
          Char Dham Yatra Package 2026 | Kedarnath Badrinath Gangotri Yamunotri Tour
        </title>

        <meta
          name="description"
          content="Book Char Dham Yatra Package 2026 with private taxi, hotels and helicopter options. Visit Kedarnath, Badrinath, Gangotri and Yamunotri comfortably with FreakyTourz."
        />

        <meta
          name="keywords"
          content="char dham yatra package 2026, chardham tour package, kedarnath badrinath gangotri yamunotri yatra package, chardham taxi package, chardham helicopter package"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://freakytourz.com/chardham-yatra-packages/"
        />

        <meta property="og:title" content="Char Dham Yatra Package 2026" />
        <meta
          property="og:description"
          content="Complete Char Dham Yatra package covering Yamunotri, Gangotri, Kedarnath and Badrinath."
        />
        <meta
          property="og:url"
          content="https://freakytourz.com/chardham-yatra-packages/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Char Dham Yatra Package 2026" />
        <meta
          name="twitter:description"
          content="Book Char Dham Yatra Package 2026 with taxi, hotels and helicopter options."
        />

        {/* SCHEMAS */}

        <script type="application/ld+json">
          {JSON.stringify(touristTripSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

      </Helmet>

      <div className="bg-background">

        {/* HERO */}

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-6xl">

            <div
              className="relative h-[240px] md:h-[280px] rounded-2xl flex items-center px-8 text-white overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >

              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative max-w-xl">

                <h1 className="text-2xl md:text-4xl font-bold mb-3">
                  Char Dham Yatra Packages 2026
                </h1>

                <p className="text-sm md:text-lg mb-3">
                  Compare Char Dham Yatra packages covering Kedarnath,
                  Badrinath, Gangotri and Yamunotri. 
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-400 text-black px-2 py-1 rounded font-semibold text-sm">
                    4.8 ★
                  </span>
                  <span className="text-sm">Rated by 1200+ travelers</span>
                </div>

                <div className="flex gap-1 flex-wrap text-xs">
                  <span className="bg-white/20 px-2 py-1 rounded-full">5000+ Yatris</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full">Local Experts & 24x7 Support</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full">24×7 Support</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* SEO INTRO */}

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-6xl">

            <div className="max-w-6xl">

              <h2 className="text-2xl font-semibold mb-4">
                Best Char Dham Yatra Packages
              </h2>

              <p className="text-muted-foreground mb-3">
                Char Dham Yatra is one of the most sacred Hindu pilgrimages covering
                Yamunotri, Gangotri, Kedarnath and Badrinath temples in Uttarakhand.
              </p>

              <p className="text-muted-foreground">
                Our Char Dham tour packages include hotels, private taxi travel
                and carefully planned itineraries for a comfortable pilgrimage.
              </p>

            </div>

          </div>
        </section>

        {/* LISTING */}

        <section className="pb-10">
          <div className="container mx-auto px-4 max-w-6xl">

            <div className="grid lg:grid-cols-3 gap-10">

              <div className="lg:col-span-2">

                {/* SEARCH BAR */}

                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Search packages (Kedarnath, helicopter, 9 days...)"
                    className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* FILTER + SORT TOOLBAR */}

                <div className="flex flex-wrap justify-between items-center gap-3 mb-6 bg-white border rounded-xl p-3 shadow-sm">

                  {/* LEFT SIDE */}
                  <div className="flex items-center gap-3">

                    {/* MOBILE FILTER BUTTON */}
                    <button
                      onClick={() => setFilterOpen(true)}
                      className="border px-4 py-2 rounded-lg text-sm lg:hidden"
                    >
                      ☰ Filters
                    </button>

                    {/* DESKTOP FILTERS */}
                    <div className="hidden lg:flex items-center gap-3">

                      {/* DURATION */}
                      <select
                        className="border rounded-full px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition"
                        value={durationFilter}
                        onChange={(e) => setDurationFilter(e.target.value)}
                      >
                        <option value="all">Duration</option>
                        <option value="4 Days">4 Days</option>
                        <option value="6 Days">6 Days</option>
                        <option value="9 Days">9 Days</option>
                      </select>

                      {/* BUDGET */}
                      <select
                        className="border rounded-full px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition"
                        value={budgetFilter}
                        onChange={(e) => setBudgetFilter(e.target.value)}
                      >
                        <option value="all">Budget</option>
                        <option value="low">Below ₹20k</option>
                        <option value="mid">₹20k - ₹40k</option>
                        <option value="high">₹40k+</option>
                      </select>

                    </div>

                  </div>


                  {/* RIGHT SIDE */}

                  <div className="flex items-center gap-3 ml-auto">

                    <span className="text-sm text-gray-500 hidden sm:block">
                      {sortedPackages.length} packages
                    </span>

                    <select
                      className="border rounded-full px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="popular">Most Popular</option>
                      <option value="price-low">Price: Low → High</option>
                      <option value="price-high">Price: High → Low</option>
                    </select>

                  </div>

                </div>

                {/* GRID */}

                <div className="grid md:grid-cols-2 gap-8">

                  {sortedPackages.map((pkg) => (
                    <PackageCard key={pkg.id} package={pkg} />
                  ))}

                </div>

                {/* LONG SEO CONTENT */}

                <section className="py-12 border-t">
                  <div className="container mx-auto px-4 max-w-6xl">
                    
                    <h2 className="text-2xl font-semibold mb-3">
                      Chardham Yatra 2026: What you need to plan
                    </h2>

                    <p className="text-sm text-muted-foreground mb-4">
                      Yamunotri · Gangotri · Kedarnath · Badrinath · Season Opens April 2026
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Chardham Yatra 2026 is set to open in April, and the planning season has already started. The better you understand the Chardham route, the temples, the season, and what to expect on the ground, the more meaningful and seamless your yatra will be.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      As per the officials, 6.179 Lakhs have already registered for Chardham in the first two weeks. Whether you are planning your first yatra or revisiting the holy temples, this chardham yatra guide covers everything you need to know. Use it as your reference point as you plan your Chardham Yatra 2026.
                    </p>


                    <h2 className="text-2xl font-semibold mb-3">
                      What Is Chardham Yatra: Significance and Importance?
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      Char Dham Yatra is one of the holiest pilgrimages in Hindu culture, in which devotees visit four important shrines in Devbhoomi, Uttarakhand. The four temples Kedarnath, Badrinath, Yamunotri, and Gangotri are nestled in the scenic, lush green, and snow-clad Himalayas.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      These holy shrines invite lakhs of devotees every year. In 2025, over 51 lakh pilgrims visited the Chardham temples, with Kedarnath receiving the highest footfall. Owing to the extreme cold weather up in the Himalayas, these spiritual centers remain shut for half the year, that is, for six months. They open every year from mid-April or May and close in October or November near Diwali.
                    </p>

                    <h3 className="text-lg font-medium mb-2">
                      What is the importance of Char Dham Yatra in the Hindu religion?
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      The importance of the Chardham Yatra stems from the spiritual and religious beliefs associated with each of the four temples. In Hinduism, completing Chardham is a way to attain spiritual enlightenment, soul purification, and receive the divine blessings of Goddess Yamuna, Goddess Ganga, Shiva, and Vishnu (the last two deities being the destroyer and protector of the trinity).
                    </p>

                    <p className="text-muted-foreground">
                      The yatra is also a retrospection journey, where devotees feel one with the god and analyze their deeds on this journey called life. As per many beliefs, the four directions are a symbolic representation of the four Vedas and the four stages of human life. Adi Shankaracharya laid the foundation of the philosophical and spiritual importance of the Chardham yatra in the 8th century CE. He is also believed to have attained samadhi at Kedarnath.
                    </p>

                    
                    <h2 className="text-2xl font-semibold mt-8 mb-3">
                      Char Dham Temples: How to Reach, Darshan Timings, and Things to Buy
                    </h2>

                    <p className="text-muted-foreground mb-6">
                      The Chardham yatra should be done in a clockwise direction. As you can see from the map given below, we will have to start our yatra from the sacred temple of Yamnorti, then go to Gangotri, then to Kedarnath, and complete the yatra with Badrinath Dham darshan.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      If you are short of time, you can just do the Do Dham darshan and get the temple's blessing.
                    </p>

                    {/* ================= YAMUNOTRI ================= */}

                    <h3 className="text-lg font-medium mb-2">Yamunotri Temple</h3>

                    <p className="text-muted-foreground mb-4">
                      Yamunotri is the first temple in the holy Char Dham circuit. It is basically a glacier from where the river Yamanu, which is considered the Goddess Yamuna, originates. It is the westernmost shrine and is located at the top of Bandarpunch mountain.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The actual source of the Yamuna River is at Kalind Parvat, which is not accessible, and the Yamunotri temple is located at its foothill.
                    </p>

                    <h4 className="font-medium mb-2">How to Reach Yamunotri Dham?</h4>

                    <p className="text-muted-foreground mb-4">
                      The Yamunotri trek from Janki Chatti is approximately 6 km and takes 3 to 4 hours one way. The route passes through scenic Himalayan terrain alongside the Yamuna River.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      You will also get to see the Bandarpunch mountain range. Pony and palki services are available at Janki Chatti for those who need assistance.
                    </p>

                    <h4 className="font-medium mb-2">
                      Yamunotri temple timings and darshan information 2026
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      The Yamunotri temple daily darshan is available from 6:00 AM to 8:00 PM with a 2-hour break from 12:00 PM to 2:00 PM.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The morning aarti timing is 6:30 AM to 7:30 AM, and the evening aarti is held around 7:30 PM, but it can vary with sunset.
                    </p>

                    <h4 className="font-medium mb-2">Famous things to buy in Yamunotri Dham</h4>

                    <ul className="list-disc pl-5 text-muted-foreground mb-8 space-y-1">
                      <li>Yamuna jal</li>
                      <li>Handwoven woollen shawls</li>
                    </ul>

                    {/* ================= GANGOTRI ================= */}

                    <h3 className="text-lg font-medium mb-2">Gangotri Temple</h3>

                    <p className="text-muted-foreground mb-4">
                      The next shrine on our Char Dham yatra is Gangotri. This place is situated on the banks of the river Bhagirathi, from where the holy Ganges River originates.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The temples reopen every year on Akshaya tritiya and in 2026 Gangotri temple will open on 19th April.
                    </p>

                    <h4 className="font-medium mb-2">How to Reach Gangotri Dham?</h4>

                    <p className="text-muted-foreground mb-4">
                      You can reach Gangotri Dham by road or helicopter. The nearest helipad to Gangotri is Harsil.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Gangotri Dham is directly accessible by road and is 97 km away from Uttarkashi. If you want to visit Gaumukh to see the glacial source of the Ganges, you will have to do an additional 18 km trek from Gangotri.
                    </p>

                    <h4 className="font-medium mb-2">
                      Gangotri temple timings and darshan information 2026
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      The Gangotri temple daily darshan is available from 6:15 AM to 9:00 PM with a 1-hour break from 2:00 PM to 3:00 PM.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The morning aarti timing is 6:00 AM to 7:30 AM, and the evening aarti is held from 6:30 PM to 7:30 PM.
                    </p>

                    <h4 className="font-medium mb-2">Famous things to buy in Gangotri Dham</h4>

                    <ul className="list-disc pl-5 text-muted-foreground mb-8 space-y-1">
                      <li>Gangajal</li>
                      <li>Himalayan honey</li>
                    </ul>

                    {/* ================= KEDARNATH ================= */}

                    <h3 className="text-lg font-medium mb-2">Kedarnath Temple</h3>

                    <p className="text-muted-foreground mb-4">
                      Kedarnath temple is the most remotely located dham of the yatra. It is located near the Chorabari glacier from where the river Mandakini originates.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The temple is said to have been built by the Pandavas and is among the 12 jyotirlingas of Lord Shiva in India. Later, the temple was re-constructed under the guidance of the great philosopher, Adi Shankaracharya.
                    </p>

                    <h4 className="font-medium mb-2">How to reach Kedarnath Dham?</h4>

                    <p className="text-muted-foreground mb-4">
                      You can reach Kedarnath Dham by road or helicopter. If you are coming by helicopter, you can fly from Phata, Guptkashi, or Sirsi.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The helicopter will take just 15 minutes to reach the Kedarnath helipad. To reach Kedarnath by road, you will have to first reach Gaurikund, and then do the 16 km Kedarnath trek.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      This trek will take you around 6 to 10 hours to reach the temple. You can either walk or hire a horse, pony, and palanquin from Gaurikund.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Our chardham travel experts advise you to start early from Gaurikund to reach the temple by afternoon.
                    </p>

                    <h4 className="font-medium mb-2">
                      Kedarnath temple timings and darshan information 2026
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      The Kedarnath temple daily darshan is available from 6:00 AM to 8:30 PM with a 3-hour break from 1:00 PM to 4:00 PM.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The morning aarti timing is 4:30 AM to 6:30 AM, and the evening aarti is held from 7:00 PM to 8:30 PM.
                    </p>

                    <h4 className="font-medium mb-2">Famous things to buy in Kedarnath Dham</h4>

                    <ul className="list-disc pl-5 text-muted-foreground mb-8 space-y-1">
                      <li>Rudraksha malas</li>
                      <li>Vibhuti, or the sacred ash</li>
                      <li>Miniature Kedarnath temple replicas</li>
                    </ul>

                    {/* ================= BADRINATH ================= */}

                    <h3 className="text-lg font-medium mb-2">Badrinath Temple</h3>

                    <p className="text-muted-foreground mb-4">
                      The last temple after which your Char Dham yatra will be completed is Badrinath Dham. As per the saying, it was Adi Shankaracharya who discovered a Shaligram idol of Lord Badrinath (Vishnu) in the Alaknanada river.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      He enshrined it in a cave near Tapt Khud hot spring. Later, the king of Garhwal made a temple where we know it today and shifted the idol there.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The first village of India, Mana, is just 4 km away from Badrinath. This is the place where Vyasa is said to have written the Mahabharata.
                    </p>

                    <h4 className="font-medium mb-2">How to Reach Badrinath Dham?</h4>

                    <p className="text-muted-foreground mb-4">
                      You can reach Badrinath Dham by road or helicopter. If you want to travel to Badrinath by helicopter, you can fly from Dehradun's Shastradhara helipad and land directly at Badrinath helipad in just 30 to 45 minutes.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      Badrinath is well connected by road, so trekking is not a problem. It is approximately 297 km away from Rishikesh and 320 km away from Haridwar.
                    </p>

                    <h4 className="font-medium mb-2">
                      Badrinath temple timings and darshan information 2026
                    </h4>

                    <p className="text-muted-foreground mb-4">
                      The Badrinath temple daily darshan is available from 6:00 AM to 9:00 PM with a 4-hour break from 12:00 PM to 4:00 PM.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The morning ritual starts at 4:30 AM, and the popular Kapoor aarti takes place at around 6:00 AM. The Badrinath temple evening aarti is held between 6:00 PM and 9:00 PM.
                    </p>

                    <h4 className="font-medium mb-2">Famous things to buy in Badrinath Dham</h4>

                    <ul className="list-disc pl-5 text-muted-foreground mb-10 space-y-1">
                      <li>Tulsi Mala</li>
                      <li>Dried herbs</li>
                      <li>Traditional snacks</li>
                      <li>Charnaamrit</li>
                    </ul>

                    {/* ================= TABLE UI ================= */}   
                    
                    <div className="mb-8 border rounded-xl overflow-hidden">

                      {/* Header */}
                      <div className="hidden md:grid md:grid-cols-5 bg-primary/5 font-medium text-sm">
                        <div className="p-3">Chardham Temples</div>
                        <div className="p-3">Primary Deity</div>
                        <div className="p-3">Distance from Haridwar</div>
                        <div className="p-3">Altitude (above sea level)</div>
                        <div className="p-3">Trek Distance</div>
                      </div>

                      {/* Rows */}
                      {[
                        ["Yamunotri", "Goddess Yamuna", "259 km", "3,293 meters", "6 km"],
                        ["Gangotri", "Goddess Ganga", "285 km", "3,100 meters", "0 km"],
                        ["Kedarnath", "Lord Shiva", "255 km", "3,584 meters", "16 km"],
                        ["Badrinath", "Lord Vishnu", "309 km", "3,133 meters", "0 km"],
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="border-t p-4 md:grid md:grid-cols-5 md:p-0 text-sm md:text-sm"
                        >
                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Temple: </span>
                            {row[0]}
                          </div>

                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Deity: </span>
                            {row[1]}
                          </div>

                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Distance: </span>
                            {row[2]}
                          </div>

                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Altitude: </span>
                            {row[3]}
                          </div>

                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Trek: </span>
                            {row[4]}
                          </div>
                        </div>
                      ))}

                    </div>

                    <p className="text-primary font-medium">
                      CTA: View All Chardham Yatra 2026 Packages.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mt-10 mb-3">
                      Best Time to Visit Chardham Yatra 2026: Dates, Season, Weather Guide
                    </h2>

                    <p className="text-muted-foreground mb-4">
                      The chardham yatra season starts from mid-April and closes in October or November. Choosing the right Chardham yatra month has a direct impact on your darshan experience, road journey, and the package cost.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      Let us help you decide the best time for Char Dham Yatra 2026 so that you enjoy a hassle-free and peaceful darshan.
                    </p>


                    <h3 className="text-lg font-medium mb-2">
                      2026 Chardham Yatra Opening and Closing Dates
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      The 2026 Chardham Yatra will start in mid-April 2026. The opening and tentative closing of the Chardham temples are listed below in the table:
                    </p>


                    {/* ================= TABLE UI ================= */}                    
                    
                    <div className="mb-8 border rounded-xl overflow-hidden">

                      {/* Header */}
                      <div className="hidden md:grid md:grid-cols-3 bg-primary/5 font-medium text-sm">
                        <div className="p-3">Shrines</div>
                        <div className="p-3">Dates of Opening</div>
                        <div className="p-3">Date of Closing (Tentative)</div>
                      </div>

                      {/* Rows */}
                      {[
                        ["Yamunotri", "19 April 2026", "October 2026"],
                        ["Gangotri", "19 April 2026", "October 2026"],
                        ["Kedarnath", "22 April 2026", "October 2026"],
                        ["Badrinath", "23 April 2026", "November 2026"],
                      ].map((row, i) => (
                        <div
                          key={i}
                          className="border-t p-4 md:grid md:grid-cols-3 md:p-0 text-sm"
                        >
                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Shrines: </span>
                            {row[0]}
                          </div>

                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Opening: </span>
                            {row[1]}
                          </div>

                          <div className="md:p-3">
                            <span className="md:hidden font-medium">Closing: </span>
                            {row[2]}
                          </div>
                        </div>
                      ))}

                    </div>

                    <h3 className="text-lg font-medium mb-2">
                      Which Month Is Better for Chardham Yatra 2026?
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      Generally, the best months for the Chardham yatra are September and October. However, it totally depends on your yatra requirements and expectations.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      To get a clearer idea, we have described the yatra in various months:
                    </p>

                    <h4 className="font-medium mb-2">Chardham Yatra in April and May</h4>

                    <p className="text-muted-foreground mb-4">
                      The char dham yatra starts in April with great zeal and enthusiasm. The first few weeks, especially the Kedarnath and Badrinath Kapat Utsav, are nothing short of a festival.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      This month attracts huge yatris to witness the opening ceremonies. The weather ranges from 0 to 12 degree celsius. Road conditions are good, and you may get to see some residual snow at the high-altitude peaks.
                    </p>


                    <h4 className="font-medium mb-2">Chardham Yatra in June</h4>

                    <p className="text-muted-foreground mb-4">
                      June is also one of the busiest months for chardham yatra season. The pre-monsoon time, with the school summer vacation, pushes the pilgrim count to its peak.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The weather is pleasing, and the road conditions are also good. For the Chardham yatra in June, pack light woolens and umbrellas or a raincoat, as you may also get surprised by the pre-monsoon showers.
                    </p>


                    <h4 className="font-medium mb-2">Chardham Yatra in July and August</h4>

                    <p className="text-muted-foreground mb-4">
                      July and August bring heavy to very heavy rainfall in the Chardham circuit. The temples remain open, but travel is risky due to landslides, floods, and weather unpredictability.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The crowd is less, but the yatra is not advisable. In 2025, Chardham witnessed 55 zero-pilgrim days due to heavy rainfall and landslides.
                    </p>

                    <h4 className="font-medium mb-2">Chardham Yatra in September and October</h4>

                    <p className="text-muted-foreground mb-4">
                      September and October are the best months for the Chardham Yatra 2026. The monsoon is withdrawing, and the views are more beautiful.
                    </p>

                    <p className="text-muted-foreground mb-4">
                      The temperature in this month ranges from 10 to 20 degree celcius. The good part is that the crowd level is moderate, and the roads are also functional.
                    </p>

                    <h4 className="font-medium mb-2">Chardham Yatra in November</h4>

                    <p className="text-muted-foreground mb-4">
                      The 2026 Chardham yatra is closing between October and mid-November. The closing event, which is popularly known as Kedarnath Kapat Bandh and Badrinath Kapat Bandh, also attracts thousands of pilgrims every year.
                    </p>

                    <p className="text-muted-foreground mb-6">
                      The temperature is now shifted to cold to very cold and may also drop below 0 degree celsius. Snowfall may also start falling at high altitudes. The crowd at this time of the season is moderate. November chardham yatra is suitable if you want to experience the once in the life time opportunity of attending the Kapat closing ceremony.
                    </p>

                    <p className="text-primary font-medium">
                      Check Availability for Your Preferred Month for Char Dham Yatra
                    </p>

                    
                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Winter Chardham Yatra 2026
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    The 4 Dham temples remain closed during the winter season. However, if you are in the area or want to take blessings of the Chardham in winter, you can visit the alternate worship places and other relic temples, where the idols are shifted during the winter.
                  </p>

                  <ul className="text-muted-foreground mb-8 space-y-3">
                    <li>
                      <strong>Yamunotri in Winter:</strong> You can visit the idol of Goddess Yamuna in a local village named Kharsali.
                    </li>
                    <li>
                      <strong>Gangotri in Winter:</strong> Visit the Ganga temple in Mukhba, which is a village near Gangotri.
                    </li>
                    <li>
                      <strong>Kedarnath in Winter:</strong> In the closing ceremony of Kedarnath, the main idol, Lord Kedarnath, is shifted to a place called Ukhimath.
                    </li>
                    <li>
                      <strong>Badrinath in Winter:</strong> The idols of the Badrinath temple are shifted to a small town called Joshimath in winter.
                    </li>
                  </ul>


                  <h2 className="text-2xl font-semibold mb-3">
                    Chardham Yatra Route Map with Distance Chart 2026
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Chardham yatra is traditionally done from the west to east route in the Garhwal hills of Uttarakhand. The pilgrim first visits the Yamunotri temple, then the Gangotri temple, then the Kedarnath temple, and finally completes the yatra with the Badrinath temple darshan.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This Chardham yatra route aligns well with the natural topography of the region and reduces redundant travel distance. On average, the Chardham circuit is 1500 to 1700 km by road, but the exact distance will depend on your starting point and the places you may visit along the way.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Commonly, pilgrims start their yatra from the holy city of Haridwar or Rishikesh. Here is the Chardham yatra route map with a distance chart. We have taken Haridwar or Rishikesh as our starting point.
                  </p>

                  {/* ================= ROUTE TABLE ================= */}

                  <div className="mb-8 border rounded-xl overflow-hidden">

                    {/* Header */}
                    <div className="hidden md:grid md:grid-cols-2 bg-primary/5 font-medium text-sm">
                      <div className="p-3">Chardham routes</div>
                      <div className="p-3">Distance</div>
                    </div>

                    {/* Rows */}
                    {[
                      ["Haridwar to Barkot (via Mussoorie / Dehradun)", "190 km"],
                      ["Barkot to Janki Chatti", "49 km"],
                      ["Trek from Janki Chatti to Yamunotri Temple", "6 km"],
                      ["Janki Chatti to Uttarkashi", "100 km"],
                      ["Uttarkashi to Gangotri", "100 km"],
                      ["Gangotri to Guptkashi (via Uttarkashi–Rishikesh–Rudraprayag)", "360 km"],
                      ["Guptkashi to Sonprayag", "25 km"],
                      ["Sonprayag to Gaurikund", "5 km"],
                      ["Trek from Gaurikund to Kedarnath Temple", "16 km"],
                      ["Gaurikund to Rudraprayag", "75 km"],
                      ["Rudraprayag to Joshimath", "163 km"],
                      ["Joshimath to Badrinath", "45 km"],
                      ["Badrinath to Rishikesh", "295 km"],
                      ["Rishikesh to Haridwar", "24 km"],
                      ["Total Chardham Yatra Distance", "Approx 1500 km"],
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="border-t p-4 md:grid md:grid-cols-2 md:p-0 text-sm"
                      >
                        <div className="md:p-3">
                          <span className="md:hidden font-medium">Route: </span>
                          {row[0]}
                        </div>

                        <div className="md:p-3">
                          <span className="md:hidden font-medium">Distance: </span>
                          {row[1]}
                        </div>
                      </div>
                    ))}

                  </div>

                  <p className="text-muted-foreground mb-6">
                    If you have limited time, physical strength, or any other resource, you can always customise chardham yatra. Instead of visiting all 4 dhams at once, you can visit just one temple or do the Do Dham yatra. You can either visit Yamunotri and Gangotri together or Kedarnath or Badrinath.
                  </p>

                  <p className="text-primary font-medium">
                    Want a customised chardham yatra package? Reach out to our Yatra experts and get a personalized Chardham itinerary.
                  </p>

                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Chardham Yatra by Road vs by Helicopter: Route and Time Comparison
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Chardham Yatra by road vs by helicopter differs in various aspects like cost, duration, and comfort.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Both modes of transport for chardham has its own benefits, and we cannot put one directly over the other. The table given below will help you decide which one is better, the Chardham yatra by road or helicopter:
                  </p>

                  {/* ================= COMPARISON TABLE ================= */}

                  <div className="mb-8 border rounded-xl overflow-hidden">

                    {/* Header */}
                    <div className="hidden md:grid md:grid-cols-3 bg-primary/5 font-medium text-sm">
                      <div className="p-3">Parameter</div>
                      <div className="p-3">Chardham Yatra by Road</div>
                      <div className="p-3">Chardham Yatra by Helicopter</div>
                    </div>

                    {/* Rows */}
                    {[
                      ["Total Duration", "10–14 days", "5–6 days"],
                      ["Physical Strength Required", "Moderate to High", "Low"],
                      ["Cost Per Person", "Rs. 25,000–Rs. 55,000", "Rs. 90,000–Rs. 2,50,000"],
                      ["Dharsham Time at each Temple", "2 to 4 hours on average", "30 to 90 minutes (mostly the helicopter chardham package comes with VIP dharshan)"],
                      ["Suitable For", "Fit pilgrims, families, budget travellers, adventurous travellers", "Senior citizens, time constraint and premium travellers"],
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="border-t p-4 md:grid md:grid-cols-3 md:p-0 text-sm"
                      >
                        <div className="md:p-3">
                          <span className="md:hidden font-medium">Parameter: </span>
                          {row[0]}
                        </div>

                        <div className="md:p-3">
                          <span className="md:hidden font-medium">By Road: </span>
                          {row[1]}
                        </div>

                        <div className="md:p-3">
                          <span className="md:hidden font-medium">By Helicopter: </span>
                          {row[2]}
                        </div>
                      </div>
                    ))}

                  </div>

                  <p className="text-primary font-medium">
                    Not sure whether to choose the Chardham yatra by road or by helicopter? Check out Freakytourz Chardham Yatra Road Packages and Helicopter Packages.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Chardham Yatra Registration 2026
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Chardham yatra registration is made mandatory for every pilgrim. The Government of Uttarakhand took this decision for the safety of visitors after the heartwrenching 2013 Kedarnath flood.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Through this, the government uses GPS monitoring to track the pilgrims and prevent overcrowding at the temple or the pathways. The registration is also known as the yatra e-pass, yatra parchi, or registration card.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    You just need a valid ID proof, a photo, and a phone number. Once you register successfully, you will be able to download a QR code, which is your registration card, and you will need to show this at the entry point of each temple you have registered for.
                  </p>

                  <h3 className="text-lg font-medium mb-2">
                    How to Register for Chardham Yatra Online in 2026?
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    There are various ways by which you can register for the 2026 CharDham yatra:
                  </p>

                  <h4 className="font-medium mb-2">
                    Chardham Yatra Online Registration 2026
                  </h4>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Go to registrationandtouristcare.uk.gov.in and enter your details</li>
                    <li>Upload a valid ID proof and verify it</li>
                    <li>Download the Chardham registration card</li>
                  </ul>

                  <h4 className="font-medium mb-2">
                    Chardham Yatra 2026 registration via WhatsApp
                  </h4>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Save the Char Dham Yatra registration WhatsApp number 8394833833</li>
                    <li>Send 'Yatra' to the saved number</li>
                    <li>Now the chatbot will guide you through the process, and you can register up to 5 people</li>
                  </ul>


                  <h4 className="font-medium mb-2">
                    Chardham Yatra 2026 Toll-Free Number
                  </h4>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Call at the CharDham yatra toll-free number 0135-1364</li>
                    <li>The helpline will provide you with the information and guide you through the registration process.</li>
                  </ul>

                  <h4 className="font-medium mb-2">
                    CharDham Yatra 2026 Registration Using Tourist Care Uttarakhand App
                  </h4>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Install the Tourist Care Uttarakhand app from the Google Play Store</li>
                    <li>Sign up, create a profile, add your yatra details, and register</li>
                  </ul>

                  <h3 className="text-lg font-medium mb-2">
                    How to do offline registration for Chardham?
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    If online registration is not possible, you can always register offline for the Chardham Yatra at major designated locations in Uttarakhand.
                  </p>

                  <h4 className="font-medium mb-2">
                    Some Offline Chardham Registration Counter locations:
                  </h4>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li><strong>Haridwar:</strong> Near Har Ki Pauri and ISBT</li>
                    <li><strong>Rishikesh:</strong> ISBT, RTO office, and Gurudwara Hemkund Sahib</li>
                    <li><strong>Dehradun:</strong> Jolly Grant Airport, and the RTO office</li>
                    <li><strong>Yamunotri Route:</strong> Barkot, Janki Chatti</li>
                    <li><strong>Gangotri Route:</strong> Hina (Uttarkashi), Panki</li>
                    <li><strong>Kedarnath Route:</strong> Sonprayag, Gaurikund, Guptkashi, Phata</li>
                    <li><strong>Badrinath Route:</strong> Joshimath, Pandukeshwar, Chamoli, Govind Ghat</li>
                  </ul>

                  <p className="text-muted-foreground mb-4">
                    Registration for the 2026 Chardham Yatra started on 6 March.
                  </p>

                  <h3 className="text-lg font-medium mb-2">
                    What is the Fee for Char Dham Registration?
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    The chardham yatra registration is free of cost for all pilgrims visiting Kedarnath, Badrinath, Yamunotri, and Gangotri.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    The Uttarakhand government is also proposing a minimum fee of Rs. 10 to Rs. 20 for the Chardham registration to discourage the fake or bot bookings. However, the fees have not been finalized till now.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    So, if any agent or website is asking you for additional costs for the government registration, you should be wary of it. However, the stay, travel operator, vehicle, pony, or any other sort of amenities are not included in this free registration.
                  </p>

                  <p className="text-muted-foreground">
                    If your chardham registration requires a medical fitness certificate due to age factor (above 50 years) or pre-existing medical conditions (heart, blood pressure, asthma), you will have to get it from a government or private hospital. The government medical certificate is free, but if you are getting the checks done from a private hospital, you will have to pay Rs. 200 to Rs. 500. The exact payment will vary from hospital to hospital.
                  </p>  
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Common Chardham Yatra Registration Mistakes and How to Avoid Them
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Here are some common Chardham yatra registration mistakes:
                  </p>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
                    <li>
                      Do not pay extra for the government registration. Register directly on the official website registrationandtouristcare.uk.gov.in, or the goverment authorised offline registration points.
                    </li>
                    <li>
                      You have to select your dates of yatra, so register after you have finalized your yatra dates.
                    </li>
                    <li>
                      Avoid giving fake medical information while registering for the 4 Dham Yatra. Wrong data may misguide the management working for your safety.
                    </li>
                    <li>
                      Everyone in your group should have their own yatra pass. Therefore, one person's registration for a group won't be accepted.
                    </li>
                    <li>
                      Though offline Char Dham registration is also available, Freakytourz travel experts recommend online registration for the Chardham yatra 2026 to avoid last-minute hurdles.
                    </li>
                  </ul>

                  <p className="text-muted-foreground">
                    Avoid these common chardham registration mistakes to enjoy hassle-free darshan
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Medical Facilities on Chardham Yatra Route: Hospitals, Health Centres, and Emergency Support
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Basic but functional medical facilities are available at all the important points in the Chardham yatra route. The Uttarakhand government has set up health posts at Janki chatti, Gaurikund, along the Kedarnath trek.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    AIIMS Rishikesh, Jolly Grant Hospital Dehradun, district hospital Haridwar, and other various private hospitals and 24×7 pharmacies offer major hospitals around the Chardham circuit.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    For the 2026 Chardham yatra, the Uttarakhand government has launched the e-Swasthya Dham portal through which it will monitor the health of pilgrims in real time.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    16 experienced doctors, 46 medical officers, and 85 paramedical staff are deployed at 25 medical relief posts and 33 health screening points all along the Chardham route.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    A fleet of 177 ambulances is positioned across the circuit. They include advanced life support, cardiac ambulances, and 108 emergency service ambulances.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Oxygen cylinders and oxygen booths are installed in altitude-sensitive zones like Kedarnath and Badrinath for emergency use. In addition to this, over 100 health volunteers are also working for medical safety along the Yatra routes.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    That said, the best medical preparation for Chardham is personal. Our team of chardham yatra experts recommends carrying a pulse oximeter, your prescription medicines, ORS sachets, and a basic first aid kit. Pay attention to how your body is reacting to the high altitude and do not ignore the symptoms. In case of any emergency, connect immediately with the Uttarakhand Tourism helpline on 1364 or the official Chardham emergency line on 0135-2559898.
                  </p>

                  <p className="text-primary font-medium mb-8">
                    Travel With Confidence — View Our 2026 Chardham Yatra Packages
                  </p>

                  <h2 className="text-2xl font-semibold mb-3">
                    Places to Visit on Chardham Yatra 2026 Beyond the Four Temples
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Chardham yatra is much more than the darshan at the four divine temples. Ancient villages, Himalayan hot springs, river confluences, mythological caves, and evening aartis on the Ganges, every stage of the route has its own spiritual energy.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    It is a beautiful journey to experience not only the spirituality but also the stunning Himalayas that sit as a crown on India.
                  </p>

                  <ul className="text-muted-foreground space-y-4">

                    <li>
                      <strong>Haridwar:</strong> Haridwar is considered the gateway city of the Chardham Yatra as many pilgrims start their yatra by taking a plunge in the Ganges and attending the Ganga aarti at Har Ki Pauri. This is the perfect way to start your Chardham yatra and awaken devotions.
                    </li>

                    <li>
                      <strong>Rishikesh:</strong> Many Chardham yatra route passes through Rishikesh, which is also known as the Yoga capital of the world. Here, you can attend the Triveni ghat evening aarti and participate in the kirtans at Parmarth Niketan. When in Rishikesh, visit Ram Jhula bridge, Neelkanth Mahadev Temple, and the ashram-lined ghats.
                    </li>

                    <li>
                      <strong>Devprayag:</strong> Devprayag is yet another iconic place in the Hindu religion that you can visit in your Char Dham yatra. Situated on the Rishikesh-Badrinath highway, this place is about 72 km from Rishikesh. It is the confluence where the Alaknanada and the Bhagirathi rivers meet to form the holy Ganges. Take a holy dip at this stunning Sangam point and visit the Raghunath Temple.
                    </li>

                    <li>
                      <strong>Suryakund:</strong> Suryakund is a natural geothermal hot spring located beside the Yamunotri temple. Many pilgrims cook rice and potatoes to offer as a prasad to the goddess.
                    </li>

                    <li>
                      <strong>Gaurikund:</strong> Gaurikund, as the name suggests, is dedicated to Goddess Gauri, aka Parvati. It is a Hindu pilgrimage site located at the banks of the Mandakini River and is the starting point for the Kedarnath trek.
                    </li>

                    <li>
                      <strong>Triyuginarayan Temple:</strong> You can take a short detour of 11.4km from Sonprayag to the famous Triyuginarayan Temple. It is the place where Shiva and Parvati are said to have married. The Akhand dhuni is believed to have been burning since their marriage.
                    </li>

                    <li>
                      <strong>Mana Village:</strong> Mana Village is located 3km away from the Badrinath temple. It is popularly known as the first village of India because after this region, the Indo-Tibetan border starts. You can also visit the Vyasa gufa (a place where sage Vyasa is believed to have written the Mahabharata) and Bhim Pul (a rock bridge over the mysterious Saraswati river believed to have been placed by Pandava brother Bhima).
                    </li>

                  </ul>

                  <p className="text-primary font-medium mt-6">
                    Check out the Freakytourz Chardham Yatra packages to see what is covered.
                  </p>
                  
                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Things to Buy on Char Dham Yatra: Souvenir Shopping
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Shopping on the Chardham Yatra can make your journey more memorable as these souvenirs will carry the yatra energy long after you return home.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Things you can buy on your chardham yatra, other than the ones mentioned under the temple section, are:
                  </p>

                  <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                    <li>Temple Prasad</li>
                    <li>Puja Items</li>
                    <li>Miniature replicas of the temple</li>
                    <li>Handwoven woollen goods</li>
                    <li>Traditional pahadi daals (pulses)</li>
                    <li>Fresh locally sourced burash squash</li>
                    <li>Uttakahand Aipan Art</li>
                    <li>Wooden craft and natural pinecones</li>
                  </ul>

                  <h2 className="text-2xl font-semibold mt-10 mb-3">
                    Chardham Yatra Packing List 2026: What to Carry and What to Leave Behind
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Packing for the Chardham yatra is not the same as packing for yet another trip. This helps you prepare in advance for the climate, altitude, and your required needs.
                  </p>

                  <h3 className="text-lg font-medium mb-2">
                    Essential Clothing for Char Dham Yatra
                  </h3>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Thermal inner wear (2 sets)</li>
                    <li>Heavy down jacket or parka</li>
                    <li>Waterproof windcheater or rain poncho</li>
                    <li>Sturdy trekking shoes with ankle support</li>
                    <li>Woollen cap, gloves, and muffler</li>
                    <li>Traditional attire for temple darshan</li>
                  </ul>

                  <h3 className="text-lg font-medium mb-2">
                    Health and Medical care to carry for the Char Dham Yatra
                  </h3>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Medicines for altitude sickness (consult a doctor before use)</li>
                    <li>Pulse oximeter to monitor blood oxygen levels</li>
                    <li>ORS sachets, paracetamol, antacids, and personal prescription medicines</li>
                    <li>Knee support brace for Kedarnath and Yamunotri treks</li>
                  </ul>

                  <h3 className="text-lg font-medium mb-2">
                    Important Documents to carry for Char Dham Yatra
                  </h3>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
                    <li>Original photo ID (Aadhaar Card/Passport/Voter ID)</li>
                    <li>Chardham Yatra registration slip (make sure to print it)</li>
                    <li>Carry sufficient cash, as ATMs and internet services are unreliable</li>
                  </ul>

                  <p className="text-muted-foreground mb-6">
                    Read our Chardham Yatra Packing Checklist 2026 to pack better for the yatra.
                  </p>

                  <h2 className="text-2xl font-semibold mb-3">
                    Chardham Yatra Travel Tips 2026: Guide for a Safe and Comfortable Journey
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    The Chardham Yatra 2026 takes a lot of physical strength, mental courage, a heart full of devotion, and many preparatory months.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Here are some of the important char dham yatra travel tips to follow for a smooth and fulfilling journey:
                  </p>

                  <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
                    <li>
                      Start building physical strength months before you commence your yatra. If you are doing the char dham yatra by road, get prepared to walk a lot, as you will have to do the Kedarnath trek (which is 16 km long) and the Yamunotri trek (which is 6 km long). Walk 4 to 5 km daily for at least 3 to 4 weeks before starting.
                    </li>
                    <li>
                      Choose the right time for the Chardham yatra as per your preference and start booking your helicopter, taxi, hotels, and other amenities as early as possible.
                    </li>
                    <li>
                      With the right preparation, precautions, and actions, the chardham yatra is manageable.
                    </li>
                  </ul>

                  <p className="text-muted-foreground mb-6">
                    Read our Chardham Yatra travel tips blog to prepare yourself for the immersive lifetime spiritual experience.
                  </p>

                  <h2 className="text-2xl font-semibold mb-3">
                    Chardham Yatra Total Cost 2026
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    The total cost of the Chardham yatra depends on the mode of transport, group size, desired travel experience, the month you travel, and your overall travelling style. For a budget traveler, the Chardham yatra costs Rs. 25,000 to Rs. 30,000 per person for a 10 to 12-day trip from Haridwar, Rishikesh, or Dehradun.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    The same trip will cost Rs. 35,000 to Rs. 50,000 for a luxury chardham road package. Moreover, if you want to book a helicopter chardham yatra package, it will cost around Rs. 90,000 to Rs. 1.5 lakhs for a 5 to 6-day trip.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Note that these ranges are just the estimates, and your final chardham yatra cost may be different. Other extra costs will be for your food expense, places you visit outside the char dham circuit temples, pony or palki services, souvenir shopping, temple offerings, etc.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    Point to be noted is that the peak season, May and June are costlier than the off-season, September and October. Therefore, the price will vary with the fluctuation in demand.
                  </p>

                  <p className="text-muted-foreground mb-6">
                    The cost breakdown per person will come as a picture here.
                  </p>

                  <p className="text-primary font-medium mb-6">
                    Get a Custom Quote for Your Char Dham Yatra.
                  </p>

                  <p className="text-muted-foreground"><strong>The 2026 Chardham Yatra season opens in April, and peak slots are quickly filling up. Scroll up, find the right chardham package, and take the first step toward your yatra today.</strong></p>

                  </div>
                </section>

                {/* FAQ */}

                <section className="py-8">
                  <div className="container mx-auto px-4 max-w-6xl">

                    <div className="max-w-3xl">

                      <div className="flex items-center gap-2 mb-6 text-gray-800">
                        <HelpCircle className="w-6 h-6 text-orange-600" />
                        <h2 className="text-2xl font-bold">Frequently Asked Questions About Chardham Yatra 2026</h2>
                      </div>

                      <FAQAccordion faqs={faqData} />

                    </div>

                  </div>
                </section>

              </div>

              {/* SIDEBAR */}

              <div>
                <div className="sticky top-32">
                  <SupportSidebar />
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}

export default ChardhamListingPage;
