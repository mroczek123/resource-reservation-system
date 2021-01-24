import { Bill } from "@src/App/shared/modules/Bills/models/Bill";
import { connect } from "@src/App/shared/modules/Store/Store";
import { StateProps } from "@src/App/shared/modules/Store/types/StateProps";
import { translate } from "@src/App/shared/modules/Translation/translate";
import { ModalService } from "@src/App/shared/services/ModalService";
import * as React from "react";
import { Page } from "../../shared/components/Page";
import { PaymentQrModal } from "./modals/PaymentQrModal";

function BillListItem(props: { bill: Bill }): JSX.Element {
  return (
    <li
      className="collection-item valign-wrapper"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span>
        {props.bill.displayData}
        <br />
        Total: {props.bill.value} PLN
      </span>
      <span>
        <button className="btn" onClick={() => ModalService.displayModal(PaymentQrModal({bill: props.bill}))}>Prepare payment Qr</button>
      </span>
    </li>
  );
}

function _Bills(props: StateProps): JSX.Element {
  const bills = props.state.resources.bills.entries;
  return (
    <Page title={translate("Bills:")}>
      <ul className="collection">
        {bills.map((i_bill) => (
          <BillListItem bill={i_bill} />
        ))}
      </ul>
    </Page>
  );
}

export const Bills = connect(_Bills);
