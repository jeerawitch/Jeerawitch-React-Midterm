import "./Homepage.css";
import Phone from "../assets/phone.svg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

const Homepage = () => {
  return (
    <section className="main">
      <div className="main-center">
        <div className="main-title">
          <h1>Jeerawitch</h1>
          <h3>จีระวิชทย์ ตรีสุคนธ์ รหัสนักศึกษา 6301993</h3>
          <hr />
          <div className="information">
            <h4>Firstname :</h4>
            <p>Jeerawitch</p>
          </div>
          <div className="information">
            <h4>Lastname :</h4>
            <p>Treesukoun</p>
          </div>
          <div className="information">
            <h4>Nickname : </h4>
            <p>Jeeno</p>
          </div>
          <div className="information">
            <h4>Age : </h4>
            <p>21 year</p>
          </div>
          <div className="skill">
            <img src={html} alt="html.png" className="html-logo" />
            <img src={css} alt="css.png" className="css-logo" />
            <img src={js} alt="js.png" className="js-logo" />
            <img src={react} alt="react.png" className="react-logo" />
          </div>
        </div>
        <div className="img-container">
          <img src={Phone} alt="Phone" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Homepage;
