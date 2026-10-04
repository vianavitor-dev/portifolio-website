import { useState } from "react";
import "./App.css";

function App() {
  const [cmdText, setCmdText] = useState("");

  const [cmdList, setCmdList] = useState([
    { isCommand: true, text: "about_me" },
  ]);

  interface CommandInterface {
    isCommand: boolean; 
    text: string
  }

  const handleCmdListChange = (cmdArgs: {isCommand: boolean}) => {
    const cmd = {isCommand: cmdArgs.isCommand, text: cmdText};

    setCmdList([...cmdList, cmd])
  }

  const createCmd = ({isCommand, text}: CommandInterface) => {
    return isCommand ? (
      <div className="line">
        <span className="user-at-machine">guest@portfolio:</span>
        <span className="user-at-machine-symbol">~$</span>
        <span className="command">{text}</span>
      </div>
    ) : (
      <div className="line">
        <span className="response successful">Page loaded successfuly! </span>
      </div>
    );
  }

  return (
    <>
      <div id="main-container">
        <div className="main-container-content" id="terminal">
          {
            // generate commands
            cmdList.map((item) => createCmd(item))
          }

          <div className="line current">
            <span className="user-at-machine">guest@portfolio:~$</span>
            <span className="command">{cmdText}</span>
          </div>
        </div>

        <div className="main-container-content" id="about-me-container">
          <div id="about-me">
            <p id="greetings">Welcome to my portfolio!</p>

            <h1 className="title">
              I'm Vitor an <span id="my-job">Software Developer</span>
            </h1>

            <p>
              Since I've started learning programming I always found myself
              doing personal projects to improve my skills, and this have been
              of great help! searching for altenative methods, learning and
              including technologies that would enchance the project, attemping
              to make my code efficient, all of are part of my core toughts when
              codding.
            </p>
            <p>
              On this portfolio I wraped up some relevant projects that could
              learn with while building them alongside the technologies used and
              skills learned in this process.
            </p>
          </div>

          <div id="my-contacts">
            <span
              onPointerOver={() => setCmdText("cd send-email")}
              onClick={() => handleCmdListChange({isCommand: true}) }
              onPointerOut={() => setCmdText("")}
            >
              <a href="https://mail.google.com/mail?view=cm&fs=1&to=vianvitor232@gmail.com">
                Email
              </a>
            </span>

            <span
              onPointerOver={() => setCmdText("cd linkedin-profile")}
              onClick={() => handleCmdListChange({isCommand: true}) }
              onPointerOut={() => setCmdText("")}
            >
              <a href="https://www.linkedin.com/in/vitor-hugo-marques-viana">
                LinkedIn
              </a>
            </span>

            <span
              onPointerOver={() => setCmdText("cd github-profile")}
              onClick={() => handleCmdListChange({isCommand: true}) }
              onPointerOut={() => setCmdText("")}
            >
              <a href="https://github.com/vianavitor-dev">
                Github
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
