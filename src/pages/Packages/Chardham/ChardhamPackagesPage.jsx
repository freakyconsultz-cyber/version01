import { Helmet } from "react-helmet-async";

import PriceCalculator from "@/components/PriceCalculator";
import TravelModeCustomizationPanel from "@/components/TravelModeCustomizationPanel";
import VehicleSelector from "@/components/VehicleSelector";
import CustomizationSummary from "@/components/CustomizationSummary";
import OrderSummary from "@/components/OrderSummary";

//import TestimonialSection from "@/components/TestimonialSection";
//import FAQSection from "@/components/FAQSection";
//import BookingForm from "@/components/BookingForm";

export default function ChardhamPackage() {

  const BASE_URL = "https://freakytourz.com";
  const PAGE_URL = "/packages/chardham-yatra/";

  const pageConfig = {
    title:
      "Char Dham Yatra Package 2026 | Kedarnath Badrinath Gangotri Yamunotri Tour",
    description:
      "Book Char Dham Yatra Package 2026 with taxi, helicopter and hotel options. Visit Kedarnath, Badrinath, Gangotri and Yamunotri comfortably with FreakyTourz.",
    keywords:
      "char dham yatra package 2026, chardham yatra tour package, kedarnath badrinath gangotri yamunotri tour, chardham helicopter package",
    canonical: `${BASE_URL}${PAGE_URL}`,
  };

  return (
    <>
      <Helmet>
        <title>{pageConfig.title}</title>

        <meta name="description" content={pageConfig.description} />
        <meta name="keywords" content={pageConfig.keywords} />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={pageConfig.canonical} />

        <meta property="og:title" content={pageConfig.title} />
        <meta property="og:description" content={pageConfig.description} />
        <meta property="og:url" content={pageConfig.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreakyTourz" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageConfig.title} />
        <meta name="twitter:description" content={pageConfig.description} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: "Char Dham Yatra Package 2026",
            description:
              "Complete Char Dham Yatra package covering Yamunotri, Gangotri, Kedarnath and Badrinath.",
            provider: {
              "@type": "TravelAgency",
              name: "FreakyTourz",
              url: "https://freakytourz.com",
            },
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-6">
          Char Dham Yatra Package 2026
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Char Dham Yatra is one of the most sacred pilgrimages in India.
          The journey includes four holy temples located in Uttarakhand:
          Yamunotri, Gangotri, Kedarnath and Badrinath.
          Every year thousands of devotees undertake this spiritual
          journey to seek blessings and inner peace.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Destinations Covered in Char Dham Yatra
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-10">
          <li>Yamunotri Temple</li>
          <li>Gangotri Temple</li>
          <li>Kedarnath Temple</li>
          <li>Badrinath Temple</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-6">
          Customize Your Char Dham Yatra Package
        </h2>

        <div className="space-y-8">

          <TravelModeCustomizationPanel />

          <VehicleSelector />

          <PriceCalculator />

          <CustomizationSummary />

          <OrderSummary />

        </div>

        

      </div>
    </>
  );
}