"use client";
import React, { useState, useEffect } from "react";

const MouseDiv = (props) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    const update = (e) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  const mouseElement = {
    position: "fixed",
    top: y,
    left: x,
    zIndex: 100,
    visibility: props.lable ? "visible" : "hidden",
    pointerEvents: "none",
    color: "white",
    mixBlendMode: "difference",
    fontSize: "30pt"
  };

  return <div style={mouseElement}>{props.lable}</div>;
};

export default MouseDiv;