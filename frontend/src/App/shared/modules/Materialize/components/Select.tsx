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

  get value(): string {
    if (this.selectRef.current) {
      this.selectRef.current?.value
    }
    return ""
  }

  render(): JSX.Element {
    return <select ref={this.selectRef}>{this.children}</select>;
  }
}
