import { useState, useEffect } from 'react';


const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(file));
}, [file]);

  return { progress, url, error };
}

export default useStorage;