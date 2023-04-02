import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../widgets/Container";
import Loading from "../widgets/Loading";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (document.readyState !== "complete") {
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } else {
      return () => clearInterval();
    }
  }, [navigate]);

  return (
    <Container>
      <div className="flex flex-col h-2/5 items-center justify-end">
        <p className="font-bold text-7xl mb-4">Welcome</p>
        <div className="bg-light px-8 py-2 rounded-full">
          <i className="text-2xl">KIR Sense</i>
        </div>
      </div>
      <div className="h-1/2" />
      <div className="flex flex-col h-2/5 items-center justify-start">
        <img src={require("../assets/images/logo.png")} alt="logo" width={138} />
        <i className="text-xl">Transport Vehicle Feasibility Inspection</i>
      </div>
      <Loading />
    </Container>
  );
};

export default Welcome;
