import { translate } from "@src/App/shared/modules/Translation/translate";
import * as React from "react";
import { Page } from "../../shared/components/Page";

export function Bills(): JSX.Element {
  return (
    <Page title={translate("Bills:")}>
      <ul className="collection">
        <li className="collection-item">
          Status: otwarty/zamknięty
          Kwota: 1000CBLN
        </li>
      </ul>
    </Page>
  );
}
