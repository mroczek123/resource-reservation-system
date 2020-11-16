import StyleProps from "@src/App/shared/types/StyleProps";
import * as React from "react";

interface NavBarProps {
  title: string;
  children: React.ReactNode
}

function NavBar(props: StyleProps & NavBarProps): JSX.Element {
  return (
    <nav className={props.className}>
      <a href="#" className="brand-logo">{props.title}</a>
      <div className="nav-wrapper">
        <ul className="right">
          {props.children}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
