import axios from "axios";
import { createRef, useCallback, useRef, useState } from "react";
import { servicePath } from "../../helpers/defaultValues";
import Webcam from "react-webcam";

export const OcrCamera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [textOcr, setTextOcr] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = createRef();

  const capture = useCallback(async () => {
    setLoading(true);
    const imageSrc = webcamRef.current.getScreenshot();

    await axios.post(`${servicePath}/capture`, { img: imageSrc }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        console.log(res.data);
        setTextOcr(res.data.text);
        setImgSrc(imageSrc);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [webcamRef, setImgSrc]);


  const upload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    return await axios.post(`${servicePath}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
      setTextOcr(res.data.text);
      setImgSrc(res.data.image);
      setLoading(false);
    });
  };

  return (
    <>
      <div style={{ width: "50%" }} key={0}>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          hidden={true}
        />
        <div>
          <button onClick={capture}>
            Capture
          </button>

          <button onClick={() => fileInputRef.current.click()}>
            Upload
            <form encType="multipart/form-data">
              <input ref={fileInputRef} type='file' hidden name='filename'
                onChange={(x) => { upload(x.target.files[0]) }}
                accept="image/*"
              />
            </form>
          </button>
        </div>
      </div>
    </>
  );
};
