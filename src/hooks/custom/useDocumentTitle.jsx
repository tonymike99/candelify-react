import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `MikeyCart ${title}`;

    return () => {
      console.log("Cleanup");
    };
  }, [title]);
};

export { useDocumentTitle };
