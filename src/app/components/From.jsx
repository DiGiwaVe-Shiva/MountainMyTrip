"use client";

import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Form() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
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
    <div
      className="relative w-full md:mb-2 h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${slides[currentImage].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div
        className="relative flex flex-col justify-start items-center text-center text-white h-full px-6"
        style={{ paddingTop: "24rem" }}
      >
        {/* Title & Subtitle */}
        <div className="mb-4">
          {/* <h1 className="text-3xl md:text-5xl font-bold py-1">
            {slides[currentImage].title}
          </h1> */}
          <h1
            className="text-3xl md:text-5xl font-bold py-1"
            style={{ fontDisplay: "swap" }}
            suppressHydrationWarning
          >
            {slides[currentImage]?.title || "Loading..."}
          </h1>

          <p className="text-base md:text-lg py-1">
            {slides[currentImage].subtitle}
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-4xl">
          {/* <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-lg md:max-w-3xl"> */}
          {/* Location Input */}
          <div className="flex items-center  px-4 py-3 w-full">
            {/* <div className="flex items-center px-4 py-3 w-full"/> */}
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Date Input */}
          {/* <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full">
              <FaCalendarAlt className="text-gray-700 mr-2" />
              <input
                type="date"
                className="w-full outline-none bg-transparent text-sm md:text-base px-2 py-2 border border-gray-300 rounded-md"
                placeholder="Check IN"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            
            </div> */}
          <div className="relative flex items-center px-4 py-3 w-full">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <div className="relative w-full">
              {/* Fake Placeholder */}
              {!checkin && (
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-10">
                  Check IN
                </span>
              )}
              <input
                type="date"
                className="w-full  outline-none bg-transparent text-sm md:text-base px-3 py-2 border border-gray-300 rounded-md text-gray-700 z-20"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
          </div>

          {/* Check-out Input */}
          <div className="relative flex items-center px-4 py-3 w-full">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <div className="relative w-full">
              {/* Fake Placeholder */}
              {!checkout && (
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-10">
                  Check OUT
                </span>
              )}
              <input
                type="date"
                className="w-full outline-none bg-transparent text-sm md:text-base px-3 py-2 border border-gray-300 rounded-md text-gray-700 z-20"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
          </div>

          {/* Send Button */}
          <a href="https://wa.me/6239092532" target="_blank">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md mt-4 md:mt-0 md:ml-4 flex items-center justify-center w-full md:w-auto text-sm md:text-base font-medium hover:bg-orange-600 transition duration-200">
              Send
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

