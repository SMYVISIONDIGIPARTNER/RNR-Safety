import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const phone = "9705429255";
  const email = "rnrsafetynets@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello RNR Balcony Safety Nets Vizag,

I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}
Service: ${formData.service || "Not Selected"}

Message:
${formData.message || "I would like to know more about your safety net services."}
    `;

    const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>

      <Helmet>
        <title>Contact RNR Balcony Safety Nets Vizag | Call 9705429255</title>

        <meta
          name="description"
          content="Contact RNR Balcony Safety Nets Vizag for balcony safety nets, pigeon nets, bird nets, children safety nets and other professional safety net services in Visakhapatnam. Call or WhatsApp 9705429255 for a free estimate."
        />

        <meta
          name="keywords"
          content="contact balcony safety nets Vizag, safety nets Visakhapatnam contact, pigeon nets Vizag phone number, balcony nets Vizag contact, bird nets Visakhapatnam, children safety nets Vizag, RNR Balcony Safety Nets Vizag"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="RNR Balcony Safety Nets Vizag" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Visakhapatnam" />
        <meta name="theme-color" content="#062d61" />

        <link
          rel="canonical"
          href="https://rnrbalconysafetynetsvizag.com/contact-us"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:site_name"
          content="RNR Balcony Safety Nets Vizag"
        />

        <meta
          property="og:title"
          content="Contact RNR Balcony Safety Nets Vizag | Call 9705429255"
        />

        <meta
          property="og:description"
          content="Contact RNR Balcony Safety Nets Vizag for professional safety net installation services in Visakhapatnam. Call or WhatsApp 9705429255."
        />

        <meta
          property="og:url"
          content="https://rnrbalconysafetynetsvizag.com/contact-us"
        />

        <meta
          property="og:image"
          content="https://rnrbalconysafetynetsvizag.com/images/Balcony-Safety-Nets.png"
        />

        <meta
          property="og:image:alt"
          content="Contact RNR Balcony Safety Nets Vizag in Visakhapatnam"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contact RNR Balcony Safety Nets Vizag"
        />

        <meta
          name="twitter:description"
          content="Call or WhatsApp RNR Balcony Safety Nets Vizag for professional balcony, pigeon, bird and children safety net installation in Visakhapatnam."
        />

        <meta
          name="twitter:image"
          content="https://rnrbalconysafetynetsvizag.com/images/Balcony-Safety-Nets.png"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "@id": "https://rnrbalconysafetynetsvizag.com/#business",
            name: "RNR Balcony Safety Nets Vizag",
            url: "https://rnrbalconysafetynetsvizag.com/",
            logo: "https://rnrbalconysafetynetsvizag.com/logo.png",
            image:
              "https://rnrbalconysafetynetsvizag.com/images/Balcony-Safety-Nets.png",
            telephone: "+91-9705429255",
            email: "rnrsafetynets@gmail.com",
            description:
              "RNR Balcony Safety Nets Vizag provides professional balcony safety nets, pigeon nets, anti bird nets, children safety nets and other safety net solutions in Visakhapatnam.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Visakhapatnam",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN"
            },
            areaServed: [
              {
                "@type": "City",
                name: "Visakhapatnam"
              },
              {
                "@type": "Place",
                name: "Vizag"
              }
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9705429255",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Telugu"]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id":
              "https://rnrbalconysafetynetsvizag.com/contact-us#webpage",
            url:
              "https://rnrbalconysafetynetsvizag.com/contact-us",
            name:
              "Contact RNR Balcony Safety Nets Vizag",
            description:
              "Contact RNR Balcony Safety Nets Vizag for professional safety net installation and free estimates in Visakhapatnam.",
            isPartOf: {
              "@type": "WebSite",
              "@id":
                "https://rnrbalconysafetynetsvizag.com/#website",
              url:
                "https://rnrbalconysafetynetsvizag.com/",
              name:
                "RNR Balcony Safety Nets Vizag"
            },
            about: {
              "@id":
                "https://rnrbalconysafetynetsvizag.com/#business"
            },
            inLanguage: "en-IN"
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item:
                  "https://rnrbalconysafetynetsvizag.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact Us",
                item:
                  "https://rnrbalconysafetynetsvizag.com/contact-us"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Safety Net Installation in Visakhapatnam",
            serviceType:
              "Balcony, pigeon, bird, children, building and industrial safety net installation",
            provider: {
              "@id":
                "https://rnrbalconysafetynetsvizag.com/#business"
            },
            areaServed: {
              "@type": "City",
              name: "Visakhapatnam"
            },
            url:
              "https://rnrbalconysafetynetsvizag.com/services"
          })}
        </script>
      </Helmet>

      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
            overflow-x: hidden;
          }

          .rnr-contact-page {
            width: 100%;
            overflow: hidden;
            background: #ffffff;
            color: #062d61;

            font-family:
              Inter,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
          }

          .rnr-contact-container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
          }

          /* =====================================
             HERO
          ====================================== */

          .rnr-contact-hero {
            position: relative;

            min-height: 390px;

            display: flex;
            align-items: center;

            overflow: hidden;

            background:
              linear-gradient(
                120deg,
                #042859,
                #073c77
              );
          }

          .rnr-contact-hero::before {
            content: "";

            position: absolute;

            width: 450px;
            height: 450px;

            right: -160px;
            top: -230px;

            border-radius: 50%;

            border: 75px solid rgba(255,255,255,0.03);
          }

          .rnr-contact-hero::after {
            content: "";

            position: absolute;

            width: 300px;
            height: 300px;

            left: -160px;
            bottom: -180px;

            border-radius: 50%;

            background: rgba(255,103,0,0.08);
          }

          .rnr-contact-hero-content {
            position: relative;
            z-index: 2;

            max-width: 760px;

            padding: 75px 0;
          }

          .rnr-contact-badge {
            display: inline-flex;
            align-items: center;

            gap: 9px;

            padding: 8px 15px;

            margin-bottom: 20px;

            border:
              1px solid rgba(255,255,255,0.18);

            border-radius: 50px;

            background: rgba(255,255,255,0.08);

            color: #ffffff;

            font-size: 12px;
            font-weight: 800;

            letter-spacing: 1.4px;

            text-transform: uppercase;
          }

          .rnr-contact-badge-dot {
            width: 8px;
            height: 8px;

            border-radius: 50%;

            background: #ff6700;

            box-shadow:
              0 0 0 5px rgba(255,103,0,0.17);
          }

          .rnr-contact-hero h1 {
            margin: 0;

            color: #ffffff;

            font-size: clamp(45px, 6vw, 74px);
            line-height: 1;

            letter-spacing: -3px;

            font-weight: 900;
          }

          .rnr-contact-hero h1 span {
            color: #ff6700;
          }

          .rnr-contact-hero p {
            max-width: 680px;

            margin: 22px 0 0;

            color: rgba(255,255,255,0.8);

            font-size: 17px;
            line-height: 1.8;
          }

          /* =====================================
             MAIN CONTACT
          ====================================== */

          .rnr-contact-main {
            padding: 90px 0;

            background: #f6f8fb;
          }

          .rnr-contact-heading-area {
            max-width: 730px;

            margin: 0 auto 50px;

            text-align: center;
          }

          .rnr-contact-eyebrow {
            display: inline-flex;
            align-items: center;

            gap: 9px;

            margin-bottom: 15px;

            color: #ff6700;

            font-size: 13px;
            font-weight: 850;

            letter-spacing: 1.8px;

            text-transform: uppercase;
          }

          .rnr-contact-eyebrow::before,
          .rnr-contact-eyebrow::after {
            content: "";

            width: 25px;
            height: 3px;

            border-radius: 20px;

            background: #ff6700;
          }

          .rnr-contact-heading {
            margin: 0;

            color: #062d61;

            font-size: clamp(34px, 4.5vw, 54px);
            line-height: 1.1;

            letter-spacing: -1.8px;

            font-weight: 900;
          }

          .rnr-contact-heading span {
            color: #ff6700;
          }

          .rnr-contact-heading-area p {
            margin: 18px auto 0;

            color: #728198;

            font-size: 16px;
            line-height: 1.8;
          }

          /* =====================================
             GRID
          ====================================== */

          .rnr-contact-grid {
            display: grid;

            grid-template-columns:
              minmax(0, 0.85fr)
              minmax(0, 1.15fr);

            gap: 30px;

            align-items: stretch;
          }

          /* =====================================
             LEFT SIDE
          ====================================== */

          .rnr-contact-information {
            position: relative;

            overflow: hidden;

            padding: 40px;

            border-radius: 24px;

            background:
              linear-gradient(
                145deg,
                #052b5e,
                #073d77
              );

            color: #ffffff;
          }

          .rnr-contact-information::after {
            content: "";

            position: absolute;

            width: 300px;
            height: 300px;

            right: -170px;
            bottom: -180px;

            border-radius: 50%;

            border:
              55px solid rgba(255,255,255,0.035);
          }

          .rnr-contact-information-content {
            position: relative;
            z-index: 2;
          }

          .rnr-contact-information small {
            display: block;

            margin-bottom: 10px;

            color: #ff8a35;

            font-size: 12px;
            font-weight: 850;

            letter-spacing: 1.6px;

            text-transform: uppercase;
          }

          .rnr-contact-information h2 {
            margin: 0;

            color: #ffffff;

            font-size: 34px;
            line-height: 1.15;

            letter-spacing: -1px;
          }

          .rnr-contact-intro {
            margin: 17px 0 0;

            color: rgba(255,255,255,0.74);

            font-size: 15px;
            line-height: 1.75;
          }

          /* INFO CARDS */

          .rnr-contact-info-list {
            display: grid;

            gap: 14px;

            margin-top: 32px;
          }

          .rnr-contact-info-card {
            display: flex;
            align-items: center;

            gap: 15px;

            padding: 18px;

            border:
              1px solid rgba(255,255,255,0.11);

            border-radius: 15px;

            background:
              rgba(255,255,255,0.07);

            transition:
              transform 0.3s ease,
              background 0.3s ease;
          }

          .rnr-contact-info-card:hover {
            transform: translateX(5px);

            background:
              rgba(255,255,255,0.11);
          }

          .rnr-contact-info-icon {
            width: 49px;
            height: 49px;

            flex-shrink: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 13px;

            background: #ff6700;

            color: #ffffff;

            font-size: 19px;
          }

          .rnr-contact-info-card span {
            display: block;

            margin-bottom: 5px;

            color: rgba(255,255,255,0.6);

            font-size: 11px;
            font-weight: 700;

            text-transform: uppercase;

            letter-spacing: 0.7px;
          }

          .rnr-contact-info-card strong,
          .rnr-contact-info-card a {
            color: #ffffff;

            text-decoration: none;

            font-size: 16px;
            line-height: 1.5;

            font-weight: 750;
          }

          /* QUICK CONTACT */

          .rnr-contact-quick {
            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 10px;

            margin-top: 27px;
          }

          .rnr-contact-call,
          .rnr-contact-whatsapp {
            min-height: 52px;

            padding: 0 14px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 11px;

            text-decoration: none;

            font-size: 14px;
            font-weight: 850;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .rnr-contact-call {
            color: #ffffff;

            background: #ff6700;

            box-shadow:
              0 12px 25px rgba(255,103,0,0.2);
          }

          .rnr-contact-whatsapp {
            color: #062d61;

            background: #ffffff;
          }

          .rnr-contact-call:hover,
          .rnr-contact-whatsapp:hover {
            transform: translateY(-3px);
          }

          /* AVAILABILITY */

          .rnr-contact-availability {
            margin-top: 28px;

            padding-top: 25px;

            border-top:
              1px solid rgba(255,255,255,0.12);
          }

          .rnr-contact-availability h3 {
            margin: 0 0 10px;

            color: #ffffff;

            font-size: 17px;
          }

          .rnr-contact-availability p {
            margin: 0;

            color: rgba(255,255,255,0.7);

            font-size: 14px;
            line-height: 1.7;
          }

          /* =====================================
             FORM
          ====================================== */

          .rnr-contact-form-box {
            padding: 42px;

            border:
              1px solid #e5eaf0;

            border-radius: 24px;

            background: #ffffff;

            box-shadow:
              0 18px 50px rgba(6,45,97,0.07);
          }

          .rnr-contact-form-top {
            margin-bottom: 28px;
          }

          .rnr-contact-form-top small {
            color: #ff6700;

            font-size: 12px;
            font-weight: 850;

            letter-spacing: 1.4px;

            text-transform: uppercase;
          }

          .rnr-contact-form-top h2 {
            margin: 8px 0 0;

            color: #062d61;

            font-size: 32px;
            line-height: 1.2;

            letter-spacing: -0.8px;
          }

          .rnr-contact-form-top p {
            margin: 10px 0 0;

            color: #7a889b;

            font-size: 14px;
            line-height: 1.7;
          }

          .rnr-contact-form {
            display: grid;

            gap: 18px;
          }

          .rnr-contact-row {
            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 15px;
          }

          .rnr-contact-field {
            display: flex;
            flex-direction: column;

            gap: 8px;
          }

          .rnr-contact-field label {
            color: #062d61;

            font-size: 13px;
            font-weight: 800;
          }

          .rnr-contact-field label span {
            color: #ff6700;
          }

          .rnr-contact-field input,
          .rnr-contact-field select,
          .rnr-contact-field textarea {
            width: 100%;

            border: 1px solid #dfe5ec;

            outline: none;

            border-radius: 11px;

            background: #f9fafc;

            color: #25374e;

            font-family: inherit;

            font-size: 14px;

            transition:
              border 0.25s ease,
              box-shadow 0.25s ease,
              background 0.25s ease;
          }

          .rnr-contact-field input,
          .rnr-contact-field select {
            height: 52px;

            padding: 0 15px;
          }

          .rnr-contact-field textarea {
            min-height: 145px;

            padding: 15px;

            resize: vertical;
          }

          .rnr-contact-field input:focus,
          .rnr-contact-field select:focus,
          .rnr-contact-field textarea:focus {
            border-color: #ff6700;

            background: #ffffff;

            box-shadow:
              0 0 0 4px rgba(255,103,0,0.08);
          }

          .rnr-contact-submit {
            min-height: 56px;

            border: none;

            border-radius: 12px;

            cursor: pointer;

            background:
              linear-gradient(
                120deg,
                #ff6700,
                #ff7b19
              );

            color: #ffffff;

            font-family: inherit;

            font-size: 15px;
            font-weight: 850;

            box-shadow:
              0 14px 30px rgba(255,103,0,0.2);

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .rnr-contact-submit:hover {
            transform: translateY(-3px);

            box-shadow:
              0 18px 36px rgba(255,103,0,0.28);
          }

          .rnr-contact-form-note {
            margin: 0;

            color: #8a96a6;

            font-size: 12px;
            line-height: 1.6;

            text-align: center;
          }

          /* =====================================
             WHY CONTACT
          ====================================== */

          .rnr-contact-benefits {
            padding: 80px 0;

            background: #ffffff;
          }

          .rnr-contact-benefit-grid {
            display: grid;

            grid-template-columns:
              repeat(4, 1fr);

            gap: 16px;
          }

          .rnr-contact-benefit {
            padding: 28px 22px;

            border:
              1px solid #e6ebf1;

            border-radius: 17px;

            background: #ffffff;

            text-align: center;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .rnr-contact-benefit:hover {
            transform: translateY(-6px);

            box-shadow:
              0 18px 40px rgba(6,45,97,0.08);
          }

          .rnr-contact-benefit-icon {
            width: 52px;
            height: 52px;

            margin: 0 auto 16px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 14px;

            background: #fff1e8;

            color: #ff6700;

            font-size: 21px;
          }

          .rnr-contact-benefit h3 {
            margin: 0;

            color: #062d61;

            font-size: 17px;
          }

          .rnr-contact-benefit p {
            margin: 9px 0 0;

            color: #7a889a;

            font-size: 13px;
            line-height: 1.65;
          }

          /* =====================================
             FINAL CTA
          ====================================== */

          .rnr-contact-final-section {
            padding: 0 0 90px;

            background: #ffffff;
          }

          .rnr-contact-final {
            position: relative;

            overflow: hidden;

            padding: 55px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 40px;

            border-radius: 24px;

            background:
              linear-gradient(
                120deg,
                #ff6700,
                #ff7d1c
              );

            color: #ffffff;
          }

          .rnr-contact-final::after {
            content: "";

            position: absolute;

            width: 320px;
            height: 320px;

            right: -120px;
            top: -190px;

            border-radius: 50%;

            border:
              60px solid rgba(255,255,255,0.08);
          }

          .rnr-contact-final-content {
            position: relative;
            z-index: 2;

            max-width: 720px;
          }

          .rnr-contact-final small {
            font-size: 11px;
            font-weight: 850;

            letter-spacing: 1.5px;

            text-transform: uppercase;
          }

          .rnr-contact-final h2 {
            margin: 10px 0 0;

            color: #ffffff;

            font-size: clamp(29px, 4vw, 44px);
            line-height: 1.15;

            letter-spacing: -1.3px;
          }

          .rnr-contact-final p {
            margin: 14px 0 0;

            color: rgba(255,255,255,0.85);

            font-size: 15px;
            line-height: 1.7;
          }

          .rnr-contact-final a {
            position: relative;
            z-index: 3;

            min-width: 205px;
            min-height: 55px;

            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;

            background: #ffffff;

            color: #062d61;

            text-decoration: none;

            font-size: 14px;
            font-weight: 900;

            box-shadow:
              0 15px 35px rgba(0,0,0,0.1);
          }

          /* =====================================
             TABLET
          ====================================== */

          @media (max-width: 950px) {
            .rnr-contact-grid {
              grid-template-columns: 1fr;
            }

            .rnr-contact-benefit-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* =====================================
             MOBILE
          ====================================== */

          @media (max-width: 700px) {
            .rnr-contact-container {
              width: calc(100% - 30px);
            }

            .rnr-contact-main {
              padding: 65px 0;
            }

            .rnr-contact-hero {
              min-height: 350px;
            }

            .rnr-contact-hero-content {
              padding: 60px 0;
            }

            .rnr-contact-hero h1 {
              letter-spacing: -2px;
            }

            .rnr-contact-information,
            .rnr-contact-form-box {
              padding: 30px;
            }

            .rnr-contact-final {
              padding: 40px 30px;

              flex-direction: column;

              align-items: flex-start;
            }

            .rnr-contact-final a {
              width: 100%;
            }
          }

          /* =====================================
             SMALL MOBILE
          ====================================== */

          @media (max-width: 500px) {
            .rnr-contact-container {
              width: calc(100% - 24px);
            }

            .rnr-contact-hero {
              min-height: 330px;
            }

            .rnr-contact-hero h1 {
              font-size: 44px;
            }

            .rnr-contact-hero p {
              font-size: 14px;
            }

            .rnr-contact-main {
              padding: 55px 0;
            }

            .rnr-contact-heading-area {
              margin-bottom: 35px;
            }

            .rnr-contact-heading {
              font-size: 34px;
            }

            .rnr-contact-information,
            .rnr-contact-form-box {
              padding: 24px 18px;

              border-radius: 18px;
            }

            .rnr-contact-information h2 {
              font-size: 28px;
            }

            .rnr-contact-info-card {
              padding: 15px;
            }

            .rnr-contact-info-card strong,
            .rnr-contact-info-card a {
              font-size: 14px;
            }

            .rnr-contact-quick {
              grid-template-columns: 1fr;
            }

            .rnr-contact-row {
              grid-template-columns: 1fr;
            }

            .rnr-contact-form-top h2 {
              font-size: 27px;
            }

            .rnr-contact-benefits {
              padding: 60px 0;
            }

            .rnr-contact-benefit-grid {
              grid-template-columns: 1fr 1fr;

              gap: 10px;
            }

            .rnr-contact-benefit {
              padding: 22px 12px;
            }

            .rnr-contact-benefit h3 {
              font-size: 15px;
            }

            .rnr-contact-benefit p {
              font-size: 12px;
            }

            .rnr-contact-final-section {
              padding-bottom: 60px;
            }

            .rnr-contact-final {
              padding: 34px 22px;

              border-radius: 18px;
            }
          }

          @media (max-width: 350px) {
            .rnr-contact-benefit-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <main className="rnr-contact-page">

        {/* =====================================
            HERO
        ====================================== */}

        <section className="rnr-contact-hero">

          <div className="rnr-contact-container">

            <div className="rnr-contact-hero-content">

              <div className="rnr-contact-badge">
                <span className="rnr-contact-badge-dot"></span>
                Reach Us At
              </div>

              <h1>
                Enquire <span>Now.</span>
              </h1>

              <p>
                Looking for balcony safety nets, pigeon
                safety nets or other protection solutions?
                Talk to RNR Balcony Safety Nets Vizag and
                get the right solution for your space.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================
            CONTACT + FORM
        ====================================== */}

        <section className="rnr-contact-main">

          <div className="rnr-contact-container">

            <div className="rnr-contact-heading-area">

              <span className="rnr-contact-eyebrow">
                Contact Us
              </span>

              <h2 className="rnr-contact-heading">
                Let's Discuss Your{" "}
                <span>Safety Requirements.</span>
              </h2>

              <p>
                Contact our team for service enquiries,
                installation requirements, pricing
                information or a free estimate for your
                property.
              </p>

            </div>

            <div className="rnr-contact-grid">

              {/* =============================
                  CONTACT INFORMATION
              ============================== */}

              <div className="rnr-contact-information">

                <div className="rnr-contact-information-content">

                  <small>
                    Reach Us At
                  </small>

                  <h2>
                    We're Here to Help.
                  </h2>

                  <p className="rnr-contact-intro">
                    Speak with our team about your safety
                    net requirements in Vizag. We can help
                    you choose a suitable solution for
                    balconies, birds, children, buildings
                    and other areas.
                  </p>

                  <div className="rnr-contact-info-list">

                    {/* ADDRESS */}

                    <div className="rnr-contact-info-card">

                      <div className="rnr-contact-info-icon">
                        ⌖
                      </div>

                      <div>
                        <span>
                          Address
                        </span>

                        <strong>
                          Vizag, Andhra Pradesh
                        </strong>
                      </div>

                    </div>

                    {/* PHONE */}

                    <div className="rnr-contact-info-card">

                      <div className="rnr-contact-info-icon">
                        ☎
                      </div>

                      <div>
                        <span>
                          Talk to an Expert
                        </span>

                        <a href={`tel:${phone}`}>
                          +91 {phone}
                        </a>
                      </div>

                    </div>

                    {/* EMAIL */}

                    <div className="rnr-contact-info-card">

                      <div className="rnr-contact-info-icon">
                        ✉
                      </div>

                      <div>
                        <span>
                          Mail Us
                        </span>

                        <a href={`mailto:${email}`}>
                          {email}
                        </a>
                      </div>

                    </div>

                    {/* SERVICE AREA */}

                    <div className="rnr-contact-info-card">

                      <div className="rnr-contact-info-icon">
                        ◎
                      </div>

                      <div>
                        <span>
                          Service Area
                        </span>

                        <strong>
                          Visakhapatnam & Nearby Areas
                        </strong>
                      </div>

                    </div>

                  </div>

                  {/* QUICK ACTIONS */}

                  <div className="rnr-contact-quick">

                    <a
                      href={`tel:${phone}`}
                      className="rnr-contact-call"
                    >
                      ☎ Call Now
                    </a>

                    <a
                      href={`https://wa.me/91${phone}?text=${encodeURIComponent(
                        "Hi RNR Balcony Safety Nets Vizag, I would like to know more about your safety net services."
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rnr-contact-whatsapp"
                    >
                      WhatsApp →
                    </a>

                  </div>

                  {/* AVAILABILITY */}

                  <div className="rnr-contact-availability">

                    <h3>
                      Need a Free Estimate?
                    </h3>

                    <p>
                      Tell us your location and the type of
                      safety net you need. Our team can
                      guide you with a suitable solution
                      and installation requirements.
                    </p>

                  </div>

                </div>

              </div>

              {/* =============================
                  CONTACT FORM
              ============================== */}

              <div className="rnr-contact-form-box">

                <div className="rnr-contact-form-top">

                  <small>
                    Send Your Requirement
                  </small>

                  <h2>
                    Contact Us
                  </h2>

                  <p>
                    Fill in your details below. Your
                    enquiry will be prepared and sent
                    directly through WhatsApp.
                  </p>

                </div>

                <form
                  className="rnr-contact-form"
                  onSubmit={handleSubmit}
                >

                  {/* NAME + PHONE */}

                  <div className="rnr-contact-row">

                    <div className="rnr-contact-field">

                      <label htmlFor="name">
                        Name <span>*</span>
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="rnr-contact-field">

                      <label htmlFor="phone">
                        Phone <span>*</span>
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />

                    </div>

                  </div>

                  {/* EMAIL */}

                  <div className="rnr-contact-field">

                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>

                  {/* SERVICE */}

                  <div className="rnr-contact-field">

                    <label htmlFor="service">
                      Select Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="Balcony Safety Nets">
                        Balcony Safety Nets
                      </option>

                      <option value="Pigeon Safety Nets">
                        Pigeon Safety Nets
                      </option>

                      <option value="Anti Bird Nets">
                        Anti Bird Nets
                      </option>

                      <option value="Children Safety Nets">
                        Children Safety Nets
                      </option>

                      <option value="Bird Protection Nets">
                        Bird Protection Nets
                      </option>

                      <option value="Duct Area Safety Nets">
                        Duct Area Safety Nets
                      </option>

                      <option value="Building Safety Nets">
                        Building Safety Nets
                      </option>

                      <option value="Industrial Safety Nets">
                        Industrial Safety Nets
                      </option>

                      <option value="Staircase Safety Nets">
                        Staircase Safety Nets
                      </option>

                      <option value="Swimming Pool Safety Nets">
                        Swimming Pool Safety Nets
                      </option>

                      <option value="Bird Spikes">
                        Bird Spikes
                      </option>

                      <option value="Cricket Practice Nets">
                        Cricket Practice Nets
                      </option>

                      <option value="Other">
                        Other Requirement
                      </option>
                    </select>

                  </div>

                  {/* MESSAGE */}

                  <div className="rnr-contact-field">

                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirement, location, balcony size or any other details..."
                      value={formData.message}
                      onChange={handleChange}
                    />

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="rnr-contact-submit"
                  >
                    Send Enquiry via WhatsApp →
                  </button>

                  <p className="rnr-contact-form-note">
                    By submitting this form, your enquiry
                    will open in WhatsApp so you can send
                    it directly to RNR Balcony Safety Nets
                    Vizag.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            WHY CONTACT US
        ====================================== */}

        <section className="rnr-contact-benefits">

          <div className="rnr-contact-container">

            <div className="rnr-contact-heading-area">

              <span className="rnr-contact-eyebrow">
                Why Choose RNR
              </span>

              <h2 className="rnr-contact-heading">
                Professional Service.{" "}
                <span>Reliable Protection.</span>
              </h2>

            </div>

            <div className="rnr-contact-benefit-grid">

              <div className="rnr-contact-benefit">

                <div className="rnr-contact-benefit-icon">
                  ✓
                </div>

                <h3>
                  Quality Materials
                </h3>

                <p>
                  Durable safety net materials selected
                  for dependable protection and long-term
                  use.
                </p>

              </div>

              <div className="rnr-contact-benefit">

                <div className="rnr-contact-benefit-icon">
                  ⚙
                </div>

                <h3>
                  Expert Installation
                </h3>

                <p>
                  Professional installation based on the
                  requirements of your balcony or property.
                </p>

              </div>

              <div className="rnr-contact-benefit">

                <div className="rnr-contact-benefit-icon">
                  ◈
                </div>

                <h3>
                  Custom Solutions
                </h3>

                <p>
                  Safety net solutions planned according
                  to the space and type of protection
                  required.
                </p>

              </div>

              <div className="rnr-contact-benefit">

                <div className="rnr-contact-benefit-icon">
                  ☎
                </div>

                <h3>
                  Easy Enquiry
                </h3>

                <p>
                  Contact our team directly by phone or
                  WhatsApp to discuss your requirements.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================
            FINAL CTA
        ====================================== */}

        <section className="rnr-contact-final-section">

          <div className="rnr-contact-container">

            <div className="rnr-contact-final">

              <div className="rnr-contact-final-content">

                <small>
                  RNR BALCONY SAFETY NETS VIZAG
                </small>

                <h2>
                  Need Safety Nets for Your Property?
                </h2>

                <p>
                  Contact us today to discuss your
                  requirement and get a suitable safety
                  net solution for your home, apartment
                  or commercial property.
                </p>

              </div>

              <a href={`tel:${phone}`}>
                ☎ Call {phone}
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Contact;