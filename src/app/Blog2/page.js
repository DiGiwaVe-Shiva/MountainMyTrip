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
          backgroundImage: "url('deal93.jpg')",
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
       
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8">
      
      {/* Main Content */}
      <div className="w-full lg:w-2/3">
        <div className="rounded overflow-hidden">
          <Image
            src="/deal26.webp" // Replace with your static or dynamic image
            alt="Travel Deals & Discounts"
            width={700}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Post Metadata */}
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-green-600">🧳</span>
            <span>Travelit</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-600">📚</span>
            <span>Blog</span>
          </div>
        </div>

        {/* Post Title */}
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          How to Get the Best Travel Deals & Discounts
        </h1>

        {/* Post Content */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          Vacation on the mind! However you have a tight budget? Then we in this blog will tell you ways of attaining best travel deals and discounts for your vacation! One such way is by keeping a look out on hidden charges and restrictions.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Below are elaborated ways as to how to get the best travel deals and discounts.
        </p>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 space-y-8">
        
        {/* Categories */}
        {/* <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">All Categories</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Blog</span>
              <span className="text-green-600">→</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Travel</span>
              <span className="text-green-600">→</span>
            </li>
          </ul>
        </div> */}

        {/* Recent Posts */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-6">
            {/* Post Item */}
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/your-thumbnail1.jpg" // Replace with your thumbnail
                  alt="deal45.webp"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-green-600 text-xs flex items-center gap-1">
                  🗨️ 0 Comments
                </span>
                <span className="text-gray-900 font-medium">
                  How to Get the Best Travel Deals & Discounts
                </span>
              </div>
            </li>

            {/* Post Item */}
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/your-thumbnail2.jpg"
                  alt="deal28.webp"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-green-600 text-xs flex items-center gap-1">
                  🗨️ 0 Comments
                </span>
                <span className="text-gray-900 font-medium">
                  10 Essential Tips for Budget-Friendly Travel
                </span>
              </div>
            </li>

            {/* Post Item */}
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/your-thumbnail3.jpg"
                  alt="deal22.webp"
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-green-600 text-xs flex items-center gap-1">
                  🗨️ 0 Comments
                </span>
                <span className="text-gray-900 font-medium">
                  Top National Parks in India for Wildlife Safaris
                </span>
              </div>
            </li>
          </ul>
        </div>

      </aside>
    </div>

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
            The Uttarakhand Trek offers a thrilling adventure through some of
            the most pristine and untouched landscapes in India. Experience
            majestic views of snow-covered mountains, lush valleys, and vibrant
            villages. Perfect for adventure enthusiasts and nature lovers!
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
          </div>

          {/* Itinerary Section */}
          {/* <div className="my-8">
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
          </div> */}
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


    </>
  );
}



