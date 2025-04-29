import styles from "../styles/StyledButton.module.css";
import { Icon } from "@iconify/react";

const StyledButton = ({ text, type = "button", iconName = null, ...props }) => {
  return type !== "link" ? (
    <button type={type} className={styles.styledButton} {...props}>
      {iconName && <Icon width={40} className={styles.icon} icon={iconName} />}
      {text}
    </button>
  ) : (
    <a className={styles.styledButton} {...props} target="_blank">
      {iconName && <Icon width={40} className={styles.icon} icon={iconName} />}
      {text}
    </a>
  );
};

export default StyledButton;
