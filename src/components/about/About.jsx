import "./about.css";
import UW from "../../img/Uw.png";
import Nino from "../../img/ninoWebsiteImage.jpg";
import Code from "../../img/code.png";
import Data from "../../img/data.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Nino}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I enjoy learning new technologies and building software products end to end including frontend, backend and infrastructure. 
          I am a recent graduate from University of Waterloo where I studied Management Engineering, a unique program that is a hybrid of software and industrial engineering. 
        </p>
        <p className="a-desc">
          In my free time I enjoy playing basketball, soccer and tennis. As well as play guitar and read comic books.
        </p>
        <div className="a-award">
          <img src={Code} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Languages & Frameworks</h4>
            <p className="a-award-desc">
              Languages: Java / Python / JavaScript / PHP / SQL 
            </p>
            <p className="a-award-desc">
              Frameworks: Node / React / Express / .NET
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={Data} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Data</h4>
            <p className="a-award-desc">
              ML & Data Engineering: Pandas / NumPy / PyTorch / Scikit-learn 
            </p>
            <p className="a-award-desc">
              Data: MySQL / Spark / MongoDB / MS SQL
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={UW} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">University of Waterloo, 2017-2022</h4>
            <p className="a-award-desc">
              Bachelor of Science in Management Engineering with Computing Option
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;