"use client";

import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperCore from "swiper";
import { EffectFade, Autoplay } from "swiper/modules";

// install modules
SwiperCore.use([EffectFade, Autoplay]);

export default function Form() {
  const [location, setLocation] = useState("");
  const [checkout, setCheckout] = useState("");
  const [checkin, setCheckin] = useState("");

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

  return (
    <div className="relative w-full min-h-[100svh]   overflow-hidden">
      {/* Background Swiper */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop={true}
          speed={1000}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start items-center text-center text-white min-h-[100svh] px-6 pt-[18rem]">
        {/* Title (from first slide since Swiper doesn't expose current index easily) */}
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl font-bold py-1">{slides[0].title}</h1>
          <p className="text-base md:text-lg py-1">{slides[0].subtitle}</p>
        </div>

        {/* Form */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-lg md:max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label htmlFor="location" className="text-xs text-gray-500 mb-1">Location</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="location"
                type="text"
                placeholder="Where are you going?"
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="checkin" className="text-xs text-gray-500 mb-1">Check-In</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="checkin"
                type="date"
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="checkout" className="text-xs text-gray-500 mb-1">Check-Out</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                id="checkout"
                type="date"
                className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-[16px] min-h-[44px] outline-none"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-end">
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
