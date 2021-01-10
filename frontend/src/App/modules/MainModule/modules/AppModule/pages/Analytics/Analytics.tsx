import { connect } from "@src/App/shared/modules/Store/Store";
import { translate } from "@src/App/shared/modules/Translation/translate";
import * as React from "react";
import { Page } from "../../shared/components/Page";

function _Analytics(): JSX.Element {
  return (
    <Page title={translate("Analytics")}>
    </Page>
  );
}

export const Analytics = connect(_Analytics);
