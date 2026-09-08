import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: Arial, sans-serif;
          }

          body {
            padding-top: 112px;
          }

          /* =========================
             MAIN FIXED NAVBAR
          ========================== */

          .rnr-navbar-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 9990;
            background: #ffffff;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
          }

          /* =========================
             TOP BAR
          ========================== */

          .rnr-topbar {
            background: #062d61;
            color: #ffffff;
          }

          .rnr-topbar-inner {
            max-width: 1250px;
            margin: auto;
            min-height: 36px;
            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            font-size: 13px;
          }

          .rnr-top-left,
          .rnr-top-right {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .rnr-top-link {
            color: #ffffff;
            text-decoration: none;
          }

          /* =========================
             MAIN NAVBAR
          ========================== */

          .rnr-navbar-inner {
            max-width: 1250px;
            min-height: 76px;
            margin: auto;
            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
          }

          /* =========================
             LOGO
          ========================== */

          .rnr-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            flex-shrink: 0;
          }

          .rnr-logo img {
            width: 190px;
            height: auto;
            display: block;
            object-fit: contain;
          }

          /* =========================
             DESKTOP LINKS
          ========================== */

          .rnr-desktop-nav {
            display: flex;
            align-items: center;
            gap: 30px;
          }

          .rnr-nav-link {
            color: #052d62;
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;

            position: relative;
            padding: 29px 0 25px;

            transition: 0.25s ease;
          }

          .rnr-nav-link::after {
            content: "";
            position: absolute;
            bottom: 18px;
            left: 50%;

            transform: translateX(-50%);

            width: 0;
            height: 3px;

            border-radius: 20px;
            background: #ff6b0b;

            transition: width 0.25s ease;
          }

          .rnr-nav-link:hover,
          .rnr-nav-link.active {
            color: #ff6b0b;
          }

          .rnr-nav-link:hover::after,
          .rnr-nav-link.active::after {
            width: 100%;
          }

          /* =========================
             QUOTE BUTTON
          ========================== */

          .rnr-quote-btn {
            min-height: 48px;
            padding: 0 22px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            text-decoration: none;

            color: #ffffff;
            font-size: 14px;
            font-weight: 800;

            background: #ff6b0b;
            border-radius: 12px;

            box-shadow: 0 10px 22px rgba(255, 107, 11, 0.22);

            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .rnr-quote-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 28px rgba(255, 107, 11, 0.3);
          }

          /* =========================
             HAMBURGER
          ========================== */

          .rnr-hamburger {
            display: none;

            width: 44px;
            height: 44px;

            position: relative;

            border: none;
            border-radius: 11px;

            background: #f2f6fb;

            cursor: pointer;
            padding: 0;

            flex-shrink: 0;
          }

          .rnr-hamburger span {
            position: absolute;
            left: 11px;

            width: 22px;
            height: 2px;

            background: #062d61;
            border-radius: 20px;

            transition: 0.25s ease;
          }

          .rnr-hamburger span:nth-child(1) {
            top: 13px;
          }

          .rnr-hamburger span:nth-child(2) {
            top: 21px;
          }

          .rnr-hamburger span:nth-child(3) {
            top: 29px;
          }

          /* =========================
             DARK OVERLAY
          ========================== */

          .rnr-mobile-overlay {
            position: fixed;
            inset: 0;

            width: 100%;
            height: 100vh;

            background: rgba(3, 19, 43, 0.55);

            z-index: 10000;

            opacity: 0;
            visibility: hidden;

            transition:
              opacity 0.3s ease,
              visibility 0.3s ease;
          }

          .rnr-mobile-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          /* =========================
             MOBILE DRAWER
          ========================== */

          .rnr-mobile-menu {
            position: fixed;

            top: 0;
            right: -100%;

            width: min(88%, 360px);
            height: 100dvh;

            background: #ffffff;

            z-index: 10001;

            padding: 0 22px 30px;

            overflow-y: auto;

            box-shadow: -15px 0 40px rgba(0, 0, 0, 0.18);

            transition: right 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .rnr-mobile-menu.open {
            right: 0;
          }

          /* =========================
             MOBILE TOP
          ========================== */

          .rnr-mobile-top {
            min-height: 82px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 15px;

            border-bottom: 1px solid #edf1f6;

            margin-bottom: 10px;
          }

          .rnr-mobile-logo {
            display: flex;
            align-items: center;

            text-decoration: none;

            flex: 1;
            min-width: 0;
          }

          .rnr-mobile-logo img {
            width: 170px;
            max-width: 100%;
            height: auto;

            display: block;

            object-fit: contain;
          }

          /* =========================
             CLOSE BUTTON
          ========================== */

          .rnr-close-btn {
            width: 44px;
            height: 44px;

            flex-shrink: 0;

            border: none;
            border-radius: 50%;

            background: #f2f5f9;

            position: relative;

            cursor: pointer;

            transition: 0.25s ease;
          }

          .rnr-close-btn:hover {
            background: #ff6b0b;
          }

          .rnr-close-btn span {
            position: absolute;

            width: 21px;
            height: 2px;

            top: 21px;
            left: 11.5px;

            background: #062d61;

            border-radius: 20px;

            transition: 0.25s ease;
          }

          .rnr-close-btn span:first-child {
            transform: rotate(45deg);
          }

          .rnr-close-btn span:last-child {
            transform: rotate(-45deg);
          }

          .rnr-close-btn:hover span {
            background: #ffffff;
          }

          /* =========================
             MOBILE LINKS
          ========================== */

          .rnr-mobile-links {
            display: flex;
            flex-direction: column;
          }

          .rnr-mobile-link {
            display: flex;
            align-items: center;

            min-height: 53px;

            text-decoration: none;

            color: #052d62;

            font-size: 16px;
            font-weight: 700;

            border-bottom: 1px solid #e9edf2;

            transition:
              color 0.2s ease,
              padding-left 0.2s ease;
          }

          .rnr-mobile-link:hover,
          .rnr-mobile-link.active {
            color: #ff6b0b;
            padding-left: 5px;
          }

          /* =========================
             CONTACT BOX
          ========================== */

          .rnr-mobile-contact {
            margin-top: 24px;

            background: #f3f7fb;

            border-radius: 15px;

            padding: 18px;
          }

          .rnr-mobile-contact small {
            display: block;

            color: #738198;

            font-size: 11px;
            letter-spacing: 0.5px;

            margin-bottom: 7px;
          }

          .rnr-mobile-phone {
            display: block;

            color: #052d62;

            text-decoration: none;

            font-size: 20px;
            font-weight: 900;
          }

          /* =========================
             MOBILE BUTTONS
          ========================== */

          .rnr-mobile-call {
            width: 100%;
            min-height: 51px;

            margin-top: 16px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            background: #ff6b0b;

            border-radius: 13px;

            text-decoration: none;

            color: #ffffff;

            font-size: 15px;
            font-weight: 800;

            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .rnr-mobile-call:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(255, 107, 11, 0.25);
          }

          .rnr-mobile-whatsapp {
            width: 100%;
            min-height: 51px;

            margin-top: 11px;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #13a64a;

            border-radius: 13px;

            text-decoration: none;

            color: #ffffff;

            font-size: 15px;
            font-weight: 800;

            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .rnr-mobile-whatsapp:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px rgba(19, 166, 74, 0.25);
          }

          /* =========================
             TABLET / MOBILE
          ========================== */
          @media (max-width: 900px) {
  body {
    padding-top: 88px;
  }

  .rnr-topbar {
    display: none;
  }

  .rnr-navbar-inner {
    min-height: 88px;
    padding: 0 15px;
    gap: 10px;
  }

  /* BIG MOBILE/TABLET LOGO */
  .rnr-logo img {
    width: 220px;
    max-width: calc(100vw - 85px);
    height: auto;
    display: block;
    object-fit: contain;
  }

  .rnr-desktop-nav {
    display: none;
  }

  .rnr-hamburger {
    display: block;
    flex-shrink: 0;
  }
}

@media (max-width: 480px) {
  body {
    padding-top: 86px;
  }

  .rnr-navbar-inner {
    min-height: 86px;
    padding: 0 10px;
    gap: 8px;
  }

  /* MAIN MOBILE LOGO */
  .rnr-logo img {
    width: 215px;
    max-width: calc(100vw - 70px);
    height: auto;
  }

  .rnr-hamburger {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }

  .rnr-mobile-menu {
    width: 90%;
    padding-left: 20px;
    padding-right: 20px;
  }

  /* LOGO INSIDE HAMBURGER MENU */
  .rnr-mobile-logo img {
    width: 200px;
    max-width: calc(100% - 55px);
    height: auto;
  }

  .rnr-mobile-top {
    min-height: 92px;
  }
}

@media (max-width: 350px) {
  .rnr-navbar-inner {
    padding-left: 8px;
    padding-right: 8px;
  }

  .rnr-logo img {
    width: 195px;
    max-width: calc(100vw - 65px);
  }

  .rnr-mobile-menu {
    width: 94%;
  }

  .rnr-mobile-logo img {
    width: 180px;
  }
}
        `}
      </style>

      {/* =========================
          NAVBAR
      ========================== */}

      <header className="rnr-navbar-wrapper">
        {/* TOP BAR */}

        <div className="rnr-topbar">
          <div className="rnr-topbar-inner">
            <div className="rnr-top-left">
              <span>📍 Visakhapatnam, Andhra Pradesh</span>
            </div>

            <div className="rnr-top-right">
              <a
                href="tel:+918500352005"
                className="rnr-top-link"
              >
                ☎ Call Us: 8500352005
              </a>

              <a
                href="https://wa.me/918500352005"
                target="_blank"
                rel="noreferrer"
                className="rnr-top-link"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION */}

        <nav>
          <div className="rnr-navbar-inner">
            {/* LOGO */}

            <NavLink
              to="/"
              className="rnr-logo"
              onClick={closeMenu}
              aria-label="RNR Balcony Safety Nets Vizag Home"
            >
              <img
                src="/logo.png"
                alt="RNR Balcony Safety Nets Vizag"
              />
            </NavLink>

            {/* DESKTOP LINKS */}

            <div className="rnr-desktop-nav">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `rnr-nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `rnr-nav-link ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `rnr-nav-link ${isActive ? "active" : ""}`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `rnr-nav-link ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>

              <a
                href="tel:+918500352005"
                className="rnr-quote-btn"
              >
                ☎ Get a Free Quote
              </a>
            </div>

            {/* MOBILE HAMBURGER */}

            <button
              type="button"
              className="rnr-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
              aria-controls="rnr-mobile-navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* =========================
          OVERLAY
      ========================== */}

      <div
        className={`rnr-mobile-overlay ${
          menuOpen ? "open" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* =========================
          MOBILE MENU
      ========================== */}

      <aside
        id="rnr-mobile-navigation"
        className={`rnr-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        {/* LOGO + CLOSE */}

        <div className="rnr-mobile-top">
          <NavLink
            to="/"
            className="rnr-mobile-logo"
            onClick={closeMenu}
            aria-label="RNR Balcony Safety Nets Vizag Home"
          >
            <img
              src="/logo.png"
              alt="RNR Balcony Safety Nets Vizag"
            />
          </NavLink>

          <button
            type="button"
            className="rnr-close-btn"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE LINKS */}

        <div className="rnr-mobile-links">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `rnr-mobile-link ${
                isActive ? "active" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about-us"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rnr-mobile-link ${
                isActive ? "active" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rnr-mobile-link ${
                isActive ? "active" : ""
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact-us"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rnr-mobile-link ${
                isActive ? "active" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* CONTACT */}

        <div className="rnr-mobile-contact">
          <small>CALL RNR SAFETY NETS</small>

          <a
            href="tel:+918500352005"
            className="rnr-mobile-phone"
          >
            8500352005
          </a>
        </div>

        {/* CALL */}

        <a
          href="tel:+918500352005"
          className="rnr-mobile-call"
        >
          ☎ Get a Free Quote
        </a>

        {/* WHATSAPP */}

        <a
          href="https://wa.me/918500352005?text=Hi%20RNR%20Safety%20Nets%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noreferrer"
          className="rnr-mobile-whatsapp"
        >
          WhatsApp Now
        </a>
      </aside>
    </>
  );
}

export default Navbar;