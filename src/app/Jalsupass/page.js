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
// import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";
// import HimTrek from "../components/HimTrek";

// const destinations = [
//   { name: "", src: "/deal31.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/deal32.webp" },
//   { name: "", src: "/deal23.webp" },
//   { name: "", src: "/deal29.webp" },
//   { name: "", src: "/deal38.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival in Lohajung",
//     content: `• Reach Lohajung (Basecamp) from Kathgodam or Rishikesh.\n• Meet the trek leader and get briefed about the trek.\n• Overnight stay in guesthouse or camp.`,
//   },
//   {
//     title: "Day 2: Lohajung to Bekaltal",
//     content: `• Trek through dense forests and mountain trails.\n• Reach Bekaltal, a scenic lake campsite.\n• Enjoy camping and stargazing at night.`,
//   },
//   {
//     title: "Day 3: Bekaltal to Vinayak Top and back to Lohajung",
//     content: `• Early start for summit push to Vinayak Top.\n• Witness the panoramic Himalayan views.\n• Descend back to Lohajung for overnight stay.`,
//   },
//   {
//     title: "Day 4: Departure from Lohajung",
//     content: `• Begin return journey to Rishikesh/Kathgodam.\n• Trip ends with mountain memories.`,
//   },
// ];

// export default function VinayakTopTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Vinayak Top Adventure Tour – Scenic Summit Trek",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     if (openIndex.includes(index)) {
//       setOpenIndex(openIndex.filter((i) => i !== index));
//     } else {
//       setOpenIndex([...openIndex, index]);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*New Trip Booking Request* 🏔️✨

// *Name:* ${formData.name}
// *Phone:* ${formData.phone}
// ${formData.email ? `*Email:* ${formData.email}\n` : ""}
// *Trip:* ${formData.tripName}
// *No. of Travellers:* ${formData.travellers}

// 📌 Please reach out for confirmation and further details.`;

//     const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Image Gallery */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
//         <div className="flex flex-col gap-2 sm:hidden">
//           {[1, 2, 3, 4].map(
//             (i) =>
//               i % 2 === 1 && (
//                 <div className="flex gap-2" key={i}>
//                   {[i, i + 1].map(
//                     (j) =>
//                       destinations[j] && (
//                         <div
//                           key={j}
//                           className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
//                         >
//                           <Image
//                             src={destinations[j].src}
//                             alt={`Vinayak Top ${j + 1}`}
//                             fill
//                             className="object-cover"
//                             sizes="50vw"
//                           />
//                         </div>
//                       )
//                   )}
//                 </div>
//               )
//           )}
//         </div>

//         <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
//           {destinations.map((item, index) => (
//             <div
//               key={index}
//               className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
//                 item.gridClass || ""
//               }`}
//             >
//               <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
//                 <Image
//                   src={item.src}
//                   alt={`Vinayak Top ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Content + Booking */}
//       <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
//         <div className="flex-1">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//             VINAYAK TOP ADVENTURE TOUR – SCENIC SUMMIT TREK
//           </h1>

//           <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <FaRegClock className="text-orange-500" />3 Nights 4 Days
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUsers className="text-orange-500" />
//               Easy to Moderate
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUndo className="text-orange-500" />
//               Free Cancellation: Upto 7 Days
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             About this Trek
//           </h2>
//           <p className="text-gray-600 mb-4">
//             The Vinayak Top Adventure Tour offers stunning views of Nanda Ghunti
//             and Trishul peaks from a relatively less explored route. Ideal for
//             beginners and nature lovers, this trek gives you a mix of forest
//             trails, mountain lakes, and a summit climb.
//           </p>

//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             Highlights
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
//             <li>Summit Vinayak Top for scenic views of snow-capped peaks.</li>
//             <li>Camp near tranquil alpine lakes like Bekaltal.</li>
//             <li>Ideal introduction to Himalayan trekking.</li>
//             <li>Blend of forest paths, ridge walks, and local culture.</li>
//             <li>Affordable, beginner-friendly mountain adventure.</li>
//           </ul>

//           <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
//           <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
//             <ul className="list-disc list-inside space-y-2">
//               <li>Transportation from/to base city</li>
//               <li>Stay at camps/guesthouses</li>
//               <li>Meals during the trek</li>
//               <li>Experienced trek leaders</li>
//               <li>Trek permits & medical support</li>
//             </ul>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Personal gear (shoes, jackets etc.)</li>
//               <li>Travel insurance</li>
//               <li>Extra snacks or bottled drinks</li>
//               <li>Emergency evacuation costs</li>
//               <li>Unspecified expenses</li>
//             </ul>
//           </div>

//           <div className="my-8">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
//               Itinerary
//             </h2>
//             <button
//               onClick={() =>
//                 setOpenIndex(
//                   openIndex.length === itinerary.length
//                     ? []
//                     : itinerary.map((_, i) => i)
//                 )
//               }
//               className="mb-4 text-orange-600 font-medium hover:underline"
//             >
//               {openIndex.length === itinerary.length ? "Close All" : "Open All"}
//             </button>

