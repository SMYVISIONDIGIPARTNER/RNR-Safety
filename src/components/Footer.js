import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const phone = "9705429255";
  const email = "rnrsafetynets@gmail.com";

  const servicesOne = [
    "Balcony Safety Nets in Vizag",
    "Pigeon Safety Nets in Vizag",
    "Anti Bird Nets in Vizag",
    "Children Safety Nets in Vizag",
    "Pets Safety Nets in Vizag",
    "Bird Protection Nets in Vizag",
    "Duct Area Safety Nets in Vizag",
    "Building Safety Nets in Vizag",
  ];

  const servicesTwo = [
    "Staircase Safety Nets in Vizag",
    "Bird Spikes in Vizag",
    "Cricket Practice Nets in Vizag",
    "Construction Safety Nets in Vizag",
    "Industrial Safety Nets in Vizag",
    "Coconut Tree Nets in Vizag",
    "Monkey Safety Nets in Vizag",
    "Swimming Pool Safety Nets in Vizag",
  ];

  return (
    <>
      <style>
        {`
          /* =========================================
             FOOTER
          ========================================== */

          .rnr-footer {
            position: relative;
            width: 100%;
            overflow: hidden;

            background:
              radial-gradient(
                circle at 10% 10%,
                rgba(255, 103, 0, 0.12),
                transparent 28%
              ),
              radial-gradient(
                circle at 90% 80%,
                rgba(255, 255, 255, 0.06),
                transparent 30%
              ),
              linear-gradient(
                115deg,
                #052a5b 0%,
                #06356d 50%,
                #0c4a83 100%
              );

            color: #ffffff;
          }

          .rnr-footer::after {
            content: "";
            position: absolute;

            width: 430px;
            height: 430px;

            right: -170px;
            top: -230px;

            border: 75px solid rgba(255, 255, 255, 0.025);
            border-radius: 50%;

            pointer-events: none;
          }

          .rnr-footer-container {
            position: relative;
            z-index: 2;

            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
          }

          /* =========================================
             MAIN
          ========================================== */

          .rnr-footer-main {
            padding: 72px 0 55px;
          }

          .rnr-footer-grid {
            display: grid;

            grid-template-columns:
              minmax(300px, 1.25fr)
              minmax(230px, 1fr)
              minmax(230px, 1fr);

            gap: 65px;
          }

          /* =========================================
             BRAND / LOGO
          ========================================== */

          .rnr-footer-brand {
            max-width: 410px;
          }

          .rnr-footer-logo-box {
            width: 100%;
            max-width: 390px;
            min-height: 110px;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 15px 25px;

            background: #ffffff;

            border-radius: 22px;

            box-shadow:
              0 18px 45px rgba(0, 0, 0, 0.15);

            margin-bottom: 26px;

            text-decoration: none;
          }

          .rnr-footer-logo {
            width: 100%;
            max-width: 300px;
            height: auto;

            display: block;
          }

          .rnr-footer-description {
            margin: 0;

            color: rgba(255, 255, 255, 0.9);

            font-size: 17px;
            line-height: 1.8;
            font-weight: 400;
          }

          /* =========================================
             CONTACT INFO
          ========================================== */

          .rnr-footer-info {
            display: grid;
            gap: 21px;

            margin-top: 30px;
          }

          .rnr-footer-info-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
          }

          .rnr-footer-info-icon {
            width: 43px;
            height: 43px;

            flex-shrink: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 11px;

            background: rgba(255, 255, 255, 0.1);

            border: 1px solid rgba(255, 255, 255, 0.13);

            color: #ff8a35;

            font-size: 18px;
          }

          .rnr-footer-info-content {
            min-width: 0;
          }

          .rnr-footer-info-content strong {
            display: block;

            margin-bottom: 5px;

            color: #ffffff;

            font-size: 16px;
            font-weight: 800;
          }

          .rnr-footer-info-content span,
          .rnr-footer-info-content a {
            color: rgba(255, 255, 255, 0.85);

            text-decoration: none;

            font-size: 16px;
            line-height: 1.6;

            word-break: break-word;

            transition: color 0.25s ease;
          }

          .rnr-footer-info-content a:hover {
            color: #ff8a35;
          }

          /* =========================================
             HEADINGS
          ========================================== */

          .rnr-footer-heading {
            position: relative;

            margin: 0 0 27px;

            padding-bottom: 15px;

            color: #ffffff;

            font-size: 22px;
            line-height: 1.3;
            font-weight: 800;
          }

          .rnr-footer-heading::after {
            content: "";

            position: absolute;

            left: 0;
            bottom: 0;

            width: 45px;
            height: 3px;

            border-radius: 20px;

            background: #ff6700;
          }

          /* =========================================
             SERVICES
          ========================================== */

          .rnr-footer-services {
            display: flex;
            flex-direction: column;

            gap: 13px;
          }

          .rnr-footer-service {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            color: rgba(255, 255, 255, 0.9);

            text-decoration: none;

            font-size: 16px;
            line-height: 1.55;
            font-weight: 500;

            transition:
              color 0.25s ease,
              transform 0.25s ease;
          }

          .rnr-footer-service-check {
            flex-shrink: 0;

            color: #ff8a35;

            font-size: 17px;
            line-height: 1.45;
            font-weight: 900;
          }

          .rnr-footer-service:hover {
            color: #ffffff;

            transform: translateX(5px);
          }

          .rnr-footer-service:hover
          .rnr-footer-service-check {
            color: #ffffff;
          }

          /* =========================================
             CALL / WHATSAPP BUTTONS
          ========================================== */

          .rnr-footer-contact-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 11px;

            margin-top: 30px;
          }

          .rnr-footer-call-btn,
          .rnr-footer-whatsapp-btn {
            min-height: 52px;

            padding: 0 16px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

            border-radius: 12px;

            text-decoration: none;

            font-size: 15px;
            font-weight: 800;

            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
          }

          .rnr-footer-call-btn {
            color: #ffffff;

            background: #ff6700;

            box-shadow:
              0 12px 28px rgba(255, 103, 0, 0.22);
          }

          .rnr-footer-whatsapp-btn {
            color: #ffffff;

            background: rgba(255, 255, 255, 0.1);

            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .rnr-footer-call-btn:hover,
          .rnr-footer-whatsapp-btn:hover {
            transform: translateY(-3px);
          }

          .rnr-footer-whatsapp-btn:hover {
            background: rgba(255, 255, 255, 0.17);
          }

          /* =========================================
             QUICK LINKS
          ========================================== */

          .rnr-footer-quick-links {
            margin-top: 45px;

            padding-top: 28px;

            border-top:
              1px solid rgba(255, 255, 255, 0.14);

            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            gap: 12px 30px;
          }

          .rnr-footer-quick-link {
            position: relative;

            color: rgba(255, 255, 255, 0.82);

            text-decoration: none;

            font-size: 15px;
            font-weight: 700;

            transition: color 0.25s ease;
          }

          .rnr-footer-quick-link::after {
            content: "";

            position: absolute;

            left: 0;
            bottom: -6px;

            width: 0;
            height: 2px;

            border-radius: 20px;

            background: #ff6700;

            transition: width 0.25s ease;
          }

          .rnr-footer-quick-link:hover {
            color: #ffffff;
          }

          .rnr-footer-quick-link:hover::after {
            width: 100%;
          }

          /* =========================================
             BOTTOM BAR
          ========================================== */

          .rnr-footer-bottom {
            position: relative;
            z-index: 3;

            width: 100%;

            background: #ffffff;

            border-top: 1px solid #e9edf3;
          }

          .rnr-footer-bottom-inner {
            width: min(1240px, calc(100% - 40px));

            min-height: 78px;

            margin: 0 auto;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 25px;
          }

          .rnr-footer-copyright {
            margin: 0;

            color: #5e6d80;

            font-size: 14px;
            line-height: 1.6;
          }

          .rnr-footer-copyright strong {
            color: #062d61;
          }

          /* =========================================
             DEVELOPED BY
          ========================================== */

          .rnr-developed {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            gap: 8px;

            color: #6f7d8e;

            font-size: 14px;
            line-height: 1.5;

            white-space: nowrap;
          }

          .rnr-developed-link {
            position: relative;

            color: #062d61;

            text-decoration: none;

            font-size: 15px;
            font-weight: 900;

            letter-spacing: 0.25px;

            transition: color 0.25s ease;
          }

          .rnr-developed-link::after {
            content: "";

            position: absolute;

            left: 0;
            bottom: -4px;

            width: 100%;
            height: 2px;

            border-radius: 20px;

            background: #ff6700;

            transform: scaleX(0);
            transform-origin: left;

            transition: transform 0.25s ease;
          }

          .rnr-developed-link:hover {
            color: #ff6700;
          }

          .rnr-developed-link:hover::after {
            transform: scaleX(1);
          }

          /* =========================================
             TABLET
          ========================================== */

          @media (max-width: 1050px) {
            .rnr-footer-grid {
              grid-template-columns:
                minmax(300px, 1.1fr)
                1fr;

              gap: 50px 45px;
            }

            .rnr-footer-brand {
              grid-row: span 2;
            }

            .rnr-footer-description {
              font-size: 16px;
            }

            .rnr-footer-service {
              font-size: 15px;
            }
          }

          /* =========================================
             MOBILE
          ========================================== */

          @media (max-width: 720px) {
            .rnr-footer-container {
              width: calc(100% - 30px);
            }

            .rnr-footer-main {
              padding: 55px 0 42px;
            }

            .rnr-footer-grid {
              grid-template-columns: 1fr;

              gap: 43px;
            }

            .rnr-footer-brand {
              grid-row: auto;

              max-width: none;
            }

            .rnr-footer-logo-box {
              width: 100%;
              max-width: 100%;

              min-height: 100px;

              margin-bottom: 22px;

              border-radius: 18px;
            }

            .rnr-footer-logo {
              max-width: 270px;
            }

            .rnr-footer-description {
              font-size: 15px;
              line-height: 1.8;
            }

            .rnr-footer-heading {
              margin-bottom: 22px;

              font-size: 20px;
            }

            .rnr-footer-services {
              gap: 12px;
            }

            .rnr-footer-service {
              font-size: 15px;
            }

            .rnr-footer-service-check {
              font-size: 16px;
            }

            .rnr-footer-info-content strong {
              font-size: 15px;
            }

            .rnr-footer-info-content span,
            .rnr-footer-info-content a {
              font-size: 15px;
            }

            .rnr-footer-quick-links {
              justify-content: flex-start;

              gap: 17px 24px;

              margin-top: 40px;
            }

            .rnr-footer-quick-link {
              font-size: 14px;
            }

            .rnr-footer-bottom-inner {
              width: calc(100% - 30px);

              min-height: auto;

              padding: 20px 0;

              flex-direction: column;

              align-items: center;
              justify-content: center;

              gap: 10px;

              text-align: center;
            }

            .rnr-footer-copyright {
              font-size: 13px;
            }

            .rnr-developed {
              justify-content: center;

              white-space: normal;

              font-size: 13px;
            }

            .rnr-developed-link {
              font-size: 13px;
            }
          }

          /* =========================================
             SMALL MOBILE
          ========================================== */

          @media (max-width: 450px) {
            .rnr-footer-container {
              width: calc(100% - 24px);
            }

            .rnr-footer-main {
              padding: 45px 0 38px;
            }

            .rnr-footer-logo-box {
              min-height: 90px;

              padding: 12px 18px;
            }

            .rnr-footer-logo {
              max-width: 235px;
            }

            .rnr-footer-description {
              font-size: 15px;
            }

            .rnr-footer-info {
              margin-top: 25px;

              gap: 18px;
            }

            .rnr-footer-info-icon {
              width: 40px;
              height: 40px;

              font-size: 16px;
            }

            .rnr-footer-info-content strong {
              font-size: 14px;
            }

            .rnr-footer-info-content span,
            .rnr-footer-info-content a {
              font-size: 14px;
            }

            .rnr-footer-heading {
              font-size: 20px;
            }

            .rnr-footer-service {
              font-size: 14px;
              line-height: 1.6;
            }

            .rnr-footer-contact-actions {
              grid-template-columns: 1fr 1fr;

              gap: 8px;
            }

            .rnr-footer-call-btn,
            .rnr-footer-whatsapp-btn {
              min-height: 50px;

              padding: 0 10px;

              font-size: 12px;
            }

            .rnr-footer-quick-links {
              display: grid;
              grid-template-columns: repeat(2, 1fr);

              gap: 16px 15px;
            }

            .rnr-footer-quick-link {
              font-size: 14px;
            }

            .rnr-footer-bottom-inner {
              width: calc(100% - 24px);

              padding: 18px 0;
            }

            .rnr-footer-copyright {
              font-size: 12px;
            }

            .rnr-developed {
              font-size: 12px;
            }

            .rnr-developed-link {
              font-size: 12px;
            }
          }

          /* =========================================
             VERY SMALL MOBILE
          ========================================== */

          @media (max-width: 350px) {
            .rnr-footer-contact-actions {
              grid-template-columns: 1fr;
            }

            .rnr-footer-quick-links {
              grid-template-columns: 1fr;
            }

            .rnr-developed {
              flex-direction: column;

              gap: 4px;
            }
          }
        `}
      </style>

      {/* =========================================
          FOOTER
      ========================================== */}

      <footer className="rnr-footer">
        <div className="rnr-footer-main">
          <div className="rnr-footer-container">

            <div className="rnr-footer-grid">

              {/* ===============================
                  COMPANY INFORMATION
              ================================ */}

              <div className="rnr-footer-brand">

                <Link
                  to="/"
                  className="rnr-footer-logo-box"
                >
                  <img
                    src="/logo.png"
                    alt="RNR Balcony Safety Nets Vizag"
                    className="rnr-footer-logo"
                  />
                </Link>

                <p className="rnr-footer-description">
                  RNR Balcony Safety Nets Vizag provides
                  professional Balcony Safety Nets,
                  Pigeon Safety Nets, Anti Bird Nets,
                  Children Safety Nets and other safety
                  net solutions in Visakhapatnam.
                </p>

                {/* CONTACT DETAILS */}

                <div className="rnr-footer-info">

                  <div className="rnr-footer-info-item">

                    <div className="rnr-footer-info-icon">
                      ⌖
                    </div>

                    <div className="rnr-footer-info-content">
                      <strong>Address</strong>

                      <span>
                        Visakhapatnam, Andhra Pradesh
                      </span>
                    </div>

                  </div>

                  <div className="rnr-footer-info-item">

                    <div className="rnr-footer-info-icon">
                      ☎
                    </div>

                    <div className="rnr-footer-info-content">
                      <strong>Talk to an Expert</strong>

                      <a href={`tel:${phone}`}>
                        +91 {phone}
                      </a>
                    </div>

                  </div>

                  <div className="rnr-footer-info-item">

                    <div className="rnr-footer-info-icon">
                      ✉
                    </div>

                    <div className="rnr-footer-info-content">
                      <strong>Mail Us</strong>

                      <a href={`mailto:${email}`}>
                        {email}
                      </a>
                    </div>

                  </div>

                </div>

                {/* CALL + WHATSAPP */}

                <div className="rnr-footer-contact-actions">

                  <a
                    href={`tel:${phone}`}
                    className="rnr-footer-call-btn"
                  >
                    ☎ Call Now
                  </a>

                  <a
                    href={`https://wa.me/91${phone}?text=Hi%20RNR%20Safety%20Nets%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                    target="_blank"
                    rel="noreferrer"
                    className="rnr-footer-whatsapp-btn"
                  >
                    WhatsApp →
                  </a>

                </div>

              </div>

              {/* ===============================
                  SERVICES COLUMN 1
              ================================ */}

              <div className="rnr-footer-column">

                <h3 className="rnr-footer-heading">
                  Our Services
                </h3>

                <div className="rnr-footer-services">

                  {servicesOne.map((service) => (
                    <Link
                      key={service}
                      to="/services"
                      className="rnr-footer-service"
                    >
                      <span className="rnr-footer-service-check">
                        ✓
                      </span>

                      <span>
                        {service}
                      </span>
                    </Link>
                  ))}

                </div>

              </div>

              {/* ===============================
                  SERVICES COLUMN 2
              ================================ */}

              <div className="rnr-footer-column">

                <h3 className="rnr-footer-heading">
                  Our Services
                </h3>

                <div className="rnr-footer-services">

                  {servicesTwo.map((service) => (
                    <Link
                      key={service}
                      to="/services"
                      className="rnr-footer-service"
                    >
                      <span className="rnr-footer-service-check">
                        ✓
                      </span>

                      <span>
                        {service}
                      </span>
                    </Link>
                  ))}

                </div>

              </div>

            </div>

            {/* =================================
                QUICK LINKS
            ================================== */}

            <div className="rnr-footer-quick-links">

              <Link
                to="/"
                className="rnr-footer-quick-link"
              >
                Home
              </Link>

              <Link
                to="/about-us"
                className="rnr-footer-quick-link"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="rnr-footer-quick-link"
              >
                Services
              </Link>

              <Link
                to="/contact-us"
                className="rnr-footer-quick-link"
              >
                Contact Us
              </Link>

            </div>

          </div>
        </div>
      </footer>

      {/* =========================================
          COPYRIGHT / DEVELOPER BAR
      ========================================== */}

      <div className="rnr-footer-bottom">

        <div className="rnr-footer-bottom-inner">

          <p className="rnr-footer-copyright">
            © {new Date().getFullYear()}{" "}
            <strong>
              RNR Balcony Safety Nets Vizag
            </strong>
            . All Rights Reserved.
          </p>

          <div className="rnr-developed">

            <span>
              Developed by
            </span>

            <a
              href="https://smyvisiontechnologies.com"
              target="_blank"
              rel="noreferrer"
              className="rnr-developed-link"
            >
              SMYVISION TECHNOLOGIES
            </a>

          </div>

        </div>

      </div>
    </>
  );
}

export default Footer;