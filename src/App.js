import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

/* =========================================
   SCROLL TO TOP ON EVERY PAGE CHANGE
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* =========================================
   FLOATING CALL + WHATSAPP
========================================= */

function FloatingContactButtons() {
  const phone = "9705429255";

  const whatsappMessage =
    "Hi RNR Safety Nets, I would like to know more about your safety net services.";

  return (
    <>
      <style>
        {`
          /* =========================================
             FLOATING CONTACT BUTTONS
          ========================================== */

          .rnr-floating-contact {
            position: fixed;
            right: 22px;
            bottom: 24px;

            z-index: 9980;

            display: flex;
            flex-direction: column;
            align-items: flex-end;

            gap: 12px;
          }

          .rnr-floating-btn {
            position: relative;

            width: 58px;
            height: 58px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            text-decoration: none;

            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.2);

            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .rnr-floating-btn:hover {
            transform: translateY(-4px) scale(1.04);

            box-shadow:
              0 15px 35px rgba(0, 0, 0, 0.25);
          }

          /* CALL */

          .rnr-floating-call {
            background: #062d61;
            color: #ffffff;
          }

          /* WHATSAPP */

          .rnr-floating-whatsapp {
            background: #25d366;
            color: #ffffff;
          }

          /* ICON */

          .rnr-floating-icon {
            width: 27px;
            height: 27px;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          .rnr-floating-icon svg {
            width: 100%;
            height: 100%;

            fill: currentColor;
          }

          /* TOOLTIP */

          .rnr-floating-label {
            position: absolute;

            right: 70px;
            top: 50%;

            transform:
              translateY(-50%)
              translateX(8px);

            padding: 8px 12px;

            background: #ffffff;
            color: #062d61;

            border-radius: 8px;

            font-size: 12px;
            font-weight: 800;

            white-space: nowrap;

            box-shadow:
              0 8px 25px rgba(0, 0, 0, 0.13);

            opacity: 0;
            visibility: hidden;

            pointer-events: none;

            transition: 0.25s ease;
          }

          .rnr-floating-label::after {
            content: "";

            position: absolute;

            right: -5px;
            top: 50%;

            transform: translateY(-50%) rotate(45deg);

            width: 10px;
            height: 10px;

            background: #ffffff;
          }

          .rnr-floating-btn:hover
          .rnr-floating-label {
            opacity: 1;
            visibility: visible;

            transform:
              translateY(-50%)
              translateX(0);
          }

          /* PULSE */

          .rnr-floating-whatsapp::before {
            content: "";

            position: absolute;
            inset: -5px;

            border-radius: 50%;

            border: 2px solid rgba(37, 211, 102, 0.35);

            animation: rnrWhatsappPulse 2s infinite;
          }

          @keyframes rnrWhatsappPulse {
            0% {
              transform: scale(0.9);
              opacity: 1;
            }

            70% {
              transform: scale(1.25);
              opacity: 0;
            }

            100% {
              transform: scale(1.25);
              opacity: 0;
            }
          }

          /* =========================================
             MOBILE
          ========================================== */

          @media (max-width: 600px) {
            .rnr-floating-contact {
              right: 14px;
              bottom: 18px;

              gap: 10px;
            }

            .rnr-floating-btn {
              width: 52px;
              height: 52px;
            }

            .rnr-floating-icon {
              width: 24px;
              height: 24px;
            }

            .rnr-floating-label {
              display: none;
            }
          }

          @media (max-width: 380px) {
            .rnr-floating-contact {
              right: 11px;
              bottom: 14px;
            }

            .rnr-floating-btn {
              width: 48px;
              height: 48px;
            }

            .rnr-floating-icon {
              width: 22px;
              height: 22px;
            }
          }
        `}
      </style>

      <div className="rnr-floating-contact">

        {/* CALL BUTTON */}

        <a
          href={`tel:${phone}`}
          className="rnr-floating-btn rnr-floating-call"
          aria-label="Call RNR Safety Nets"
          title="Call RNR Safety Nets"
        >
          <span className="rnr-floating-label">
            Call {phone}
          </span>

          <span className="rnr-floating-icon">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
        </a>

        {/* WHATSAPP BUTTON */}

        <a
          href={`https://wa.me/91${phone}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          className="rnr-floating-btn rnr-floating-whatsapp"
          aria-label="WhatsApp RNR Safety Nets"
          title="WhatsApp RNR Safety Nets"
        >
          <span className="rnr-floating-label">
            Chat on WhatsApp
          </span>

          <span className="rnr-floating-icon">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.73 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.03 29h.01C23.22 29 29 23.18 29 16S23.22 3 16.04 3zm0 23.8a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.96 1.04 1.06-3.86-.25-.4A10.76 10.76 0 0 1 5.23 16c0-5.96 4.85-10.8 10.81-10.8 5.95 0 10.77 4.84 10.77 10.8 0 5.96-4.82 10.8-10.77 10.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.24-.71.08-.32-.16-1.37-.5-2.61-1.61-.97-.86-1.62-1.92-1.81-2.25-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.79-1.01-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.12-1.14 2.72s1.17 3.15 1.33 3.37c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.92-.79 2.19-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.62-.38z" />
            </svg>
          </span>
        </a>

      </div>
    </>
  );
}

/* =========================================
   APP
========================================= */

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />

      <FloatingContactButtons />
    </>
  );
}

export default App;