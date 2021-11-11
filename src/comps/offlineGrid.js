import React from "react";
import { motion } from "framer-motion";
import useOfflineStorage from "../hooks/useOfflineStorage";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useOfflineStorage("images");

  return (
    <div>
      <div className="img-grid">
        {finalImg &&
          finalImg.map((data) => (
            <motion.div
              className="img-wrap"
              layout
              whileHover={{ opacity: 1 }}
              onClick={(e) => e.target.value}
            >
              <motion.img
                src={data}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default ImageGrid;
