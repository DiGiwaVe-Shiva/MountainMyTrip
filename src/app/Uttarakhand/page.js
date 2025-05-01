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
import MyTrip from "../components/SarPassTrek";

// const destinations = [
//   { name: "", src: "/uttarakhand1.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/uttarakhand2.webp" },
//   { name: "", src: "/uttarakhand3.webp" },
//   //   { name: "", src: "/uttarakhand4.webp", gridClass: "lg:row-span-2" },
//   { name: "", src: "/uttarakhand5.webp" },
//   { name: "", src: "/uttarakhand6.webp" },
//   //   { name: "", src: "/uttarakhand7.webp" },
// ];

const itinerary = [
  {
    title: "Day 1: Arrival in Uttarkashi",
    content: `• Arrive in Uttarkashi, the gateway to Uttarakhand.\n• Meet your trek leaders and fellow adventurers.\n• Briefing on the trek, safety measures, and gear check.\n• Stay overnight in a cozy guesthouse or camp.`,
  },
  {
    title: "Day 2: Trek to the Base Camp",
    content: `• Begin your trek through dense forests and scenic meadows.\n• Enjoy panoramic views of the Himalayan peaks.\n• Reach the base camp and relax for the evening.\n• Bonfire under the stars and dinner at the campsite.`,
  },
  {
    title: "Day 3: Summit Day",
    content: `• Early morning ascent to the summit.\n• Enjoy breathtaking 360-degree views of the Garhwal Himalayas.\n• Explore and capture memories of this pristine location.\n• Return to the base camp for a well-deserved rest.`,
  },
  {
    title: "Day 4: Descend to the Base Village",
    content: `• Descend through scenic trails, capturing the beauty of the region.\n• Enjoy a relaxed afternoon in the base village.\n• Celebrate the successful completion of your trek with the group.`,
  },
  {
    title: "Day 5: Departure",
    content: `• Morning breakfast and farewell to fellow trekkers.\n• Departure from Uttarkashi with cherished memories.\n• Optional sightseeing in Uttarkashi before heading back home.`,
  },
];

export default function UttarakhandTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Uttarakhand Trek",
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
    const message = `*New Trek Booking Request* 🚶‍♂️🌄

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
          backgroundImage: "url('deal93.webp')",
        }}
      >
        <div className=" bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
            Best Uttarakhand Tour Packages
          </h1>
          {/* <h3 className="text-lg mt-4 font-light">
              Discover the Himalayas like never before—one step at a time.
            </h3> */}
          <h3 className="text-lg font-medium text-gray-200 mt-4 ">
            Discover the tranquil beauty of Uttarakhand
          </h3>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8"></section>

      {/* Main Content + Booking Form */}
      <section className="max-w-7xl mx-auto px-4  flex flex-col md:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            UTTARAKHAND TREK
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
            {/* The Uttarakhand Trek offers a thrilling adventure through some of
            the most pristine and untouched landscapes in India. Experience
            majestic views of snow-covered mountains, lush valleys, and vibrant
            villages. Perfect for adventure enthusiasts and nature lovers!
            Embark on an unforgettable journey through the unspoiled wilderness
            of Uttarakhand. This trek is a perfect blend of adventure and
            tranquility, guiding you across snow-draped peaks, dense alpine
            forests, and picturesque mountain villages. Whether you're an avid
            trekker or a nature lover seeking serenity, this experience offers
            breathtaking vistas and authentic Himalayan culture at every step.
            Ideal for those looking to reconnect with nature and challenge
            themselves amidst the majestic Garhwal Himalayas. */}
            The Uttarakhand Trek invites you on a thrilling adventure through
            some of the most pristine and untouched landscapes in India. From
            majestic views of snow-clad peaks to lush green valleys and charming
            Himalayan villages, every step offers a breathtaking experience.
            This journey is the perfect fusion of adventure and serenity—leading
            you through dense alpine forests, tranquil meadows, and
            high-altitude passes wrapped in natural beauty. Whether you're an
            avid trekker or a nature enthusiast seeking solitude, this trek
            promises awe-inspiring vistas and a deep connection with authentic
            Himalayan culture. Ideal for those looking to challenge themselves
            and rediscover peace amidst the grandeur of the Garhwal Himalayas.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore the hidden valleys of Uttarakhand.</li>
            <li>Capture stunning views of the Himalayan peaks.</li>
            <li>Engage in cultural interactions with locals.</li>
            <li>Indulge in serene campfire evenings.</li>
            <li>Achieve the perfect balance of adventure and relaxation.</li>
          </ul>
{/* 
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
              <li>Travel to and from Uttarakhand base camp.</li>
            </ul>
          </div> */}

          {/* Itinerary Section */}
          <div className="my-8">
            {/* 
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
            </div> */}
          </div>
        </div>

        {/* Sticky Booking Form (Right) */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Book Now
              </h3>
              {/* <div className="text-sm text-green-600 font-bold mb-2">
                Save 20%
              </div> */}
              {/* <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹6,499</span>/
                Per Person
              </div>
              <div className="text-sm text-green-600 font-bold mb-2">
              +5% gst
              </div> */}

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

      <MyTrip />
    </>
  );
}
