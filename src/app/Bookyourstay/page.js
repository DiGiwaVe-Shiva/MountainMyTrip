// "use client";

// import React, { useState, useEffect } from "react";
// import { IoClose } from "react-icons/io5";

// const BookYourStayForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     uttknd: "",
//     himachal: "",
//     travellers: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showForm, setShowForm] = useState(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }
//     if (!formData.phone) newErrors.phone = "Phone number is required";
//     if (!formData.travellers)
//       newErrors.travellers = "Number of travellers is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Booking submitted:", formData);
//       alert("Thank you! Your booking request has been received.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         uttknd: "",
//         himachal: "",
//         travellers: "",
//         message: "",
//       });
//       setErrors({});
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   if (!showForm) return null;

//   return (
//     <div
//       className="relative min-h-screen mt-12 flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
//       style={{ backgroundImage: "url('/deal59.webp')" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

//       <div className="relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 transition-all">
//         <button
//           onClick={() => setShowForm(false)}
//           className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl"
//         >
//           <IoClose />
//         </button>

//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Book Your Trek
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>

//           {/* Phone */}
//           <div>
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone Number
//             </label>
//             <input
//               type="number"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="9876543210"
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//             )}
//           </div>

//           {/* Dropdown: UttKnd */}
//           <div>
//             <label
//               htmlFor="uttknd"
//               className="block text-sm font-medium text-gray-700"
//             >
//               UttKnd
//             </label>
//             <select
//               id="uttknd"
//               name="uttknd"
//               value={formData.uttknd}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//             >
//               <option value="">Select</option>
//               {[
//                 "Gulabikantha Trek",
//                 "Chardham Trek",
//                 "Chopta Tungnath Trek",
//                 "Kedarkantha Trek",
//                 "Brahmatal Trek",
//                 "Dayara Bugyal Trek",
//                 "Kuari pass Trek",
//                 "BaliPass Trek",
//                 "Dodital Trek",
//                 "Chandrashila Trek",
//                 "Harki Trek",
//                 "Dinara Bugyal Trek",
//                 "Sarutal Trek",
//                 "Vally of Flowers Trek",
//               ].map((val) => (
//                 <option key={val} value={val}>
//                   {val}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Dropdown: Himachal */}
//           <div>
//             <label
//               htmlFor="himachal"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Himachal
//             </label>
//             <select
//               id="himachal"
//               name="himachal"
//               value={formData.himachal}
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//             >
//               <option value="">Select</option>
//               {[
//                  "Hampta pass Trek",
//                  "Triund Trek",
//                  "Laka Glacier Trek",
                
//               ].map((val) => (
//                 <option key={val} value={val}>
//                   {val}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Travellers */}
//           <div>
//             <label
//               htmlFor="travellers"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name of Travellers (Number)
//             </label>
//             <input
//               type="number"
//               id="travellers"
//               name="travellers"
//               value={formData.travellers}
//               onChange={handleChange}
//               placeholder="e.g. 2"
//               className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//             />
//             {errors.travellers && (
//               <p className="text-red-500 text-sm mt-1">{errors.travellers}</p>
//             )}
//           </div>

