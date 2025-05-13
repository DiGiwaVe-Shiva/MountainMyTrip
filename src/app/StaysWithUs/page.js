// "use client";

// import React, { useState } from "react";
// import HimTrek from "../components/HimTrek";

// const StayWithUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     daysoftravel: "",
//     travellers: "",
//   });

//   const stays = [
//     {
//       title: "Scenic Homestays",
//       description:
//         "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Cozy rooms, warm hospitality, and stunning views await.",
//       image: "/deal99.jpg",
//       nights: 6,
//       days: 7,
//       price: "15,499",
//       discount: "10%",
//     },
//   ];

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Stay Inquiry* 🏕️

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Days of Travel / Trip Plan:* ${formData.daysoftravel}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and more details.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <main className="bg-white text-gray-800 mb-6">
//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center h-[400px] flex items-center justify-center text-white  shadow-lg"
//         style={{ backgroundImage: "url('/deal97.webp')" }}
//       >
//         <div className="bg-opacity-50 p-10 rounded-xl">
//           <h1 className="text-5xl font-extrabold drop-shadow-lg">
//             Stay With Us
//           </h1>
//         </div>
//       </section>

//       <section className="w-full bg-white px-4 py-16 sm:px-8 lg:px-20 xl:px-40">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Authentic Homestays in Uttarakhand
//           </h2>
//           <p className="text-xl font-semibold text-orange-600 mb-6">
//             Experience Local Living in the Heart of the Himalayas
//           </p>

//           <p className="text-gray-700 text-lg mb-4">
//             At Uttarakhand Treks, your journey doesn’t end when the trek does—it
//             deepens. Our carefully selected homestays in Uttarakhand offer more
//             than just a place to rest—they offer a genuine Himalayan experience.
//           </p>
//           <p className="text-gray-700 text-lg mb-6">
//             Whether you’re in a remote mountain village, sipping tea on a porch
//             overlooking the valley, or sharing stories around a bonfire, staying
//             with us means you’re part of the community.
//           </p>

//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//             Why Choose a Homestay in Uttarakhand?
//           </h3>

//           <ul className="space-y-4 text-gray-700 text-base mb-8">
//             <li>
//               🏡 <strong>Authentic Village Experience:</strong> Live in
//               traditional Kumaoni or Garhwali homes with natural materials and
//               warm aesthetics.
//             </li>
//             <li>
//               🍲 <strong>Home-Cooked Local Cuisine:</strong> Enjoy mandua rotis,
//               pahadi dal, buransh juice—farm-to-table meals made with love.
//             </li>
//             <li>
//               🧡 <strong>Cultural Immersion:</strong> Join local festivals, folk
//               music, and explore traditions and handicrafts.
//             </li>
//             <li>
//               🏞️ <strong>Comfort Meets Simplicity:</strong> Cozy rooms, basic
//               amenities, and warm hospitality make your stay peaceful and
//               meaningful.
//             </li>
//           </ul>

//           <ul className="space-y-4 text-gray-700 text-base mb-8">
//             <li>
//               🌵 <strong>Riverside Homestay – Bhagirathi Valley:</strong> A
//               retreat by the river with orchards and terraced fields—perfect for
//               families.
//             </li>
//             <li>
//               🌲 <strong>Forest-Edge Cottage – Binsar:</strong> Live amidst
//               forests with bird watching and nature trails—a peaceful gem.
//             </li>
//           </ul>

//           <p className="text-gray-800 text-lg font-semibold mb-2">
//             More Than Just a Stay—It’s a Connection
//           </p>
//           <p className="text-gray-700 text-base mb-6">
//             When you choose to stay with us in Uttarakhand, you support local
//             families, help preserve mountain culture, and become part of a
//             sustainable travel movement. Our homestays offer a rare blend of
//             warmth, wisdom, and wonder—exactly what travel should be.
//           </p>

//           <p className="text-gray-800 font-semibold text-lg mb-2">
//             Book Your Homestay in Uttarakhand Today
//           </p>
//           <p className="text-gray-700 text-base">
//             Get in touch to check availability, build your customized stay
//             itinerary, or combine your trek with a village retreat for a
//             complete Himalayan experience.
//           </p>
//         </div>
//       </section>

//       {/* Main Content Grid */}
//       <section className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Stay Cards */}
//         <div className="lg:col-span-2 space-y-8">
//           {stays.map((stay, idx) => (
//             <article
//               key={idx}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
//             >
//               <img
//                 src={stay.image}
//                 alt={stay.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h4 className="text-xl font-bold mb-2">{stay.title}</h4>
//                 <p className="text-gray-600">{stay.description}</p>
//               </div>
//             </article>
//           ))}
//         </div>
//         {/* <div className="max-w-sm mx-auto border border-orange-500 rounded-xl overflow-hidden shadow-md bg-white transition hover:shadow-lg">
//       <div className="relative w-full h-52">
//         <Image
//           src="/stay-banner.jpg" // Place your image in public/stay-banner.jpg
//           alt="Stay With Us"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-t-xl"
//         />
//       </div>

//       <div className="p-4">
//         <div className="flex justify-between items-center text-gray-500 text-sm mb-2">
//           <span>3 Nights – 4 Days</span>
//           <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
//             Stay With Us
//           </span>
//         </div>

//         <h3 className="text-lg font-semibold text-gray-800 mb-2">
//           Himalayan Homestay Retreat
//         </h3>

//         <p className="text-orange-600 font-bold mb-3 text-sm">
//           Starting From ₹ 7,999
//         </p>

//         <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
//           SAVE UPTO 20%
//         </span>

//         <button className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full text-sm font-semibold transition">
//           <FaPhoneAlt className="text-sm" />
//           Explore Stay
//         </button>
//       </div>
//     </div> */}

