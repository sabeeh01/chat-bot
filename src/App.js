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
  const langRef = useRef("en");
  useEffect(() => {
    if (show && !isMounted.current) {
      interactions.hasOwnProperty(`Language Select`) &&
        renderPeriodicaly(interactions[`Language Select`][langRef.current]);
      isMounted.current = true;
    }
  }, [show]);

  const setLang = (lang) => {
    langRef.current = lang;
  };

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
              lang={langRef}
              setLang={setLang}
            />
          </Card>
        )}
      </Overlay>
    </div>
  );
}

export default App;
