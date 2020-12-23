import { Modal } from "@src/App/shared/components/Modal";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";

export function ProductRemoveModal(
  input: {
    yesCallback?: () => void;
    noCallback?: () => void;
  } = {},
): JSX.Element {
  return (
    <Modal>
      <div className="modal-content">
        <h4>Are you sure you want to delete this menu item?</h4>
        <div className="modal-footer">
          <button
            className="waves-effect waves-light btn green"
            style={{ marginRight: "10px" }}
            onClick={() => (input.noCallback ? input.noCallback() : ModalService.removeModal())}
          >
            NO
          </button>
          <button
            className="waves-effect waves-light btn red"
            onClick={() => (input.yesCallback ? input.yesCallback() : ModalService.removeModal())}
          >
            YES
          </button>
        </div>
      </div>
    </Modal>
  );
}
