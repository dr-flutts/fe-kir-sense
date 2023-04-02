import BackButton from "./BackButton";

const Header = ({ label = "", showBackButton = false, menu }) => {
  return (
    <div className="flex justify-between items-center mb-12">
      <div className="flex items-center gap-10">
        <div className={`flex items-center ${menu !== undefined ? "bg-light" : ""} rounded-full px-5 py-4 gap-3`}>
          {menu !== undefined && (
            <img src={menu} alt="menu" width={36} />
          )}
          <p className={`font-light text-3xl ${menu === undefined ? "font-semibold" : ""}`}>{label}</p>
        </div>
        {showBackButton && (
          <BackButton />
        )}
      </div>
      <div className="flex items-center gap-4">
        <img src={require("../assets/images/logo.png")} alt="logo" width={86} />
        <div>
          <i>Transport Vehicle</i>
          <br />
          <i>Feasibility Inspection</i>
        </div>
      </div>
    </div>
  );
};

export default Header;
