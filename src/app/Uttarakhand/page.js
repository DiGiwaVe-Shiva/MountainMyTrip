// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import {
//   FaRegClock,
//   FaUsers,
//   FaUndo,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
// import MyTrip from "../components/SarPassTrek";

// // const destinations = [
// //   { name: "", src: "/uttarakhand1.webp", gridClass: "lg:col-span-2" },
// //   { name: "", src: "/uttarakhand2.webp" },
// //   { name: "", src: "/uttarakhand3.webp" },
// //   //   { name: "", src: "/uttarakhand4.webp", gridClass: "lg:row-span-2" },
// //   { name: "", src: "/uttarakhand5.webp" },
// //   { name: "", src: "/uttarakhand6.webp" },
// //   //   { name: "", src: "/uttarakhand7.webp" },
// // ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival in Uttarkashi",
//     content: `• Arrive in Uttarkashi, the gateway to Uttarakhand.\n• Meet your trek leaders and fellow adventurers.\n• Briefing on the trek, safety measures, and gear check.\n• Stay overnight in a cozy guesthouse or camp.`,
//   },
//   {
//     title: "Day 2: Trek to the Base Camp",
//     content: `• Begin your trek through dense forests and scenic meadows.\n• Enjoy panoramic views of the Himalayan peaks.\n• Reach the base camp and relax for the evening.\n• Bonfire under the stars and dinner at the campsite.`,
//   },
//   {
//     title: "Day 3: Summit Day",
//     content: `• Early morning ascent to the summit.\n• Enjoy breathtaking 360-degree views of the Garhwal Himalayas.\n• Explore and capture memories of this pristine location.\n• Return to the base camp for a well-deserved rest.`,
//   },
//   {
//     title: "Day 4: Descend to the Base Village",
//     content: `• Descend through scenic trails, capturing the beauty of the region.\n• Enjoy a relaxed afternoon in the base village.\n• Celebrate the successful completion of your trek with the group.`,
//   },
//   {
//     title: "Day 5: Departure",
//     content: `• Morning breakfast and farewell to fellow trekkers.\n• Departure from Uttarkashi with cherished memories.\n• Optional sightseeing in Uttarkashi before heading back home.`,
//   },
// ];

// export default function UttarakhandTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Uttarakhand Trek",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

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
//       <div
//         className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
//         style={{
//           backgroundImage: "url('deal112.webp')",
//         }}
//       >
//         <div className=" bg-opacity-50 p-12 rounded-xl">
//           <h1 className="text-5xl text-gray-200 font-extrabold drop-shadow-lg">
//             Best Uttarakhand Tour Packages
//           </h1>
//           {/* <h3 className="text-lg mt-4 font-light">
//               Discover the Himalayas like never before—one step at a time.
//             </h3> */}
//           <h3 className="text-lg font-medium text-gray-200 mt-4 ">
//             Discover the tranquil beauty of Uttarakhand
//           </h3>
//         </div>
//       </div>
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-4"></section>

//       {/* Main Content + Booking Form */}
//       <section className="max-w-7xl mx-auto px-4  flex flex-col md:flex-row gap-10">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
//             Explore the Heart of the Himalayas with Uttarakhand Treks
//           </h1>

//           {/* <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />
//               <span>5 Nights 6 Days</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               <span>Group Size: Unique</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               <span>Cancellation: Up to 7 Days</span>
//             </div>
//           </div> */}

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Your Gateway to the Most Breathtaking Treks in India
//           </h2>
//           <p className="text-gray-600 mb-4">
//             Welcome to <b>Uttarakhand Treks,</b> your trusted partner in
//             discovering the awe-inspiring beauty of the Indian Himalayas.
//             Located in the spiritually rich and naturally stunning state of
//             Uttarakhand, also known as the "Land of the Gods," we offer curated
//             trekking experiences that connect you deeply with nature, culture,
//             and adventure.
//             <br></br>
//             <br></br>
//             <b>Uttarakhand Treks</b> specializes in a wide range of Himalayan
//             treks—perfect for beginners, nature enthusiasts, and seasoned
//             trekkers alike. From lush alpine meadows and scenic lakes to
//             snow-clad peaks and sacred valleys, every trail offers a unique
//             glimpse into the magic of the mountains.
//             <br></br>
//             <br></br>
//             Our treks are designed to be immersive and safe, guided by local
//             experts who understand the terrain, traditions, and tales of the
//             region. Whether you want to witness breathtaking Himalayan sunrises,
//             explore hidden trails, or simply escape into the wilderness,
//             Uttarakhand Treks is your ultimate destination for unforgettable
//             trekking adventures.
//           </p>

