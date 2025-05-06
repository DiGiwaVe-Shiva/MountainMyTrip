"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaHandPointRightSolid } from "react-icons/lia";

export default function DiscountSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto py-12 px-6 md:px-12">
      {/* Text Content - Shows First on Mobile */}
      <div className="w-full md:w-1/2 text-center md:pl-4 md:text-left mt-10 md:mt-0 order-1 md:order-2">
        <h3 className="text-[#F54900] italic text-lg">Get to know us</h3>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
          Plan Your Adventure with
          <span className="text-[#F54900] font-bold">MountainMyTrip</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Get ready for an unforgettable adventure with MountainMyTrip, your
          go-to partner for mountain trekking in India! We specialize in
          expertly guided treks through Uttarakhand, making sure you have a
          safe, smooth, and thrilling experience surrounded by the stunning
          Himalayas.
        </p>
        <ul className="mt-6 space-y-3 text-left">
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-5 w-5" />
            Expert-Guided Treks – Our experienced guides prioritize your safety
            while sharing their local knowledge.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-5 w-5" />
            Customized Itineraries – We create personalized plans that cater to
            both beginners and seasoned trekkers.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-5 w-5" />
            Scenic Trails – Discover breathtaking landscapes, from lush alpine
            meadows to majestic snow-capped peaks.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-5 w-5" />
            Hassle-Free Experience – We take care of everything, from permits to
            accommodations, so you can focus on enjoying your trek.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-5 w-5" />
            Safety First – We’re equipped with all the essential gear and
            emergency support to keep you safe.
          </li>
          <li className="flex items-center text-gray-800">
            <LiaHandPointRightSolid className="text-[#F54900] mr-2 h-5 w-5" />
            Let MountainMyTrip be your ticket to an incredible trekking
            adventure in Uttarakhand!
          </li>
        </ul>
      </div>

      {/* Image Section - Shows Second on Mobile */}
      <div className="relative w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-8 md:mt-0">
        <div className="relative">
          <Image
            src="/deal39.webp"
            alt="Trekking Adventure"
            width={600}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute top-12 left-4 bg-[#F54900] text-white px-4 py-2 rounded-md text-xl font-bold shadow-md">
            30% Discount
          </div>
        </div>
      </div>
    </section>
  );
}
