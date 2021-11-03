import React, { useState } from "react";
import { motion } from "framer-motion";
import {collection , addDoc} from 'firebase/firestore';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
const OfflineUploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [img, setImg] = useState();
  const [finalImg, setFinalImg] = useState('');
  const [offImg, setOffImg]=useState([])
  const types = ["image/png", "image/jpeg"];
  const offlineStorage = projectFirestore.collection('offlineimages')
  React.useEffect(() => {
    const storedImg = localStorage.getItem("storedImg")
      ? JSON.parse(localStorage.getItem("storedImg"))
      : [];

    if (img) {
      storedImg.push(img);
      localStorage.setItem("storedImg", JSON.stringify(storedImg));
    }

    setFinalImg(storedImg);
  }, [img]);

  // console.log("img", img);
  const onImageUpload = async (e) => {
    const selected = e.target.files[0];
    const base64 = await convertBase64(selected);
    setImg(base64);
  };
  var storeImage = {}
  const onUpload = async (e)=>{
    e.preventDefault();
    for (var index = 0; index < finalImg.length; index++) {
      console.log(finalImg[index]);
      
       
  }
  await projectFirestore.addDoc(offlineStorage,{offImg:finalImg[index]})
  }
  

  const convertBase64 = (selected) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(selected);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // var ConvertedImage = new Image();
  // ConvertedImage.src = finalImg[0];
  // document.body.appendChild(ConvertedImage);

  return (<div>
   
    <form>
      <h3>offline mode</h3>
      <label>
        <input type="file" onChange={onImageUpload} />
        <span>+</span>
      </label>
      <button onClick={onUpload}>upload</button>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {/* {file && <OfflineProgressBar file={finalImg} setFile={setFinalImg} />} */}

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
        {/* <img src={ConvertedImage}/> */}

        {/* {finalImg.map(({finalImg, index}) => (
      <img key={index} src={finalImg}/>
    ))} */}
      </div>
    </form>
    </div>
  );
};

export default OfflineUploadForm;
