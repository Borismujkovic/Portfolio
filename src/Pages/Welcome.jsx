import profile from "../Assets/image.jpg";

import "./Welcome.css";

export const Welcome = () => {
  return (
    <div id="Welcome">
      <div>
        <div className="profileData">
          <div className="name">
            <h1>BORIS MUJKOVIC</h1>
            <h2>Front-End Developer</h2>
            <h3>Phone : +381 63 393 070</h3>
            <h3>Email : borismujkovic@gmail.com</h3>
            <h3>Address : Karadjordjeva 2, Pancevo, Serbia</h3>
            <div className="profile">
              <a
                href="https://www.linkedin.com/in/boris-mujkovic-897949172/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://freesvg.org/storage/img/thumb/linkedin.png"
                  alt=""
                />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/Borismujkovic"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://icon-library.com/images/github-svg-icon/github-svg-icon-3.jpg"
                  alt=""
                />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          <div className="profile-img">
            <img src={profile} />
          </div>
        </div>
        <p className="about">
          "I am a highly-motivated web developer looking for entry-level
          positions in the IT industry. Creative problem-solver eager for new
          challenges and learning opportunities. I am a hard working team player
          with a friendly personality and I am looking forward to meeting new
          people I can learn from and develop my skills."
        </p>
        <div className="skills">
          <div>
            <h2>IT Skills:</h2>
            <ul className="itSkils">
              <li>ReactJS</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>TypeScript(In progress)</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>SASS</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="education">
            <h2>Education:</h2>
            <ul className="school">
              <h3>Belgrade Institute of Technology (BIT) </h3>
              <li>
                Attended a 10 week long (400 hours) bootcamp for front-end web
                development. During the bootcamp we had 9 hours of lectures and
                practical work every day with additional tasks and projects.
              </li>
              <h3>University of Belgrade, Faculty of Agriculture </h3>
              <li>Major: Agroeconomics</li>
            </ul>
            <h2>Languages:</h2>
            <ul className="languages">
              <li>Serbian ( Native )</li>
              <li>English ( Advanced Level )</li>
              <li>German ( Beginner Level )</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
