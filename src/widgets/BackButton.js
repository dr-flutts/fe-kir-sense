import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div role="button" className="bg-light rounded-full px-5 py-2 hover:opacity-70" onClick={() => navigate(-1)}>
      <img alt="back" src={require("../assets/images/back.png")} width={28} />
    </div>
  );
};

export default BackButton;
