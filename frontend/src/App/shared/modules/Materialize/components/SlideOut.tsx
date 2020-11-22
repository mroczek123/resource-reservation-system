import StyleProps from "@src/App/shared/types/StyleProps";
import { Sidenav } from "materialize-css";
import * as React from "react";

class SlideOut extends React.Component<StyleProps> {
  sideNavRef: React.RefObject<HTMLUListElement> = React.createRef();
  sideNav?: Sidenav = undefined;

  componentDidMount(): void {
    if (this.sideNavRef.current) {
      this.sideNav = M.Sidenav.init(this.sideNavRef.current);
    }
  }

  toggle(): void {
    if (this.sideNav) {
      this.sideNav.isOpen ? this.sideNav.close() : this.sideNav.open();
    }
  }


  render():JSX.Element {
    return (
      <ul id="slide-out" ref={this.sideNavRef} className={`sidenav ${this.props.className || ""}`} style={this.props.style}>
      {this.props.children}
      </ul>
    );
  }
}

export default SlideOut;