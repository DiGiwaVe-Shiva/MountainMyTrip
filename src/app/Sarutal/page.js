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

// const destinations = [
//   { name: "", src: "/deal86.webp", gridClass: "lg:col-span-2" },
//   { name: "", src: "/deal87.webp" },
//   { name: "", src: "/deal88.webp" },
//   { name: "", src: "/deal89.webp" },
//   { name: "", src: "/deal26.webp" },
// ];

// const itinerary = [
//   {
//     title: "Day 1: Arrival at Loharkhet",
//     content:
//       "• Arrive at Loharkhet, the trek's starting point.\n• Meet your guide and group.\n• Overnight stay in guesthouse or camps.",
//   },
//   {
//     title: "Day 2: Trek to Khati Village",
//     content:
//       "• Begin trek to Khati (approx. 11km).\n• Walk through forest trails and quaint Himalayan settlements.\n• Stay overnight at a homestay or tent.",
//   },
//   {
//     title: "Day 4: Dwali to Pindari Glacier & back",
//     content:
//       "• Early morning trek to Zero Point of Pindari Glacier (6km one way).\n• Witness panoramic views of snow-covered Himalayan peaks.\n• Return to Dwali by evening and rest.",
//   },
//   {
//     title: "Day 5: Trek back to Khati",
//     content:
//       "• Descend back to Khati Village through pine and oak forests.\n• Share local stories and relax in peaceful surroundings.",
//   },
//   {
//     title: "Day 6: Trek to Loharkhet & Departure",
//     content:
//       "• Final descent to Loharkhet.\n• End of an adventurous and scenic glacier expedition.\n• Depart with lifetime memories.",
//   },
// ];

// export default function PindariGlacierTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "",
//     travellers: "",
//   });

//   const toggleAccordion = (index) => {
//     setOpenIndex((prev) =>
//       prev.includes(index)
//         ? prev.filter((i) => i !== index)
//         : [...prev, index]
//     );
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const message = `*New Trip Booking Request* 🏞️🧗‍♂️\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Trip:* ${formData.tripName}\n*No. of Travellers:* ${formData.travellers}\n\n📌 Please reach out for confirmation and next steps.`;

//     const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
//       message
//     )}`;

//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         Pindari Glacier Trek
//       </h1>

//       {/* Highlights */}
//       <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
//         <div className="flex items-center gap-2">
//           <FaRegClock className="text-orange-500" />
//           <span>5 Nights 6 Days</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaUsers className="text-orange-500" />
//           <span>Small Guided Groups</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaUndo className="text-orange-500" />
//           <span>Free Cancellation: Up to 7 Days</span>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 auto-rows-[250px] mb-8">
//         {destinations.map((item, index) => (
//           <div
//             key={index}
//             className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${
//               item.gridClass || ""
//             }`}
//           >
//             <Image
//               src={item.src}
//               alt={`Pindari Glacier ${index + 1}`}
//               fill
//               className="object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
//               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Itinerary Accordion */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Itinerary</h2>
//         <button
//           className="mb-4 text-orange-600 font-medium hover:underline"
//           onClick={() =>
//             setOpenIndex(
//               openIndex.length === itinerary.length
//                 ? []
//                 : itinerary.map((_, i) => i)
//             )
//           }
//         >
//           {openIndex.length === itinerary.length ? "Close All" : "Open All"}
//         </button>

