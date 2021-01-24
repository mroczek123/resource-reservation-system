import * as React from "react";
import { FormSelect } from "materialize-css";

interface SelectProps {
  value: string
}

export class Select extends React.Component<SelectProps> {
  selectRef: React.RefObject<HTMLSelectElement> = React.createRef();
  children: React.ReactNode;
  _value: string;

  constructor(props: React.PropsWithChildren<SelectProps>) {
    super(props);
    this.children = props.children;
    this._value = props.value;
  }

  componentDidMount(): void {
    if (this.selectRef.current) {
      FormSelect.init(this.selectRef.current, {dropdownOptions: {coverTrigger: false}});
    }
  }

  get value(): string {
    return this.selectRef.current?.value || ""
  }

  render(): JSX.Element {
    return <select ref={this.selectRef} value={this._value}>{this.children}</select>;
  }
}
