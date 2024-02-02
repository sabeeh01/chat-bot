import { useRef, useState } from "react";
import FAB from "./components/FAB";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Overlay } from "react-bootstrap";
import ChatBox from "./components/ChatBox";
import styles from "./app.module.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className={styles.container}>
      <FAB reference={target} onClick={() => setShow(!show)} isShown={show} />
      <Overlay target={target.current} show={show} placement="top">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <Card className={styles.card} {...props}>
            <ChatBox messages={messages} setMessages={setMessages} />
          </Card>
        )}
      </Overlay>
    </div>
  );
}

export default App;