//             <div className="flex flex-col gap-4">
//               {itinerary.map((item, index) => {
//                 const isOpen = openIndex.includes(index);
//                 return (
//                   <div
//                     key={index}
//                     className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
//                   >
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                     >
//                       <span className="text-base md:text-lg font-semibold text-gray-800">
//                         {item.title}
//                       </span>
//                       {isOpen ? (
//                         <FaChevronUp className="text-orange-500" />
//                       ) : (
//                         <FaChevronDown className="text-orange-500" />
//                       )}
//                     </button>
//                     {isOpen && (
//                       <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
//                         {item.content}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
//           <div className="sticky top-24">
//             <div className="bg-white shadow-lg rounded-2xl p-6 border">
//               {/* <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                 Book Your Trek Today
//               </h3> */}
         
//               <div className="text-xl font-bold text-red-600 mb-1">
//                 Starting From: <span className="text-gray-600">₹4,499</span>/Per
//                 Person
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">
//               +5% gst
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
//                   placeholder="Email (optional)"
//                   value={formData.email}
//                   onChange={handleChange}
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

//       <HimaliyeMyTripCarousel />
//       <HimTrek />
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
import HimaliyeMyTripCarousel from "../components/HimaliyeMyTrip";
import HimTrek from "../components/HimTrek";

const destinations = [
  { name: "", src: "/deal54.webp", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal90.webp" },
  { name: "", src: "/deal21.webp" },
  { name: "", src: "/deal32.webp" },
  { name: "", src: "/deal42.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival in Palampur",
    content:
      "• Reach Palampur and meet the trek leader.\n• Drive to the base village, camp overnight.\n• Trek briefing and acclimatization walk.",
  },
  {
    title: "Day 2: Basecamp to Utrala",
    content:
      "• Start trek through scenic forest trails.\n• Camp near Utrala with views of Kangra Valley.\n• Evening bonfire and group interaction.",
  },
  {
    title: "Day 3: Utrala to Jalsu Pass Base",
    content:
      "• Cross rivers and alpine meadows.\n• Steep ascents through rhododendron trails.\n• Pitch tents at base of Jalsu Pass.",
  },
  {
    title: "Day 4: Jalsu Pass Summit & Return",
    content:
      "• Early morning push to Jalsu Pass (3,550m).\n• Witness panoramic views of Dhauladhar Range.\n• Descend back to campsite.",
  },
  {
    title: "Day 5: Return Trek & Departure",
    content:
      "• Easy descent to base village.\n• Depart after breakfast with lasting memories.\n• Optional local sightseeing in Palampur.",
  },
];

export default function JalsuPassTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Jalsu Pass Trek",
    travellers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trip Booking Request* 🚶‍♂️🏔️

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ""}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleAccordion = (index) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  return (
    <>
      {/* Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 2, 3, 4].map((i, idx) =>
            idx % 2 === 0 ? (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map((j) => (
                  <div
                    key={j}
                    className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={destinations[j].src}
                      alt={`MountainMyTrip Jalsu Pass ${j + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>

        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
                item.gridClass || ""
              }`}
            >
              <Image
                src={item.src}
                alt={`MountainMyTrip Jalsu Pass ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trek Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            JALSU PASS TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>4 Nights 5 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Small & Adventurous</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              <span>Free Cancellation: Upto 7 Days</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Activity
          </h2>
          <p className="text-gray-600 mb-4">
            The Jalsu Pass Trek is a stunning high-altitude crossover trail in
            Himachal Pradesh, linking the Chamba and Kangra valleys. Ideal for
            monsoon treks, it offers green meadows, vibrant flowers, and
            pristine streams along the route.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Explore a lesser-known Himalayan crossover trek.</li>
            <li>Stunning views of Dhauladhar and Pir Panjal ranges.</li>
            <li>Camp in alpine meadows and interact with local shepherds.</li>
            <li>Perfect for intermediate trekkers looking for raw nature.</li>
            <li>Flourishing flora during the monsoon season.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation from Palampur.</li>
              <li>Tent stay with all camping gear.</li>
              <li>All vegetarian meals during trek.</li>
              <li>Expert local guides and porters.</li>
              <li>First aid and safety measures.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Any personal expenses or tips.</li>
              <li>Travel or health insurance.</li>
              <li>Anything not mentioned in inclusions.</li>
            </ul>
          </div>

          {/* Itinerary Accordion */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>
            <button
              onClick={() =>
                setOpenIndex(openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i))
              }
              className="mb-4 text-orange-600 font-medium hover:underline"
            >
              {openIndex.length === itinerary.length ? "Close All" : "Open All"}
            </button>

            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => (
                <div
                  key={index}
                  className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-4 py-4 flex justify-between rounded-xl  items-center hover:bg-gray-100"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-800">
                      {item.title}
                    </span>
                    {openIndex.includes(index) ? (
                      <FaChevronUp className="text-orange-500" />
                    ) : (
                      <FaChevronDown className="text-orange-500" />
                    )}
                  </button>
                  {openIndex.includes(index) && (
                    <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Slot Now!
              </h3>
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹20,499</span>/Per Person
              </div>
              <div className="text-sm text-green-600 font-semibold mb-2"> +5% gst</div>

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
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleChange}
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
      </section>

      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}