//         <div className="flex flex-col gap-4">
//           {itinerary.map((item, index) => {
//             const isOpen = openIndex.includes(index);
//             return (
//               <div
//                 key={index}
//                 className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
//               >
//                 <button
//                   onClick={() => toggleAccordion(index)}
//                   className="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-100"
//                 >
//                   <span className="text-base md:text-lg font-semibold text-gray-800">
//                     {item.title}
//                   </span>
//                   {isOpen ? (
//                     <FaChevronUp className="text-orange-500" />
//                   ) : (
//                     <FaChevronDown className="text-orange-500" />
//                   )}
//                 </button>
//                 {isOpen && (
//                   <div className="px-5 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
//                     {item.content}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Booking Form */}
//       <div className="max-w-lg bg-white border rounded-xl shadow-lg p-6 mx-auto">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//           Book Your Slot Now!
//         </h3>
//         <p className="text-sm text-green-600 font-bold mb-1">
//           Limited Season Batch: Early Bird Discounts!
//         </p>
//         <p className="text-xl font-bold text-red-600 mb-4">
//           Starting From:{" "}
//           <span className="text-gray-700">₹9,499</span>/Per Person
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//           />
//           <input
//             type="text"
//             name="tripName"
//             value={formData.tripName}
//             readOnly
//             className="w-full border rounded-lg px-4 py-2 bg-gray-100"
//           />
//           <input
//             type="number"
//             name="travellers"
//             placeholder="Number of Travellers"
//             value={formData.travellers}
//             onChange={handleChange}
//             required
//             className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
//           />
//           <button
//             type="submit"
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold"
//           >
//             Book via WhatsApp
//           </button>
//         </form>
//       </div>
//     </section>
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
  { name: "", src: "/deal86.webp", gridClass: "lg:col-span-2" },
  { name: "", src: "/deal87.webp" },
  { name: "", src: "/deal88.jpg" },
  { name: "", src: "/deal89.webp" },
  { name: "", src: "/deal26.webp" },
];

const itinerary = [
  {
    title: "Day 1: Arrival at Base Village",
    content: `• Reach the base village.\n• Meet your trek leader and fellow trekkers.\n• Evening orientation and dinner at campsite.`,
  },
  {
    title: "Day 2: Basecamp to Sarutal",
    content: `• Begin trek through alpine forests and scenic meadows.\n• Experience gradual ascents with Himalayan views.\n• Camp at Sarutal beside the glacial lake.`,
  },
  {
    title: "Day 3: Exploration & Return",
    content: `• Early morning visit around Sarutal for sunrise views.\n• Descend back to the base village.\n• Share experiences, farewell lunch, and departure.`,
  },
];

export default function SarutalTrek() {
  const [openIndex, setOpenIndex] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripName: "Sarutal Trek",
    travellers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Trip Booking Request* 🚶‍♂️🌄

*Name:* ${formData.name}
*Phone:* ${formData.phone}
${formData.email ? `*Email:* ${formData.email}\n` : ""}
*Trip:* ${formData.tripName}
*No. of Travellers:* ${formData.travellers}

📌 Please reach out for confirmation and next steps.`;

    const whatsappURL = `https://wa.me/6239092532?text=${encodeURIComponent(
      message
    )}`;
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
      {/* Image Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        {/* Mobile view */}
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
                      alt={`MountainMyTrip Sarutal Trek ${j + 1}`}
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

        {/* Desktop view */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px]">
          {destinations.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-xl overflow-hidden group shadow-md ${item.gridClass || ""}`}
            >
              <Image
                src={item.src}
                alt={`MountainMyTrip Sarutal Trek ${index + 1}`}
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
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            SARUTAL TREK
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />
              <span>2 Nights 3 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>Group Size: Small & Personalized</span>
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
            The Sarutal Trek is a hidden gem in the Garhwal region, offering
            stunning lake views, untouched meadows, and tranquil Himalayan
            beauty. A perfect short adventure for beginners and nature lovers.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">Highlights</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Camp by the mystical Sarutal Lake.</li>
            <li>Scenic trails through dense pine and deodar forests.</li>
            <li>Clear views of snow-capped peaks and valleys.</li>
            <li>Great for a weekend getaway from city life.</li>
            <li>Meet locals and enjoy regional delicacies.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>All meals during the trek (veg only).</li>
              <li>Camping accommodation with gear.</li>
              <li>Experienced trek guide and support team.</li>
              <li>Basic first aid kit and safety equipment.</li>
              <li>Permit charges (if any).</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Transportation to/from base village.</li>
              <li>Personal expenses & travel insurance.</li>
              <li>Emergency evacuation costs.</li>
              <li>Any items not mentioned in inclusions.</li>
            </ul>
          </div>

          {/* Itinerary Accordion */}
          <div className="my-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              Itinerary
            </h2>
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex.length === itinerary.length ? [] : itinerary.map((_, i) => i)
                )
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
                    <div className="px-5 md:py-4 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
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
                Starting From: <span className="text-gray-600">₹15,499</span>/Per Person
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


