"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useRouter } from "next/navigation";

const himachalTreks = [
  {
    title: "Hampta Pass Trek",
    nights: 5,
    days: 6,
    price: "6,499",
    discount: "15%",
    tag: "Monsoon Crossover Trek",
    image: "/deal105.jpg",
    link: "/",
  },
  {
    title: "Triund Trek",
    nights: 1,
    days: 2,
    price: "1,999",
    discount: "10%",
    tag: "Weekend Easy Trek",
    image: "/deal104.jpg",
    link: "/",
  },
  {
    title: "Laka Glacier Trek",
    nights: 2,
    days: 3,
    price: "3,499",
    discount: "12%",
    tag: "Glacier Adventure Trek",
    image: "/deal106.jpg",
    link: "/",
  },
  {
    title: "Friendship Peak Expedition",
    nights: 6,
    days: 7,
    price: "20,000",
    discount: "10%",
    tag: "High Altitude Summit",
    image: "/deal107.webp",
    link: "/",
  },
  {
    title: "Kanamo Peak Trek",
    nights: 5,
    days: 6,
    price: "18,000",
    discount: "10%",
    tag: "Spiti Valley Summit",
    image: "/deal108.jpg",
    link: "/",
  },
  {
    title: "Patalsu Peak Trek",
    nights: 3,
    days: 4,
    price: "4,999",
    discount: "12%",
    tag: "Short Himalayan Trek",
    image: "/deal110.webp",
    link: "/",
  },
 
];

const HimachalTreks = () => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const visibleTreks = showAll ? himachalTreks : himachalTreks.slice(0, 6);

  return (
    <section className="pb-12 pt-4 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-[1440px] mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Explore Treks in Himachal Pradesh
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTreks.map((trek, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-[0px_10px_20px_rgba(0,0,0,0.1)] flex flex-col h-full"
          >
            <Link href={trek.link}>
              <img
                src={trek.image}
                alt={trek.title}
                className="w-full h-56 object-cover"
              />
            </Link>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>
                  {trek.nights} Nights – {trek.days} Days
                </span>
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {trek.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {trek.title}
              </h3>

              <div className="flex items-center justify-between mt-1">
                <p className="text-orange-600 font-bold text-base">
                  Starting From ₹ {trek.price}
                </p>
                <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                  SAVE UPTO {trek.discount}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-3">
                <button
                  type="button"
                  className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "tel:+911234567890";
                  }}
                >
                  <MdOutlineLocalPhone className="text-xl" />
                </button>
                <button
                  onClick={() => router.push(trek.link)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            See All Treks
          </button>
        </div>
      )}
    </section>
  );
};

export default HimachalTreks;
