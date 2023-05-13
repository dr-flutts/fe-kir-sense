import { menuIcons } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";

export default function Instruction() {
  return (
    <Container>
      <Header label="Petunjuk" menu={menuIcons.INFO} showBackButton />
      <Container style={{ flexDirection: "row" }} className="flex-wrap overflow-y-auto">
        <Container className="md:w-1/2 lg:w-1/3 p-2">
          <Container className="bg-secondary p-4 rounded-xl">
            <div className="bg-primary rounded-full text-center p-2">
              Deteksi Masa Uji Kir Menggunakan Kamera Vision
            </div>
            <p className="pt-4 text-[black]">
              {/* ISI TULIS DISINI */}
            </p>
          </Container>
        </Container>
        <Container className="md:w-1/2 lg:w-1/3 p-2">
          <Container className="bg-secondary p-4 rounded-xl">
            <div className="bg-primary rounded-full text-center p-2">
              Cara Menggunakan KIR Sense
            </div>
            <p className="pt-4 text-[black]">
              {/* ISI TULIS DISINI */}
            </p>
          </Container>
        </Container>
        <Container className="md:w-1/2 lg:w-1/3 p-2">
          <Container className="bg-secondary p-4 rounded-xl">
            <div className="bg-primary rounded-full text-center p-2">
              Tentang KIR sense
            </div>
            <p className="pt-4 text-[black]">
              {/* ISI TULIS DISINI */}
            </p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
