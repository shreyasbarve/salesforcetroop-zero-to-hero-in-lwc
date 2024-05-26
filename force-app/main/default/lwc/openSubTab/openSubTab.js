import { LightningElement, wire } from "lwc";
import { openSubtab, EnclosingTabId } from "lightning/platformWorkspaceApi";

export default class OpenSubTab extends LightningElement {
  @wire(EnclosingTabId)
  parentTabId;

  openSubTabRecordId() {
    openSubtab(this.parentTabId, {
      recordId: "0015i00000lhLC3AAM",
      label: "Troop Id",
      focus: true
    }).catch((error) => {
      console.error(error);
    });
  }

  openSubTabUrl() {
    openSubtab(this.parentTabId, {
      url: "/lightning/r/Account/0015i00000lhLC3AAM/view",
      label: "Troop Url",
      focus: true
    }).catch((error) => {
      console.error(error);
    });
  }

  openSubTabPageReference() {
    openSubtab(this.parentTabId, {
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
