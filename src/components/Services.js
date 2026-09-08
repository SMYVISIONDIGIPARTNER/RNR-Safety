import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Services() {
  const phone = "9705429255";

  const handleImageError = (event, fallback) => {
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback;
    }
  };

  const services = [
    {
      title: "Balcony Safety Nets",
      image: "/images/Balcony-Safety-Nets.png",
      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      description:
        "Ensure safety and peace of mind with high-quality balcony safety nets. Designed to prevent accidental falls and protect children, pets, and belongings, our durable nets are weather-resistant, easy to install, and ideal for apartments, homes, and high-rise buildings.",
    },
    {
      title: "Pigeon Safety Nets",
      image: "/images/pigeon-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1554226114-04bd78f87c44?auto=format&fit=crop&w=1000&q=85",
      description:
        "Protect your home from pigeons with durable safety nets. Our pigeon safety nets prevent bird entry, reduce mess, and maintain hygiene. Weather-resistant and neatly installed, they are perfect for balconies, windows, and open spaces.",
    },
    {
      title: "Anti Bird Nets",
      image: "/images/anti-bird-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=1000&q=85",
      description:
        "Keep unwanted birds away with high-quality anti bird nets. Designed to block entry without harming birds, these durable, weather-resistant nets ensure clean, hygienic spaces for balconies, windows, and commercial areas.",
    },
    {
      title: "Children Safety Nets",
      image: "/images/children-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1000&q=85",
      description:
        "Protect your little ones with strong children safety nets. Designed to prevent falls and accidents, these durable, weather-resistant nets provide secure coverage for balconies, windows, and staircases, ensuring a safe environment at home.",
    },
    {
      title: "Bird Protection Nets",
      image: "/images/bird-protection-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
      description:
        "Bird protection nets offer an effective solution to keep birds away from your space. Made from durable, weather-resistant materials, they prevent nesting and droppings while maintaining ventilation, making them ideal for balconies, windows, and open areas.",
    },
    {
      title: "Duct Area Safety Nets",
      image: "/images/ductareasafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
      description:
        "Duct area safety nets provide secure coverage for open shafts and service ducts. Made from durable, weather-resistant materials, they prevent accidents, debris fall, and bird entry, ensuring safety and cleanliness in residential and commercial buildings.",
    },
    {
      title: "Building Safety Nets",
      image: "/images/buildingsafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85",
      description:
        "Building safety nets provide reliable protection for construction sites and high-rise structures. Made from strong, weather-resistant materials, they prevent falling debris and accidents, ensuring safety for workers, residents, and surrounding areas.",
    },
    {
      title: "Industrial Safety Nets",
      image: "/images/industrialsafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
      description:
        "Industrial safety nets offer strong protection in factories and warehouses. Designed to prevent falls, catch debris, and enhance workplace safety, these durable, weather-resistant nets are ideal for high-risk industrial environments and heavy-duty applications.",
    },
    {
      title: "Staircase Safety Nets",
      image: "/images/staircasesafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
      description:
        "Staircase safety nets provide essential protection for open stair areas. Designed to prevent falls and accidents, these durable, weather-resistant nets are ideal for homes, apartments, and commercial spaces, ensuring safety for children, pets, and elderly residents.",
    },
    {
      title: "Swimming Pools Safety Nets",
      image: "/images/swimmingpoolssafetynets.png",
      fallback:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=85",
      description:
        "Swimming pool safety nets provide reliable protection by preventing accidental falls into the pool. Made from strong, weather-resistant materials, they ensure safety for children and pets while maintaining visibility, making them ideal for residential and commercial pools.",
    },
    {
      title: "Bird Spikes",
      image: "/images/birdspikes.png",
      fallback:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85",
      description:
        "Bird spikes are an effective solution to prevent birds from landing and nesting on ledges, walls, and rooftops. Made from durable, weather-resistant materials, they ensure a clean, hygienic environment without harming birds.",
    },
    {
      title: "Cricket Practice Nets",
      image: "/images/cricketpracticenets.png",
      fallback:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
      description:
        "Cricket practice nets are designed for safe and effective training sessions. Made from strong, durable materials, they prevent ball escape and ensure player safety, making them ideal for schools, clubs, and personal practice areas.",
    },
  ];

  const recentWorks = [
    {
      title: "Balcony Safety Nets",
      image: "/images/Balcony-Safety-Nets.png",
      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Pigeon Safety Nets",
      image: "/images/pigeon-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1554226114-04bd78f87c44?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Anti Bird Nets",
      image: "/images/bird-protection-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Children Safety Nets",
      image: "/images/children-safety-nets.jpg",
      fallback:
        "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  return (
    <>

      <Helmet>
        <title>Safety Net Services Vizag | Balcony, Pigeon & Bird Nets in Visakhapatnam</title>
        <meta
          name="description"
          content="RNR Balcony Safety Nets Vizag provides balcony safety nets, pigeon nets, anti bird nets, children safety nets, duct nets, building nets, industrial nets, bird spikes and cricket practice nets in Visakhapatnam."
        />
        <meta
          name="keywords"
          content="safety nets Vizag, balcony safety nets Vizag, pigeon safety nets Vizag, bird nets Visakhapatnam, anti bird nets Vizag, children safety nets Vizag, duct area safety nets Vizag, building safety nets Vizag, industrial safety nets Visakhapatnam, bird spikes Vizag, cricket practice nets Vizag"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="RNR Balcony Safety Nets Vizag" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Visakhapatnam" />
        <meta name="theme-color" content="#062d61" />

        <link rel="canonical" href="https://rnrbalconysafetynetsvizag.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="RNR Balcony Safety Nets Vizag" />
        <meta property="og:title" content="Safety Net Services Vizag | RNR Balcony Safety Nets" />
        <meta
          property="og:description"
          content="Professional balcony, pigeon, bird, children, building and industrial safety net installation services across Visakhapatnam."
        />
        <meta property="og:url" content="https://rnrbalconysafetynetsvizag.com/services" />
        <meta property="og:image" content="https://rnrbalconysafetynetsvizag.com/images/services-hero.jpg" />
        <meta property="og:image:alt" content="Safety net installation services in Visakhapatnam by RNR Balcony Safety Nets Vizag" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Safety Net Services Vizag | RNR Balcony Safety Nets" />
        <meta
          name="twitter:description"
          content="Balcony safety nets, pigeon nets, bird nets, children safety nets and more in Visakhapatnam."
        />
        <meta name="twitter:image" content="https://rnrbalconysafetynetsvizag.com/images/services-hero.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "@id": "https://rnrbalconysafetynetsvizag.com/#business",
            name: "RNR Balcony Safety Nets Vizag",
            url: "https://rnrbalconysafetynetsvizag.com/",
            logo: "https://rnrbalconysafetynetsvizag.com/logo.png",
            image: "https://rnrbalconysafetynetsvizag.com/images/services-hero.jpg",
            telephone: "+91-9705429255",
            email: "rnrsafetynets@gmail.com",
            description:
              "Professional safety net installation services for balconies, pigeons, birds, children, buildings and other residential and commercial requirements in Visakhapatnam.",
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
            "@type": "CollectionPage",
            "@id": "https://rnrbalconysafetynetsvizag.com/services#webpage",
            url: "https://rnrbalconysafetynetsvizag.com/services",
            name: "Safety Net Services in Vizag",
            description:
              "Safety net installation services offered by RNR Balcony Safety Nets Vizag in Visakhapatnam.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://rnrbalconysafetynetsvizag.com/#website",
              url: "https://rnrbalconysafetynetsvizag.com/",
              name: "RNR Balcony Safety Nets Vizag"
            },
            about: { "@id": "https://rnrbalconysafetynetsvizag.com/#business" },
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
                name: "Services",
                item: "https://rnrbalconysafetynetsvizag.com/services"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "RNR Safety Net Services in Visakhapatnam",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@id": "https://rnrbalconysafetynetsvizag.com/#business"
                },
                areaServed: {
                  "@type": "City",
                  name: "Visakhapatnam"
                },
                url: "https://rnrbalconysafetynetsvizag.com/services"
              }
            }))
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

          .rnr-services-page {
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

          .rnr-services-container {
            width: min(1240px, calc(100% - 40px));
            margin: 0 auto;
          }

          .rnr-services-section {
            padding: 90px 0;
          }

          .rnr-services-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            margin-bottom: 16px;
            color: #ff6700;
            font-size: 13px;
            font-weight: 850;
            letter-spacing: 1.8px;
            text-transform: uppercase;
          }

          .rnr-services-eyebrow::before {
            content: "";
            width: 30px;
            height: 3px;
            background: #ff6700;
            border-radius: 20px;
          }

          .rnr-services-heading {
            margin: 0;
            color: #062d61;
            font-size: clamp(34px, 4.5vw, 56px);
            line-height: 1.08;
            letter-spacing: -1.8px;
            font-weight: 900;
          }

          .rnr-services-heading span {
            color: #ff6700;
          }

          .rnr-services-text {
            max-width: 720px;
            margin: 20px auto 0;
            color: #6f7f93;
            font-size: 16px;
            line-height: 1.8;
          }

          /* HERO */

          .rnr-services-hero {
            position: relative;
            min-height: 390px;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: #062d61;
          }

          .rnr-services-hero-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.4;
          }

          .rnr-services-hero-overlay {
            position: absolute;
            inset: 0;
            background:
              linear-gradient(
                90deg,
                rgba(3,25,56,0.97) 0%,
                rgba(5,43,91,0.9) 50%,
                rgba(5,43,91,0.5) 100%
              );
          }

          .rnr-services-hero-content {
            position: relative;
            z-index: 3;
            max-width: 800px;
            padding: 70px 0;
          }

          .rnr-services-hero-label {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            padding: 8px 14px;
            margin-bottom: 18px;
            border: 1px solid rgba(255,255,255,0.18);
            border-radius: 50px;
            background: rgba(255,255,255,0.08);
            color: #fff;
            font-size: 12px;
            font-weight: 750;
            letter-spacing: 1.3px;
            text-transform: uppercase;
            backdrop-filter: blur(8px);
          }

          .rnr-services-hero-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ff6700;
            box-shadow: 0 0 0 5px rgba(255,103,0,0.16);
          }

          .rnr-services-hero h1 {
            margin: 0;
            color: #ffffff;
            font-size: clamp(46px, 6vw, 76px);
            line-height: 1;
            letter-spacing: -3px;
            font-weight: 900;
          }

          .rnr-services-hero h1 span {
            color: #ff6700;
          }

          .rnr-services-hero p {
            max-width: 680px;
            margin: 22px 0 0;
            color: rgba(255,255,255,0.82);
            font-size: 17px;
            line-height: 1.75;
          }

          .rnr-services-breadcrumb {
            display: flex;
            align-items: center;
            gap: 9px;
            margin-top: 24px;
            color: rgba(255,255,255,0.65);
            font-size: 13px;
          }

          .rnr-services-breadcrumb a {
            color: #fff;
            text-decoration: none;
          }

          .rnr-services-breadcrumb span {
            color: #ff8a35;
          }

          /* SERVICES */

          .rnr-services-main {
            background: #f6f8fb;
          }

          .rnr-services-center {
            max-width: 780px;
            margin: 0 auto 48px;
            text-align: center;
          }

          .rnr-services-center .rnr-services-eyebrow {
            justify-content: center;
          }

          .rnr-services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px;
          }

          .rnr-service-card {
            overflow: hidden;
            border-radius: 20px;
            background: #fff;
            border: 1px solid #e7ebf1;
            box-shadow: 0 12px 30px rgba(6,45,97,0.05);
            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease;
          }

          .rnr-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 55px rgba(6,45,97,0.12);
          }

          .rnr-service-image {
            position: relative;
            height: 245px;
            overflow: hidden;
          }

          .rnr-service-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s ease;
          }

          .rnr-service-card:hover .rnr-service-image img {
            transform: scale(1.07);
          }

          .rnr-service-number {
            position: absolute;
            top: 16px;
            left: 16px;
            min-width: 40px;
            height: 40px;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background: rgba(6,45,97,0.93);
            color: #fff;
            font-size: 12px;
            font-weight: 900;
            backdrop-filter: blur(6px);
          }

          .rnr-service-body {
            padding: 25px;
          }

          .rnr-service-body h2 {
            margin: 0;
            color: #062d61;
            font-size: 21px;
          }

          .rnr-service-body p {
            margin: 13px 0 22px;
            color: #758398;
            font-size: 14px;
            line-height: 1.72;
          }

          .rnr-service-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
          }

          .rnr-service-call-btn {
            min-height: 44px;
            padding: 0 16px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border-radius: 10px;
            background: #ff6700;
            color: #fff;
            text-decoration: none;
            font-size: 13px;
            font-weight: 850;
          }

          .rnr-service-more {
            color: #062d61;
            text-decoration: none;
            font-size: 13px;
            font-weight: 800;
          }

          .rnr-service-more:hover {
            color: #ff6700;
          }

          /* ESTIMATE CTA */

          .rnr-services-estimate {
            position: relative;
            overflow: hidden;
            padding: 80px 0;
            background:
              linear-gradient(120deg, #042859, #073c77);
            color: #fff;
          }

          .rnr-services-estimate-grid {
            position: relative;
            z-index: 2;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 60px;
          }

          .rnr-services-estimate small {
            color: #ff8b38;
            font-size: 12px;
            font-weight: 850;
            letter-spacing: 1.7px;
            text-transform: uppercase;
          }

          .rnr-services-estimate h2 {
            max-width: 800px;
            margin: 13px 0 0;
            color: #fff;
            font-size: clamp(31px, 4vw, 48px);
            line-height: 1.15;
            letter-spacing: -1.4px;
          }

          .rnr-services-estimate h2 span {
            color: #ff7b19;
          }

          .rnr-services-estimate p {
            max-width: 780px;
            margin: 17px 0 0;
            color: rgba(255,255,255,0.75);
            font-size: 15px;
            line-height: 1.8;
          }

          .rnr-estimate-actions {
            min-width: 220px;
            display: grid;
            gap: 10px;
          }

          .rnr-estimate-call,
          .rnr-estimate-contact {
            min-height: 55px;
            padding: 0 20px;
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
            color: #fff;
          }

          .rnr-estimate-contact {
            background: #fff;
            color: #062d61;
          }

          /* RECENT WORKS */

          .rnr-works-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }

          .rnr-work-card {
            position: relative;
            height: 350px;
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
            background:
              linear-gradient(
                to top,
                rgba(3,25,56,0.9),
                rgba(3,25,56,0.02) 65%
              );
            color: #fff;
          }

          .rnr-work-overlay small {
            color: #ff8a35;
            font-size: 10px;
            font-weight: 850;
            letter-spacing: 1.4px;
            text-transform: uppercase;
          }

          .rnr-work-overlay h3 {
            margin: 7px 0 0;
            font-size: 18px;
          }

          .rnr-work-overlay a {
            margin-top: 13px;
            color: #fff;
            text-decoration: none;
            font-size: 12px;
            font-weight: 800;
          }

          .rnr-works-button {
            display: flex;
            justify-content: center;
            margin-top: 36px;
          }

          .rnr-gallery-btn {
            min-height: 54px;
            padding: 0 23px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            background: #ff6700;
            color: #fff;
            border-radius: 12px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 850;
          }

          /* RESPONSIVE */

          @media (max-width: 1050px) {
            .rnr-services-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .rnr-works-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 760px) {
            .rnr-services-container {
              width: calc(100% - 30px);
            }

            .rnr-services-section {
              padding: 65px 0;
            }

            .rnr-services-hero {
              min-height: 350px;
            }

            .rnr-services-hero-content {
              padding: 60px 0;
            }

            .rnr-services-hero h1 {
              letter-spacing: -2px;
            }

            .rnr-services-estimate-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .rnr-estimate-actions {
              display: flex;
              min-width: 0;
            }

            .rnr-estimate-call,
            .rnr-estimate-contact {
              flex: 1;
            }
          }

          @media (max-width: 560px) {
            .rnr-services-container {
              width: calc(100% - 24px);
            }

            .rnr-services-section {
              padding: 55px 0;
            }

            .rnr-services-hero {
              min-height: 330px;
            }

            .rnr-services-hero h1 {
              font-size: 44px;
            }

            .rnr-services-hero p {
              font-size: 14px;
            }

            .rnr-services-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            .rnr-service-image {
              height: 230px;
            }

            .rnr-service-body {
              padding: 21px;
            }

            .rnr-works-grid {
              grid-template-columns: 1fr 1fr;
              gap: 10px;
            }

            .rnr-work-card {
              height: 250px;
              border-radius: 14px;
            }

            .rnr-work-overlay {
              padding: 14px;
            }

            .rnr-work-overlay h3 {
              font-size: 14px;
            }

            .rnr-estimate-actions {
              display: grid;
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 380px) {
            .rnr-works-grid {
              grid-template-columns: 1fr;
            }

            .rnr-work-card {
              height: 280px;
            }

            .rnr-service-actions {
              flex-direction: column;
              align-items: stretch;
            }

            .rnr-service-call-btn,
            .rnr-service-more {
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>

      <main className="rnr-services-page">

        {/* HERO */}

        <section className="rnr-services-hero">
          <img
            src="/images/services-hero.jpg"
            alt="RNR Safety Net Services"
            className="rnr-services-hero-bg"
            onError={(event) =>
              handleImageError(
                event,
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
              )
            }
          />

          <div className="rnr-services-hero-overlay"></div>

          <div className="rnr-services-container">
            <div className="rnr-services-hero-content">
              <div className="rnr-services-hero-label">
                <span className="rnr-services-hero-dot"></span>
                What We Offer
              </div>

              <h1>
                Our Special <span>Services.</span>
              </h1>

              <p>
                Complete safety net solutions for homes, balconies,
                apartments, buildings and commercial properties in
                Visakhapatnam.
              </p>

              <div className="rnr-services-breadcrumb">
                <Link to="/">Home</Link>
                <span>→</span>
                <strong>Services</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="rnr-services-section rnr-services-main">
          <div className="rnr-services-container">

            <div className="rnr-services-center">
              <span className="rnr-services-eyebrow">
                What We Offering
              </span>

              <h2 className="rnr-services-heading">
                Our Special <span>Safety Services.</span>
              </h2>

              <p className="rnr-services-text">
                Professional and durable safety solutions designed for
                residential, commercial and industrial requirements.
              </p>
            </div>

            <div className="rnr-services-grid">
              {services.map((service, index) => (
                <article
                  className="rnr-service-card"
                  key={service.title}
                >
                  <div className="rnr-service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={(event) =>
                        handleImageError(event, service.fallback)
                      }
                    />

                    <span className="rnr-service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="rnr-service-body">
                    <h2>{service.title}</h2>

                    <p>{service.description}</p>

                    <div className="rnr-service-actions">
                      <a
                        href={`tel:${phone}`}
                        className="rnr-service-call-btn"
                      >
                        ☎ Call : {phone}
                      </a>

                      <Link
                        to="/contact-us"
                        className="rnr-service-more"
                      >
                        Enquire →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* FREE ESTIMATE */}

        <section className="rnr-services-estimate">
          <div className="rnr-services-container">

            <div className="rnr-services-estimate-grid">

              <div>
                <small>
                  Free Estimates
                </small>

                <h2>
                  Bird Control Solutions For A{" "}
                  <span>Cleaner & Safer Space.</span>
                </h2>

                <p>
                  We are committed to offering useful, practical
                  suggestions and solutions for an effective bird and
                  pigeon management programme. Contact us to discuss
                  the right safety solution for your property.
                </p>
              </div>

              <div className="rnr-estimate-actions">
                <a
                  href={`tel:${phone}`}
                  className="rnr-estimate-call"
                >
                  ☎ Call {phone}
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

        {/* RECENT WORKS */}

        <section className="rnr-services-section">
          <div className="rnr-services-container">

            <div className="rnr-services-center">
              <span className="rnr-services-eyebrow">
                Our Works
              </span>

              <h2 className="rnr-services-heading">
                Our Recent <span>Works.</span>
              </h2>

              <p className="rnr-services-text">
                Superior Quality Nets | Friendly & Quality Services |
                Professional Team | Reliable Support.
              </p>
            </div>

            <div className="rnr-works-grid">
              {recentWorks.map((work) => (
                <div
                  className="rnr-work-card"
                  key={work.title}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    onError={(event) =>
                      handleImageError(event, work.fallback)
                    }
                  />

                  <div className="rnr-work-overlay">
                    <small>RNR Safety Nets</small>

                    <h3>{work.title}</h3>

                    <a href={`tel:${phone}`}>
                      ☎ Call {phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="rnr-works-button">
              <Link
                to="/contact-us"
                className="rnr-gallery-btn"
              >
                    Get a Free Quote →
              </Link>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default Services;