import Webcam from "react-webcam";
import { menus } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";

const KirCamera = () => {
  return (
    <Container>
      <Header label="Buka Kamera" menu={menus.CAMERA} showBackButton />
      <Container className="bg-light items-center justify-center p-6 h-[83%]">
        <Container className="bg-secondary rounded-xl flex items-center justify-center">
          <Webcam className="w-full h-full object-cover rounded-xl" />
        </Container>
      </Container>
    </Container>
  );
};

export default KirCamera;
