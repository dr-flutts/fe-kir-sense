import axios from "axios";
import { createRef, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { menuIcons, servicePath } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";

const KirCamera = () => {

  const [result, setResult] = useState({
    nama: "",
    plat: "",
    tahun: 0,
    kondisi: "",
  });
  const [showPopUp, setShowPopUp] = useState(false);

  const webcamRef = useRef(null);
  const fileInputRef = createRef();



  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    await axios.post(`${servicePath}/capture`, { img: imageSrc }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        setResult(res.data);
        setShowPopUp(true);
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
      setResult(res.data);
      setShowPopUp(true);
    });
  };


  return (
    <Container>
      <Header label="Buka Kamera" menu={menuIcons.CAMERA} showBackButton />
      <Container className="bg-light items-center justify-center p-6 h-[80%] overflow-y-auto">
        <Container className={`${showPopUp ? "" : "hidden"} bg-secondary rounded-xl flex items-center justify-center gap-4`}>
          <Container className="h-80 w-2/4 bg-primary rounded-xl flex items-center justify-evenly relative">
            <div className="flex flex-row items-center justify-center py-14 w-2/5 bg-secondary rounded-xl relative">
              <Container className="ml-32 w-44 h-[55%] text-lg font-bold text-primary">
                <h4>NAMA</h4>
                <h4>PLAT</h4>
                <h4>TAHUN</h4>
              </Container>
              <Container className="mr-4 h-[55%] text-lg font-bold text-primary">
                <h4>{!result.nama ? "NULL" : result.nama.toUpperCase()}</h4>
                <h4>{result.plat.toUpperCase()}</h4>
                <h4>{!result.tahun ? "NULL" : result.tahun}</h4>
              </Container>
              <img src={require(`../../assets/images/${result.kondisi === "Kir aktif" ? "checklist.png" : result.kondisi === "Kir tidak aktif" ? "remove.png" : "question.png"}`)} alt="" style={{ width: "3rem", position: "absolute", bottom: "-15%" }} />
            </div>
            <h1 className="text-3xl font-bold text-secondary px-6 py-2 border-4 border-secondary-600 rounded-full">{result.kondisi.toUpperCase()}</h1>
            <img src={require("../../assets/images/arrow.png")} className="hover:opacity-70" alt="" style={{ position: "absolute", top: "0", right: "0", margin: "1rem", cursor: "pointer" }} onClick={() => setShowPopUp(false)} />
          </Container>
        </Container>
        <Container className={`${showPopUp ? "hidden" : ""} bg-secondary rounded-xl items-center justify-end`}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="bg-light rounded-full mb-6 h-10" style={{ display: "flex", position: "absolute", gap: "1.5rem" }}>
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
        </Container>
      </Container>
    </Container>
  );
};

export default KirCamera;
