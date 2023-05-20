import { Link } from "react-router-dom";
import { menuIcons } from "../helpers/defaultValues";

const Main = ({ children }) => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="flex flex-col bg-light rounded-full py-12 px-2">
        <Link to="/camera">
          <img src={menuIcons.CAMERA} alt="camera" className="mx-2 my-8 hover:opacity-60" width={36} />
        </Link>
        <Link to="/info">
          <img src={menuIcons.INFO} alt="info" className="mx-2 my-8 hover:opacity-60" width={36} />
        </Link>
        <Link to="/history">
          <img src={menuIcons.HISTORY} alt="clock" className="mx-2 my-8 hover:opacity-60" width={36} />
        </Link>
        <Link to="/data">
          <img src={menuIcons.DATA} alt="data" className="mx-2 my-8 hover:opacity-60" width={36} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Main;
