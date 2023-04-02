import { Link } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="flex flex-col bg-light rounded-full py-12 px-2">
        <Link to="/camera">
          <img src={require("../assets/images/camera.png")} alt="camera" className="mx-2 my-8 hover:bg-black" width={36} />
        </Link>
        <Link to="/info">
          <img src={require("../assets/images/info.png")} alt="info" className="mx-2 my-8 hover:bg-black" width={36} />
        </Link>
        <Link to="/history">
          <img src={require("../assets/images/clock.png")} alt="clock" className="mx-2 my-8 hover:bg-black" width={36} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Main;
