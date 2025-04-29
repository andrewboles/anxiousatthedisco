import styles from "../styles/BandSection.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BandSection = () => {
  return (
    <div className={styles.band} id="gallery">
      <Carousel responsive={responsive} infinite={true} autoPlay>
        <div className={styles.imageContainer}>
          <Image
            src="/Crowd Shot 2.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Crowd Shot 1.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Group Shot 2.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/Group Shot 3.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default BandSection;
