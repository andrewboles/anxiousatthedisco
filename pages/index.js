import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import AboutSection from "../components/AboutSection";
import ClipsSection from "../components/ClipsSection";
import Gallery from "../components/BandSection";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Home({ contest }) {
  const aboutRef = useRef(null);
  const { scrollY } = useScroll();

  const [pastHeroSection, setPastHeroSection] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < window.innerHeight * 0.65 && pastHeroSection) {
        setPastHeroSection(false);
      } else if (latest > window.innerHeight * 0.65 && !pastHeroSection) {
        setPastHeroSection(true);
      }
    });
  }, [scrollY, pastHeroSection]);

  return (
    <>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.imgContainer}>
          <Image
            src="/LogoClearBG.png"
            layout="responsive"
            width={100}
            height={100}
            alt="band photo"
            className={styles.img}
          />
        </div>
        <AboutSection {...{ aboutRef }} />
      </div>
      <div className={styles.dummy} />

      <div className={styles.videoContainer}>
        <video width="100%" autoPlay muted loop>
          <source src="/croppromo.mov" type="video/mp4" />
        </video>
      </div>
      <div className={styles.hero}>
        <Gallery />
        <ClipsSection />
        <Script src="https://widgetv3.bandsintown.com/main.min.js" />
        <section id="shows">
          <a
            id="shows"
            className="bit-widget-initializer"
            data-artist-name="id_15551263"
            data-events-to-display=""
            data-background-color="rgba(255,255,255,0)"
            data-separator-color="#DDDDDD"
            data-text-color="#ffffff"
            data-font="Helvetica"
            data-auto-style="true"
            data-button-label-capitalization="capitalize"
            data-header-capitalization="uppercase"
            data-location-capitalization="capitalize"
            data-venue-capitalization="capitalize"
            data-display-local-dates="true"
            data-local-dates-position="tab"
            data-display-past-dates="true"
            data-display-details="false"
            data-display-lineup="false"
            data-display-start-time="false"
            data-social-share-icon="true"
            data-display-limit="all"
            data-date-format="MMM. D, YYYY"
            data-date-orientation="horizontal"
            data-date-border-color="#4A4A4A"
            data-date-border-width="1px"
            data-date-capitalization="capitalize"
            data-date-border-radius="10px"
            data-event-ticket-cta-size="medium"
            data-event-custom-ticket-text=""
            data-event-ticket-text="TICKETS"
            data-event-ticket-icon="false"
            data-event-ticket-cta-text-color="#FFFFFF"
            data-event-ticket-cta-bg-color="#4A4A4A"
            data-event-ticket-cta-border-color="#4A4A4A"
            data-event-ticket-cta-border-width="0px"
            data-event-ticket-cta-border-radius="4px"
            data-sold-out-button-text-color="#FFFFFF"
            data-sold-out-button-background-color="#4A4A4A"
            data-sold-out-button-border-color="#4A4A4A"
            data-sold-out-button-clickable="true"
            data-event-rsvp-position="left"
            data-event-rsvp-cta-size="medium"
            data-event-rsvp-only-show-icon="false"
            data-event-rsvp-text="REMIND ME"
            data-event-rsvp-icon="false"
            data-event-rsvp-cta-text-color="#4A4A4A"
            data-event-rsvp-cta-bg-color="#FFFFFF"
            data-event-rsvp-cta-border-color="#4A4A4A"
            data-event-rsvp-cta-border-width="1px"
            data-event-rsvp-cta-border-radius="4px"
            data-follow-section-position="top"
            data-follow-section-alignment="center"
            data-follow-section-header-text="Get updates on new shows, new music, and more."
            data-follow-section-cta-size="medium"
            data-follow-section-cta-text="FOLLOW"
            data-follow-section-cta-icon="true"
            data-follow-section-cta-text-color="#FFFFFF"
            data-follow-section-cta-bg-color="#4A4A4A"
            data-follow-section-cta-border-color="#4A4A4A"
            data-follow-section-cta-border-width="0px"
            data-follow-section-cta-border-radius="4px"
            data-play-my-city-position="bottom"
            data-play-my-city-alignment="Center"
            data-play-my-city-header-text="Don’t see a show near you?"
            data-play-my-city-cta-size="medium"
            data-play-my-city-cta-text="REQUEST A SHOW"
            data-play-my-city-cta-icon="true"
            data-play-my-city-cta-text-color="#FFFFFF"
            data-play-my-city-cta-bg-color="#4A4A4A"
            data-play-my-city-cta-border-color="#4A4A4A"
            data-play-my-city-cta-border-width="0px"
            data-play-my-city-cta-border-radius="4px"
            data-optin-font=""
            data-optin-text-color=""
            data-optin-bg-color=""
            data-optin-cta-text-color=""
            data-optin-cta-bg-color=""
            data-optin-cta-border-width=""
            data-optin-cta-border-radius=""
            data-optin-cta-border-color=""
            data-language="en"
            data-layout-breakpoint="900"
            data-app-id=""
            data-affil-code=""
            data-bit-logo-position="bottomRight"
            data-bit-logo-color="#424242"
          ></a>
        </section>
      </div>
    </>
  );
}
