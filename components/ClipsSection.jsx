import styles from "../styles/ClipsSection.module.css";
import Image from "next/image";
import { useState } from "react";

const ClipsSection = () => {
  const [playing1000, setPlaying1000] = useState(false);
  const [playingDani, setPlayingDani] = useState(false);
  const [playingFirst, setPlayingFirst] = useState(false);
  const [playingWrite, setPlayingWrite] = useState(false);
  const [playingEnd, setPlayingEnd] = useState(false);
  const [playingSugar, setPlayingSugar] = useState(false);
  return (
    <div className={styles.band} id="clips">
      <div className={styles.imageContainer}>
        <video
          controls={playing1000}
          width="100%"
          poster="Clips Logo.png"
          onPlaying={() => setPlaying1000(true)}
          preload="auto"
          onClick={(e) => e.target.play()}
          muted={false}
        >
          <source src="/1000miles.mp4" type="video/mp4" />
        </video>
        {!playing1000 && <h2>1000 Miles</h2>}
      </div>
      <div className={styles.imageContainer}>
        <video
          controls={playingDani}
          width="100%"
          poster="Clips Logo.png"
          onPlaying={() => setPlayingDani(true)}
          preload="auto"
          onClick={(e) => e.target.play()}
          muted={false}
        >
          <source src="/DaniCalifornia.mp4" type="video/mp4" />
        </video>
        {!playingDani && <h2>Dani California</h2>}
      </div>
      <div className={styles.imageContainer}>
        <video
          controls={playingFirst}
          width="100%"
          poster="Clips Logo.png"
          onPlaying={() => setPlayingFirst(true)}
          preload="auto"
          onClick={(e) => e.target.play()}
          muted={false}
        >
          <source src="/FirstDate.mp4" type="video/mp4" />
        </video>
        {!playingFirst && <h2>First Date</h2>}
      </div>
      <div className={styles.imageContainer}>
        <video
          controls={playingWrite}
          width="100%"
          poster="Clips Logo.png"
          onPlaying={() => setPlayingWrite(true)}
          preload="auto"
          onClick={(e) => e.target.play()}
          muted={false}
        >
          <source src="/I Write Sins.mp4" type="video/mp4" />
        </video>
        {!playingWrite && <h2>I Write Sins Not Tragedies</h2>}
      </div>
      <div className={styles.imageContainer}>
        <video
          controls={playingEnd}
          width="100%"
          poster="Clips Logo.png"
          onPlaying={() => setPlayingEnd(true)}
          preload="auto"
          onClick={(e) => e.target.play()}
          muted={false}
        >
          <source src="/In The End.mp4" type="video/mp4" />
        </video>
        {!playingEnd && <h2>In The End</h2>}
      </div>
      <div className={styles.imageContainer}>
        <video
          controls={playingSugar}
          width="100%"
          poster="Clips Logo.png"
          onPlaying={() => setPlayingSugar(true)}
          preload="auto"
          onClick={(e) => e.target.play()}
          muted={false}
        >
          <source src="/Sugar We're Goin Down.mp4" />
        </video>
        {!playingSugar && <h2>{`Sugar We're Goin Down`}</h2>}
      </div>
    </div>
  );
};

export default ClipsSection;
