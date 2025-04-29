import styles from "../styles/AboutSection.module.css";
import RevealAnimatedDiv from "./RevealAnimatedDiv";
import Image from "next/image";
import { Icon } from "@iconify/react";
import StyledButton from "./StyledButton";
const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      {/*  <RevealAnimatedDiv>
        <iframe
          className={styles.theBlueVid}
          src="https://www.youtube.com/embed/x-dmUNnpey0?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </RevealAnimatedDiv>
      <RevealAnimatedDiv>
        <iframe
          className={styles.badAdviceVid}
          src="https://www.youtube.com/embed/v8FShmztRgo?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </RevealAnimatedDiv> */}
      <RevealAnimatedDiv>
        <Image
          src="/PolaroidLogo.png"
          width={400}
          height={400}
          alt="band photo"
        />
      </RevealAnimatedDiv>
      <RevealAnimatedDiv className={styles.textContainer}>
        <h2>This Is Us</h2>
        <p>
          <span>
            Anxious! At The Disco brings the intensity and passion of the 00's
            with a pop punk twist.
            <br />
            <br />
          </span>
          <span>
            Join us on a journey through the echoes of broken hearts and
            haunting melodies that fueled your iPod:
          </span>
          <br />
          <br />
          <span>
            ​Blink-182, Panic! At The Disco, NSYNC, Taylor Swift, and more!
          </span>
        </p>
        <div className={styles.socialContainer}>
          <a
            href="https://instagram.com/anxiousatthedisco"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="icon-park-outline:instagram" />
          </a>
          <a
            href="https://www.facebook.com/100090961725203"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="akar-icons:facebook-fill" />
          </a>
          <a
            href="https://open.spotify.com/playlist/3FgiqAPlFVX3QfYCaji0o0?si=f0b2153eb1674705"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="bi:spotify" />
          </a>
          <a
            href="https://music.apple.com/us/playlist/anxious-at-the-disco/pl.u-ra3XcLEg0z"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="ic:round-apple" />
          </a>
        </div>
        <div className={styles.buttonContainer}>
          <StyledButton
            text={"Booking"}
            iconName="material-symbols-light:mail-outline"
            type="link"
            href="mailto:anxatthedisco@gmail.com?subject=Band Booking"
          />
        </div>
      </RevealAnimatedDiv>
    </section>
  );
};

export default AboutSection;
