import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const getSceneUrl = (screenWidth: number) => {
  const isMobile = window.innerWidth <= 768;
  const mobileUrl =
    "https://draft.spline.design/9j0jQHy1hMlVJo7R/scene.splinecode";
  const desktopUrl =
    "https://draft.spline.design/RKf0xOPWJ8hq5DfU/scene.splinecode";

  return isMobile ? mobileUrl : desktopUrl;
};

const SplineComponent = () => {
  const [sceneUrl, setSceneUrl] = useState("");

  useEffect(() => {
    // Initialize the sceneUrl state variable on the client-side
    setSceneUrl(getSceneUrl(window.innerWidth));

    const handleResize = () => {
      setSceneUrl(getSceneUrl(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!sceneUrl) {
    return null; // Render nothing while the sceneUrl is not set (during server-side rendering)
  }

  return <Spline scene={sceneUrl} className="scene" />;
};

export default SplineComponent;
