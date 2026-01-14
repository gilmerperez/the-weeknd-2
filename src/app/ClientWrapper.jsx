"use client";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Cookies from "../components/Cookies/Cookies";

export default function ClientWrapper() {
  // * Cookies state
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

  // Open cookies
  const openCookies = () => {
    setIsCookiesOpen(true);
  };

  // Close cookies
  const closeCookies = () => {
    setIsCookiesOpen(false);
  };

  return (
    <>
      <Footer onCookieChoicesClick={openCookies} />
      <Cookies isOpen={isCookiesOpen} onClose={closeCookies} />
    </>
  );
}
