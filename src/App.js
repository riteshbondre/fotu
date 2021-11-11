import React, { useState } from "react";
import Title from "./comps/Title";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import OnlineMode from "./comps/onlineModeButton";
import OfflineMode from "./comps/offlineModeButton";
import OfflineUploadForm from "./comps/offlineUploadForm";
import { base64StringToBlob } from "blob-util";
import { projectStorage, projectFirestore, timestamp } from "./firebase/config";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [finalImg, setFinalImg] = useState("");
  const [url, setUrl] = useState(null);
  const offlineStorage = projectFirestore.collection("images");
  const storageRef = projectStorage.ref("blob" + Math.floor(Date.now() / 1000));

  // console.log(finalImg)
  var connected = navigator.onLine;
  // var blob = {};

  // const storedImg = localStorage.getItem("storedImg")
  //   ? JSON.parse(localStorage.getItem("storedImg"))
  //   : [];

  // React.useEffect(() => {
  //   // Runs after the first render() lifecycle
  //   if (storedImg && connected) {
  //     // setFinalImg(storedImg);
  //     for (var index = 0; index < storedImg.length; index++) {
  //       const trimmedBaseString = storedImg[index].split(",").pop();
  
  //       blob = base64StringToBlob(trimmedBaseString, "image/jpeg");
  //       // console.log(blob);
  
  //       if (blob == null) return;
  //       storageRef.put(blob).then(
  //         // "state_changed",
  //         (snap) => {
  //           //   let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
  //           //   setProgress(percentage);
  //           //   console.log(percentage);
  //           // },
  //           // (err) => {
  //           //   setError(err);
  //           // },
  //           // async () => {
  //           storageRef.getDownloadURL().then((url) => {
  //             const createdAt = timestamp();
  //             offlineStorage.add({ url, createdAt });
  //             setUrl(url);
  //           });
  //         }
  //       );
  //     }
  //     localStorage.removeItem("storedImg");
  //   } else {
  //   }
  // }, []);

  
 

  

  return (
    <div className="App">
      <Title />
      {connected && (
        <div>
          <OnlineMode />
        </div>
      )}
      {!connected && (
        <div>
          <OfflineUploadForm
            setFinalImg={setFinalImg}
            setUrl={setUrl}
            finalImg={finalImg}
            setSelectedImg={setSelectedImg}
          />
        </div>
      )}
      <ImageGrid setSelectedImg={setSelectedImg} />

      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
