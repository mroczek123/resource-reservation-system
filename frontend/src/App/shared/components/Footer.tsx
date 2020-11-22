import * as React from "react";
import { connect } from "../modules/Store/Store";
import StateProps from "../modules/Store/types/StateProps";

function Footer(props: StateProps) {
  return (
    <footer className={`${props.state.theme} page-footer`} style={{ minHeight: "100px" }}>
      <div className="container">
        <div className="footer-copyright">
          <div className="container">
            © 2020 All rights belong to Maciej Kulesza, Patryk Kirszenstein, Darek Gawęda.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default connect(Footer);
