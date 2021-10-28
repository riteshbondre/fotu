import React, { useState ,useEffect} from 'react';
import ProgressBar from './ProgressBar';
import imageToBase64 from 'image-to-base64';
const UploadForm = () => {
  const [img, setImg] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const onImageUpload = (e) => {
    // console.log(e.target.files)
    let selected = e.target.files[0];

  imageToBase64(e.target.files[0]) // Path to the image
    .then(
        (response) => {
            console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )

  };
 
  return (
    <form>
      <label>
        <input type="file" onChange={onImageUpload} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { img && <div>{ img.name }</div> }
        { img && <ProgressBar file={img} setFile={setImg} /> }
      </div>
    </form>
  );
}

export default UploadForm;