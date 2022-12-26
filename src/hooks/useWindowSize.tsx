import { useEffect, useState } from "react";

export enum EWindowSize {
  LAPTOP = 1500,
  TABLET = 1130,
  MOBILE = 740,
}

interface IUseWindowSize {
  width: number;
  height: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IUseWindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

useWindowSize.Type = EWindowSize;
