import React, {useState, useEffect } from "react";
import Socials from "./Socials";
export default function SideBar() {
  const visible = {
    'display': 'none'
  }
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 400;
      
      if (window.scrollY > triggerPoint) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);
  return (
    <div className={`sidebar ${showBar ? 'visible' : ''}`}>
      <Socials flex={"column"} gap={".5rem"} padding={"1rem"} />
    </div>
  );
}
