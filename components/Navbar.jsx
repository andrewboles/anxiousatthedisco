import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#gallery">GALLERY</a>
        </li>
        <li>
          <a href="#clips">CLIPS</a>
        </li>
        <li>
          <a href="#shows">SHOWS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
