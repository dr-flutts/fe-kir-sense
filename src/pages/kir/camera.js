import axios from "axios";
import { createRef, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import 'reactjs-popup/dist/index.css';
import { servicePath } from "../../helpers/defaultValues";

export const OcrCamera = () => {
  const webcamRef = useRef(null);
  const fileInputRef = createRef();

  

  const capture = useCallback(async () => {
    
    const imageSrc = webcamRef.current.getScreenshot();

    await axios.post(`${servicePath}/capture`, { img: imageSrc }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        console.log(res.data);
        const camWidget = document.getElementById("cam");
        camWidget.style.display = "none";

        const popUpWidget = document.getElementById("popup");
        popUpWidget.style.display = "flex";

        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [webcamRef]);


  const upload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return await axios.post(`${servicePath}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
    });
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="bg-light rounded-full mb-6 h-10" style={{ display: "flex", position: "absolute",  gap: "1.5rem" }}>
        <button onClick={capture} className="rounded-full px-4 py-2 hover:backdrop-brightness-200">
          Capture
        </button>
        <button onClick={() => fileInputRef.current.click()} className="rounded-full px-4 py-2 hover:backdrop-brightness-200">
          Upload
          <form encType="multipart/form-data">
            <input ref={fileInputRef} type='file' hidden name='filename'
              onChange={(x) => { upload(x.target.files[0]) }}
              accept="image/*"
            />
          </form>
        </button>
      </div>
    </>
  );
};