//         {/* Booking Form */}
//         <aside className="w-full">
//           <div className="lg:sticky lg:top-24">
//             <div className="bg-white shadow-xl rounded-2xl p-8 border h-full flex flex-col justify-between">
//               <header>
//                 <h4 className="text-xl font-bold mb-2">Book Your Stay</h4>
//                 <p className="text-sm text-green-600 font-medium mb-4">
//                   Weekend Departures Available
//                 </p>
//                 <p className="text-lg font-bold text-red-600 mb-6">
//                   Starting From: <span className="text-gray-800">₹2,499</span>
//                 </p>
//               </header>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email (optional)"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="text"
//                   name="daysoftravel"
//                   placeholder="Days of Travel / Trip Name"
//                   value={formData.daysoftravel}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="number"
//                   name="travellers"
//                   placeholder="Number of Travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
//                 >
//                   Send Booking via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </aside>
//       </section>

//       {/* Footer / Bottom CTA */}
//       {/* <section className="bg-orange-100 py-12 text-center px-4">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
//           Ready to Book Your Stay?
//         </h2>
//         <p className="text-gray-700 mb-6">
//           Let us help you find the perfect place to relax after your trek—
//           scenic, cozy, and unforgettable.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-700 transition"
//         >
//           Contact Us Now
//         </a>
//       </section> */}

//       <HimTrek />
//     </main>
//   );
// };

// export default StayWithUs;
"use client";

import React, { useState } from "react";
import HimTrek from "../components/HimTrek";

const StayWithUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    daysoftravel: "",
    travellers: "",
  });

  const stays = [
    {
      title: "Scenic Homestays",
      description:
        "Immerse yourself in the local culture with our handpicked homestays nestled in the serene Himalayas. Whether you're sipping tea on a mountain porch, sharing stories around a bonfire, or waking to birdsong and river breezes, staying with us offers an authentic Himalayan experience. Enjoy farm-fresh meals, explore village life, and connect with nature in its purest form. It's more than a stay—it's a return to simplicity, warmth, and belonging. Cozy rooms, warm hospitality, and stunning views await.",
      image: "/hotel.jpg",
      nights: 4,
      days: 5,
      price: "12,499",
      discount: "10%",
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Stay Inquiry* 🏕️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ""}
*Days of Travel / Trip Plan:* ${formData.daysoftravel}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and more details.`;

    const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="bg-white text-gray-800 mb-6">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/deal97.webp')" }}
      >
        <div className="bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Stay With Us
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="w-full bg-white px-4 py-16 sm:px-8 lg:px-20 xl:px-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Authentic Homestays in Uttarakhand
          </h2>
          <p className="text-xl font-semibold text-orange-600 mb-6">
            Experience Local Living in the Heart of the Himalayas
          </p>

          <p className="text-gray-700 text-lg mb-4">
            At Uttarakhand Treks, your journey doesn’t end when the trek does—it
            deepens. Our carefully selected homestays in Uttarakhand offer more
            than just a place to rest—they offer a genuine Himalayan experience.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Whether you’re in a remote mountain village, sipping tea on a porch
            overlooking the valley, or sharing stories around a bonfire, staying
            with us means you’re part of the community.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose a Homestay in Uttarakhand?
          </h3>

          <ul className="space-y-4 text-gray-700 text-base mb-8">
            <li>
              🏡 <strong>Authentic Village Experience:</strong> Live in
              traditional Kumaoni or Garhwali homes with natural materials and
              warm aesthetics.
            </li>
            <li>
              🍲 <strong>Home-Cooked Local Cuisine:</strong> Enjoy mandua rotis,
              pahadi dal, buransh juice—farm-to-table meals made with love.
            </li>
            <li>
              🧡 <strong>Cultural Immersion:</strong> Join local festivals, folk
              music, and explore traditions and handicrafts.
            </li>
            <li>
              🏞️ <strong>Comfort Meets Simplicity:</strong> Cozy rooms, basic
              amenities, and warm hospitality make your stay peaceful and
              meaningful.
            </li>
          </ul>
        </div>
      </section>

      {/* Cards + Form Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stay Cards */}
        <div className="lg:col-span-2 space-y-6">
          {stays.map((stay, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden  transition-transform duration-300 h-full flex flex-col justify-between"
            >
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-2xl font-bold mb-2">{stay.title}</h4>
                  <p className="text-gray-600 text-[18px] mb-4">{stay.description}</p>
                </div>
                <div className="mt-4 space-y-2 text-[18px] text-gray-700 font-medium">
                  <p>🕒 Duration: {stay.nights} Nights / {stay.days} Days</p>
                  <p>💸 Price: ₹{stay.price}</p>
                  <p>🎁 Discount: {stay.discount} OFF</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Booking Form */}
        <aside className="w-full h-full">
          <div className="lg:sticky lg:top-24 h-full">
            <div className="bg-white shadow-xl rounded-2xl p-8 border h-full flex flex-col justify-between">
              <header>
                <h4 className="text-xl font-bold mb-2">Book Your Stay</h4>
                <p className="text-sm text-green-600 font-medium mb-4">
                  Weekend Departures Available
                </p>
                <p className="text-lg font-bold text-red-600 mb-6">
                  Starting From: <span className="text-gray-800">₹2,499</span>
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="text"
                  name="daysoftravel"
                  placeholder="Days of Travel / Trip Name"
                  value={formData.daysoftravel}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="number"
                  name="travellers"
                  placeholder="Number of Travellers"
                  value={formData.travellers}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
                >
                  Send Booking via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </aside>
      </section>

      {/* Footer CTA */}
      <HimTrek />
    </main>
  );
};

export default StayWithUs;

