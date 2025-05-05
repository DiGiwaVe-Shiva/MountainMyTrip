// "use client";
// import { useStayForm } from "../context/StayFormContext";
// import BookYourStayForm from "./BookYourStayForm";

// export default function PopupForm() {
//   const { isFormOpen, closeForm } = useStayForm();

//   if (!isFormOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="relative z-10 max-w-2xl w-full">
//         <button
//           onClick={closeForm}
//           className="absolute top-4 right-4 text-white text-3xl font-bold z-20"
//         >
//           ×
//         </button>
//         <BookYourStayForm />
//       </div>
//     </div>
//   );
// }
