import styles from "../styles/BandSection.module.css";
import Image from "next/image";

const BandSection = () => {
  return (
    <div className={styles.band} id="gallery">
      <div className={styles.imageContainer}>
        <Image
          src="/Crowd Shot 2.jpg"
          layout="responsive"
          width={7272}
          height={4850}
          alt="band photo"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/Crowd Shot 1.jpg"
          layout="responsive"
          width={7272}
          height={4850}
          alt="band photo"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/Group Shot 2.jpg"
          layout="responsive"
          width={7272}
          height={4850}
          alt="band photo"
        />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/Group Shot 3.jpg"
          layout="responsive"
          width={7272}
          height={4850}
          alt="band photo"
        />
      </div>
    </div>
  );
};

export default BandSection;
