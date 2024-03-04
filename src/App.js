import { useEffect, useRef, useState } from "react";
import FAB from "./components/FAB";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
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
      // interactions.hasOwnProperty(`Language Select`) &&
      //   renderPeriodicaly(interactions[`Language Select`][langRef.current]);
      interactions.hasOwnProperty(`S1 Swizzle Inn`) &&
        renderPeriodicaly(interactions[`S1 Swizzle Inn`][langRef.current]);
      isMounted.current = true;
    }
  }, [show]);

  const setLang = (lang) => {
    langRef.current = lang;
  };

  return (
    <>
      <div
        style={{
          width: show ? "30vw" : "0vw",
          overflow: "hidden",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <Card className={styles.card}>
          <ChatBox
            messages={messages}
            setMessages={setMessages}
            isRendering={isRendering}
            renderPeriodicaly={renderPeriodicaly}
            lang={langRef}
            setLang={setLang}
          />
        </Card>
      </div>
      <FAB reference={target} onClick={() => setShow(!show)} isShown={show} />
    </>
  );
}

export default App;
