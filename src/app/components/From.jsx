"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import SwiperCore from "swiper";
import { EffectFade, Autoplay } from "swiper/modules";

SwiperCore.use([EffectFade, Autoplay]);

export default function Form() {
  const [activeTab, setActiveTab] = useState("uttarakhand");
  const [location, setLocation] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [Travellers, setTravellers] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const uttarakhandLocations = [
    "Gulabikantha Trek",
    "Chardham Trek",
    "Chopta Tungnath Trek",
    "Kedarkantha Trek",
    "Brahmatal Trek",
    "Dayara Bugyal Trek",
    "Kuari pass Trek",
    "BaliPass Trek",
    "Dodital Trek",
    "Chandrashila Trek",
    "Harki Trek",
    "Dinara Bugyal Trek",
    "Sarutal Trek",
    "Vally of Flowers Trek",
  ];

  const himachalLocations = [
    "Hampta pass Trek",
    "Triund Trek",
    "Laka Glacier Trek",
  ];

  const locations =
    activeTab === "uttarakhand" ? uttarakhandLocations : himachalLocations;

  const handleDropdownToggle = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleLocationSelect = (value) => {
    setLocation(value);
    setActiveDropdown(null);
  };

  const switchTab = (tabName) => {
    setActiveTab(tabName);
    setLocation("");
    setActiveDropdown(null);
  };

  const slides = [
    {
      image: "/2.png",
      title: "GULABI KANTHA TREK",
      subtitle: "Explore Stunning Hiking Trails in India",
    },
    {
      image: "/4.png",
      title: "CHARDHAM TREK",
      subtitle: "Breathe the fresh mountain air",
    },
    {
      image: "/6.png",
      title: "CHOPTA TUNGNATH TREK",
      subtitle: "Reconnect with nature on a thrilling trek",
    },
  ];

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Background Swiper with text overlays */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          effect="fade"
          autoplay={{ delay: 5000 }}
          loop
          speed={1000}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                  <div className="bg-opacity-30 p-4 rounded-md">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-xl drop-shadow max-w-md mx-auto">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Form Content */}
      <div className="relative z-10 flex flex-col md:mt-24 justify-start items-center text-center text-white min-h-[100svh] px-4 pt-40 sm:pt-60 md:pt-[20rem] pb-10 md:pb-0">
        {/* Tabs */}
        <div className="flex space-x-2 mb-6 md:mt-16">
          <button
            onClick={() => switchTab("uttarakhand")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "uttarakhand"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Uttarakhand
          </button>
          <button
            onClick={() => switchTab("himachal")}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              activeTab === "himachal"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Himachal Pradesh
          </button>
        </div>

        {/* Form */}
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-4 items-end">
          {/* Location Dropdown */}
          <div className="flex flex-col w-full items-start relative">
            <label className="text-xs text-gray-500 mb-1 block">Location</label>
            <div
              onClick={() => handleDropdownToggle("location")}
              className="cursor-pointer w-full border border-gray-300 rounded-md px-3 py-2 bg-white flex justify-between items-center min-h-[44px]"
            >
              <div className="flex items-center gap-2 text-sm truncate">
                <FaMapMarkerAlt className="text-gray-500" />
                {location || (
                  <span className="text-gray-400">Where are you going?</span>
                )}
              </div>
              <FaChevronDown />
            </div>
            {activeDropdown === "location" && (
              <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-30 max-h-60 overflow-y-auto text-sm">
                {locations.map((loc, i) => (
                  <li
                    key={i}
                    onClick={() => handleLocationSelect(loc)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <FaMapMarkerAlt className="text-gray-500" />
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Travel Date */}
          <div className="flex flex-col w-full items-start">
  <label htmlFor="travelDate" className="text-xs text-gray-500 mb-1 block">
    Travel Date
  </label>
  <div className="relative w-full">
    <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
    <input
      id="travelDate"
      type={travelDate ? "date" : "text"} // dynamic switch
      placeholder="Select travel date"
      className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-sm min-h-[44px] outline-none text-gray-700"
      value={travelDate}
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => {
        if (!travelDate) e.target.type = "text";
      }}
      onChange={(e) => setTravelDate(e.target.value)}
    />
  </div>
</div>


          {/* Number of Travellers */}
          <div className="flex flex-col w-full items-start">
            <label htmlFor="passengers" className="text-xs text-gray-500 mb-1 block">
              Number of Travellers
            </label>
            <input
              id="passengers"
              type="number"
              min={1}
              placeholder="e.g. 2"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-sm min-h-[44px] outline-none"
              value={Travellers}
              onChange={(e) => setTravellers(e.target.value)}
            />
          </div>

          {/* Send Button */}
          <div className="w-full">
            <a
              href="https://wa.me/6239092532"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-600 transition duration-200 text-center block"
            >
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
