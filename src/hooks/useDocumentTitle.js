// useDocumentTitle custom hook
// Automatically updates the document title (browser tab name) for SEO and UX
import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    // Save the original title to restore it if needed, or just append the brand
    document.title = `${title} | ShoppyGlobe`;
  }, [title]);
};

export default useDocumentTitle;
