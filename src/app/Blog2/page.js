// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { FaRegClock, FaUsers, FaUndo } from "react-icons/fa";

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
//     <>
//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg mt-12"
//         style={{ backgroundImage: "url('/deal96.webp')" }}
//       >
//         <div className="bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl font-extrabold drop-shadow-lg text-gray-200">
//             Best Uttarakhand Tour Packages
//           </h1>
//           <h3 className="text-lg font-medium text-gray-200 mt-4">
//             Discover the tranquil beauty of Uttarakhand
//           </h3>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8">
//         {/* Blog Content */}
//         <div className="w-full lg:w-2/3">
//           <div className="rounded overflow-hidden">
//             <Image
//               src="/deal26.webp"
//               alt="Travel Deals"
//               width={500}
//               height={300}
//               className="w-full h-auto rounded-lg object-cover"
//             />
//           </div>

//           <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
//             <div className="flex items-center gap-1">
//               <span className="text-green-600">🧳</span>
//               <span>Travelit</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="text-green-600">📚</span>
//               <span>Blog</span>
//             </div>
//           </div>

//           <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
//             How to Get the Best Travel Deals & Discounts
//           </h1>

//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Vacation on the mind, but tight on budget? In this blog, we’ll guide
//             you on how to get the best travel deals and discounts for your
//             vacation! One way is by watching out for hidden charges and
//             restrictions.
//           </p>

//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Below are tips and tricks to help you get the best travel deals and
//             discounts.
//           </p>
//         </div>

//         {/* Sidebar */}
//         <aside className="w-full lg:w-1/3 space-y-8">
//           <div className="bg-gray-100 p-6 rounded-lg">
//             <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
//             <ul className="space-y-6">
//               {/* Post 1 */}
//               <li className="flex items-start gap-4">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/deal42.webp"
//                     alt=""
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-green-600 text-xs flex items-center gap-1">
//                     🗨️ 0 Comments
//                   </span>
//                   <span className="text-gray-900 font-medium">
//                     How to Get the Best Travel Deals & Discounts
//                   </span>
//                 </div>
//               </li>

//               {/* Post 2 */}
//               <li className="flex items-start gap-4">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/deal28.webp"
//                     alt=""
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-green-600 text-xs flex items-center gap-1">
//                     🗨️ 0 Comments
//                   </span>
//                   <span className="text-gray-900 font-medium">
//                     10 Essential Tips for Budget-Friendly Travel
//                   </span>
//                 </div>
//               </li>

//               {/* Post 3 */}
//               <li className="flex items-start gap-4">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/deal96.webp"
//                     alt=""
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-green-600 text-xs flex items-center gap-1">
//                     🗨️ 0 Comments
//                   </span>
//                   <span className="text-gray-900 font-medium">
//                     Top National Parks in India for Wildlife Safaris
//                   </span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>

//       {/* Trek Info & Booking Form */}
//       <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
//         <div className="flex-1">
//           {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             UTTARAKHAND TREK
//           </h1> */}

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             {/* <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>5 Nights 6 Days</span>
//             </div> */}
//             {/* <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Group Size: Unique</span>
//             </div> */}
//             {/* <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Cancellation: Up to 7 Days</span>
//             </div> */}
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Activity
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Uttarakhand Trek offers a thrilling adventure through some of
//             the most pristine and untouched landscapes in India. Experience
//             majestic views of snow-covered mountains, lush valleys, and vibrant
//             villages. Perfect for adventure enthusiasts and nature lovers!
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Be Flexible
//           </h2>
//           <p className="text-gray-600 mb-4">
//             To attain the best travel deals and discounts it’s best to be
//             flexible with dates, destinations, and travel times. In terms of
//             dates, look for flights and accomodation across different dates – to
//             find the cheapest option available. Also, one should try flying
//             during off-peak seasons or on weekdays, as this time is cheaper as
//             compared to weekends and peak seasons.
//           </p>

//           <h2 className="text-2xl font-bold mb-6">Compare Prices</h2>
      
//             <p className="text-gray-600 mb-4">
//               There are many websites by which you can compare flights and seek
//               the cheapest one for your travel. One can similiarly use various
//               websites to compare hotels and choose the most budget friendly
//               one. Also, it has been suggested that booking directly with the
//               airline or hotel can lead to better deals.
//             </p>
//             <h2 className="text-2xl font-bold mb-6">
//               Use Loyalty Programs and Discounts
//             </h2>
//             <p className="text-gray-600 mb-4">
//               One should sign up for airline loyalty programs to earn points and
//               miles that can be redeemed for future flights. Also, who can
//               forget hotel loyalty programs! This will help one earn points and
//               discounts for future stays. Apart from these one should keep an
//               eye out for promo codes and coupons from airlines, hotels and
//               travel agencies.
//             </p>
//             <h2 className="text-2xl font-bold mb-6">
             
//             </h2>
//           </div>
        

//         {/* Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 Book Now
//               </h3>
//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <input
//                   type="text"
//                   name="tripName"
//                   value={formData.tripName}
//                   readOnly
//                   className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
//                 />
//                 <input
//                   type="number"
//                   name="travellers"
//                   placeholder="No. of Travellers"
//                   value={formData.travellers}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-200"
//                 >
//                   Book via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegClock, FaUsers, FaUndo } from "react-icons/fa";

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
    <main className="pt-12">
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/deal96.webp')" }}
      >
        <div className=" bg-opacity-50 p-10 rounded-xl max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100">
            Best Uttarakhand Tour Packages
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Discover the tranquil beauty of Uttarakhand
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Left - Blog Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          <Image
            src="/deal26.webp"
            alt="Travel Deals"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">🧳 Travelit</span>
            <span className="flex items-center gap-1">📚 Blog</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How to Get the Best Travel Deals & Discounts
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Vacation on the mind, but tight on budget? In this blog, we’ll guide
            you on how to get the best travel deals and discounts for your
            vacation! One way is by watching out for hidden charges and
            restrictions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Below are tips and tricks to help you get the best travel deals and
            discounts.
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
                    {/* <span className="text-green-600 text-xs flex items-center gap-1">
                      🗨️ 0 Comments
                    </span> */}
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
        {/* Trek Info */}
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

          <h2 className="text-xl font-semibold text-gray-800">Compare Prices</h2>
          <p className="text-gray-600">
            Use flight and hotel comparison websites to find affordable options.
            Booking directly with providers may also give you extra discounts.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            Use Loyalty Programs and Discounts
          </h2>
          <p className="text-gray-600">
            Join loyalty programs and look for promo codes. Points can often be
            redeemed for flights and hotel stays.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800">
            
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

