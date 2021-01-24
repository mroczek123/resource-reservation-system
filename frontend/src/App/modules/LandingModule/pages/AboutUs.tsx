import * as React from "react";

export function AboutUs(props: unknown): JSX.Element {
  const authors = [
    {
      name: "Patryk Kirszenstein",
      title: "Backend",
      imgSrc: "static/img/pkirszenstein.jfif",
      description: "Organised project and made backend working",
    },
    {
      name: "Maciej Kulesza",
      title: "Frontend",
      imgSrc: "static/img/mkulesza.jfif",
      description: "Made frontend lookin damn beatiful (at least by lazy student standards)",
    },
    {
      name: "Darek Gawęda",
      title: "Backend",
      imgSrc: "static/img/dgaweda.jpg",
      description: "Did great job on backend work.",
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <div className="container center-align">
        <div className="row">
          <h2>Team</h2>
        </div>
        <div className="row">
          {authors.map((author) => (
            <div className="col m12 l4">
              <div className="z-depth-2 hoverable" style={{ height: "600px" }}>
                <div style={{padding: "50px"}}>
                  <img
                    src={author.imgSrc}
                    className="circle responsive-img"
                    style={{ height: "150px" }}
                  />
                  <div className="container center">
                    <h3>{author.name}</h3>
                    <h4>{author.title}</h4>
                    {author.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

