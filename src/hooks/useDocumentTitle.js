import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | The University of Delphis`;
  }, [title]);
};

export default useDocumentTitle;
