

// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const teamMembers = [
//   {
//     name: "Vikash Panwar",
//     role: "Founder & CEO",
//     bio: "Leads the vision and operations behind every Himalayan adventure.",
//     image: "/vikash.jpg",
//   },
//   {
//     name: "Avtar Panwar",
//     role: "Slot Manager",
//     bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
//     image: "/Avtar.jpg",
//   },
//   {
//     name: "Kunal Gosh",
//     role: "Founder",
//     bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
//     image: "/kunal.jpg",
//   },
//   {
//     name: "Akhil Panwar",
//     role: "Trek Leader",
//     bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
//     image: "/1.webp",
//   },
//   {
//     name: "Deepika",
//     role: "Assistant Trek Leader",
//     bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
//     image: "/Dipika.webp",
//   },

//   {
//     name: "Shubham Panwar",
//     role: "Marketing Manager",
//     bio: "Drives marketing efforts to bring treks to passionate explorers.",
//     image: "/Slot.webp",
//   },
//   {
//     name: "Kapil Rana",
//     role: "Cook",
//     bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
//     image: "/kapil.jpg",
//   },
//   {
//     name: "Pardeep Sherpa",
//     role: "High Altitude Porter",
//     bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
//     image: "/deal 103.jpg",
//   },
// ];

// const TeamCarousel = () => {
//   return (
//     <>
//       {/* Carousel Section */}
//       <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
//         <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
//           Meet Our Team
//         </h2>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           spaceBetween={20}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white max-w-sm mx-auto rounded-2xl border  border-orange-500 p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.03] duration-300">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-100 shadow-sm"
//                 />
//                 <h3 className="text-lg font-bold text-gray-800 mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm text-orange-600 font-medium mb-2">
//                   {member.role}
//                 </p>
//                 <p className="text-sm text-gray-600 mb-2 px-2">{member.bio}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default TeamCarousel;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const teamMembers = [
  {
    name: "Vikash Panwar",
    role: "Founder & CEO",
    bio: "Leads the vision and operations behind every Himalayan adventure.",
    image: "/vikash.jpg",
  },
  {
    name: "Avtar Panwar",
    role: "Slot Manager",
    bio: "Expert trek scheduler ensuring smooth coordination, timing, and team flow.",
    image: "/Avtar.jpg",
  },
  {
    name: "Kunal Gosh",
    role: "Founder",
    bio: "Founder & certified mountaineer leading with passion, purpose, and mountain wisdom.",
    image: "/kunal.jpg",
  },
  {
    name: "Akhil Panwar",
    role: "Trek Leader",
    bio: "Expert trekker who ensures every journey is adventurous, safe, and memorable.",
    image: "/1.webp",
  },
  {
    name: "Deepika",
    role: "Assistant Trek Leader",
    bio: "Certified mountaineer committed to guiding and inspiring trekkers through every step.",
    image: "/dipika2.jpeg",
  },
  {
    name: "Shubham Panwar",
    role: "Marketing Manager",
    bio: "Drives marketing efforts to bring treks to passionate explorers.",
    image: "/Slot.webp",
  },
  {
    name: "Kapil Rana",
    role: "Cook",
    bio: "Keeps trekkers energized with delicious and nourishing meals on every adventure.",
    image: "/kapil.jpg",
  },
  {
    name: "Pardeep Sherpa",
    role: "High Altitude Porter",
    bio: "Strong and reliable, he supports high-altitude treks with unmatched endurance.",
    image: "/deal 103.jpg",
  },
];

const TeamCarousel = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-20 bg-white max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
        Meet Our Team
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white max-w-sm mx-auto rounded-2xl border-2 border-orange-500 p-6 flex flex-col items-center text-center transition-transform">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-orange-100"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-orange-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 mb-2 px-2">{member.bio}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamCarousel;

