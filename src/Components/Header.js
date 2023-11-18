import "./Header.css";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logoimage" />
      <h2>
        Web<span>Developer</span>
      </h2>
    </div>
  );
};

export default Header;
