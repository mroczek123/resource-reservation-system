import * as React from "react";
import { RegisterForm } from "./components/RegisterForm";

export function Register(): JSX.Element {
  return (
    <div style={{ height: "100vh" }}>
      <div className="valign-wrapper" style={{ height: "100vh" }}>
        <div className="container">
          <div className="card" style={{width: "500px"}}>
            <div className="row">
              <h3 className="center">Register</h3>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
