import { translate } from "@src/App/shared/modules/Translation/translate";
import * as React from "react";
import { Page } from "../../shared/components/Page";

export function Settings(): JSX.Element {
  return (
    <Page title={translate("Settings")}>
      <ul className="collection">
        <li className="collection-item">
          Update your information<i className="material-icons">chevron_right</i>
        </li>
      </ul>
    </Page>
  );
}
