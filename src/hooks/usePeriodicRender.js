import { useEffect, useRef, useState } from "react";
import { lineSplitter } from "../helpers/textSplitter";

const usePeriodicRender = () => {
  const [currentMessages, setCurrentMessages] = useState([]);
  const [isRendering, setIsRendering] = useState(false);
  const timersRef = useRef(null);

  const clearTimers = () =>
    timersRef.current &&
    timersRef.current.forEach((timer) => clearTimeout(timer));

  const renderPeriodicaly = (response) => {
    clearTimers();

    const newMessages = lineSplitter(response);
    setIsRendering(true);
    const timers = [];
    newMessages.forEach((newMessage, index) => {
      timers.push(
        setTimeout(() => {
          setCurrentMessages((prev) => [...prev, newMessage]);
          if (index === newMessages.length - 1) setIsRendering(false);
        }, index * 2000)
      );
    });
    timersRef.current = timers;
  };
  useEffect(() => {
    return clearTimers;
  }, []);

  return [currentMessages, setCurrentMessages, isRendering, renderPeriodicaly];
};

export default usePeriodicRender;
