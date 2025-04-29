"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaRegClock,
  FaUsers,
  FaUndo,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
// import HimachalMyTripCarousel from "../components/HimachalMyTrip"; // Assume this is the updated carousel component for Himachal
import HimTrek from "../components/HimTrek";
import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip"; // Adjust if you have a HimTrek component for Himachal

// Updated Itinerary for Himachal Pradesh Trek
const itinerary = [
  {
    title: "Day 1: Arrival in Manali",
    content: `• Arrive in Manali, the beautiful hill station in Himachal Pradesh.\n• Meet your trek leaders and fellow adventurers.\n• Briefing on the trek, safety measures, and gear check.\n• Stay overnight in a cozy guesthouse or camp.`,
  },
  {
    title: "Day 2: Trek to Solang Valley Base Camp",
    content: `• Begin your trek through pine forests and alpine meadows.\n• Enjoy stunning views of the Solang Valley and surrounding peaks.\n• Reach the base camp for a relaxed evening.\n• Bonfire and dinner at the campsite.`,
  },
  {
    title: "Day 3: Summit Day - Rohtang Pass",
    content: `• Early morning ascent to Rohtang Pass.\n• Enjoy breathtaking views of snow-capped peaks and valleys.\n• Capture the beauty of the surrounding landscapes.\n• Return to the base camp for rest and rejuvenation.`,
  },
  {
    title: "Day 4: Descend to Manali",
    content: `• Trek back to Manali, descending through lush green forests and scenic trails.\n• Relax in Manali and celebrate the successful completion of your trek with your group.`,
  },
  {
    title: "Day 5: Departure",
    content: `• Morning breakfast and farewell to fellow trekkers.\n• Departure from Manali with unforgettable memories.\n• Optional sightseeing in Manali before heading back home.`,
  },
];

export default function HimachalTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Himachal Trek",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trek Booking Request* 🚶‍♂️🏔️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('/deal96.webp')", // Update image path
        }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
            Best Himachal Pradesh Tour Packages
          </h1>
          <h3 className="text-lg font-medium text-gray-200 mt-4">
            Explore the Majestic Mountains of Himachal Pradesh
          </h3>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        {/* Add more sections here if needed */}
      </section>

      {/* Main Content + Booking Form */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            HIMACHAL TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>5 Nights 6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Unique</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Cancellation: Up to 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Activity
          </h2>
          <p className="text-gray-600 mb-4">
            The Himachal Trek is a perfect escape into the mountains, offering
            spectacular views of alpine meadows, snow-capped peaks, and serene
            valleys. Perfect for nature lovers and adventure enthusiasts.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore the hidden valleys of Himachal Pradesh.</li>
            <li>Capture stunning views of the Himalayan peaks.</li>
            <li>Experience local culture through village interactions.</li>
            <li>Relax around a campfire after a thrilling day of trekking.</li>
            <li>Achieve the perfect balance of adventure and tranquility.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>All necessary trek equipment and gear.</li>
              <li>Accommodation during the trek in camps and guesthouses.</li>
              <li>All meals included during the trek (vegetarian only).</li>
              <li>Experienced trek leaders and support staff.</li>
              <li>First-aid and emergency medical kit.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal expenses and items.</li>
              <li>Optional gear rentals.</li>
              <li>Travel to and from Himachal Pradesh base camp.</li>
            </ul>
          </div>

          {/* Itinerary Section */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>

            <button
              onClick={() => {
                const allOpen = openIndex.length === itinerary.length;
                setOpenIndex(allOpen ? [] : itinerary.map((_, i) => i));
              }}
              className="mb-4 text-orange-600 font-medium hover:underline"
            >
              {openIndex.length === itinerary.length ? "Close All" : "Open All"}
            </button>

            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => {
                const isOpen = openIndex.includes(index);
                return (
                  <div
                    key={index}
                    className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
                  >
                    <button
                      onClick={() => {
                        if (isOpen) {
                          setOpenIndex(openIndex.filter((i) => i !== index));
                        } else {
                          setOpenIndex([...openIndex, index]);
                        }
                      }}
                      className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
                    >
                      <span className="text-base md:text-lg font-semibold text-gray-800">
                        {item.title}
                      </span>
                      {isOpen ? (
                        <FaChevronUp className="text-orange-500" />
                      ) : (
                        <FaChevronDown className="text-orange-500" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sticky Booking Form (Right) */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Book Now
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  name="tripName"
                  value={formData.tripName}
                  readOnly
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
                />
                <input
                  type="number"
                  name="travellers"
                  placeholder="No. of Travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
                >
                  Send Booking via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <HimachalMyTripCarousel /> */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
