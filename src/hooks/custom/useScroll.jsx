import { useEffect } from "react";

const useScroll = () => {
  useEffect(() => {
    window.scroll(0, 0);

    return () => {
      console.log("Cleanup");
    };
  }, []);
};

export { useScroll };
