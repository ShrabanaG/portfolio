import { useState, useEffect } from "react";
import useInView from "../hooks/useInview";

const Counter = ({ target, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const numericTarget = parseInt(target.replace(/\D/g, ""), 10) || 0;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);

  const display = target.replace(/\d+/, count);
  return <span ref={ref}>{display}</span>;
};

export default Counter;
