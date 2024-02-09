import { useEffect, useRef, useState } from "react";
import FAB from "./components/FAB";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Overlay } from "react-bootstrap";
import ChatBox from "./components/ChatBox";
import styles from "./app.module.css";
import usePeriodicRender from "./hooks/usePeriodicRender";
import { interactions } from "./constants/interactions";

function App() {
  const isMounted = useRef(false);
  const [messages, setMessages, isRendering, renderPeriodicaly] =
    usePeriodicRender();
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (show && !isMounted.current) {
      interactions.hasOwnProperty(`S1 Swizzle Inn`) &&
        renderPeriodicaly(interactions[`S1 Swizzle Inn`].response);
      isMounted.current = true;
    }
  }, [show]);

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
            <ChatBox
              messages={messages}
              setMessages={setMessages}
              isRendering={isRendering}
              renderPeriodicaly={renderPeriodicaly}
            />
          </Card>
        )}
      </Overlay>
    </div>
  );
}

export default App;
