import Parallax from "@src/App/shared/modules/Materialize/components/Parallax";
import * as React from "react";

function HomePage(): JSX.Element {
  return (
    <>
      <Parallax>
        <img src="static/img/restaurant1.jpg"></img>
      </Parallax>
      <div>
        <div className="container" style={{minHeight: "500px"}}>
          Najnowocześniejszy system do zarządzania restauracją
        </div>
      </div>
      <Parallax>
        <img src="static/img/restaurant2.jpg"></img>
      </Parallax>
    </>
  );
}

export default HomePage;
