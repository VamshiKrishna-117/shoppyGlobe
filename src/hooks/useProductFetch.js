// Custom hook for fetching data from any URL
// Handles loading state, error state, and stores the fetched data
// This is reusable — can fetch product list OR single product details
import { useState, useEffect } from 'react';

const useProductFetch = (url) => {
  const [data, setData] = useState(null);       // stores fetched data
  const [loading, setLoading] = useState(true);  // tracks loading state
  const [error, setError] = useState(null);      // stores error message if fetch fails

  useEffect(() => {
    // Don't fetch if no URL is provided
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        // Handle HTTP errors (e.g., 404, 500)
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        // Handle network errors and HTTP errors
        setError(err.message || 'Something went wrong while fetching data.');
      } finally {
        // Always stop loading, whether fetch succeeded or failed
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-fetch when URL changes

  return { data, loading, error };
};

export default useProductFetch;
