"use client";
import { createContext, useContext, useState } from "react";
import BookCallPopup from "../ui/BookCallPopup";

const BookCallContext = createContext();

export function useBookCall() {
  return useContext(BookCallContext);
}

export function BookCallProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openPopup = () => setOpen(true);
  const closePopup = () => setOpen(false);

  return (
    <BookCallContext.Provider value={{ openPopup, closePopup }}>
      {children}
      <BookCallPopup open={open} onClose={closePopup} />
    </BookCallContext.Provider>
  );
}
