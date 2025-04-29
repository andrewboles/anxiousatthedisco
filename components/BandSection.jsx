import styles from "../styles/BandSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const BandSection = () => {
  return (
    <div className={styles.band} id="gallery">
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        loop
        slidesPerView={"auto"}
        centeredSlides
        spaceBetween={-100}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        effect={"coverflow"}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/Crowd Shot 2.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/Crowd Shot 1.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/Group Shot 2.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src="/Group Shot 3.jpg"
            layout="intrinsic"
            width={727}
            height={485}
            alt="band photo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BandSection;
