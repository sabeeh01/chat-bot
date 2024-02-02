import { Button } from "react-bootstrap";
import chat from "../../images/chat.png";
import close from "../../images/close.png";
import styles from "./fab.module.css";

const FAB = ({ onClick, isShown, reference }) => {
  return (
    <Button
      ref={reference}
      onClick={onClick}
      className={styles.container}
      variant="dark"
    >
      <img src={isShown ? close : chat} className={styles.icon} alt="start-chat" />
    </Button>
  );
};

export default FAB;
