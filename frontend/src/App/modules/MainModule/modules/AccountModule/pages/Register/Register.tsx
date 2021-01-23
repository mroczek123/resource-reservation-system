import * as React from "react";
import { Link } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";

export function Register(): JSX.Element {
  return (
  <div style={{ minHeight: "100vh" }}>
      <div className="valign-wrapper" style={{ height: "100%" }}>
        <div className="container">
          <div className="card z-depth-2" style={{ padding: "60px" }}>
            <div className="row">
              <Link to="/"> &lt; Go back to home site</Link>
            </div>
            <div className="row center-align">
              <img
                className="responsive-img"
                style={{ height: "150px" }}
                src="static/img/avatar.png"
              />
              <h3>Register</h3>
              <div className="col s3" />
              <div className="col s6">
                <RegisterForm />
              </div>
              <div className="col s3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
