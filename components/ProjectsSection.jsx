import styles from "../styles/ProjectsSection.module.css";
import MusicCard from "./MusicCard";

const theBlueLinks = {
  spotify: "https://open.spotify.com/album/3pNPIh5nF75gVIP7ybf4BT",
  appleMusic:
    "https://music.apple.com/us/album/1600126168?app=music&at=1l3vpUI&ct=LFV_b1bd1a814930895232fb47cbae9f98f4&itscg=30440&itsct=catchall_p2&lId=25045076&cId=BIO&sr=2&src=Linkfire&ls=1",
  bandcamp: "https://noalarms.bandcamp.com/",
  merchStore: "https://noalarms.store/products/the-blue-cassette-pre-sale",
};
const dejaViewLinks = {
  spotify: "https://lnk.to/dejaviewws/spotify",
  appleMusic: "https://lnk.to/dejaviewws/applemusic",
  bandcamp: "https://lnk.to/dejaviewws/bandcamp",
  merchStore: "https://noalarms.store",
};

const selfTitledLinks = {
  spotify: "https://lnk.to/naepws/spotify",
  appleMusic: "https://lnk.to/naepws/applemusic",
  bandcamp: "https://lnk.to/naepws/bandcamp",
  merchStore: "https://noalarms.store",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.musicContainer}>
        <iframe
          src="https://open.spotify.com/embed/playlist/2Ugf5ukRjL85N9lgwl5u53?utm_source=generator"
          width="80%"
          height="450"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: "12px" }}
        />
        <iframe
          id="embedPlayer"
          src="https://embed.music.apple.com/us/album/deja-view-ep/1457570382?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
          height="450px"
          frameBorder="0"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
          style={{
            width: "80%",
            maxwidth: "660px",
            overflow: "hidden",
            borderRadius: "10px",
            transform: 'translateZ("0px")',
            animation: "2s ease 0s 6 normal none running loading-indicator",
            backgroundColor: "rgb(228, 228, 228)",
          }}
        />
      </div>
      {/* <MusicCard title="The Blue" imgUrl="/theblue.jpg" links={theBlueLinks} />
        <MusicCard title="Deja View" imgUrl="/dejaview.jpg" links={dejaViewLinks} />
        <MusicCard title="No Alarms" imgUrl="/noalarms.jpg" links={selfTitledLinks} /> */}
    </section>
  );
};

export default ProjectsSection;
