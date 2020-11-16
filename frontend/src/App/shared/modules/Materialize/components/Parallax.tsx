import * as React from "react";
import * as M from "materialize-css";

class Parallax extends React.Component {
  parallaxElementRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.parallaxElementRef = React.createRef();
  }

  componentDidMount(): void {
    M.Parallax.init(this.parallaxElementRef.current);
  }

  render(): JSX.Element {
    return (
    <div className="parallax-container">
      <div ref={this.parallaxElementRef} className="parallax">
        {this.props.children}
      </div>
    </div>
  )
  }
}

export default Parallax;