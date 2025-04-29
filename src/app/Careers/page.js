// "use client";
// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";

// export default function CareerSection() {
//   const [isOpen, setIsOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     if (e.target.name === "resume") {
//       setFormData({ ...formData, resume: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Application submitted successfully!");
// //     setIsOpen(false);
// //     setFormData({ name: "", email: "", phone: "", resume: null });
// //   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const { name, email, phone } = formData;
//     const message = `Hello, I'm applying for a job.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n(Resume uploaded separately)`;
  
//     const whatsappNumber = "+91-6239092532"; // Replace with your WhatsApp number
  
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
//     window.open(url, "_blank");
  
//     setIsOpen(false);
//     setFormData({ name: "", email: "", phone: "", resume: null });
//   };
  

//   return (
//     <div className="p-4  mt-24 sm:p-6 md:p-10">
//       {/* Trigger Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 text-sm sm:text-base md:text-lg"
//         >
//           Apply for Career
//         </button>
//       </div>

//       {/* Modal */}
//       {isOpen && (
//         // <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 sm:px-6">
//         <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">

//           <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <IoMdClose size={24} />
//             </button>

//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Apply for a Job
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
//               />

//               <input
//                 type="file"
//                 name="resume"
//                 accept=".pdf,.doc,.docx"
//                 onChange={handleChange}
//                 required
//                 className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
//               />

//               <button
//                 type="submit"
//                 className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
//               >
//                 Submit Application
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function CareerSection() {
  const [isOpen, setIsOpen] = useState(true); // Modal open by default

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    const message = `Hello, I'm applying for a job.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n(Resume uploaded separately)`;
    const whatsappNumber = "+91-6239092532";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "", resume: null });
  };

  return (
    <div className="p-4 mt-24 sm:p-6 md:p-10">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={24} />
            </button>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
              Apply for a Job
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
              />

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border px-4 py-2 rounded-lg text-sm sm:text-base"
              />

              <button
                type="submit"
                className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600 text-sm sm:text-base"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

