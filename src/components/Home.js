import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  const phone = "9705429255";

  /* ==============================
     SEO + GEO CONFIGURATION
  ============================== */

  const siteUrl = "https://rnrbalconysafetynetsvizag.com/";
  const siteName = "RNR Balcony Safety Nets Vizag";
  const seoTitle =
    "Balcony Safety Nets Vizag | Pigeon, Bird & Children Safety Nets in Visakhapatnam";
  const seoDescription =
    "RNR Balcony Safety Nets Vizag provides professional balcony safety nets, pigeon safety nets, anti bird nets, children safety nets, duct area nets, building safety nets, industrial safety nets, bird spikes and cricket practice nets across Visakhapatnam.";
  const seoKeywords =
    "balcony safety nets vizag, balcony safety nets visakhapatnam, safety nets vizag, safety nets visakhapatnam, pigeon safety nets vizag, pigeon nets vizag, anti bird nets vizag, bird nets vizag, children safety nets vizag, duct area safety nets vizag, building safety nets vizag, industrial safety nets vizag, staircase safety nets vizag, swimming pool safety nets vizag, bird spikes vizag, cricket practice nets vizag";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}logo.png`,
    image: [
      `${siteUrl}images/hero1.jpg`,
      `${siteUrl}images/hero2.jpg`,
      `${siteUrl}images/hero3.jpg`,
    ],
    telephone: `+91${phone}`,
    email: "rnrsafetynets@gmail.com",
    description: seoDescription,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "Place", name: "Vizag" },
      { "@type": "Place", name: "Madhurawada" },
      { "@type": "Place", name: "Gajuwaka" },
      { "@type": "Place", name: "MVP Colony" },
      { "@type": "Place", name: "Seethammadhara" },
      { "@type": "Place", name: "Rushikonda" },
      { "@type": "Place", name: "Dwaraka Nagar" },
      { "@type": "Place", name: "Akkayyapalem" },
      { "@type": "Place", name: "Bheemunipatnam" },
      { "@type": "Place", name: "Anandapuram" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91${phone}`,
      contactType: "customer service",
      areaServed: "IN-AP",
      availableLanguage: ["English", "Telugu"],
    },
    knowsAbout: [
      "Balcony Safety Nets",
      "Pigeon Safety Nets",
      "Anti Bird Nets",
      "Children Safety Nets",
      "Duct Area Safety Nets",
      "Building Safety Nets",
      "Industrial Safety Nets",
      "Staircase Safety Nets",
      "Swimming Pool Safety Nets",
      "Bird Spikes",
      "Cricket Practice Nets",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}#safety-net-services`,
    name: "Safety Net Installation Services in Visakhapatnam",
    serviceType: "Safety Net Installation",
    provider: {
      "@id": `${siteUrl}#localbusiness`,
    },
    areaServed: {
      "@type": "City",
      name: "Visakhapatnam",
    },
    description:
      "Professional safety net installation services for balconies, pigeon control, bird protection, children safety, duct areas, buildings, industrial areas, staircases, swimming pools and cricket practice areas in Visakhapatnam.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RNR Safety Net Services",
      itemListElement: [
        "Balcony Safety Nets",
        "Pigeon Safety Nets",
        "Anti Bird Nets",
        "Children Safety Nets",
        "Duct Area Safety Nets",
        "Building Safety Nets",
        "Industrial Safety Nets",
        "Staircase Safety Nets",
        "Swimming Pool Safety Nets",
        "Bird Spikes",
        "Cricket Practice Nets",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteUrl}#localbusiness`,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}#webpage`,
    url: siteUrl,
    name: seoTitle,
    description: seoDescription,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${siteUrl}#website`,
    },
    about: {
      "@id": `${siteUrl}#localbusiness`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}images/hero1.jpg`,
    },
  };

  /* ==============================
     HERO CAROUSEL
  ============================== */

  const heroSlides = [
    {
      local: "/images/hero1.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
      eyebrow: "TRUSTED SAFETY SOLUTIONS IN VISAKHAPATNAM",
      title: "Safety Without",
      highlight: "Limits.",
      description:
        "Premium balcony safety nets, pigeon protection nets and home safety solutions designed for safer living without compromising your view.",
    },

    {
      local: "/images/hero2.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
      eyebrow: "PROTECT WHAT MATTERS MOST",
      title: "Safer Balconies.",
      highlight: "Happier Homes.",
      description:
        "Professional safety net installation for balconies, windows and open spaces across Visakhapatnam.",
    },

    {
      local: "/images/hero3.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
      eyebrow: "PROFESSIONAL • DURABLE • RELIABLE",
      title: "Strong Protection.",
      highlight: "Clean Finish.",
      description:
        "Quality safety net solutions for apartments, homes, commercial properties and outdoor spaces.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  /* ==============================
     PREMIUM SCROLL REVEAL ANIMATIONS
  ============================== */

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll(".rnr-home .rnr-reveal")
    );

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) =>
        element.classList.add("rnr-reveal-visible")
      );
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rnr-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  };

  /* ==============================
     SERVICES
  ============================== */

  const services = [
    {
      title: "Balcony Safety Nets",
      image: "/images/hero1.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      text:
        "Strong balcony safety nets designed to help prevent accidental falls and provide additional protection for children, pets and belongings.",
    },

    {
      title: "Pigeon Safety Nets",
      image: "/images/pigeon-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1554226114-04bd78f87c44?auto=format&fit=crop&w=900&q=80",
      text:
        "Durable pigeon safety nets that help prevent bird entry, nesting and droppings while maintaining ventilation.",
    },

    {
      title: "Anti Bird Nets",
      image: "/images/anti-bird-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=900&q=80",
      text:
        "Effective bird-control net solutions designed to protect balconies, windows and commercial spaces without harming birds.",
    },

    {
      title: "Children Safety Nets",
      image: "/images/children-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=900&q=80",
      text:
        "Safety nets designed to help protect children around balconies, windows, staircases and other open areas.",
    },

    {
      title: "Duct Area Safety Nets",
      image: "/images/ductareasafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      text:
        "Secure net coverage for duct openings and service shafts to help reduce accidents, debris fall and bird entry.",
    },

    {
      title: "Building Safety Nets",
      image: "/images/buildingsafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
      text:
        "Safety net installations for buildings and elevated areas requiring dependable protection.",
    },

    {
      title: "Industrial Safety Nets",
      image: "/images/industrial-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
      text:
        "Heavy-duty safety net solutions suitable for factories, warehouses and industrial environments.",
    },

    {
      title: "Staircase Safety Nets",
      image: "/images/staircase-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
      text:
        "Protect open staircase spaces with professionally installed nets suitable for homes and apartments.",
    },

    {
      title: "Swimming Pool Safety Nets",
      image: "/images/swimming-pool-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=900&q=80",
      text:
        "Strong safety net solutions designed to add an extra layer of protection around swimming pools.",
    },

    {
      title: "Bird Spikes",
      image: "/images/bird-spikes.jpg",
      fallback:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      text:
        "Bird spikes help discourage birds from landing and nesting on ledges, walls, rooftops and similar surfaces.",
    },

    {
      title: "Cricket Practice Nets",
      image: "/images/cricket-practice-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=80",
      text:
        "Durable cricket practice net solutions for schools, clubs, training areas and private practice spaces.",
    },
  ];

  const fallbackImage = (event, fallback) => {
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback;
    }
  };

  return (
    <>
      {/* =========================================
          SEO + GEO META DATA
      ========================================== */}

      <Helmet>
        <html lang="en-IN" />

        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="author" content={siteName} />
        <meta name="publisher" content={siteName} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#062d61" />

        <link rel="canonical" href={siteUrl} />
        <link rel="alternate" hrefLang="en-IN" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}images/hero1.jpg`} />
        <meta property="og:image:alt" content="RNR Balcony Safety Nets installation services in Visakhapatnam" />

        {/* Twitter / Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${siteUrl}images/hero1.jpg`} />
        <meta name="twitter:image:alt" content="Balcony safety nets in Vizag by RNR Safety Nets" />

        {/* Geographic signals */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Visakhapatnam" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
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
            color: #082b59;
            background: #ffffff;
            font-family:
              Inter,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
            overflow-x: hidden;
          }

          .rnr-home {
            width: 100%;
            overflow: hidden;
          }

          .rnr-container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
          }

          /* =================================
             COMMON
          ================================= */

          .rnr-section {
            padding: 90px 0;
          }

          .rnr-small-label {
            display: inline-flex;
            align-items: center;
            gap: 9px;

            color: #ff6700;
            font-size: 13px;
            line-height: 1;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;

            margin-bottom: 17px;
          }

          .rnr-small-label::before {
            content: "";
            width: 28px;
            height: 3px;
            background: #ff6700;
            border-radius: 20px;
          }

          .rnr-section-title {
            margin: 0;

            color: #062d61;

            font-size: clamp(32px, 4vw, 54px);
            line-height: 1.08;
            letter-spacing: -1.8px;
            font-weight: 900;
          }

          .rnr-section-title span {
            color: #ff6700;
          }

          .rnr-section-text {
            max-width: 700px;

            margin: 20px 0 0;

            color: #67758a;
            font-size: 16px;
            line-height: 1.8;
          }

          .rnr-center-heading {
            max-width: 760px;
            margin: 0 auto 48px;
            text-align: center;
          }

          .rnr-center-heading .rnr-small-label {
            justify-content: center;
          }

          /* =================================
             PREMIUM SCROLL REVEAL
          ================================= */

          .rnr-reveal {
            opacity: 0;
            will-change: transform, opacity, filter;
            transition:
              opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.9s cubic-bezier(0.22, 1, 0.36, 1);
            transition-delay: var(--rnr-delay, 0ms);
            filter: blur(3px);
          }

          .rnr-reveal-left {
            transform: translate3d(-70px, 0, 0);
          }

          .rnr-reveal-right {
            transform: translate3d(70px, 0, 0);
          }

          .rnr-reveal-up {
            transform: translate3d(0, 46px, 0);
          }

          .rnr-reveal-scale {
            transform: translate3d(0, 30px, 0) scale(0.94);
          }

          .rnr-reveal.rnr-reveal-visible {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }

          @media (max-width: 620px) {
            .rnr-reveal-left {
              transform: translate3d(-34px, 0, 0);
            }

            .rnr-reveal-right {
              transform: translate3d(34px, 0, 0);
            }

            .rnr-reveal-up {
              transform: translate3d(0, 28px, 0);
            }

            .rnr-reveal-scale {
              transform: translate3d(0, 22px, 0) scale(0.97);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .rnr-reveal,
            .rnr-reveal-left,
            .rnr-reveal-right,
            .rnr-reveal-up,
            .rnr-reveal-scale {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              transition: none !important;
            }
          }

          /* =================================
             HERO
          ================================= */

          .rnr-hero {
            position: relative;

            min-height: calc(100vh - 112px);

            display: flex;
            align-items: center;

            background: #041e42;

            overflow: hidden;
          }

          .rnr-hero-slide {
            position: absolute;
            inset: 0;

            opacity: 0;

            transition:
              opacity 1s ease,
              transform 6s ease;

            transform: scale(1.04);
          }

          .rnr-hero-slide.active {
            opacity: 1;
            transform: scale(1);
          }

          .rnr-hero-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .rnr-hero-slide::after {
            content: "";
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                90deg,
                rgba(3, 25, 56, 0.96) 0%,
                rgba(3, 29, 63, 0.89) 34%,
                rgba(3, 29, 63, 0.52) 61%,
                rgba(3, 29, 63, 0.12) 100%
              );
          }

          .rnr-hero::before {
            content: "";
            position: absolute;

            width: 520px;
            height: 520px;

            left: -190px;
            bottom: -280px;

            border-radius: 50%;

            border: 80px solid rgba(255,255,255,0.025);

            z-index: 2;
          }

          .rnr-hero-content-wrapper {
            width: 100%;
            position: relative;
            z-index: 4;
          }

          .rnr-hero-content {
            max-width: 720px;

            padding: 100px 0;
          }

          .rnr-hero-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 9px 14px;

            border-radius: 999px;

            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.18);

            color: #ffffff;

            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.6px;

            margin-bottom: 24px;

            backdrop-filter: blur(8px);
          }

          .rnr-hero-eyebrow-dot {
            width: 8px;
            height: 8px;

            border-radius: 50%;

            background: #ff6700;

            box-shadow: 0 0 0 6px rgba(255,103,0,0.16);
          }

          .rnr-hero-title {
            margin: 0;

            color: #ffffff;

            font-size: clamp(47px, 6.6vw, 87px);
            line-height: 0.96;
            font-weight: 900;
            letter-spacing: -4px;
          }

          .rnr-hero-title span {
            display: block;
            color: #ff6700;
          }

          .rnr-hero-description {
            max-width: 640px;

            margin: 26px 0 0;

            color: rgba(255,255,255,0.83);

            font-size: clamp(15px, 1.5vw, 18px);
            line-height: 1.75;
          }

          /* HERO BENEFITS */

          .rnr-hero-benefits {
            margin-top: 27px;

            display: flex;
            flex-wrap: wrap;
            gap: 11px;
          }

          .rnr-hero-benefit {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 8px;

            color: #ffffff;

            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.12);

            font-size: 12px;
            font-weight: 700;
          }

          .rnr-benefit-check {
            width: 18px;
            height: 18px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #ff6700;

            color: #ffffff;

            font-size: 10px;
          }

          /* HERO CTA */

          .rnr-hero-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 13px;

            margin-top: 32px;
          }

          .rnr-primary-btn,
          .rnr-secondary-btn,
          .rnr-gallery-btn {
            min-height: 56px;

            padding: 0 24px;

            border-radius: 13px;

            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            text-decoration: none;

            font-size: 14px;
            font-weight: 850;

            transition: 0.3s ease;
          }

          .rnr-primary-btn {
            color: #ffffff;
            background: #ff6700;

            box-shadow: 0 14px 35px rgba(255,103,0,0.26);
          }

          .rnr-primary-btn:hover {
            transform: translateY(-3px);

            box-shadow: 0 19px 40px rgba(255,103,0,0.32);
          }

          .rnr-gallery-btn {
            color: #ffffff;

            background: rgba(255,255,255,0.08);

            border: 1px solid rgba(255,255,255,0.28);

            backdrop-filter: blur(9px);
          }

          .rnr-gallery-btn:hover {
            background: #ffffff;
            color: #062d61;

            transform: translateY(-3px);
          }

          /* HERO PREMIUM CTA */

          .rnr-hero-premium-cta {
            display: flex;
            align-items: center;
            gap: 13px;

            margin-top: 27px;

            color: rgba(255,255,255,0.8);

            font-size: 12px;
          }

          .rnr-premium-avatars {
            display: flex;
          }

          .rnr-premium-avatar {
            width: 31px;
            height: 31px;

            margin-left: -7px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 2px solid #062d61;
            border-radius: 50%;

            color: #062d61;

            background: #ffffff;

            font-weight: 900;
            font-size: 10px;
          }

          .rnr-premium-avatar:first-child {
            margin-left: 0;
          }

          .rnr-premium-rating strong {
            color: #ffffff;
          }

          .rnr-stars {
            color: #ff8a21;
            letter-spacing: 2px;
          }

          /* HERO ARROWS */

          .rnr-hero-navigation {
            position: absolute;

            right: 36px;
            bottom: 42px;

            z-index: 7;

            display: flex;
            gap: 9px;
          }

          .rnr-hero-arrow {
            width: 48px;
            height: 48px;

            border-radius: 50%;

            border: 1px solid rgba(255,255,255,0.3);

            background: rgba(255,255,255,0.12);

            color: #ffffff;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 20px;

            cursor: pointer;

            backdrop-filter: blur(8px);

            transition: 0.25s ease;
          }

          .rnr-hero-arrow:hover {
            background: #ff6700;
            border-color: #ff6700;
          }

          .rnr-hero-dots {
            position: absolute;

            left: 50%;
            bottom: 26px;

            transform: translateX(-50%);

            z-index: 7;

            display: flex;
            align-items: center;
            gap: 8px;
          }

          .rnr-hero-dot {
            width: 8px;
            height: 8px;

            padding: 0;

            border: none;
            border-radius: 20px;

            background: rgba(255,255,255,0.5);

            cursor: pointer;

            transition: 0.3s ease;
          }

          .rnr-hero-dot.active {
            width: 28px;

            background: #ff6700;
          }

          /* =================================
             TRUST STRIP
          ================================= */

          .rnr-trust-section {
            background: #ffffff;

            border-bottom: 1px solid #edf0f5;
          }

          .rnr-trust-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }

          .rnr-trust-item {
            min-height: 110px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 13px;

            padding: 20px;

            border-right: 1px solid #edf0f5;
          }

          .rnr-trust-item:last-child {
            border-right: none;
          }

          .rnr-trust-icon {
            width: 43px;
            height: 43px;

            flex-shrink: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;

            background: #f0f5fb;

            color: #062d61;

            font-size: 19px;
          }

          .rnr-trust-item strong {
            display: block;

            color: #062d61;

            font-size: 14px;
          }

          .rnr-trust-item span {
            display: block;

            margin-top: 4px;

            color: #8994a3;

            font-size: 11px;
          }

          /* =================================
             ABOUT
          ================================= */

          .rnr-about-grid {
            display: grid;
            grid-template-columns: 0.95fr 1.05fr;

            align-items: center;

            gap: clamp(45px, 6vw, 85px);
          }

          .rnr-about-image-wrap {
            position: relative;

            padding: 0 40px 40px 0;
          }

          .rnr-about-main-image {
            width: 100%;
            height: 540px;

            object-fit: cover;

            display: block;

            border-radius: 24px;
          }

          .rnr-about-small-image {
            position: absolute;

            right: 0;
            bottom: 0;

            width: 46%;
            height: 205px;

            object-fit: cover;

            border: 7px solid #ffffff;

            border-radius: 20px;

            box-shadow: 0 18px 45px rgba(6,45,97,0.15);
          }

          .rnr-about-badge {
            position: absolute;

            left: -16px;
            bottom: 70px;

            width: 130px;
            height: 130px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #ff6700;

            color: #ffffff;

            text-align: center;

            border: 7px solid #ffffff;

            box-shadow: 0 15px 40px rgba(255,103,0,0.22);
          }

          .rnr-about-badge strong {
            font-size: 30px;
          }

          .rnr-about-badge span {
            margin-top: 2px;

            max-width: 75px;

            font-size: 10px;
            line-height: 1.3;
            font-weight: 800;
          }

          .rnr-about-points {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            gap: 14px;

            margin-top: 29px;
          }

          .rnr-about-point {
            display: flex;
            align-items: center;
            gap: 11px;

            color: #243d5f;

            font-size: 14px;
            font-weight: 750;
          }

          .rnr-about-check {
            width: 30px;
            height: 30px;

            flex-shrink: 0;

            border-radius: 8px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #ffffff;
            background: #062d61;

            font-size: 12px;
          }

          .rnr-about-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 13px;

            margin-top: 32px;
          }

          .rnr-secondary-btn {
            color: #062d61;
            background: #ffffff;

            border: 1px solid #d7dee7;
          }

          .rnr-secondary-btn:hover {
            color: #ffffff;
            background: #062d61;

            transform: translateY(-2px);
          }

          /* =================================
             SPECIFICATIONS
          ================================= */

          .rnr-spec-section {
            padding: 80px 0;

            background:
              radial-gradient(
                circle at 80% 20%,
                rgba(255,103,0,0.12),
                transparent 35%
              ),
              #062d61;

            color: #ffffff;
          }

          .rnr-spec-grid {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;

            gap: 65px;

            align-items: center;
          }

          .rnr-spec-section .rnr-small-label {
            color: #ff8b31;
          }

          .rnr-spec-title {
            margin: 0;

            font-size: clamp(31px, 4vw, 50px);
            line-height: 1.1;
            letter-spacing: -1.5px;
          }

          .rnr-spec-description {
            color: rgba(255,255,255,0.72);

            line-height: 1.75;

            margin: 19px 0 0;

            font-size: 15px;
          }

          .rnr-spec-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            gap: 12px;
          }

          .rnr-spec-card {
            padding: 18px 19px;

            background: rgba(255,255,255,0.07);

            border: 1px solid rgba(255,255,255,0.1);

            border-radius: 14px;

            backdrop-filter: blur(7px);
          }

          .rnr-spec-card small {
            color: rgba(255,255,255,0.52);

            display: block;

            margin-bottom: 6px;

            text-transform: uppercase;

            font-size: 9px;

            letter-spacing: 1.4px;

            font-weight: 800;
          }

          .rnr-spec-card strong {
            color: #ffffff;

            font-size: 15px;
          }

          /* =================================
             STATS
          ================================= */

          .rnr-stats-wrapper {
            margin-top: -1px;

            background: #ff6700;
          }

          .rnr-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }

          .rnr-stat {
            min-height: 150px;

            padding: 25px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            text-align: center;

            color: #ffffff;

            border-right: 1px solid rgba(255,255,255,0.22);
          }

          .rnr-stat:last-child {
            border-right: none;
          }

          .rnr-stat strong {
            font-size: clamp(28px, 4vw, 44px);

            line-height: 1;

            font-weight: 900;
          }

          .rnr-stat span {
            margin-top: 9px;

            font-size: 11px;

            font-weight: 750;

            letter-spacing: 0.8px;

            text-transform: uppercase;

            opacity: 0.85;
          }

          /* =================================
             SERVICES
          ================================= */

          .rnr-services-section {
            background: #f6f8fb;
          }

          .rnr-services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            gap: 22px;
          }

          .rnr-service-card {
            overflow: hidden;

            border-radius: 20px;

            background: #ffffff;

            border: 1px solid #e8edf3;

            box-shadow: 0 12px 30px rgba(6,45,97,0.055);

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease;
          }

          .rnr-service-card:hover {
            transform: translateY(-8px);

            box-shadow: 0 24px 55px rgba(6,45,97,0.12);
          }

          .rnr-service-image-box {
            position: relative;

            height: 230px;

            overflow: hidden;
          }

          .rnr-service-image-box img {
            width: 100%;
            height: 100%;

            object-fit: cover;

            display: block;

            transition: transform 0.6s ease;
          }

          .rnr-service-card:hover .rnr-service-image-box img {
            transform: scale(1.07);
          }

          .rnr-service-number {
            position: absolute;

            top: 15px;
            left: 15px;

            min-width: 38px;
            height: 38px;

            padding: 0 9px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 10px;

            color: #ffffff;

            background: rgba(6,45,97,0.92);

            font-size: 11px;

            font-weight: 900;

            backdrop-filter: blur(7px);
          }

          .rnr-service-content {
            padding: 24px;
          }

          .rnr-service-content h3 {
            margin: 0;

            color: #062d61;

            font-size: 20px;
          }

          .rnr-service-content p {
            margin: 12px 0 20px;

            color: #788598;

            font-size: 13px;

            line-height: 1.72;
          }

          .rnr-service-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;

            gap: 10px;
          }

          .rnr-service-link {
            color: #062d61;

            text-decoration: none;

            font-size: 12px;

            font-weight: 850;
          }

          .rnr-service-link:hover {
            color: #ff6700;
          }

          .rnr-service-call {
            width: 36px;
            height: 36px;

            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #ffffff;

            background: #ff6700;

            text-decoration: none;
          }

          .rnr-services-footer {
            display: flex;
            justify-content: center;

            margin-top: 36px;
          }

          /* =================================
             WHY CHOOSE US
          ================================= */

          .rnr-why-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;

            align-items: center;

            gap: 75px;
          }

          .rnr-why-image {
            position: relative;

            min-height: 600px;

            border-radius: 24px;

            overflow: hidden;
          }

          .rnr-why-image img {
            width: 100%;
            height: 600px;

            object-fit: cover;

            display: block;
          }

          .rnr-why-image::after {
            content: "";
            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                to top,
                rgba(3,25,56,0.35),
                transparent 55%
              );
          }

          .rnr-why-image-card {
            position: absolute;

            left: 24px;
            right: 24px;
            bottom: 24px;

            z-index: 3;

            padding: 21px;

            display: flex;
            align-items: center;
            gap: 14px;

            border-radius: 15px;

            background: rgba(255,255,255,0.94);

            backdrop-filter: blur(12px);
          }

          .rnr-why-image-card-icon {
            width: 48px;
            height: 48px;

            border-radius: 12px;

            display: flex;
            align-items: center;
            justify-content: center;

            color: #ffffff;

            background: #ff6700;

            font-size: 21px;
          }

          .rnr-why-image-card strong {
            display: block;

            color: #062d61;
          }

          .rnr-why-image-card span {
            display: block;

            margin-top: 3px;

            color: #758399;

            font-size: 11px;
          }

          .rnr-why-list {
            display: grid;

            gap: 15px;

            margin-top: 29px;
          }

          .rnr-why-item {
            display: grid;
            grid-template-columns: 50px 1fr;

            gap: 15px;

            padding: 17px;

            border-radius: 14px;

            border: 1px solid #e7ebf1;

            transition: 0.3s ease;
          }

          .rnr-why-item:hover {
            border-color: rgba(255,103,0,0.4);

            transform: translateX(5px);
          }

          .rnr-why-icon {
            width: 50px;
            height: 50px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;

            color: #062d61;

            background: #edf3fa;

            font-size: 20px;
          }

          .rnr-why-item h4 {
            margin: 2px 0 5px;

            color: #062d61;

            font-size: 15px;
          }

          .rnr-why-item p {
            margin: 0;

            color: #7a8798;

            font-size: 12px;
            line-height: 1.6;
          }

          /* =================================
             RECENT WORKS
          ================================= */

          .rnr-work-section {
            background: #f5f8fc;
          }

          .rnr-work-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            gap: 16px;
          }

          .rnr-work-card {
            position: relative;

            height: 340px;

            overflow: hidden;

            border-radius: 18px;
          }

          .rnr-work-card img {
            width: 100%;
            height: 100%;

            object-fit: cover;

            display: block;

            transition: transform 0.6s ease;
          }

          .rnr-work-card:hover img {
            transform: scale(1.08);
          }

          .rnr-work-overlay {
            position: absolute;
            inset: 0;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            padding: 22px;

            color: #ffffff;

            background:
              linear-gradient(
                to top,
                rgba(3,25,56,0.88),
                rgba(3,25,56,0.02) 65%
              );
          }

          .rnr-work-overlay span {
            color: #ff8b35;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1.4px;

            text-transform: uppercase;
          }

          .rnr-work-overlay h3 {
            margin: 7px 0 0;

            font-size: 18px;
          }

          /* =================================
             TESTIMONIALS
          ================================= */

          .rnr-testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            gap: 20px;
          }

          .rnr-testimonial {
            position: relative;

            padding: 28px;

            border-radius: 18px;

            background: #ffffff;

            border: 1px solid #e7ebf1;

            box-shadow: 0 12px 30px rgba(6,45,97,0.05);
          }

          .rnr-testimonial-stars {
            color: #ff7b19;

            letter-spacing: 2px;

            font-size: 14px;
          }

          .rnr-testimonial-text {
            margin: 18px 0 24px;

            color: #596a80;

            font-size: 14px;
            line-height: 1.8;
          }

          .rnr-reviewer {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .rnr-reviewer-icon {
            width: 43px;
            height: 43px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #062d61;

            color: #ffffff;

            font-size: 14px;
            font-weight: 900;
          }

          .rnr-reviewer strong {
            display: block;

            color: #062d61;

            font-size: 13px;
          }

          .rnr-reviewer span {
            display: block;

            margin-top: 3px;

            color: #96a0ad;

            font-size: 11px;
          }

          /* =================================
             FINAL CTA
          ================================= */

          .rnr-final-cta-section {
            padding: 40px 0 90px;
          }

          .rnr-final-cta {
            position: relative;

            overflow: hidden;

            padding: 55px 60px;

            border-radius: 26px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;

            background:
              linear-gradient(
                120deg,
                #052b5d,
                #073973
              );

            color: #ffffff;
          }

          .rnr-final-cta::after {
            content: "";

            position: absolute;

            width: 320px;
            height: 320px;

            right: -90px;
            top: -170px;

            border-radius: 50%;

            border: 65px solid rgba(255,255,255,0.035);
          }

          .rnr-final-cta-content {
            max-width: 700px;

            position: relative;

            z-index: 2;
          }

          .rnr-final-cta small {
            color: #ff8b38;

            font-weight: 850;

            letter-spacing: 1.7px;
          }

          .rnr-final-cta h2 {
            margin: 13px 0 0;

            font-size: clamp(30px, 4vw, 48px);

            line-height: 1.12;

            letter-spacing: -1.5px;
          }

          .rnr-final-cta p {
            margin: 16px 0 0;

            color: rgba(255,255,255,0.7);

            line-height: 1.7;

            font-size: 14px;
          }

          .rnr-final-actions {
            position: relative;

            z-index: 2;

            display: flex;
            flex-direction: column;
            gap: 10px;

            min-width: 225px;
          }

          .rnr-final-white {
            min-height: 54px;

            padding: 0 20px;

            border-radius: 12px;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            background: #ffffff;

            color: #062d61;

            text-decoration: none;

            font-size: 13px;

            font-weight: 850;
          }

          .rnr-final-orange {
            min-height: 54px;

            padding: 0 20px;

            border-radius: 12px;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            background: #ff6700;

            color: #ffffff;

            text-decoration: none;

            font-size: 13px;

            font-weight: 850;
          }

          /* =================================
             RESPONSIVE
          ================================= */

          @media (max-width: 1050px) {
            .rnr-hero {
              min-height: 720px;
            }

            .rnr-services-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .rnr-work-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .rnr-about-grid,
            .rnr-why-grid {
              gap: 45px;
            }
          }

          @media (max-width: 850px) {
            .rnr-container {
              width: min(100% - 30px, 1240px);
            }

            .rnr-section {
              padding: 70px 0;
            }

            .rnr-hero {
              min-height: calc(100svh - 70px);
            }

            .rnr-hero-slide::after {
              background:
                linear-gradient(
                  90deg,
                  rgba(3,25,56,0.94),
                  rgba(3,25,56,0.68)
                );
            }

            .rnr-hero-content {
              max-width: 650px;

              padding: 90px 0 110px;
            }

            .rnr-hero-title {
              letter-spacing: -2.5px;
            }

            .rnr-hero-navigation {
              right: 20px;
              bottom: 22px;
            }

            .rnr-hero-dots {
              left: 20px;
              bottom: 38px;

              transform: none;
            }

            .rnr-trust-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .rnr-trust-item:nth-child(2) {
              border-right: none;
            }

            .rnr-trust-item:nth-child(-n+2) {
              border-bottom: 1px solid #edf0f5;
            }

            .rnr-about-grid,
            .rnr-spec-grid,
            .rnr-why-grid {
              grid-template-columns: 1fr;
            }

            .rnr-about-image-wrap {
              max-width: 650px;
            }

            .rnr-spec-grid {
              gap: 35px;
            }

            .rnr-stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .rnr-stat:nth-child(2) {
              border-right: none;
            }

            .rnr-stat:nth-child(-n+2) {
              border-bottom: 1px solid rgba(255,255,255,0.2);
            }

            .rnr-testimonials-grid {
              grid-template-columns: 1fr;
            }

            .rnr-final-cta {
              padding: 45px 35px;

              flex-direction: column;

              align-items: flex-start;
            }

            .rnr-final-actions {
              width: 100%;

              flex-direction: row;
            }

            .rnr-final-white,
            .rnr-final-orange {
              flex: 1;
            }
          }

          @media (max-width: 620px) {
            .rnr-container {
              width: calc(100% - 24px);
            }

            .rnr-section {
              padding: 58px 0;
            }

            .rnr-small-label {
              font-size: 10px;
              letter-spacing: 1.4px;
            }

            .rnr-section-title {
              letter-spacing: -1px;
            }

            /* HERO MOBILE */

            .rnr-hero {
              min-height: 660px;

              align-items: flex-end;
            }

            .rnr-hero-slide img {
              object-position: 68% center;
              filter: brightness(1.13) saturate(1.08);
              transform: scale(1.01);
            }

            .rnr-hero-slide::after {
              background:
                linear-gradient(
                  to top,
                  rgba(3,25,56,0.88) 0%,
                  rgba(3,25,56,0.72) 42%,
                  rgba(3,25,56,0.34) 73%,
                  rgba(3,25,56,0.08) 100%
                );
            }

            .rnr-hero-content {
              padding: 180px 0 105px;
            }

            .rnr-hero-eyebrow {
              font-size: 9px;

              letter-spacing: 1px;
            }

            .rnr-hero-title {
              font-size: clamp(42px, 13vw, 60px);

              line-height: 0.98;

              letter-spacing: -2px;
            }

            .rnr-hero-description {
              margin-top: 20px;

              font-size: 14px;
              line-height: 1.65;
            }

            .rnr-hero-benefits {
              gap: 7px;

              margin-top: 20px;
            }

            .rnr-hero-benefit {
              padding: 7px 9px;

              font-size: 10px;
            }

            .rnr-hero-actions {
              display: grid;
              grid-template-columns: 1fr 1fr;

              gap: 8px;

              margin-top: 25px;
            }

            .rnr-primary-btn,
            .rnr-gallery-btn {
              width: 100%;

              min-height: 50px;

              padding: 0 12px;

              font-size: 12px;

              border-radius: 11px;
            }

            .rnr-hero-premium-cta {
              margin-top: 19px;
            }

            .rnr-hero-navigation {
              display: none;
            }

            .rnr-hero-dots {
              left: 12px;
              bottom: 22px;
            }

            /* TRUST */

            .rnr-trust-item {
              min-height: 95px;

              padding: 15px 10px;

              flex-direction: column;

              text-align: center;

              gap: 7px;
            }

            .rnr-trust-icon {
              width: 37px;
              height: 37px;
            }

            .rnr-trust-item strong {
              font-size: 12px;
            }

            .rnr-trust-item span {
              font-size: 9px;
            }

            /* ABOUT */

            .rnr-about-image-wrap {
              padding: 0 20px 30px 0;
            }

            .rnr-about-main-image {
              height: 390px;

              border-radius: 18px;
            }

            .rnr-about-small-image {
              height: 145px;

              border-width: 5px;

              border-radius: 15px;
            }

            .rnr-about-badge {
              left: -5px;
              bottom: 50px;

              width: 100px;
              height: 100px;

              border-width: 5px;
            }

            .rnr-about-badge strong {
              font-size: 23px;
            }

            .rnr-about-badge span {
              font-size: 8px;
            }

            .rnr-about-points {
              grid-template-columns: 1fr;

              gap: 10px;
            }

            .rnr-about-actions {
              display: grid;
              grid-template-columns: 1fr 1fr;

              gap: 8px;
            }

            .rnr-about-actions a {
              padding: 0 11px;

              min-height: 49px;

              font-size: 11px;
            }

            /* SPECS */

            .rnr-spec-section {
              padding: 58px 0;
            }

            .rnr-spec-list {
              grid-template-columns: 1fr;
            }

            /* SERVICES */

            .rnr-services-grid {
              grid-template-columns: 1fr;

              gap: 16px;
            }

            .rnr-service-image-box {
              height: 220px;
            }

            /* WHY */

            .rnr-why-image,
            .rnr-why-image img {
              min-height: 410px;
              height: 410px;
            }

            .rnr-why-image-card {
              left: 14px;
              right: 14px;
              bottom: 14px;

              padding: 15px;
            }

            /* WORK */

            .rnr-work-grid {
              grid-template-columns: 1fr 1fr;

              gap: 9px;
            }

            .rnr-work-card {
              height: 240px;

              border-radius: 13px;
            }

            .rnr-work-overlay {
              padding: 14px;
            }

            .rnr-work-overlay h3 {
              font-size: 13px;
            }

            .rnr-work-overlay span {
              font-size: 8px;
            }

            /* FINAL CTA */

            .rnr-final-cta-section {
              padding: 25px 0 60px;
            }

            .rnr-final-cta {
              padding: 35px 23px;

              border-radius: 19px;
            }

            .rnr-final-actions {
              display: grid;
              grid-template-columns: 1fr;

              gap: 9px;
            }
          }

          @media (max-width: 380px) {
            .rnr-hero-slide img {
              object-position: 64% center;
            }

            .rnr-work-grid {
              grid-template-columns: 1fr;
            }

            .rnr-work-card {
              height: 270px;
            }

            .rnr-hero-actions {
              grid-template-columns: 1fr;
            }

            .rnr-about-actions {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <main className="rnr-home">
        {/* =========================================
            HERO CAROUSEL
        ========================================== */}

        <section className="rnr-hero">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`rnr-hero-slide ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <img
                src={slide.local}
                alt={`RNR Safety Nets ${index + 1}`}
                onError={(event) =>
                  fallbackImage(event, slide.fallback)
                }
              />
            </div>
          ))}

          <div className="rnr-hero-content-wrapper">
            <div className="rnr-container">
              <div className="rnr-hero-content">
                <div className="rnr-hero-eyebrow">
                  <span className="rnr-hero-eyebrow-dot"></span>

                  {heroSlides[currentSlide].eyebrow}
                </div>

                <h1 className="rnr-hero-title">
                  {heroSlides[currentSlide].title}

                  <span>
                    {heroSlides[currentSlide].highlight}
                  </span>
                </h1>

                <p className="rnr-hero-description">
                  {heroSlides[currentSlide].description}
                </p>

                <div className="rnr-hero-benefits">
                  <span className="rnr-hero-benefit">
                    <span className="rnr-benefit-check">
                      ✓
                    </span>

                    Quality Materials
                  </span>

                  <span className="rnr-hero-benefit">
                    <span className="rnr-benefit-check">
                      ✓
                    </span>

                    Expert Installation
                  </span>

                  <span className="rnr-hero-benefit">
                    <span className="rnr-benefit-check">
                      ✓
                    </span>

                    Free Estimate
                  </span>
                </div>

                <div className="rnr-hero-actions">
                  <a
                    href={`tel:${phone}`}
                    className="rnr-primary-btn"
                  >
                    ☎ Get a Free Quote
                    <span>→</span>
                  </a>

                  <Link
                    to="/services"
                    className="rnr-gallery-btn"
                  >
                      View Our Services
                    <span>→</span>
                  </Link>
                </div>

                <div className="rnr-hero-premium-cta">
                  <div className="rnr-premium-avatars">
                    <span className="rnr-premium-avatar">
                      R
                    </span>

                    <span className="rnr-premium-avatar">
                      N
                    </span>

                    <span className="rnr-premium-avatar">
                      R
                    </span>
                  </div>

                  <div className="rnr-premium-rating">
                    <div className="rnr-stars">
                      ★★★★★
                    </div>

                    <strong>
                      Trusted Safety Solutions
                    </strong>{" "}
                    in Visakhapatnam
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ARROWS */}

          <div className="rnr-hero-navigation">
            <button
              className="rnr-hero-arrow"
              onClick={previousSlide}
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              className="rnr-hero-arrow"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              →
            </button>
          </div>

          {/* DOTS */}

          <div className="rnr-hero-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`rnr-hero-dot ${
                  currentSlide === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        </section>

        {/* =========================================
            TRUST BAR
        ========================================== */}

        <section className="rnr-trust-section">
          <div className="rnr-container">
            <div className="rnr-trust-grid">
              <div className="rnr-trust-item rnr-reveal rnr-reveal-up">
                <div className="rnr-trust-icon">
                  ✓
                </div>

                <div>
                  <strong>Quality Materials</strong>
                  <span>Built for reliable protection</span>
                </div>
              </div>

              <div className="rnr-trust-item rnr-reveal rnr-reveal-up">
                <div className="rnr-trust-icon">
                  ⚙
                </div>

                <div>
                  <strong>Expert Installation</strong>
                  <span>Professional fitting & finish</span>
                </div>
              </div>

              <div className="rnr-trust-item rnr-reveal rnr-reveal-up">
                <div className="rnr-trust-icon">
                  ⛨
                </div>

                <div>
                  <strong>Enhanced Safety</strong>
                  <span>Protection for your property</span>
                </div>
              </div>

              <div className="rnr-trust-item rnr-reveal rnr-reveal-up">
                <div className="rnr-trust-icon">
                  ★
                </div>

                <div>
                  <strong>Customer Focused</strong>
                  <span>Solutions for every requirement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            ABOUT
        ========================================== */}

        <section className="rnr-section">
          <div className="rnr-container">
            <div className="rnr-about-grid">
              <div className="rnr-about-image-wrap rnr-reveal rnr-reveal-left">
                <img
                  className="rnr-about-main-image"
                  src="/images/hero1.jpg"
                  alt="RNR Balcony Safety Nets Vizag"
                  onError={(event) =>
                    fallbackImage(
                      event,
                      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
                    )
                  }
                />

                <img
                  className="rnr-about-small-image"
                  src="/images/pigeon-safety-nets.jpg"
                  alt="Safety net installation"
                  onError={(event) =>
                    fallbackImage(
                      event,
                      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=700&q=80"
                    )
                  }
                />

                <div className="rnr-about-badge">
                  <strong>RNR</strong>

                  <span>
                    Trusted Safety Solutions
                  </span>
                </div>
              </div>

              <div>
                <span className="rnr-small-label">
                  About RNR
                </span>

                <h2 className="rnr-section-title">
                  Protecting Your Space With{" "}
                  <span>Confidence.</span>
                </h2>

                <p className="rnr-section-text">
                  RNR Balcony Safety Nets Vizag provides
                  professional bird net and safety net
                  installation solutions with a focus on
                  quality, reliability and practical safety.
                  Our goal is to deliver dependable netting
                  solutions for homes, apartments and
                  commercial spaces.
                </p>

                <div className="rnr-about-points">
                  <div className="rnr-about-point">
                    <span className="rnr-about-check">
                      ✓
                    </span>

                    Professional Team
                  </div>

                  <div className="rnr-about-point">
                    <span className="rnr-about-check">
                      ✓
                    </span>

                    Expert Service
                  </div>

                  <div className="rnr-about-point">
                    <span className="rnr-about-check">
                      ✓
                    </span>

                    Durable Materials
                  </div>

                  <div className="rnr-about-point">
                    <span className="rnr-about-check">
                      ✓
                    </span>

                    Customized Solutions
                  </div>
                </div>

                <div className="rnr-about-actions">
                  <Link
                    to="/about-us"
                    className="rnr-primary-btn"
                  >
                    Discover Our Story →
                  </Link>

                  <a
                    href={`tel:${phone}`}
                    className="rnr-secondary-btn"
                  >
                    ☎ {phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SPECIFICATIONS
        ========================================== */}

        <section className="rnr-spec-section">
          <div className="rnr-container">
            <div className="rnr-spec-grid">
              <div>
                <span className="rnr-small-label">
                  Safety Net Specifications
                </span>

                <h2 className="rnr-spec-title">
                  Built For Safety.
                  <br />
                  Designed To Last.
                </h2>

                <p className="rnr-spec-description">
                  Choose professional safety net solutions
                  designed for strength, weather resistance
                  and dependable everyday protection.
                </p>

                <div
                  style={{
                    marginTop: "27px",
                  }}
                >
                  <a
                    href={`tel:${phone}`}
                    className="rnr-primary-btn"
                  >
                    ☎ Request Free Estimate
                  </a>
                </div>
              </div>

              <div className="rnr-spec-list rnr-reveal rnr-reveal-right">
                <div className="rnr-spec-card">
                  <small>Material</small>
                  <strong>Stainless Steel</strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Wire Thickness</small>
                  <strong>2mm – 3mm</strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Coating</small>
                  <strong>Anti-Rust Coating</strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Mesh</small>
                  <strong>Narrow Gaps</strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Tensile Strength</small>
                  <strong>Up to 400 kg</strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Resistance</small>
                  <strong>
                    UV & Corrosion Resistant
                  </strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Installation</small>
                  <strong>Wall Mounted</strong>
                </div>

                <div className="rnr-spec-card">
                  <small>Option</small>
                  <strong>Floor to Ceiling</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            STATS
        ========================================== */}

        <section className="rnr-stats-wrapper">
          <div className="rnr-container">
            <div className="rnr-stats-grid">
              <div className="rnr-stat rnr-reveal rnr-reveal-scale">
                <strong>1500+</strong>
                <span>Completed Projects</span>
              </div>

              <div className="rnr-stat rnr-reveal rnr-reveal-scale">
                <strong>150+</strong>
                <span>Satisfied Clients</span>
              </div>

              <div className="rnr-stat rnr-reveal rnr-reveal-scale">
                <strong>10+</strong>
                <span>Safety Services</span>
              </div>

              <div className="rnr-stat rnr-reveal rnr-reveal-scale">
                <strong>Vizag</strong>
                <span>Service Coverage</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            SERVICES
        ========================================== */}

        <section className="rnr-section rnr-services-section">
          <div className="rnr-container">
            <div className="rnr-center-heading rnr-reveal rnr-reveal-up">
              <span className="rnr-small-label">
                What We Offer
              </span>

              <h2 className="rnr-section-title">
                Our Special{" "}
                <span>Safety Services.</span>
              </h2>

              <p
                className="rnr-section-text"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Professional safety solutions for homes,
                apartments, balconies, buildings and
                commercial properties.
              </p>
            </div>

            <div className="rnr-services-grid">
              {services.slice(0, 6).map(
                (service, index) => (
                  <article
                    className={`rnr-service-card rnr-reveal ${
                        index % 2 === 0 ? "rnr-reveal-left" : "rnr-reveal-right"
                      }`}
                      style={{ "--rnr-delay": `${(index % 3) * 90}ms` }}
                    key={service.title}
                  >
                    <div className="rnr-service-image-box">
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={(event) =>
                          fallbackImage(
                            event,
                            service.fallback
                          )
                        }
                      />

                      <span className="rnr-service-number">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>
                    </div>

                    <div className="rnr-service-content">
                      <h3>{service.title}</h3>

                      <p>{service.text}</p>

                      <div className="rnr-service-actions">
                        <Link
                          to="/services"
                          className="rnr-service-link"
                        >
                          Explore Service →
                        </Link>

                        <a
                          href={`tel:${phone}`}
                          className="rnr-service-call"
                          aria-label={`Call for ${service.title}`}
                        >
                          ☎
                        </a>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>

            <div className="rnr-services-footer">
              <Link
                to="/services"
                className="rnr-primary-btn"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================
            WHY CHOOSE US
        ========================================== */}

        <section className="rnr-section">
          <div className="rnr-container">
            <div className="rnr-why-grid">
              <div className="rnr-why-image rnr-reveal rnr-reveal-left">
                <img
                  src="/images/hero3.jpg"
                  alt="Professional safety net installation"
                  onError={(event) =>
                    fallbackImage(
                      event,
                      "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1100&q=80"
                    )
                  }
                />

                <div className="rnr-why-image-card">
                  <div className="rnr-why-image-card-icon">
                    ✓
                  </div>

                  <div>
                    <strong>
                      Professional Safety Solutions
                    </strong>

                    <span>
                      Reliable installation with attention
                      to safety and finish.
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <span className="rnr-small-label">
                  Why Choose Us
                </span>

                <h2 className="rnr-section-title">
                  Safety That Fits{" "}
                  <span>Your Space.</span>
                </h2>

                <p className="rnr-section-text">
                  From bird-control requirements to
                  residential safety needs, we focus on
                  practical solutions, professional
                  installation and durable materials.
                </p>

                <div className="rnr-why-list">
                  <div className="rnr-why-item">
                    <div className="rnr-why-icon">
                      ✓
                    </div>

                    <div>
                      <h4>
                        Effective Solutions
                      </h4>

                      <p>
                        Practical net and bird-control
                        solutions designed for different
                        property requirements.
                      </p>
                    </div>
                  </div>

                  <div className="rnr-why-item">
                    <div className="rnr-why-icon">
                      ⚙
                    </div>

                    <div>
                      <h4>
                        Expert Installation
                      </h4>

                      <p>
                        Professional techniques help create
                        a clean, secure and dependable
                        installation.
                      </p>
                    </div>
                  </div>

                  <div className="rnr-why-item">
                    <div className="rnr-why-icon">
                      ◆
                    </div>

                    <div>
                      <h4>
                        Durable Materials
                      </h4>

                      <p>
                        Quality materials selected to
                        provide dependable performance in
                        outdoor conditions.
                      </p>
                    </div>
                  </div>

                  <div className="rnr-why-item">
                    <div className="rnr-why-icon">
                      ₹
                    </div>

                    <div>
                      <h4>
                        Affordable Rates
                      </h4>

                      <p>
                        Safety solutions planned according
                        to your property and requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            RECENT WORKS
        ========================================== */}

        <section className="rnr-section rnr-work-section">
          <div className="rnr-container">
            <div className="rnr-center-heading rnr-reveal rnr-reveal-up">
              <span className="rnr-small-label">
                Our Works
              </span>

              <h2 className="rnr-section-title">
                Recent Safety Net{" "}
                <span>Installations.</span>
              </h2>

              <p
                className="rnr-section-text"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Superior quality nets, professional
                installation and dependable service.
              </p>
            </div>

            <div className="rnr-work-grid">
              {services.slice(0, 4).map(
                (service) => (
                  <div
                    className="rnr-work-card rnr-reveal rnr-reveal-scale"
                    key={service.title}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={(event) =>
                        fallbackImage(
                          event,
                          service.fallback
                        )
                      }
                    />

                    <div className="rnr-work-overlay">
                      <span>RNR Safety Nets</span>

                      <h3>{service.title}</h3>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="rnr-services-footer">
              <Link
                to="/gallery"
                className="rnr-primary-btn"
              >
                View Complete Gallery →
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================
            TESTIMONIALS
        ========================================== */}

        <section className="rnr-section">
          <div className="rnr-container">
            <div className="rnr-center-heading rnr-reveal rnr-reveal-up">
              <span className="rnr-small-label">
                Testimonials
              </span>

              <h2 className="rnr-section-title">
                What Our Customers{" "}
                <span>Say.</span>
              </h2>
            </div>

            <div className="rnr-testimonials-grid">
              <div className="rnr-testimonial rnr-reveal rnr-reveal-up">
                <div className="rnr-testimonial-stars">
                  ★★★★★
                </div>

                <p className="rnr-testimonial-text">
                  “Excellent service and durability. The
                  installation looks clean and the safety
                  solution works very well.”
                </p>

                <div className="rnr-reviewer">
                  <div className="rnr-reviewer-icon">
                    S
                  </div>

                  <div>
                    <strong>Shashank</strong>
                    <span>Visakhapatnam</span>
                  </div>
                </div>
              </div>

              <div className="rnr-testimonial rnr-reveal rnr-reveal-up">
                <div className="rnr-testimonial-stars">
                  ★★★★★
                </div>

                <p className="rnr-testimonial-text">
                  “RNR balcony safety nets made our
                  windows safer without compromising the
                  open view. A great solution for our
                  home.”
                </p>

                <div className="rnr-reviewer">
                  <div className="rnr-reviewer-icon">
                    S
                  </div>

                  <div>
                    <strong>Shashank</strong>
                    <span>Visakhapatnam</span>
                  </div>
                </div>
              </div>

              <div className="rnr-testimonial rnr-reveal rnr-reveal-up">
                <div className="rnr-testimonial-stars">
                  ★★★★★
                </div>

                <p className="rnr-testimonial-text">
                  “The safety installation looks neat and
                  barely affects the view. We are very
                  happy with the overall service.”
                </p>

                <div className="rnr-reviewer">
                  <div className="rnr-reviewer-icon">
                    P
                  </div>

                  <div>
                    <strong>Pooja</strong>
                    <span>Visakhapatnam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FINAL PREMIUM CTA
        ========================================== */}

        <section className="rnr-final-cta-section">
          <div className="rnr-container">
            <div className="rnr-final-cta rnr-reveal rnr-reveal-up">
              <div className="rnr-final-cta-content">
                <small>
                  READY TO MAKE YOUR SPACE SAFER?
                </small>

                <h2>
                  Protect What Matters Most With RNR
                  Safety Nets.
                </h2>

                <p>
                  Contact us for a free estimate and find
                  the right safety net solution for your
                  balcony, home, apartment or commercial
                  property.
                </p>
              </div>

              <div className="rnr-final-actions">
                <a
                  href={`tel:${phone}`}
                  className="rnr-final-orange"
                >
                  ☎ Call {phone}
                </a>

                <Link
                  to="/gallery"
                  className="rnr-final-white"
                >
                  View Our Work →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;