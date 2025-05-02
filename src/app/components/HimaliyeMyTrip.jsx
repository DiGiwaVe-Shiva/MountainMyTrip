"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useRouter } from "next/navigation";

const tourPackages = [
  {
    title: "Kuari Pass Trek",
    nights: 5,
    days: 6,
    price: "7,000",
    discount: "12%",
    tag: "Seasonal Monsoon Trek",
    image: "/deal67.webp",
    link: "/kuaripass",
  },
  {
    title: "Gulabi Kantha Trek Package",
    nights: 5,
    days: 6,
    price: "9,499",
    discount: "10%",
    tag: "Seasonal Monsoon Trek",
    image: "/deal47.webp",
    link: "/GulabiKantha",
  },
  {
    title: "Dinara Top Trek",
    nights: 4,
    days: 5,
    price: "10,499",
    discount: "10%",
    tag: "Spring to Winter Trek",
    image: "/deal56.webp",
    link: "/DinaraTopTrek",
  },
  {
    title: "Kedarnath Trek Package",
    nights: 4,
    days: 5,
    price: "7,499",
    discount: "12%",
    tag: "Summer Spiritual Trek",
    image: "/deal52.webp",
    link: "/Kedarkantha",
  },
  {
    title: "Brahmatal Winter Trek",
    nights: 4,
    days: 5,
    price: "7,500",
    discount: "15%",
    tag: "Winter Special Trek",
    image: "/deal6.webp",
    link: "/Bramtal",
  },
  {
    title: "Valley of Flowers Trek Package",
    nights: 5,
    days: 6,
    price: "22,000",
    discount: "10%",
    tag: "Summer Bloom Trek",
    image: "/deal75.webp",
    link: "/Valleyflowers",
  },
  {
    title: "Chandrashila Trek",
    nights: 2,
    days: 3,
    price: "14,499",
    discount: "10%",
    tag: "All Season Weekend Trek",
    image: "/deal50.webp",
    link: "/Chandrashila",
  },
  {
    title: "Jalsupass Trek",
    nights: 2,
    days: 3,
    price: "20,499",
    discount: "10%",
    tag: "All Season Weekend Trek",
    image: "/deal90.webp",
    link: "/Jalsupass",
  },
  {
    title: "Har Ki Dun Trek",
    nights: 6,
    days: 7,
    price: "9,999",
    discount: "10%",
    tag: "Spring & Autumn Valley Trek",
    image: "/deal53.webp",
    link: "/Hariki",
  },
  {
    title: "Chopta Chandrashila Trek",
    nights: 3,
    days: 4,
    price: "7,999",
    discount: "12%",
    tag: "All Season Nature Trek",
    image: "/deal44.webp",
    link: "/Chopta",
  },
  {
    title: "Char Dham Yatra Package",
    nights: 10,
    days: 11,
    price: "30,000",
    discount: "8%",
    tag: "Spiritual Summer Yatra",
    image: "/deal40.webp",
    link: "/CharDham",
  },
  {
    title: "Bali Pass Trek",
    nights: 7,
    days: 8,
    price: "22,000",
    discount: "10%",
    tag: "High Altitude Summer Trek",
    image: "/deal64.webp",
    link: "/Balipass",
  },
  {
    title: "Sarutal Trek",
    nights: 6,
    days: 7,
    price: "15,499",
    discount: "10%",
    tag: "Offbeat Adventure Trek",
    image: "/deal57.webp",
    link: "/Sarutal",
  },
  {
    title: "Dodital Trek",
    nights: 4,
    days: 5,
    price: "15,000",
    discount: "12%",
    tag: "Spring & Winter Trek",
    image: "/deal26.webp",
    link: "/Dodital",
  },

];

const HimaliyeMyTripCarousel = () => {
  const router = useRouter();

  return (
    <section className="pt-4 mt-8 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-[1430px] mx-auto relative z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Check our Seasonal Treks
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        cssMode={false}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={false}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="z-0"
      >
        {tourPackages.map((tour, index) => (
          <SwiperSlide key={index} className="pb-4 flex-shrink-0">
           <div className="bg-white border border-orange-500 rounded-2xl overflow-hidden shadow-[0px_10px_20px_rgba(0,0,0,0.1)] flex flex-col h-full min-h-[470px]">
              <Link href={tour.link}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
              </Link>

              <div className="p-4 flex flex-col justify-between flex-grow">
                {/* Duration and Tag */}
                <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                  <span>
                    {tour.nights} Nights – {tour.days} Days
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {tour.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {tour.title}
                </h3>

                {/* Price and Discount */}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-orange-600 font-bold text-base">
                    Starting From ₹ {tour.price}
                  </p>
                  <span className="inline-block text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                    SAVE UPTO {tour.discount}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:items-center">
                  <button
                    type="button"
                    className="border border-orange-500 text-orange-500 p-2 rounded-full flex items-center justify-center w-full sm:w-auto outline-none"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "tel:+911234567890";
                    }}
                  >
                    <MdOutlineLocalPhone className="text-xl" />
                  </button>
                  <button
                    onClick={() => router.push(tour.link)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full w-full sm:w-auto outline-none"
                  >
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HimaliyeMyTripCarousel;
