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
  { src: "/deal44.webp", gridClass: "lg:col-span-2" },
  { src: "/deal45.webp" },
  { src: "/deal41.webp" },
  { src: "/deal43.webp" },
  { src: "/deal34.webp" },
];

  // {
  //   title: "Day 1: Rishikesh to Chopta",
  //   content: `• Drive from Rishikesh to Chopta (approx. 8-9 hrs).\n• Enjoy the scenic route through Devprayag and Rudraprayag.\n• Arrive and check into camp at Chopta.`,
  // },
  // {
  //   title: "Day 2: Chopta Tungnath Chandrashila Chopta",
  //   content: `• Early morning start for trek to Tungnath Temple (3.5 km).\n• Continue to Chandrashila summit (1.5 km) for panoramic views.\n• Return back to Chopta for overnight stay.`,
  // },
  // {
  //   title: "Day 3: Chopta to Rishikesh",
  //   content: `• Morning departure for Rishikesh.\n• Drive back with memories of a beautiful Himalayan experience.\n• Trip ends in the evening.`,
  // },
  const itinerary = [
    {
      title: "Day 1: Journey to Chopta",
      content: `• Start your journey from Dehradun towards Chopta.\n• Enjoy scenic views of the mountains and green valleys en route.\n• Reach Chopta by evening and check into a tent, homestay, or guest house.\n• Relax around a fire surrounded by snow-clad mountains.`,
    },
    {
      title: "Day 2: Trek to Tungnath and Chandrashila Peak",
      content: `• Have an early breakfast and begin the trek to Tungnath – the highest Shiva temple.\n• Continue trekking to Chandrashila Peak for stunning Himalayan views.\n• Descend back to Chopta by evening to rest and recover.`,
    },
    {
      title: "Day 3: Explore Chopta",
      content: `• Spend the day exploring Chopta’s natural beauty.\n• Take easy hikes through lush forests or visit nearby villages.\n• Relax and enjoy a cozy evening by the fire.`,
    },
    {
      title: "Day 4: Return to Dehradun",
      content: `• After breakfast, begin your return journey to Dehradun.\n• Carry back unforgettable memories of snow trails, scenic peaks, and serene solitude.`,
    },
  ];
  

export default function ChoptaTungnathTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Chopta Tungnath Trek",
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
          {[1, 2, 3, 4].map(
            (i) =>
              i % 2 === 1 && (
                <div className="flex gap-2" key={i}>
                  {[i, i + 1].map(
                    (j) =>
                      destinations[j] && (
                        <div
                          key={j}
                          className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                        >
                          <Image
                            src={destinations[j].src}
                            alt={`Chopta Trek ${j + 1}`}
                            fill
                            className="object-cover"
                            sizes="50vw"
                          />
                        </div>
                      )
                  )}
                </div>
              )
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
                  alt={`Chopta Trek ${index + 1}`}
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
            CHOPTA TUNGNATH CHANDRASHILA TREK – MINI HIMALAYAN SUMMIT ADVENTURE
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />2 Nights 3 Days
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              Easy & Family Friendly
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              Free Cancellation: Upto 5 Days
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Trek
          </h2>
          <p className="text-gray-600 mb-4">
            The Chopta Tungnath Chandrashila Trek is one of the most accessible
            and rewarding Himalayan adventures. Explore the world’s highest
            Shiva temple at Tungnath and summit Chandrashila for 360° views of
            the Garhwal Himalayas.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Visit the ancient Tungnath Temple.</li>
            <li>
              Climb the Chandrashila summit for breathtaking sunrise views.
            </li>
            <li>Ideal for beginners, families, and solo travelers.</li>
            <li>Scenic forest trails through Kedarnath Wildlife Sanctuary.</li>
            <li>Short and budget-friendly Himalayan trek.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Rishikesh</li>
              <li>Accommodation in camps or guesthouses</li>
              <li>All meals during the trek</li>
              <li>Local guides and support staff</li>
              <li>Permits and basic medical support</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal trekking gear</li>
              <li>Insurance or emergency costs</li>
              <li>Camera or mobile charges</li>
              <li>Any personal expenses</li>
              <li>Anything not mentioned above</li>
            </ul>
          </div>
          {/* 
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Itinerary</h2>
            <button
              onClick={() =>
                setOpenIndex(openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i))
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
                      className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
                    >
                      <span className="text-base md:text-lg font-semibold text-gray-800">
                        {item.title}
                      </span>
                      {isOpen ? <FaChevronUp className="text-orange-500" /> : <FaChevronDown className="text-orange-500" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 md:py-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div> */}
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
                    className="border border-gray-200 rounded-xl shadow-sm bg-white"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-start justify-between px-4 py-4 text-left hover:bg-gray-50 rounded-t-xl"
                    >
                      <span className="flex-1 text-base md:text-lg font-semibold rounded-xl text-gray-800 leading-snug">
                        {item.title}
                      </span>
                      <span className="pl-3 pt-1">
                        {isOpen ? (
                          <FaChevronUp className="text-orange-500" />
                        ) : (
                          <FaChevronDown className="text-orange-500" />
                        )}
                      </span>
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
                Starting From: <span className="text-gray-600">₹7,999</span>/
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
