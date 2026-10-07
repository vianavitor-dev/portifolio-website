import {} from "react";

interface ProjectCard {
  header: string;
  imagesUrl: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
}

function Projects() {
  //
  const projectCards: ProjectCard[] = [
    {
      header: "Project #1",
      imagesUrl: "https://placehold.co/400x250",
      shortDescription:
        "This project aims to make a better world by providing a \
                way to remove the PT from Brazil, and stuff like that",
      fullDescription: "This is the full description of Project #1",
      technologies: ["Java"],
    },
    {
      header: "Project #2",
      imagesUrl: "https://placehold.co/400x250",
      shortDescription:
        "This project aims to make a better world by providing a \
                way to remove the PT from Brazil, and stuff like that",
      fullDescription: "This is the full description of Project #2",
      technologies: ["Java", "HTML", "CSS", "Javascript"],
    },
    {
      header: "Project #3",
      imagesUrl: "https://placehold.co/400x250",
      shortDescription:
        "This project aims to make a better world by providing a \
                way to remove the PT from Brazil, and stuff like that",
      fullDescription: "This is the full description of Project #1",
      technologies: [
        "Java",
        "JUnit",
        "Spring",
        "Spring Security",
        "Docker",
        "MySQL",
        "HMTL",
        "CSS",
        "Javascript",
        "Redis",
      ],
    },
  ];

  return (
    <>
      <div className="main-container-content" id="my-projects-container">
        <div id="my-projects">
          <h2 className="sub-title">| More projects coming soon!</h2>
          <h1 className="title">My Projects</h1>

          <div className="card-container">
            <div className="card-rail">

              {projectCards.map(({header, shortDescription, imagesUrl, technologies}, index) => (
                <div className="card" key={header}>
                  <img
                    loading="lazy"
                    src={imagesUrl}
                    width={400}
                    height={250}
                    alt={"First page of the " + header}
                  />

                  <h3 className="title">{header}</h3>
                  <div className="body">
                    <p>{shortDescription}</p>

                    {technologies.map((item) => 
                        <span key={index + "#" + item}>#{item} </span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
