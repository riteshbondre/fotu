import React, { useEffect } from 'react';
import useOfflineStorage from '../hooks/useOfflineStorage';
import { motion } from 'framer-motion';

const OfflineProgressBar = ({ file, setFile }) => {

  const { progress, url } = useOfflineStorage(file);
  console.log(file)
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default OfflineProgressBar;