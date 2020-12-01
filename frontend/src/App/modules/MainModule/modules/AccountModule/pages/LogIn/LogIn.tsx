import ParentRouteProp from "@src/App/shared/types/ParentRouteProp";

import * as React from "react";
import { useHistory } from "react-router-dom";
import LogInForm from "./components/LogInForm";

function LogIn(props: ParentRouteProp): JSX.Element {
  const history = useHistory();
  const afterLogin = () => {
    history.push(`/app/dashboard`);
  };
  return (
    <div style={{ height: "100vh" }}>
      <div className="valign-wrapper" style={{ height: "100%" }}>
        <div className="container">
          <div className="card z-depth-2" style={{padding: "60px"}}>
            <div className="row center-align">
              <img
                className="responsive-img"
                style={{ height: "150px" }}
                src="static/img/avatar.png"
              />
              <h3>Log in</h3>
              <div className="col s3" />
              <div className="col s6">
                <LogInForm successCallback={afterLogin} />
              </div>
              <div className="col s3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
