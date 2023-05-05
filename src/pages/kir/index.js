import Webcam from "react-webcam";
import { menuIcons } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";
import { OcrCamera } from "./camera";

const KirCamera = () => {
  return (
    <Container>
      <Header label="Buka Kamera" menu={menuIcons.CAMERA} showBackButton />
      <Container className="bg-light items-center justify-center p-6">
        <Container className="bg-secondary rounded-xl flex items-center justify-center">
          <OcrCamera />
        </Container>
      </Container>
    </Container>
  );
};

export default KirCamera;
