import { useEffect, useRef, useState } from "react";
import { lineSplitter } from "../helpers/textSplitter";

const usePeriodicRender = () => {
  const [currentMessages, setCurrentMessages] = useState([]);
  const [isRendering, setIsRendering] = useState(false);
  const intervalId = useRef(null);

  const renderPeriodicaly = (response) => {
    const newMessages = lineSplitter(response);
    let index = 0;
    setIsRendering(true);
    intervalId.current = setInterval(() => {
      if (newMessages.length > index) {
        setCurrentMessages((prev) => [...prev, newMessages[index]]);
        index++;
      } else {
        clearInterval(intervalId.current);
        intervalId.current = null;
        setIsRendering(false);
      }
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  return [currentMessages, setCurrentMessages, isRendering, renderPeriodicaly];
};

export default usePeriodicRender;
