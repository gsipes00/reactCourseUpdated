import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef("hello there ref");

  console.log(container);

  // when location state-variable updates from moveOver
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? `submenu show` : `submenu`}`}
      ref={container}
    >
      submenu
      {console.log(container)}
    </aside>
  );
};

export default Submenu;
