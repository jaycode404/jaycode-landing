import React, { useEffect, useRef, useState } from "react";

const SpanDynamic = ({ text }) => {
  const spanRef = useRef(null); // Use useRef instead of useState for refs
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (spanRef.current) {
      setClassName(spanRef.current.textContent.slice(1));
    }
  }, []);

  return (
    <span ref={spanRef} className={`${className} tecnologias`}>
      {text}
    </span>
  );
};

export default SpanDynamic;
