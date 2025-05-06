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
  { src: "/deal42.webp", gridClass: "lg:col-span-2" },
  { src: "/deal43.webp" },
  { src: "/deal34.webp" },
  { src: "/deal41.webp" },
  { src: "/deal56.webp" },
];

const itinerary = [
  {
    title: "Day 1: Dehradun to Sankri (8-9 hrs drive)",
    content: `• Scenic drive through Mussoorie and Purola.\n• Arrive at Sankri – a quaint village in Uttarkashi.\n• Check-in to guesthouse and briefing over dinner.`,
  },
  {
    title: "Day 2: Sankri to Taluka and trek to Gangaad",
    content: `• Drive to Taluka, trek starts here (approx. 10 km).\n• Walk through forests and riverside trails to reach Gangaad village.\n• Stay overnight in camps or homestay.`,
  },
  {
    title: "Day 3: Gangaad to Dinara Top and back to Gangaad",
    content: `• Early start for summit push to Dinara Top.\n• Witness breathtaking views of Swargarohini range.\n• Return to Gangaad for overnight stay.`,
  },
  {
    title: "Day 4: Gangaad to Taluka and drive to Dehradun",
    content: `• Trek back to Taluka and drive to Sankri.\n• Continue journey back to Dehradun.\n• Trip ends with scenic memories.`,
  },
];

export default function DinaraTopTrek() {
//   const [openIndex, setOpenIndex] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     tripName: "Dinara Top Trek – Hidden Gem of Uttarakhand",
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
//     const message = `*New Trip Booking Request* 🏞️✨

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

const [openIndex, setOpenIndex] = useState([]);
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  tripName: "DinaraTop Trek",
  travellers: "",
});

const toggleAccordion = (index) => {
  setOpenIndex((prev) =>
    prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  );
};

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const { name, phone, email, tripName, travellers } = formData;

  // Phone validation: Indian 10-digit starting from 6–9
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit Indian phone number.");
    return;
  }

  if (!name.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!travellers || isNaN(travellers) || Number(travellers) <= 0) {
    alert("Please enter a valid number of travellers.");
    return;
  }

  const message = `*New Trek Booking Request* 🏔️✨

*Name:* ${name}
*Phone:* ${phone}
${email ? `*Email:* ${email}\n` : ""}
*Trip:* ${tripName}
*No. of Travellers:* ${travellers}

📌 Please follow up for confirmation and details.`;

  const whatsappURL = `https://wa.me/9123456156?text=${encodeURIComponent(
    message
  )}`; // Replace with your WhatsApp number
  window.open(whatsappURL, "_blank");
};


  return (
    <>
      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 mt-8">
        <div className="flex flex-col gap-2 sm:hidden">
          {[1, 2, 3, 4].map((i) =>
            i % 2 === 1 ? (
              <div className="flex gap-2" key={i}>
                {[i, i + 1].map(
                  (j) =>
                    destinations[j] && (
                      <div
                        key={j}
                        className="w-1/2 h-[200px] relative rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={destinations[j].src}
                          alt={`Dinara Top ${j + 1}`}
                          fill
                          className="object-cover"
                          sizes="50vw"
                        />
                      </div>
                    )
                )}
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
              <div className="w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                <Image
                  src={item.src}
                  alt={`Dinara Top ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content + Booking */}
      <section className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            DINARA BUGYAL TREK – HIDDEN GEM OF UTTARAKHAND
          </h1>

          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-orange-500" />3 Nights 4 Days
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              Moderate
            </div>
            <div className="flex items-center gap-2">
              <FaUndo className="text-orange-500" />
              Free Cancellation: Upto 7 Days
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            About this Trek
          </h2>
          <p className="text-gray-600 mb-4">
            The Dinara Bugyal Trek is a pristine trail tucked away in
            Uttarkashi, offering trekkers an untouched Himalayan experience.
            Ideal for those looking to explore offbeat trails and experience the
            charm of remote Garhwali villages.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Unexplored alpine beauty near Sankri region.</li>
            <li>Majestic views of Swargarohini and other peaks.</li>
            <li>Camping near forested and riverside locations.</li>
            <li>Authentic Garhwali village hospitality.</li>
            <li>Perfect trek for offbeat adventure seekers.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6">Excluded & Included</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 mb-10">
            <ul className="list-disc list-inside space-y-2">
              <li>Transport from/to Dehradun</li>
              <li>Accommodation in homestays and tents</li>
              <li>All meals during the trek</li>
              <li>Experienced trek leaders and guides</li>
              <li>First-aid and permits</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal trekking gear</li>
              <li>Emergency evacuation</li>
              <li>Tips and porter charges</li>
              <li>Any item not specifically included</li>
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
                  openIndex.length === itinerary.length
                    ? []
                    : itinerary.map((_, i) => i)
                )
              }
              className="mb-4 text-orange-600 font-medium hover:underline"
            >
              {openIndex.length === itinerary.length ? "Close All" : "Open All"}
            </button>

            <div className="flex flex-col gap-4">
              {itinerary.map((item, index) => {
                const isOpen = openIndex.includes(index);
                return (
                  <div
                    key={index}
                    className="w-full border border-gray-200 rounded-xl shadow-sm bg-white"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-4 py-4 flex justify-between rounded-xl items-center hover:bg-gray-100"
                    >
                      <span className="text-base md:text-lg font-semibold text-gray-800">
                        {item.title}
                      </span>
                      {isOpen ? (
                        <FaChevronUp className="text-orange-500" />
                      ) : (
                        <FaChevronDown className="text-orange-500" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 md:py-4 pb-4 text-gray-600 whitespace-pre-line text-sm md:text-base">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Booking Form */}
        {/* <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3>
              <div className="text-xl font-bold text-red-600 mb-1">
                Starting From: <span className="text-gray-600">₹10,499</span>
                /Per Person
              </div>
              <div className="text-sm text-green-600 font-semibold mb-2">
                {" "}
                +5% gst
              </div>

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
        </div> */}
         <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Book Your Trek Today
              </h3>
              <div className="text-sm text-green-600 font-bold mb-2">
                Limited Slots Available
              </div>
              <div className="text-xl font-bold text-red-600 mb-4">
                Starting From: <span className="text-gray-600">₹6,999</span>/
                Person
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  pattern="^[A-Za-z\s]+$"
                  title="Please enter letters and spaces only"
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
                  min="1"
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

      {/* Carousel + Other Sections */}
      <HimaliyeMyTripCarousel />
      <HimTrek />
    </>
  );
}
