import * as React from "react";
import { Modal } from "@src/App/shared/components/Modal";
import { ModalService } from "@src/App/shared/services/ModalService";
import { Bill } from "@src/App/shared/modules/Bills/models/Bill";
import { BillService } from "@src/App/shared/modules/Bills/BillService";

export function PaymentQrModal(props?: { bill?: Bill }): JSX.Element {
  const handleCloseBill = () => {
    BillService.remove({id: props?.bill?.id as string})
    ModalService.removeModal();
  }
  return (
    <Modal>
      <div className="modal-content center">
        <h4>Payment Qr Code</h4>
        <img src="static/img/paymentQr.png" />
        <p>
        Show this Qr code to client. After payment passes click "Close Bill" to close the bill.
        If you want to go back or try again press Cancel, and then "PREPARE PAYMENT QR" again
        </p>
        
      </div>

      <div className="modal-footer">
        <div className="center">
          <button
            className="waves-effect waves-light btn red"
            style={{ marginRight: "10px" }}
            onClick={() => ModalService.removeModal()}
          >
            Cancel
          </button>
          <button className="waves-effect waves-light btn" onClick={handleCloseBill}>Close Bill</button>
        </div>
      </div>
    </Modal>
  );
}
