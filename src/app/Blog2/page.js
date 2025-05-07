// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

// export default function BlogPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Uttarakhand Trek",
//     travellers: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trek Booking Request* 🚶‍♂️🌄

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// *Email:* ${formData.email}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and next steps.`;

//     const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <main className="pt-12">
//       {/* Hero Section */}
//       <section
//         className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
//         style={{ backgroundImage: "url('/deal96.webp')" }}
//       >
//         <div className="bg-opacity-50 p-10 rounded-xl max-w-2xl">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-100">
//             Best Uttarakhand Tour Packages
//           </h1>
//           <p className="mt-4 text-lg text-gray-200">
//             Discover the tranquil beauty of Uttarakhand
//           </p>
//         </div>
//       </section>

//       {/* Main Content Area */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
//         {/* Left - Blog Content */}
//         <div className="w-full lg:w-2/3 space-y-6">
//           {/* <Image
      
//            src="/deal26.webp"
//            alt="Travel Deals"
//            width={800}
//            height={400}
//          />
//           */}
//           <Image
//             src="/deal26.webp"
//             alt="Travel Deals"
//             width={720}
//             height={200}
//           />

//           <div className="flex items-center gap-4 text-sm text-gray-600">
//             <span className="flex items-center gap-1">🧳 Travelit</span>
//             <span className="flex items-center gap-1">📚 Blog</span>
//           </div>

//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             How to Get the Best Travel Deals & Discounts
//           </h2>

//           {/* ⭐ Rating */}
//           <div className="flex items-center gap-1 text-yellow-500 text-xl">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//             <span className="text-sm text-gray-600 ml-2">
//               5.0 (3.2k reviews)
//             </span>
//           </div>

//           <p className="text-gray-700 leading-relaxed">
//             Vacation on the mind, but tight on budget? In this blog, we’ll guide
//             you on how to get the best travel deals and discounts for your
//             vacation! One way is by watching out for hidden charges and
//             restrictions.
//           </p>
//         </div>

//         {/* Right - Sidebar */}
//         <aside className="w-full lg:w-1/3 space-y-8">
//           <div className="bg-gray-100 p-6 rounded-lg shadow">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//               Recent Posts
//             </h3>
//             <ul className="space-y-6">
//               {[
//                 {
//                   title: "How to Get the Best Travel Deals & Discounts",
//                   image: "/deal42.webp",
//                 },
//                 {
//                   title: "10 Essential Tips for Budget-Friendly Travel",
//                   image: "/deal28.webp",
//                 },
//                 {
//                   title: "Top National Parks in India for Wildlife Safaris",
//                   image: "/deal96.webp",
//                 },
//               ].map((post, index) => (
//                 <li key={index} className="flex items-start gap-4">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover"
//                   />
//                   <div>
//                     <p className="text-gray-900 font-medium">{post.title}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//       </section>

//       {/* Info + Booking */}
//       <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
//         {/* Info Section */}
//         <div className="flex-1 space-y-6">
//           <h2 className="text-xl font-semibold text-gray-800">
//             About this Activity
//           </h2>
//           <p className="text-gray-600">
//             The Uttarakhand Trek offers a thrilling adventure through some of
//             the most pristine and untouched landscapes in India. Experience
//             majestic views of snow-covered mountains, lush valleys, and vibrant
//             villages. Perfect for adventure enthusiasts and nature lovers!
//           </p>

//           <h2 className="text-xl font-semibold text-gray-800">Be Flexible</h2>
//           <p className="text-gray-600">
//             To attain the best travel deals and discounts, it’s best to be
//             flexible with dates, destinations, and travel times. Off-peak days
//             and weekdays are often cheaper than weekends.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-800">
//             Compare Prices
//           </h2>
//           <p className="text-gray-600">
//             Use flight and hotel comparison websites to find affordable options.
//             Booking directly with providers may also give you extra discounts.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-800">
//             Use Loyalty Programs
//           </h2>
//           <p className="text-gray-600">
//             Join loyalty programs and look for promo codes. Points can often be
//             redeemed for flights and hotel stays.
//           </p>
//         </div>

//         {/* Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24 bg-white border rounded-2xl p-6 shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//               Book Now
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <input
//                 type="text"
//                 name="tripName"
//                 value={formData.tripName}
//                 readOnly
//                 className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//               />
//               <input
//                 type="number"
//                 name="travellers"
//                 placeholder="No. of Travellers"
//                 value={formData.travellers}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition"
//               >
//                 Book via WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function BlogPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Uttarakhand Trek",
    travellers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trek Booking Request* 🚶‍♂️🌄

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/deal96.webp')" }}
      >
        <div className="bg-opacity-50 p-10 rounded-xl max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100">
            Best Uttarakhand Tour Packages
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Discover the tranquil beauty of Uttarakhand
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        {/* Left - Blog Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          <Image
            src="/deal26.webp"
            alt="Travel Deals"
            width={720}
            height={200}
          />

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">🧳 Travelit</span>
            <span className="flex items-center gap-1">📚 Blog</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How to Get the Best Travel Deals & Discounts
          </h2>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm text-gray-600 ml-2">5.0 (3.2k reviews)</span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Vacation on the mind, but tight on budget? In this blog, we’ll guide
            you on how to get the best travel deals and discounts for your
            vacation! One way is by watching out for hidden charges and
            restrictions.
          </p>
        </div>

        {/* Right - Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Recent Posts
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: "How to Get the Best Travel Deals & Discounts",
                  image: "/deal42.webp",
                },
                {
                  title: "10 Essential Tips for Budget-Friendly Travel",
                  image: "/deal28.webp",
                },
                {
                  title: "Top National Parks in India for Wildlife Safaris",
                  image: "/deal96.webp",
                },
              ].map((post, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="text-gray-900 font-medium">{post.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* Info + Booking */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
        {/* Info Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            About this Activity
          </h2>
          <p className="text-gray-600">
            The Uttarakhand Trek offers a thrilling adventure through some of
            the most pristine and untouched landscapes in India. Experience
            majestic views of snow-covered mountains, lush valleys, and vibrant
            villages. Perfect for adventure enthusiasts and nature lovers!
          </p>

          <h2 className="text-xl font-semibold text-gray-800">Be Flexible</h2>
          <p className="text-gray-600">
            To attain the best travel deals and discounts, it’s best to be
            flexible with dates, destinations, and travel times. Off-peak days
            and weekdays are often cheaper than weekends.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            Compare Prices
          </h2>
          <p className="text-gray-600">
            Use flight and hotel comparison websites to find affordable options.
            Booking directly with providers may also give you extra discounts.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            Use Loyalty Programs
          </h2>
          <p className="text-gray-600">
            Join loyalty programs and look for promo codes. Points can often be
            redeemed for flights and hotel stays.
          </p>
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24 bg-white border rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Book Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                name="tripName"
                value={formData.tripName}
                readOnly
                className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
              />
              <input
                type="number"
                name="travellers"
                placeholder="No. of Travellers"
                value={formData.travellers}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition"
              >
                Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

