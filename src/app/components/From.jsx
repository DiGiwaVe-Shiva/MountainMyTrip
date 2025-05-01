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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-30"></div>

      {/* Content */}
      <div
        className="relative flex flex-col justify-start items-center text-center text-white h-full px-6 z-40"
        style={{ paddingTop: "24rem" }}
      >
        {/* Title & Subtitle */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold py-1" style={{ fontDisplay: "swap" }}>
            {slides[currentImage]?.title || "Loading..."}
          </h1>
          <p className="text-base md:text-lg py-1">
            {slides[currentImage].subtitle}
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-4xl space-y-4 md:space-y-0 md:space-x-4">
          {/* Location Input */}
          <div className="flex items-center px-2 py-2 w-full">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Check-In Input */}
          <div className="flex flex-col w-full">
            <label htmlFor="checkin" className="text-xs text-gray-500 mb-1">
              Check-In
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <div className="relative w-full">
                {!checkin && (
                  <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-10">
                    dd-mm-yyyy
                  </span>
                )}
                <input
                  id="checkin"
                  type="date"
                  className="w-full outline-none bg-transparent text-sm md:text-base text-gray-700 relative z-20"
                  value={checkin}
                  onChange={(e) => setCheckin(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Check-Out Input */}
          <div className="flex flex-col w-full">
            <label htmlFor="checkout" className="text-xs text-gray-500 mb-1">
              Check-Out
            </label>
            <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <div className="relative w-full">
                {!checkout && (
                  <span className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-10">
                    dd-mm-yyyy
                  </span>
                )}
                <input
                  id="checkout"
                  type="date"
                  className="w-full outline-none bg-transparent text-sm md:text-base text-gray-700 relative z-20"
                  value={checkout}
                  onChange={(e) => setCheckout(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Send Button */}
          <a
            href="https://wa.me/6239092532"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md w-full md:w-auto text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
              Send
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
