import * as React from "react";
import { FormSelect } from "materialize-css";

export class Select extends React.Component {
  selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
  children: React.ReactNode;

  constructor(props: React.PropsWithChildren<unknown>) {
    super(props);
    this.children = props.children;
  }

  componentDidMount(): void {
    if (this.selectRef.current) {
      FormSelect.init(this.selectRef.current, {dropdownOptions: {coverTrigger: false}});
    }
  }

  render(): JSX.Element {
    return <select ref={this.selectRef}>{this.children}</select>;
  }
}
