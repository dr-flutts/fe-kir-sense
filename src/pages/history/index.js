import { menuIcons } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";
import { histories } from "../../api/dummy";
import { useEffect } from "react";

const KirCamera = () => {
  useEffect(() => {
    console.log(histories);
  }, []);

  return (
    <Container>
      <Header label="History Pengujian" menu={menuIcons.HISTORY} showBackButton />
      <Container className="bg-secondary rounded-xl">
        <Container className="p-6 pt-0 text-black">
          <div className="flex justify-end w-full p-6 border-b-2 border-primary">
            <input placeholder="cari" className="text-black" />
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default KirCamera;
