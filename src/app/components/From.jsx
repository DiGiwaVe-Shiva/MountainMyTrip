"use client";

import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Form() {
  const [location, setLocation] = useState("");
  const [checkout, setCheckout] = useState("");
  const [checkin, setCheckin] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    {
      image: "/deal2.webp",
      title: "ADVENTUROUS TREK",
      subtitle: "Explore Stunning Hiking Trails in India",
    },
    {
      image: "/deal4.webp",
      title: "MOUNTAIN ESCAPE",
      subtitle: "Breathe the fresh mountain air",
    },
    {
      image: "/deal5.webp",
      title: "WILDERNESS RETREAT",
      subtitle: "Reconnect with nature on a thrilling trek",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-start items-center text-center text-white min-h-[100dvh] px-6 pt-[18rem]">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold py-1">{slides[currentImage]?.title}</h1>
          <p className="text-base md:text-lg py-1">{slides[currentImage]?.subtitle}</p>
        </div>

        {/* Form */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="flex flex-col col-span-1 md:col-span-1">
            <label htmlFor="location" className="text-xs text-gray-500 mb-1">Location</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="location"
                type="text"
                placeholder="Where are you going?"
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none appearance-none touch-manipulation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Check-In */}
          <div className="flex flex-col col-span-1 md:col-span-1">
            <label htmlFor="checkin" className="text-xs text-gray-500 mb-1">Check-In</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="checkin"
                type="date"
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none appearance-none touch-manipulation"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="flex flex-col col-span-1 md:col-span-1">
            <label htmlFor="checkout" className="text-xs text-gray-500 mb-1">Check-Out</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="checkout"
                type="date"
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none appearance-none touch-manipulation"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex items-end col-span-1 md:col-span-1">
            <a
              href="https://wa.me/6239092532"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md w-full text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
                Send
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
