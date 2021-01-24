import * as React from "react";

export function Footer(): JSX.Element {
  return (
    <footer className={`page-footer`} style={{ minHeight: "100px" }}>
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
