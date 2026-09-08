import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function About() {
  const phone = "9705429255";

  const handleImageError = (event, fallback) => {
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback;
    }
  };

  const specifications = [
    {
      icon: "◆",
      title: "Material",
      value: "Stainless Steel",
    },
    {
      icon: "↔",
      title: "Wire Thickness",
      value: "2mm - 3mm",
    },
    {
      icon: "◈",
      title: "Coating",
      value: "Anti-rust Coating",
    },
    {
      icon: "▦",
      title: "Mesh Size",
      value: "Narrow Gaps",
    },
    {
      icon: "⚙",
      title: "Tensile Strength",
      value: "Up to 400 kg",
    },
    {
      icon: "☀",
      title: "Weather Resistance",
      value: "UV & Corrosion Resistant",
    },
    {
      icon: "⌂",
      title: "Installation",
      value: "Wall-Mounted",
    },
    {
      icon: "↕",
      title: "Installation Option",
      value: "Floor-to-Ceiling",
    },
  ];

  return (
    <>

      <Helmet>
        <title>About RNR Balcony Safety Nets Vizag | Safety Net Experts in Visakhapatnam</title>
        <meta
          name="description"
          content="Learn about RNR Balcony Safety Nets Vizag, providing professional balcony safety nets, pigeon nets, bird protection nets, children safety nets and related safety net solutions in Visakhapatnam."
        />
        <meta
          name="keywords"
          content="RNR Balcony Safety Nets Vizag, balcony safety nets Vizag, safety nets Visakhapatnam, pigeon nets Vizag, bird nets Vizag, children safety nets Vizag, bird protection nets Visakhapatnam, safety net installation Vizag"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="RNR Balcony Safety Nets Vizag" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Visakhapatnam" />
        <meta name="theme-color" content="#062d61" />

        <link rel="canonical" href="https://rnrbalconysafetynetsvizag.com/about-us" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="RNR Balcony Safety Nets Vizag" />
        <meta property="og:title" content="About RNR Balcony Safety Nets Vizag | Safety Net Experts in Visakhapatnam" />
        <meta
          property="og:description"
          content="Professional balcony, pigeon, bird and children safety net solutions in Visakhapatnam from RNR Balcony Safety Nets Vizag."
        />
        <meta property="og:url" content="https://rnrbalconysafetynetsvizag.com/about-us" />
        <meta property="og:image" content="https://rnrbalconysafetynetsvizag.com/images/Balcony-Safety-Nets.png" />
        <meta property="og:image:alt" content="RNR Balcony Safety Nets Vizag in Visakhapatnam" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About RNR Balcony Safety Nets Vizag" />
        <meta
          name="twitter:description"
          content="Professional safety net installation solutions for homes, balconies and properties across Visakhapatnam."
        />
        <meta name="twitter:image" content="https://rnrbalconysafetynetsvizag.com/images/Balcony-Safety-Nets.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "@id": "https://rnrbalconysafetynetsvizag.com/#business",
            name: "RNR Balcony Safety Nets Vizag",
            url: "https://rnrbalconysafetynetsvizag.com/",
            logo: "https://rnrbalconysafetynetsvizag.com/logo.png",
            image: "https://rnrbalconysafetynetsvizag.com/images/Balcony-Safety-Nets.png",
            telephone: "+91-9705429255",
            email: "rnrsafetynets@gmail.com",
            description:
              "RNR Balcony Safety Nets Vizag provides professional balcony safety nets, pigeon safety nets, bird protection nets, children safety nets and related netting solutions in Visakhapatnam.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Visakhapatnam",
              addressRegion: "Andhra Pradesh",
              addressCountry: "IN"
            },
            areaServed: [
              { "@type": "City", name: "Visakhapatnam" },
              { "@type": "Place", name: "Vizag" }
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
            "@type": "AboutPage",
            "@id": "https://rnrbalconysafetynetsvizag.com/about-us#webpage",
            url: "https://rnrbalconysafetynetsvizag.com/about-us",
            name: "About RNR Balcony Safety Nets Vizag",
            description:
              "About RNR Balcony Safety Nets Vizag and its professional safety net installation services in Visakhapatnam.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://rnrbalconysafetynetsvizag.com/#website",
              url: "https://rnrbalconysafetynetsvizag.com/",
              name: "RNR Balcony Safety Nets Vizag"
            },
            about: {
              "@id": "https://rnrbalconysafetynetsvizag.com/#business"
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
                item: "https://rnrbalconysafetynetsvizag.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://rnrbalconysafetynetsvizag.com/about-us"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Safety Net Installation in Visakhapatnam",
            serviceType: "Balcony, pigeon, bird and children safety net installation",
            provider: {
              "@id": "https://rnrbalconysafetynetsvizag.com/#business"
            },
            areaServed: {
              "@type": "City",
              name: "Visakhapatnam"
            },
            url: "https://rnrbalconysafetynetsvizag.com/services"
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

          .rnr-about-page {
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

          .rnr-about-container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
          }

          /* ========================================
             COMMON
          ======================================== */

          .rnr-about-section {
            padding: 90px 0;
          }

          .rnr-about-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            margin-bottom: 17px;

            color: #ff6700;

            font-size: 13px;
            font-weight: 850;
            letter-spacing: 1.8px;

            text-transform: uppercase;
          }

          .rnr-about-eyebrow::before {
            content: "";

            width: 30px;
            height: 3px;

            border-radius: 20px;

            background: #ff6700;
          }

          .rnr-about-heading {
            margin: 0;

            color: #062d61;

            font-size: clamp(34px, 4.5vw, 56px);
            line-height: 1.08;
            letter-spacing: -2px;

            font-weight: 900;
          }

          .rnr-about-heading span {
            color: #ff6700;
          }

          .rnr-about-description {
            margin: 22px 0 0;

            color: #66768b;

            font-size: 17px;
            line-height: 1.85;
          }

          /* ========================================
             PAGE HERO
          ======================================== */

          .rnr-about-hero {
            position: relative;

            min-height: 390px;

            display: flex;
            align-items: center;

            overflow: hidden;

            background: #062d61;
          }

          .rnr-about-hero-bg {
            position: absolute;
            inset: 0;

            width: 100%;
            height: 100%;

            object-fit: cover;

            opacity: 0.38;
          }

          .rnr-about-hero-overlay {
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                90deg,
                rgba(3, 25, 56, 0.98) 0%,
                rgba(5, 43, 91, 0.90) 48%,
                rgba(5, 43, 91, 0.50) 100%
              );
          }

          .rnr-about-hero::after {
            content: "";

            position: absolute;

            width: 360px;
            height: 360px;

            right: -130px;
            top: -190px;

            border: 65px solid rgba(255,255,255,0.035);

            border-radius: 50%;
          }

          .rnr-about-hero-content {
            position: relative;
            z-index: 3;

            max-width: 800px;

            padding: 70px 0;
          }

          .rnr-about-hero-label {
            display: inline-flex;
            align-items: center;
            gap: 9px;

            padding: 8px 14px;

            margin-bottom: 19px;

            border:
              1px solid rgba(255,255,255,0.18);

            border-radius: 50px;

            background: rgba(255,255,255,0.08);

            color: #ffffff;

            font-size: 12px;
            font-weight: 750;

            letter-spacing: 1.3px;

            text-transform: uppercase;

            backdrop-filter: blur(8px);
          }

          .rnr-about-hero-dot {
            width: 8px;
            height: 8px;

            border-radius: 50%;

            background: #ff6700;

            box-shadow:
              0 0 0 5px rgba(255,103,0,0.16);
          }

          .rnr-about-hero h1 {
            margin: 0;

            color: #ffffff;

            font-size: clamp(45px, 6vw, 76px);
            line-height: 1;

            letter-spacing: -3px;

            font-weight: 900;
          }

          .rnr-about-hero h1 span {
            color: #ff6700;
          }

          .rnr-about-hero p {
            max-width: 680px;

            margin: 22px 0 0;

            color: rgba(255,255,255,0.8);

            font-size: 17px;
            line-height: 1.75;
          }

          .rnr-about-breadcrumb {
            display: flex;
            align-items: center;
            gap: 9px;

            margin-top: 25px;

            color: rgba(255,255,255,0.65);

            font-size: 13px;
          }

          .rnr-about-breadcrumb a {
            color: #ffffff;
            text-decoration: none;
          }

          .rnr-about-breadcrumb span {
            color: #ff8a35;
          }

          /* ========================================
             MAIN ABOUT
          ======================================== */

          .rnr-about-main-grid {
            display: grid;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);

            align-items: center;

            gap: 80px;
          }

          /* IMAGE */

          .rnr-about-images {
            position: relative;

            padding: 0 42px 48px 0;
          }

          .rnr-about-image-main {
            width: 100%;
            height: 570px;

            display: block;

            object-fit: cover;

            border-radius: 25px;
          }

          .rnr-about-image-small {
            position: absolute;

            right: 0;
            bottom: 0;

            width: 47%;
            height: 215px;

            object-fit: cover;

            display: block;

            border: 7px solid #ffffff;

            border-radius: 20px;

            box-shadow:
              0 20px 50px rgba(6,45,97,0.17);
          }

          .rnr-about-image-badge {
            position: absolute;

            left: -22px;
            bottom: 75px;

            width: 125px;
            height: 125px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            border: 6px solid #ffffff;

            background: #ff6700;

            color: #ffffff;

            text-align: center;

            box-shadow:
              0 16px 40px rgba(255,103,0,0.25);
          }

          .rnr-about-image-badge strong {
            font-size: 27px;
            line-height: 1;
          }

          .rnr-about-image-badge span {
            max-width: 80px;

            margin-top: 6px;

            font-size: 9px;
            line-height: 1.3;

            font-weight: 800;

            text-transform: uppercase;
          }

          /* ========================================
             PROFESSIONAL CARDS
          ======================================== */

          .rnr-about-feature-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;

            gap: 14px;

            margin-top: 30px;
          }

          .rnr-about-feature {
            padding: 21px;

            border:
              1px solid #e6ebf1;

            border-radius: 15px;

            background: #ffffff;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border 0.3s ease;
          }

          .rnr-about-feature:hover {
            transform: translateY(-5px);

            border-color:
              rgba(255,103,0,0.35);

            box-shadow:
              0 16px 35px rgba(6,45,97,0.08);
          }

          .rnr-about-feature-icon {
            width: 45px;
            height: 45px;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-bottom: 15px;

            border-radius: 11px;

            color: #ffffff;

            background: #062d61;

            font-size: 18px;
          }

          .rnr-about-feature h3 {
            margin: 0;

            color: #062d61;

            font-size: 18px;
          }

          .rnr-about-feature p {
            margin: 9px 0 0;

            color: #76859a;

            font-size: 14px;
            line-height: 1.7;
          }

          /* ========================================
             BUTTONS
          ======================================== */

          .rnr-about-actions {
            display: flex;
            flex-wrap: wrap;

            gap: 12px;

            margin-top: 30px;
          }

          .rnr-about-primary-btn,
          .rnr-about-outline-btn {
            min-height: 54px;

            padding: 0 23px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            gap: 9px;

            border-radius: 12px;

            text-decoration: none;

            font-size: 14px;
            font-weight: 850;

            transition: 0.3s ease;
          }

          .rnr-about-primary-btn {
            color: #ffffff;

            background: #ff6700;

            box-shadow:
              0 13px 30px rgba(255,103,0,0.23);
          }

          .rnr-about-primary-btn:hover {
            transform: translateY(-3px);

            box-shadow:
              0 18px 36px rgba(255,103,0,0.3);
          }

          .rnr-about-outline-btn {
            color: #062d61;

            border: 1px solid #d9e0e8;

            background: #ffffff;
          }

          .rnr-about-outline-btn:hover {
            color: #ffffff;

            background: #062d61;

            transform: translateY(-3px);
          }

          /* ========================================
             STATS
          ======================================== */

          .rnr-about-stats {
            background: #f5f8fc;

            padding: 70px 0;
          }

          .rnr-about-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            gap: 18px;
          }

          .rnr-about-stat {
            min-height: 210px;

            padding: 28px 20px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            text-align: center;

            border: 1px solid #e6ebf1;

            border-radius: 18px;

            background: #ffffff;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .rnr-about-stat:hover {
            transform: translateY(-7px);

            box-shadow:
              0 18px 40px rgba(6,45,97,0.09);
          }

          .rnr-about-stat-icon {
            width: 55px;
            height: 55px;

            margin-bottom: 17px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 15px;

            color: #ff6700;

            background: #fff3eb;

            font-size: 24px;
          }

          .rnr-about-stat strong {
            color: #062d61;

            font-size: 38px;
            line-height: 1;

            font-weight: 900;
          }

          .rnr-about-stat span {
            margin-top: 11px;

            color: #728096;

            font-size: 14px;
            line-height: 1.5;

            font-weight: 650;
          }

          /* ========================================
             FREE ESTIMATE
          ======================================== */

          .rnr-estimate-section {
            position: relative;

            padding: 90px 0;

            overflow: hidden;

            background:
              linear-gradient(
                120deg,
                #042859,
                #073c77
              );

            color: #ffffff;
          }

          .rnr-estimate-section::before {
            content: "";

            position: absolute;

            width: 420px;
            height: 420px;

            left: -170px;
            bottom: -240px;

            border-radius: 50%;

            border:
              75px solid rgba(255,255,255,0.025);
          }

          .rnr-estimate-section::after {
            content: "";

            position: absolute;

            width: 360px;
            height: 360px;

            right: -130px;
            top: -210px;

            border-radius: 50%;

            background:
              rgba(255,103,0,0.06);
          }

          .rnr-estimate-grid {
            position: relative;
            z-index: 2;

            display: grid;

            grid-template-columns:
              minmax(0, 1fr)
              auto;

            align-items: center;

            gap: 70px;
          }

          .rnr-estimate-label {
            display: inline-block;

            margin-bottom: 16px;

            color: #ff8b38;

            font-size: 12px;
            font-weight: 850;

            letter-spacing: 1.8px;

            text-transform: uppercase;
          }

          .rnr-estimate-title {
            max-width: 800px;

            margin: 0;

            color: #ffffff;

            font-size: clamp(31px, 4vw, 49px);
            line-height: 1.15;

            letter-spacing: -1.5px;

            font-weight: 900;
          }

          .rnr-estimate-title span {
            color: #ff7b19;
          }

          .rnr-estimate-text {
            max-width: 780px;

            margin: 19px 0 0;

            color: rgba(255,255,255,0.74);

            font-size: 16px;
            line-height: 1.8;
          }

          .rnr-estimate-actions {
            min-width: 220px;

            display: grid;

            gap: 11px;
          }

          .rnr-estimate-call,
          .rnr-estimate-contact {
            min-height: 55px;

            padding: 0 22px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;

            text-decoration: none;

            font-size: 14px;
            font-weight: 850;
          }

          .rnr-estimate-call {
            background: #ff6700;

            color: #ffffff;

            box-shadow:
              0 14px 30px rgba(255,103,0,0.23);
          }

          .rnr-estimate-contact {
            color: #062d61;

            background: #ffffff;
          }

          /* ========================================
             SPECIFICATION SECTION
          ======================================== */

          .rnr-spec-section {
            padding: 90px 0;

            background: #ffffff;
          }

          .rnr-spec-heading {
            max-width: 760px;

            margin: 0 auto 50px;

            text-align: center;
          }

          .rnr-spec-heading
          .rnr-about-eyebrow {
            justify-content: center;
          }

          .rnr-spec-heading p {
            max-width: 680px;

            margin: 20px auto 0;

            color: #718097;

            font-size: 16px;
            line-height: 1.8;
          }

          .rnr-spec-layout {
            display: grid;

            grid-template-columns:
              0.9fr
              1.1fr;

            gap: 55px;

            align-items: stretch;
          }

          /* SPEC IMAGE */

          .rnr-spec-image {
            position: relative;

            min-height: 560px;

            overflow: hidden;

            border-radius: 23px;
          }

          .rnr-spec-image img {
            width: 100%;
            height: 100%;

            position: absolute;
            inset: 0;

            object-fit: cover;

            display: block;
          }

          .rnr-spec-image::after {
            content: "";

            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                to top,
                rgba(3,25,56,0.75),
                transparent 65%
              );
          }

          .rnr-spec-image-content {
            position: absolute;

            left: 25px;
            right: 25px;
            bottom: 25px;

            z-index: 3;

            padding: 22px;

            border-radius: 15px;

            background:
              rgba(255,255,255,0.94);

            backdrop-filter: blur(10px);
          }

          .rnr-spec-image-content strong {
            display: block;

            color: #062d61;

            font-size: 18px;
          }

          .rnr-spec-image-content span {
            display: block;

            margin-top: 7px;

            color: #758399;

            font-size: 13px;
            line-height: 1.6;
          }

          /* SPEC CARDS */

          .rnr-spec-grid {
            display: grid;

            grid-template-columns:
              repeat(2, 1fr);

            gap: 14px;
          }

          .rnr-spec-card {
            padding: 21px;

            display: flex;
            align-items: center;

            gap: 15px;

            border: 1px solid #e6ebf1;

            border-radius: 15px;

            background: #ffffff;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border 0.3s ease;
          }

          .rnr-spec-card:hover {
            transform: translateY(-4px);

            border-color:
              rgba(255,103,0,0.4);

            box-shadow:
              0 15px 35px rgba(6,45,97,0.07);
          }

          .rnr-spec-icon {
            width: 47px;
            height: 47px;

            flex-shrink: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;

            color: #ffffff;

            background: #062d61;

            font-size: 18px;
          }

          .rnr-spec-card small {
            display: block;

            margin-bottom: 5px;

            color: #8996a7;

            font-size: 11px;
            font-weight: 750;

            letter-spacing: 0.7px;

            text-transform: uppercase;
          }

          .rnr-spec-card strong {
            color: #062d61;

            font-size: 15px;
            line-height: 1.4;
          }

          /* ========================================
             FINAL CTA
          ======================================== */

          .rnr-about-final-section {
            padding: 20px 0 90px;

            background: #ffffff;
          }

          .rnr-about-final {
            position: relative;

            overflow: hidden;

            padding: 55px 60px;

            border-radius: 25px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            gap: 40px;

            background:
              linear-gradient(
                120deg,
                #ff6700,
                #ff7b19
              );

            color: #ffffff;
          }

          .rnr-about-final::after {
            content: "";

            position: absolute;

            width: 320px;
            height: 320px;

            right: -100px;
            top: -190px;

            border-radius: 50%;

            border:
              60px solid rgba(255,255,255,0.08);
          }

          .rnr-about-final-content {
            position: relative;
            z-index: 2;

            max-width: 720px;
          }

          .rnr-about-final small {
            font-size: 11px;

            font-weight: 850;

            letter-spacing: 1.6px;

            text-transform: uppercase;
          }

          .rnr-about-final h2 {
            margin: 12px 0 0;

            color: #ffffff;

            font-size: clamp(29px, 4vw, 45px);
            line-height: 1.15;

            letter-spacing: -1.4px;
          }

          .rnr-about-final p {
            margin: 15px 0 0;

            max-width: 650px;

            color: rgba(255,255,255,0.86);

            font-size: 15px;
            line-height: 1.7;
          }

          .rnr-about-final-button {
            position: relative;
            z-index: 3;

            min-width: 210px;
            min-height: 55px;

            padding: 0 22px;

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

          /* ========================================
             TABLET
          ======================================== */

          @media (max-width: 1000px) {
            .rnr-about-main-grid {
              gap: 45px;
            }

            .rnr-about-image-main {
              height: 510px;
            }

            .rnr-about-stats-grid {
              grid-template-columns:
                repeat(2, 1fr);
            }

            .rnr-estimate-grid {
              grid-template-columns: 1fr;

              gap: 35px;
            }

            .rnr-estimate-actions {
              display: flex;

              min-width: 0;
            }

            .rnr-spec-layout {
              grid-template-columns: 1fr;

              gap: 30px;
            }

            .rnr-spec-image {
              min-height: 480px;
            }
          }

          /* ========================================
             MOBILE
          ======================================== */

          @media (max-width: 760px) {
            .rnr-about-container {
              width: calc(100% - 30px);
            }

            .rnr-about-section,
            .rnr-spec-section {
              padding: 65px 0;
            }

            .rnr-about-hero {
              min-height: 350px;
            }

            .rnr-about-hero-content {
              padding: 60px 0;
            }

            .rnr-about-hero h1 {
              letter-spacing: -2px;
            }

            .rnr-about-hero p {
              font-size: 15px;
            }

            .rnr-about-main-grid {
              grid-template-columns: 1fr;

              gap: 50px;
            }

            .rnr-about-images {
              max-width: 620px;
            }

            .rnr-about-description {
              font-size: 16px;
            }

            .rnr-about-stats {
              padding: 55px 0;
            }

            .rnr-about-stat {
              min-height: 180px;
            }

            .rnr-about-final {
              padding: 40px 30px;

              flex-direction: column;

              align-items: flex-start;
            }

            .rnr-about-final-button {
              width: 100%;
            }
          }

          /* ========================================
             SMALL MOBILE
          ======================================== */

          @media (max-width: 520px) {
            .rnr-about-container {
              width: calc(100% - 24px);
            }

            .rnr-about-section,
            .rnr-spec-section {
              padding: 55px 0;
            }

            .rnr-about-hero {
              min-height: 330px;
            }

            .rnr-about-hero h1 {
              font-size: 44px;

              letter-spacing: -1.7px;
            }

            .rnr-about-hero p {
              font-size: 14px;
              line-height: 1.7;
            }

            .rnr-about-heading {
              font-size: 34px;

              letter-spacing: -1px;
            }

            .rnr-about-eyebrow {
              font-size: 10px;
            }

            /* IMAGE */

            .rnr-about-images {
              padding: 0 18px 28px 0;
            }

            .rnr-about-image-main {
              height: 390px;

              border-radius: 18px;
            }

            .rnr-about-image-small {
              width: 47%;
              height: 145px;

              border-width: 5px;

              border-radius: 15px;
            }

            .rnr-about-image-badge {
              left: -3px;
              bottom: 48px;

              width: 95px;
              height: 95px;

              border-width: 5px;
            }

            .rnr-about-image-badge strong {
              font-size: 21px;
            }

            .rnr-about-image-badge span {
              font-size: 7px;
            }

            /* FEATURES */

            .rnr-about-feature-grid {
              grid-template-columns: 1fr;
            }

            .rnr-about-actions {
              display: grid;
              grid-template-columns: 1fr 1fr;

              gap: 8px;
            }

            .rnr-about-primary-btn,
            .rnr-about-outline-btn {
              min-height: 50px;

              padding: 0 10px;

              font-size: 12px;
            }

            /* STATS */

            .rnr-about-stats-grid {
              grid-template-columns: 1fr 1fr;

              gap: 10px;
            }

            .rnr-about-stat {
              min-height: 165px;

              padding: 20px 10px;

              border-radius: 14px;
            }

            .rnr-about-stat-icon {
              width: 45px;
              height: 45px;

              margin-bottom: 13px;

              font-size: 19px;
            }

            .rnr-about-stat strong {
              font-size: 30px;
            }

            .rnr-about-stat span {
              font-size: 11px;
            }

            /* ESTIMATE */

            .rnr-estimate-section {
              padding: 60px 0;
            }

            .rnr-estimate-text {
              font-size: 14px;
            }

            .rnr-estimate-actions {
              display: grid;
              grid-template-columns: 1fr;
            }

            /* SPECIFICATIONS */

            .rnr-spec-heading {
              margin-bottom: 35px;
            }

            .rnr-spec-heading p {
              font-size: 14px;
            }

            .rnr-spec-image {
              min-height: 400px;

              border-radius: 18px;
            }

            .rnr-spec-image-content {
              left: 14px;
              right: 14px;
              bottom: 14px;

              padding: 17px;
            }

            .rnr-spec-grid {
              grid-template-columns: 1fr;

              gap: 10px;
            }

            .rnr-spec-card {
              padding: 16px;
            }

            /* FINAL */

            .rnr-about-final-section {
              padding: 10px 0 60px;
            }

            .rnr-about-final {
              padding: 34px 22px;

              border-radius: 19px;
            }
          }

          @media (max-width: 360px) {
            .rnr-about-stats-grid {
              grid-template-columns: 1fr;
            }

            .rnr-about-actions {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <main className="rnr-about-page">

        {/* ======================================
            HERO
        ======================================= */}

        <section className="rnr-about-hero">

          <img
            src="/images/Balcony-Safety-Nets.png"
            alt="RNR Balcony Safety Nets Vizag"
            className="rnr-about-hero-bg"
            onError={(event) =>
              handleImageError(
                event,
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
              )
            }
          />

          <div className="rnr-about-hero-overlay"></div>

          <div className="rnr-about-container">

            <div className="rnr-about-hero-content">

              <div className="rnr-about-hero-label">
                <span className="rnr-about-hero-dot"></span>
                About RNR Safety Nets
              </div>

              <h1>
                About <span>Us.</span>
              </h1>

              <p>
                Professional safety net solutions designed
                to protect homes, balconies and properties
                across Visakhapatnam.
              </p>

              <div className="rnr-about-breadcrumb">
                <Link to="/">Home</Link>
                <span>→</span>
                <strong>About Us</strong>
              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            ABOUT RNR
        ======================================= */}

        <section className="rnr-about-section">

          <div className="rnr-about-container">

            <div className="rnr-about-main-grid">

              {/* IMAGES */}

              <div className="rnr-about-images">

                <img
                  src="/images/Balcony-Safety-Nets.png"
                  alt="RNR Balcony Safety Nets"
                  className="rnr-about-image-main"
                  onError={(event) =>
                    handleImageError(
                      event,
                      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1100&q=85"
                    )
                  }
                />

                <img
                  src="/images/pigeon-safety-nets.jpg"
                  alt="RNR Safety Net Installation"
                  className="rnr-about-image-small"
                  onError={(event) =>
                    handleImageError(
                      event,
                      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                    )
                  }
                />

                <div className="rnr-about-image-badge">
                  <strong>RNR</strong>

                  <span>
                    Safety Nets Vizag
                  </span>
                </div>

              </div>

              {/* CONTENT */}

              <div>

                <span className="rnr-about-eyebrow">
                  Who We Are
                </span>

                <h2 className="rnr-about-heading">
                  RNR Balcony Safety{" "}
                  <span>Nets Vizag.</span>
                </h2>

                <p className="rnr-about-description">
                  RNR Balcony Safety Nets are experts in
                  installing bird nets with high-quality
                  materials. Our primary objective is to
                  provide high-quality nets and professional
                  service.
                </p>

                <p className="rnr-about-description">
                  We consistently strive to achieve this
                  through our dedication to excellence,
                  reliability and innovation in the bird
                  nets industry. With a strong vision and
                  passion, we have established ourselves as
                  a trusted name in the field, offering
                  quality netting solutions designed for
                  safety, durability and performance.
                </p>

                {/* FEATURES */}

                <div className="rnr-about-feature-grid">

                  <div className="rnr-about-feature">

                    <div className="rnr-about-feature-icon">
                      ♟
                    </div>

                    <h3>
                      Professional Team
                    </h3>

                    <p>
                      Our professional team provides expert
                      installation and maintenance with
                      quality service and reliable results.
                    </p>

                  </div>

                  <div className="rnr-about-feature">

                    <div className="rnr-about-feature-icon">
                      ★
                    </div>

                    <h3>
                      Expert Service
                    </h3>

                    <p>
                      Professional and reliable solutions
                      using quality materials with
                      approaches tailored to each
                      requirement.
                    </p>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="rnr-about-actions">

                  <a
                    href={`tel:${phone}`}
                    className="rnr-about-primary-btn"
                  >
                    ☎ Call : {phone}
                  </a>

                  <Link
                    to="/services"
                    className="rnr-about-outline-btn"
                  >
                    Explore Services →
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            STATISTICS
        ======================================= */}

        <section className="rnr-about-stats">

          <div className="rnr-about-container">

            <div className="rnr-about-stats-grid">

              <div className="rnr-about-stat">

                <div className="rnr-about-stat-icon">
                  ★
                </div>

                <strong>1500+</strong>

                <span>
                  Successfully
                  <br />
                  Completed Projects
                </span>

              </div>

              <div className="rnr-about-stat">

                <div className="rnr-about-stat-icon">
                  ☺
                </div>

                <strong>150+</strong>

                <span>
                  Satisfied
                  <br />
                  Clients
                </span>

              </div>

              <div className="rnr-about-stat">

                <div className="rnr-about-stat-icon">
                  ⌖
                </div>

                <strong>19+</strong>

                <span>
                  Safety Net
                  <br />
                  Services
                </span>

              </div>

              <div className="rnr-about-stat">

                <div className="rnr-about-stat-icon">
                  ◷
                </div>

                <strong>25+</strong>

                <span>
                  Years of
                  <br />
                  Experience
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            FREE ESTIMATE
        ======================================= */}

        <section className="rnr-estimate-section">

          <div className="rnr-about-container">

            <div className="rnr-estimate-grid">

              <div>

                <span className="rnr-estimate-label">
                  Free Estimates
                </span>

                <h2 className="rnr-estimate-title">
                  Bird Control Solutions For A{" "}
                  <span>
                    Safer & Cleaner Space.
                  </span>
                </h2>

                <p className="rnr-estimate-text">
                  Free estimates are available for all
                  types of bird control services. We are
                  committed to offering useful, practical
                  suggestions and solutions for an
                  effective bird and pigeon management
                  programme.
                </p>

              </div>

              <div className="rnr-estimate-actions">

                <a
                  href={`tel:${phone}`}
                  className="rnr-estimate-call"
                >
                  ☎ Call : {phone}
                </a>

                <Link
                  to="/contact-us"
                  className="rnr-estimate-contact"
                >
                  Get Free Estimate →
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            SPECIFICATIONS
        ======================================= */}

        <section className="rnr-spec-section">

          <div className="rnr-about-container">

            <div className="rnr-spec-heading">

              <span className="rnr-about-eyebrow">
                Specification
              </span>

              <h2 className="rnr-about-heading">
                Safety Nets{" "}
                <span>Specification.</span>
              </h2>

              <p>
                Transform your space with RNR Safety Nets.
                Contact us for customized solutions,
                professional installation and quality
                products designed for safety, durability
                and style.
              </p>

            </div>

            <div className="rnr-spec-layout">

              {/* IMAGE */}

              <div className="rnr-spec-image">

                <img
                  src="/images/industrialsafetynets.png"
                  alt="Safety Nets Specification"
                  onError={(event) =>
                    handleImageError(
                      event,
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85"
                    )
                  }
                />

                <div className="rnr-spec-image-content">

                  <strong>
                    Quality Meets Protection
                  </strong>

                  <span>
                    Professional safety net solutions
                    designed to provide dependable
                    protection while maintaining a clean
                    appearance.
                  </span>

                </div>

              </div>

              {/* SPECIFICATION CARDS */}

              <div className="rnr-spec-grid">

                {specifications.map((item) => (
                  <div
                    className="rnr-spec-card"
                    key={item.title}
                  >

                    <div className="rnr-spec-icon">
                      {item.icon}
                    </div>

                    <div>

                      <small>
                        {item.title}
                      </small>

                      <strong>
                        {item.value}
                      </strong>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ======================================
            FINAL CTA
        ======================================= */}

        <section className="rnr-about-final-section">

          <div className="rnr-about-container">

            <div className="rnr-about-final">

              <div className="rnr-about-final-content">

                <small>
                  RNR BALCONY SAFETY NETS VIZAG
                </small>

                <h2>
                  Ready to Make Your Home Safer?
                </h2>

                <p>
                  Talk to our team about your balcony,
                  pigeon, bird or other safety net
                  requirements and get a suitable solution
                  for your property.
                </p>

              </div>

              <a
                href={`tel:${phone}`}
                className="rnr-about-final-button"
              >
                ☎ Call {phone}
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default About;