import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import hrlab from "../../Assets/HRLab.png";
import FoodOrder from "../../Assets/FoodOrder.png";
import IMDBReact from "../../Assets/IMDBReact.png";
import IMDBJS from "../../Assets/IMDBJS.png";
import JSProjects from "../../Assets/JSProjects.png";
import orderPage from "../../Assets/OrderPage.PNG";
import crudApp from "../../Assets/CRUDApp.png";

import "./Projects.scss";

export const Projects = () => {
  return (
    <Element name="projects">
      <div id="Projects">
        <h1>PROJECTS</h1>
        <div className="singleProject">
          <div className="description">
            <h2>CRUD App</h2>
            <h3>
              CRUD App made using React, Redux Toolkit and Typescript. 
            </h3>
            <div>
              <button>
                <a
                  href="https://crud-app-eosin-iota.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/CRUD-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={crudApp} alt="" />
          </div>
        </div>
        <div className="singleProject">
          <div className="project-img">
            <img className="project-logo" src={orderPage} alt="" />
          </div>
          <div className="description">
            <h2>Order Page</h2>
            <h3>
              Order page created in ReactJS as a part of a project which will
              apply for European Union funds.
            </h3>
            <div>
              <button>
                <a
                  href="https://order-page-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="singleProject">
          <div className="description">
            <h2>HR-LAB</h2>
            <h3>
              A simple App for HRs from certain companies, written in React.js,
              as a final project in the Front-End Boot camp at the Belgrade
              Institute of Technology.
            </h3>
            <div>
              <button>
                <a
                  href="https://github.com/Borismujkovic/HR-lab"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/HR-lab"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={hrlab} alt="" />
          </div>
        </div>
        <div className="singleProject">
          <div className="project-img">
            <img className="project-logo" src={FoodOrder} alt="" />
          </div>
          <div className="description">
            <h2>FoodOrder App</h2>
            <h3>
              An application that serves for ordering food, written in React.js,
              as one of the practices for developing my skills.
            </h3>
            <div>
              <button>
                <a
                  href="https://food-order-react-rho.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/FoodOrderReact"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="singleProject">
          <div className="description">
            <h2>BIT Show in React.js</h2>
            <h3>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in React.js.
            </h3>
            <div>
              <button>
                <a
                  href="https://top-tvs-how-react.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/TopTVShow-React"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={IMDBReact} alt="" />
          </div>
        </div>
        <div className="singleProject">
          <div className="project-img">
            <img className="project-logo" src={IMDBJS} alt="" />
          </div>
          <div className="description">
            <h2>BIT Show in JavaScript</h2>
            <h3>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in JavaScript.
            </h3>
            <div>
              <button>
                <a
                  href="https://bit-show-js.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/TopTVShow-JS"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="singleProject">
          <div className="description">
            <h2>Small JS Projects in JavaScript</h2>
            <h3>
              An application that contains three small JS apps, written in
              JavaScript.
            </h3>
            <div>
              <button>
                <a
                  href="https://js-projects-28tq0xewx-borismujkovic.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/JSProjects"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={JSProjects} alt="" />
          </div>
        </div>
      </div>
    </Element>
  );
};
