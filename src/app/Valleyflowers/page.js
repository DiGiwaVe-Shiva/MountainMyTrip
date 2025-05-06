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
import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";
import HimTrek from "../components/HimTrek";

const destinations = [
  { src: "/deal75.webp", gridClass: "lg:col-span-2" },
  { src: "/deal62.webp" },
  { src: "/deal48.webp" },
  { src: "/deal49.webp" },
  { src: "/deal76.webp" },
];

const itinerary = [
  {
    title: "Day 1: Rishikesh to Joshimath",
    content: `• Drive from Rishikesh to Joshimath (approx. 10 hrs).\n• Scenic journey through Devprayag, Rudraprayag, and Karnaprayag.\n• Overnight stay at guesthouse in Joshimath.`,
  },
  {
    title: "Day 2: Joshimath to Ghangaria",
    content: `• Drive to Govindghat, then trek 10 km to Ghangaria.\n• Trek through pine forests and alongside the Pushpawati River.\n• Reach Ghangaria and check into camp or guesthouse.`,
  },
  {
    title: "Day 3: Ghangaria to Valley of Flowers and back",
    content: `• Trek to the Valley of Flowers (4 km one-way).\n• Explore the UNESCO World Heritage site, full of rare Himalayan flora.\n• Return to Ghangaria for overnight stay.`,
  },
  {
    title: "Day 4: Ghangaria to Hemkund Sahib and back",
    content: `• Steep trek to the sacred Hemkund Sahib (6 km one-way).\n• Visit the glacial lake and Gurudwara at 4,329 m.\n• Return to Ghangaria for overnight stay.`,
  },
  {
    title: "Day 5: Ghangaria to Govindghat and drive to Joshimath",
    content: `• Trek back to Govindghat (10 km).\n• Drive to Joshimath and relax.\n• Overnight stay at Joshimath.`,
  },
  {
    title: "Day 6: Joshimath to Rishikesh",
    content: `• Depart early morning for Rishikesh.\n• Trip ends by evening with unforgettable memories.`,
  },
];

export default function ValleyOfFlowersTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Valley Of Flowers Trek",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, tripName, travellers } = formData;

    // Phone validation: Indian 10-digit starting from 6–9
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!travellers || isNaN(travellers) || Number(travellers) <= 0) {
      alert("Please enter a valid number of travellers.");
      return;
    }

    const message = `*New Trek Booking Request* 🏔️✨

*Name:* ${name}
*Phone:* ${phone}
${email ? `*Email:* ${email}\n` : ""}
*Trip:* ${tripName}
*No. of Travellers:* ${travellers}

📌 Please follow up for confirmation and details.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`; // Replace with your WhatsApp number
    window.open(whatsappURL, "_blank");
  };


  return (
    <>
      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 2, 3, 4].map((i) =>
            i % 2 === 1 ? (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map((j) =>
                  destinations[j] ? (
                    <div
                      key={j}
                      className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                    >
                      <Image
                        src={destinations[j].src}
                        alt={`Valley of Flowers ${j + 1}`}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                    </div>
                  ) : null
                )}
              </div>
            ) : null
          )}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
                item.gridClass || ""
              }`}
            >
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Valley of Flowers ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content + Booking */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            VALLEY OF FLOWERS TREK – A BLOOMING HIMALAYAN WONDERLAND
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />5 Nights 6 Days
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              Moderate Difficulty
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              Free Cancellation: Upto 7 Days
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Trek
          </h2>
          <p className="text-gray-600 mb-4">
            The Valley of Flowers Trek in Uttarakhand is a vibrant paradise of
            rare Himalayan flora and alpine beauty. This UNESCO World Heritage
            Site attracts botanists, trekkers, and nature lovers from all over
            the world.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore the legendary Valley of Flowers National Park.</li>
            <li>Trek to the sacred Hemkund Sahib at high altitude.</li>
            <li>
              Rich variety of rare Himalayan flora in full bloom (July–August).
            </li>
            <li>Ideal monsoon trek with breathtaking scenery.</li>
            <li>Suitable for fit beginners and photography enthusiasts.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation from/to Rishikesh</li>
              <li>Accommodation during trek (guesthouses/camps)</li>
              <li>All vegetarian meals during the trek</li>
              <li>Experienced local guides and trek leaders</li>
              <li>Forest permits and entry fees</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Travel insurance and emergency evacuation</li>
              <li>Porters or mule charges for personal luggage</li>
              <li>Personal expenses and tips</li>
              <li>Camera/charging point fees</li>
              <li>Anything not mentioned in inclusions</li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex.length === itinerary.length
                    ? []
                    : itinerary.map((_, i) => i)
                )
              }
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
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-4 py-4 flex justify-between  rounded-xl items-center hover:bg-gray-100"
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
                      <div className="px-5 md:py-4 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3>
              {/* <div className="text-sm text-green-600 font-bold mb-2">
                Limited Slots Available
              </div> */}
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹15,999</span>/
                Person
              </div>
              <div className="text-sm text-green-600 font-semibold mb-2"> +5% gst</div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  pattern="^[A-Za-z\s]+$"
                  title="Please enter letters and spaces only"
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
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
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
                  min="1"
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

      {/* Carousel + Other Sections */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
