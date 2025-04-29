import styles from "../styles/MusicCard.module.css";
import RevealAnimatedDiv from "./RevealAnimatedDiv";
import Image from "next/image";
import StyledButton from "./StyledButton";
import Link from "next/link";

const MusicCard = ({ title, imgUrl, links }) => {
  return (
    <RevealAnimatedDiv className={styles.card}>
        <Image src={imgUrl} alt="the blue" width={400} height={400} />
        <div className={styles.linksSection}>
            <StyledButton type="link" text="spotify" iconName="bi:spotify" href={links.spotify} />
            <StyledButton type="link" text="apple music" iconName="simple-icons:applemusic" href={links.appleMusic} />
            <StyledButton type="link" text="merch store" iconName="akar-icons:shopping-bag" href={links.merchStore} />
            <StyledButton type="link" text="bandcamp" iconName="fa6-brands:bandcamp" href={links.bandcamp} />
        </div>
    </RevealAnimatedDiv>
  );
};

export default MusicCard;
