import { LightningElement } from "lwc";
import { openTab } from "lightning/platformWorkspaceApi";

export default class OpenNewTab extends LightningElement {
  openTabRecordId() {
    openTab({
      recordId: "0015i00000lhLC3AAM",
      label: "Troop Id",
      focus: true
    }).catch((error) => {
      console.error(error);
    });
  }

  openTabUrl() {
    openTab({
      url: "/lightning/r/Account/0015i00000lhLC3AAM/view",
      label: "Troop Url",
      focus: true
    }).catch((error) => {
      console.error(error);
    });
  }

  openTabPageReference() {
    openTab({
      pageReference: {
        type: "standard__objectPage",
        attributes: {
          objectApiName: "Account",
          actionName: "list"
        }
      },
      label: "Accounts List",
      focus: true
    }).catch((error) => {
      console.error(error);
    });
  }
}
