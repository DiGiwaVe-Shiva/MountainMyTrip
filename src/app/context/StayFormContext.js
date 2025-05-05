// "use client";
// import { createContext, useContext, useState } from "react";

// const StayFormContext = createContext();

// export const StayFormProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openForm = () => setIsOpen(true);
//   const closeForm = () => setIsOpen(false);

//   return (
//     <StayFormContext.Provider value={{ isOpen, openForm, closeForm }}>
//       {children}
//     </StayFormContext.Provider>
//   );
// };

// export const useStayForm = () => useContext(StayFormContext);
