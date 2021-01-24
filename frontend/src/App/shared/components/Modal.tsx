import { Modal as MaterializeModal } from "materialize-css";
import * as React from "react";
import { dispatch } from "../modules/Store/Store";
import { ActionType } from "../modules/Store/types/ActionType";

export interface ModalInput {
  children?: React.ReactNode;
  footer?: JSX.Element;
}

export class Modal extends React.Component<ModalInput> {
  modalRef: React.RefObject<HTMLDivElement> = React.createRef();
  materializeModal: MaterializeModal | null = null;
  stateCheckerInterval: NodeJS.Timeout | null = null;
  isOpen = false;

  children: React.ReactNode | null;
  footer: JSX.Element | null;

  constructor(props: React.PropsWithChildren<ModalInput>) {
    super(props);
    this.children = props.children ? props.children : null;
    this.footer = props.footer ? props.footer : null;
  }

  componentDidMount(): void {
    const canClose = () => {
      if (this.isOpen && !this.modalRef.current?.classList.contains("open")) {
        dispatch({ type: ActionType.REMOVE_MODAL, payload: {} });
      }
    };
    if (this.modalRef.current) {
      this.materializeModal = MaterializeModal.init(this.modalRef.current);
      this.materializeModal.open();
      this.isOpen = true;
      this.stateCheckerInterval = setInterval(canClose, 500);
    }
  }

  componentWillUnmount(): void {
    if (this.materializeModal) {
      this.materializeModal.close();
    }
    if (this.stateCheckerInterval) {
      clearInterval(this.stateCheckerInterval);
    }
  }

  render(): JSX.Element {
    return (
      <div ref={this.modalRef} className="modal">
        {this.children}
      </div>
    );
  }
}
