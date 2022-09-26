import React, { Component } from "react";
import "./HomePage.scss";
// import profile from '../../Assets/profile.jpg'

export const HomePage = () => {
  // const pic = profile

  return (
    <div id="HomePage">
      <header>
        <div className="profileData">
          <div className="name">
            <h1>BORIS MUJKOVIC</h1>
            <h2>Front-End Developer</h2>
          </div>
          <div>
            <h3>Phone : +381 63 393 070</h3>
            <h3>Email : borismujkovic@gmail.com</h3>
            <h3>Address : Karadjordjeva 2, Pancevo, Serbia</h3>
          </div>
        </div>
        <div className="profile-img">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGvXvZS0uDCBQ/profile-displayphoto-shrink_200_200/0/1580835758462?e=1665619200&v=beta&t=P5bOsj9JAUFLsyy4BR8HSRBMA3bjlftAi7JjvJsoi5M"
            alt=""
          />
        </div>
      </header>
      <main>
        <p>
          "I am a highly-motivated web developer looking for entry-level
          positions in the IT industry. Creative problem-solver eager for new
          challenges and learning opportunities. I am a hard working team player
          with a friendly personality and I am looking forward to meeting new
          people I can learn from and develop my skills."
        </p>

        <div className="projects">
          <div className="description">
            <h2>HR-LAB</h2>
            <p>
              A simple App for HRs from certain companies, written in React.js,
              as a final project in the Front-End Boot camp at the Belgrade
              Institute of Technology.
            </p>
            <button>
              <a href="https://github.com/Borismujkovic/HR-lab" target="_blank">
                See project
              </a>
            </button>
          </div>
          <div>
            <img
              src="https://iconape.com/wp-content/files/qa/334838/png/334838.png"
              alt=""
            />
          </div>
        </div>
        <div className="projects">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/273/542/original/online-food-order-concept-vector.jpg"
              alt=""
            />
          </div>
          <div className="description">
            <h2>FoodOrderApp</h2>
            <p>
              An application that serves for ordering food, written in
              React.js, as one of the practices for developing my skills.
            </p>
            <button>
              <a href="https://food-order-app-pied-five.vercel.app/" target="_blank">
                See project
              </a>
            </button>
          </div>
        </div>
        <div className="projects">
          <div className="description">
            <h2>BIT Show in React.js</h2>
            <p>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in React.js as one of the practices during the
              Front-End Boot camp at the Belgrade Institute of Technology.
            </p>
            <button>
              <a href="https://top-tvs-how-react.vercel.app/" target="_blank">
                See project
              </a>
            </button>
          </div>
          <div>
            <img
              src="https://freesvg.org/storage/img/thumb/1291143713.png"
              alt=""
            />
          </div>
        </div>
        <div className="projects">
          <div>
            <img
              src="https://freesvg.org/storage/img/thumb/1291143713.png"
              alt=""
            />
          </div>
          <div className="description">
            <h2>BIT Show in JavaScript</h2>
            <p>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in JavaScript, as one of the practices during the
              Front-End Boot camp at the Belgrade Institute of Technology.
            </p>
            <button>
              <a href="https://bit-show-js.vercel.app/" target="_blank">
                See project
              </a>
            </button>
          </div>
        </div>
        <div className="projects">
          <div className="description">
            <h2>LBS-intern in React.js</h2>
            <p>
              An application that shows all the employees of one company with the form to add new employees, written in React.js.
            </p>
            <button>
              <a href="https://lbs-intern.vercel.app/" target="_blank">
                See project
              </a>
            </button>
          </div>
          <div>
            <img
              src="https://assets.nst.com.my/images/articles/lbs16_1655366669.jpg"
              alt=""
            />
          </div>
        </div>
      </main>

      <footer>
        <div className="profile">
          <img
            src="https://freesvg.org/storage/img/thumb/linkedin.png"
            alt=""
          />
          <a
            href="https://www.linkedin.com/in/boris-mujkovic-897949172/"
            target="_blank"
          >
            linkedin.com/in/boris-mujkovic-897949172
          </a>
        </div>
        <div className="profile">
          <img
            src="https://icon-library.com/images/github-svg-icon/github-svg-icon-3.jpg"
            alt=""
          />
          <a href="https://github.com/Borismujkovic">
            https://github.com/Borismujkovic
          </a>
        </div>
        
      </footer>
    </div>
  );
};