//           {/* Itinerary Section */}
//           <div className="my-8"></div>
//         </div>

//         {/* Sticky Booking Form (Right) */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-2">
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
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
//                 >
//                   Send Booking via WhatsApp
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <MyTrip />
//     </>
//   );
// }

"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaRegClock,
  FaUsers,
  FaUndo,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import MyTrip from "../components/SarPassTrek";

// const destinations = [
//   { name: "", src: "/uttarakhand1.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/uttarakhand2.webp" },
//   { name: "", src: "/uttarakhand3.webp" },
//   //   { name: "", src: "/uttarakhand4.webp", gridClass: "lg:row-span-2" },
//   { name: "", src: "/uttarakhand5.webp" },
//   { name: "", src: "/uttarakhand6.webp" },
//   //   { name: "", src: "/uttarakhand7.webp" },
// ];

const itinerary = [
  {
    title: "Day 1: Arrival in Uttarkashi",
    content: `• Arrive in Uttarkashi, the gateway to Uttarakhand.\n• Meet your trek leaders and fellow adventurers.\n• Briefing on the trek, safety measures, and gear check.\n• Stay overnight in a cozy guesthouse or camp.`,
  },
  {
    title: "Day 2: Trek to the Base Camp",
    content: `• Begin your trek through dense forests and scenic meadows.\n• Enjoy panoramic views of the Himalayan peaks.\n• Reach the base camp and relax for the evening.\n• Bonfire under the stars and dinner at the campsite.`,
  },
  {
    title: "Day 3: Summit Day",
    content: `• Early morning ascent to the summit.\n• Enjoy breathtaking 360-degree views of the Garhwal Himalayas.\n• Explore and capture memories of this pristine location.\n• Return to the base camp for a well-deserved rest.`,
  },
  {
    title: "Day 4: Descend to the Base Village",
    content: `• Descend through scenic trails, capturing the beauty of the region.\n• Enjoy a relaxed afternoon in the base village.\n• Celebrate the successful completion of your trek with the group.`,
  },
  {
    title: "Day 5: Departure",
    content: `• Morning breakfast and farewell to fellow trekkers.\n• Departure from Uttarkashi with cherished memories.\n• Optional sightseeing in Uttarkashi before heading back home.`,
  },
];

export default function UttarakhandTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Uttarakhand Trek",
    travellers: "",
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-cover mt-12 bg-center h-[400px] flex items-center justify-center text-white text-center shadow-lg"
        style={{
          backgroundImage: "url('deal112.webp')",
        }}
      >
        <div className="bg-opacity-50 p-12 rounded-xl">
          <h1 className="text-4xl sm:text-5xl text-white  font-extrabold drop-shadow-lg">
            Best Uttarakhand Tour Packages
          </h1>
          <h3 className="text-lg font-medium text-white mt-4">
            Discover the tranquil beauty of Uttarakhand
          </h3>
        </div>
      </div>

      {/* Main Content + Booking Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
              Explore the Heart of the Himalayas with Uttarakhand Treks
            </h1>

            <p className="text-gray-600 mb-4">
              Welcome to <b>Uttarakhand Treks,</b> your trusted partner in
              discovering the awe-inspiring beauty of the Indian Himalayas.
              Located in the spiritually rich and naturally stunning state of
              Uttarakhand, also known as the "Land of the Gods," we offer curated
              trekking experiences that connect you deeply with nature, culture,
              and adventure.
              <br />
              <br />
              <b>Uttarakhand Treks</b> specializes in a wide range of Himalayan
              treks—perfect for beginners, nature enthusiasts, and seasoned
              trekkers alike. From lush alpine meadows and scenic lakes to
              snow-clad peaks and sacred valleys, every trail offers a unique
              glimpse into the magic of the mountains.
              <br />
              <br />
              Our treks are designed to be immersive and safe, guided by local
              experts who understand the terrain, traditions, and tales of the
              region. Whether you want to witness breathtaking Himalayan
              sunrises, explore hidden trails, or simply escape into the
              wilderness, Uttarakhand Treks is your ultimate destination for
              unforgettable trekking adventures.
            </p>
          </div>

          {/* Sticky Booking Form (Right) */}
          <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white shadow-lg rounded-2xl p-6 border">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Book Now
                </h3>

                <form onSubmit={handleSubmit} className="space-y-3">
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
                  >
                    Send Booking via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyTrip />
    </>
  );
}

