import Overlay from "@/overlay";
import Spline from "@splinetool/react-spline";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const scroll = useRef(0);
  return (
    <>
      <div className="container">
        <Overlay />
        <Spline
          scene="https://prod.spline.design/08SrAZtLm6j67LuU/scene.splinecode"
          className="scene"
        />
      </div>
    </>
  );
}