//           {/* Submit */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-[#F54900] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#e03e00] transition-all focus:ring-2 focus:ring-green-400"
//             >
//               Confirm Booking
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const BookYourStayForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    uttknd: "",
    himachal: "",
    travellers: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure only one trek option is selected
    if (name === "uttknd" && value !== "") {
      setFormData((prev) => ({ ...prev, uttknd: value, himachal: "" }));
    } else if (name === "himachal" && value !== "") {
      setFormData((prev) => ({ ...prev, himachal: value, uttknd: "" }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.travellers)
      newErrors.travellers = "Number of travellers is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const trek =
        formData.uttknd !== "" ? formData.uttknd : formData.himachal;
      const message = `*Booking Request*%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ATrek: ${trek}%0ATravellers: ${formData.travellers}%0AMessage: ${formData.message}`;

      const phoneNumber = "916239092532"; // ← Replace with your WhatsApp number (no + sign)
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappURL, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        uttknd: "",
        himachal: "",
        travellers: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  if (!showForm) return null;

  return (
    <div
      className="relative min-h-screen mt-12 flex items-center justify-center bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/deal59.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl"
        >
          <IoClose />
        </button>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Book Your Trek
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs */}
          {[
            { id: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
            { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
            { id: "phone", label: "Phone Number", type: "number", placeholder: "9876543210" },
            { id: "travellers", label: "Number of Travellers", type: "number", placeholder: "e.g. 2" },
            { id: "message", label: "Message", type: "text", placeholder: "Any questions or preferences?" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                placeholder={placeholder}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
              />
              {errors[id] && (
                <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
              )}
            </div>
          ))}

          {/* Dropdowns */}
          {[
            {
              id: "uttknd",
              label: "Uttarakhand Treks",
              options: [
                "Gulabikantha Trek",
                "Chardham Trek",
                "Chopta Tungnath Trek",
                "Kedarkantha Trek",
                "Brahmatal Trek",
                "Dayara Bugyal Trek",
                "Kuari pass Trek",
                "BaliPass Trek",
                "Dodital Trek",
                "Chandrashila Trek",
                "Harki Trek",
                "Dinara Bugyal Trek",
                "Sarutal Trek",
                "Vally of Flowers Trek",
              ],
            },
            {
              id: "himachal",
              label: "Himachal Treks",
              options: ["Hampta pass Trek", "Triund Trek", "Laka Glacier Trek"],
            },
          ].map(({ id, label, options }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <select
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#F54900] focus:outline-none"
              >
                <option value="">Select</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-[#F54900] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#e03e00] transition-all focus:ring-2 focus:ring-green-400"
          >
            Confirm Booking via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookYourStayForm;


// export default BookYourStayForm;

// "use client";

// import React, { useState } from "react";

// const Bookyourstay = () => {
//   const [showModal, setShowModal] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkin: "",
//     checkout: "",
//     guests: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email";
//     }
//     if (!formData.phone) newErrors.phone = "Phone number is required";
//     if (!formData.checkin) newErrors.checkin = "Check-in date is required";
//     if (!formData.checkout) newErrors.checkout = "Check-out date is required";
//     if (!formData.guests) newErrors.guests = "Guests count required";
//     if (!formData.message) newErrors.message = "Message is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Booking Submitted:", formData);
//       alert("Thank you! Your booking request has been received.");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         checkin: "",
//         checkout: "",
//         guests: "",
//         message: "",
//       });
//       setErrors({});
//       setShowModal(false); // Close modal after submission
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <>
//       {/* Trigger Button */}
//       <button
//         onClick={() => setShowModal(true)}
//         className="bg-[#F54900] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d13e00] transition"
//       >
//         Book Your Stay
//       </button>

//       {/* Modal Overlay */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//           <div className="bg-white w-full max-w-2xl mx-auto rounded-xl shadow-xl relative p-8 overflow-y-auto max-h-[90vh]">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
//             >
//               &times;
//             </button>

//             <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//               Book Your Stay
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name */}
//               <div>
//                 <label className="block text-sm font-medium">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium">Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-sm font-medium">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="9876543210"
//                   className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//               </div>

//               {/* Dates */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium">Check-in Date</label>
//                   <input
//                     type="date"
//                     name="checkin"
//                     value={formData.checkin}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                   />
//                   {errors.checkin && <p className="text-red-500 text-sm">{errors.checkin}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium">Check-out Date</label>
//                   <input
//                     type="date"
//                     name="checkout"
//                     value={formData.checkout}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                   />
//                   {errors.checkout && <p className="text-red-500 text-sm">{errors.checkout}</p>}
//                 </div>
//               </div>

//               {/* Guests */}
//               <div>
//                 <label className="block text-sm font-medium">Number of Guests</label>
//                 <input
//                   type="number"
//                   name="guests"
//                   value={formData.guests}
//                   onChange={handleChange}
//                   placeholder="e.g. 2"
//                   className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                 />
//                 {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-medium">Special Requests / Message</label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Let us know if you have any preferences..."
//                   className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F54900] focus:outline-none"
//                 />
//                 {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full bg-[#F54900] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#c73c00] transition"
//               >
//                 Confirm Booking
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Bookyourstay;
