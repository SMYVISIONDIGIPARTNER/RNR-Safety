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
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          }

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

            box-shadow: 0 10px 22px rgba(255,107,11,0.22);
          }

          /* =========================
             HAMBURGER BUTTON
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
          }

          .rnr-hamburger span {
            position: absolute;
            left: 11px;

            width: 22px;
            height: 2px;

            background: #062d61;
            border-radius: 20px;
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

            transition: 0.3s ease;
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

            box-shadow: -15px 0 40px rgba(0,0,0,0.18);

            transition: right 0.35s ease;
          }

          .rnr-mobile-menu.open {
            right: 0;
          }

          /* =========================
             MOBILE TOP
          ========================== */

          .rnr-mobile-top {
            min-height: 78px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            border-bottom: 1px solid #edf1f6;

            margin-bottom: 10px;
          }

          .rnr-mobile-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .rnr-mobile-logo img {
            width: 145px;
            height: auto;
            display: block;
          }

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

            transition: 0.2s ease;
          }

          .rnr-mobile-link:hover,
          .rnr-mobile-link.active {
            color: #ff6b0b;
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
          }

          /* =========================
             TABLET
          ========================== */

          @media (max-width: 900px) {
            body {
              padding-top: 70px;
            }

            .rnr-topbar {
              display: none;
            }

            .rnr-navbar-inner {
              min-height: 70px;
              padding: 0 15px;
            }

            .rnr-logo img {
              width: 150px;
            }

            .rnr-desktop-nav {
              display: none;
            }

            .rnr-hamburger {
              display: block;
            }
          }

          /* =========================
             SMALL MOBILE
          ========================== */

          @media (max-width: 480px) {
            body {
              padding-top: 66px;
            }

            .rnr-navbar-inner {
              min-height: 66px;
              padding: 0 12px;
            }

            .rnr-logo img {
              width: 135px;
            }

            .rnr-hamburger {
              width: 42px;
              height: 42px;
            }

            .rnr-mobile-menu {
              width: 88%;
              padding-left: 20px;
              padding-right: 20px;
            }

            .rnr-mobile-logo img {
              width: 135px;
            }

            .rnr-mobile-top {
              min-height: 72px;
            }
          }

          @media (max-width: 350px) {
            .rnr-mobile-menu {
              width: 92%;
            }

            .rnr-mobile-logo img {
              width: 120px;
            }
          }
        `}
      </style>

      {/* NAVBAR */}

      <header className="rnr-navbar-wrapper">
        <div className="rnr-topbar">
          <div className="rnr-topbar-inner">

            <div className="rnr-top-left">
              <span>📍 Visakhapatnam, Andhra Pradesh</span>
            </div>

            <div className="rnr-top-right">

              <a
                href="tel:9705429255"
                className="rnr-top-link"
              >
                ☎ Call Us: 9705429255
              </a>

              <a
                href="https://wa.me/919705429255"
                target="_blank"
                rel="noreferrer"
                className="rnr-top-link"
              >
                WhatsApp
              </a>

            </div>

          </div>
        </div>

        <nav>
          <div className="rnr-navbar-inner">

            {/* LOGO */}

            <NavLink
              to="/"
              className="rnr-logo"
              onClick={closeMenu}
            >
              <img
                src="/logo.png"
                alt="RNR Safety Nets"
              />
            </NavLink>

            {/* DESKTOP LINKS */}

            <div className="rnr-desktop-nav">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `rnr-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `rnr-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `rnr-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `rnr-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                Contact
              </NavLink>

              <a
                href="tel:9705429255"
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
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </nav>
      </header>

      {/* OVERLAY */}

      <div
        className={`rnr-mobile-overlay ${
          menuOpen ? "open" : ""
        }`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}

      <aside
        className={`rnr-mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        {/* LOGO + CLOSE */}

        <div className="rnr-mobile-top">

          <NavLink
            to="/"
            className="rnr-mobile-logo"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="RNR Safety Nets"
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

          <small>
            CALL RNR SAFETY NETS
          </small>

          <a
            href="tel:9705429255"
            className="rnr-mobile-phone"
          >
            9705429255
          </a>

        </div>

        <a
          href="tel:9705429255"
          className="rnr-mobile-call"
        >
          ☎ Get a Free Quote
        </a>

        <a
          href="https://wa.me/919705429255?text=Hi%20RNR%20Safety%20Nets%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
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