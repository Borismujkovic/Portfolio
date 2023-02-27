import "./Products.css";

import HRLab from "../Assets/HRLab.png";
import FoodOrder from "../Assets/FoodOrder.png";
import IMDBJS from "../Assets/IMDBJS.png";
import IMDBReact from "../Assets/IMDBReact.png";
import LBS from "../Assets/LBS.png";
import JSProjects from "../Assets/JSProjects.png";

export const Products = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div className="projects">
        <a
          className="projectLink"
          href="https://github.com/Borismujkovic/HR-lab"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img className="projectImg" src={HRLab} alt="FoodOrderApp" />
          </div>
          <div className="description">
            <h2>HR-LAB</h2>
            <p>
              A simple App for HRs from certain companies, written in React.js,
              as a final project in the Front-End Boot camp at the Belgrade
              Institute of Technology.
            </p>
            <button>See project</button>
          </div>
        </a>
        <a
          className="projectLink"
          href="https://food-order-react-rho.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img className="projectImg" src={FoodOrder} alt="FoodOrderApp" />
          </div>
          <div className="description">
            <h2>FoodOrderApp</h2>
            <p>
              An application that serves for ordering food, written in React.js,
              as one of the practices for developing my skills.
            </p>
            <button>See project</button>
          </div>
        </a>
        <a
          className="projectLink"
          href="https://js-projects-28tq0xewx-borismujkovic.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img className="projectImg" src={JSProjects} alt="FoodOrderApp" />
          </div>
          <div className="description">
            <h2>Small JS Projects in JavaScript</h2>
            <p>
              An application that contains three small JS apps, written in
              JavaScript.
            </p>
            <button>See project</button>
          </div>
        </a>
        <a
          className="projectLink"
          href="https://top-tvs-how-react.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img className="projectImg" src={IMDBReact} alt="FoodOrderApp" />
          </div>
          <div className="description">
            <h2>BIT Show in React.js</h2>
            <p>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in React.js.
            </p>
            <button>See project</button>
          </div>
        </a>
        <a
          className="projectLink"
          href="https://bit-show-js.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img className="projectImg" src={IMDBJS} alt="FoodOrderApp" />
          </div>
          <div className="description">
            <h2>BIT Show in JavaScript</h2>
            <p>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in JavaScript.
            </p>
            <button>See project</button>
          </div>
        </a>
        <a
          className="projectLink"
          href="https://lbs-intern.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <img className="projectImg" src={LBS} alt="FoodOrderApp" />
          </div>
          <div className="description">
            <h2>LBS-intern in React.js</h2>
            <p>
              An application that shows all the employees of one company with
              the form to add new employees, written in React.js.
            </p>
            <button>See project</button>
          </div>
        </a>
      </div>
    </section>
  );
};
