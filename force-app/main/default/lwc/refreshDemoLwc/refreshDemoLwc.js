import { LightningElement, wire } from "lwc";
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";

import getContactList from "@salesforce/apex/refreshContactController.getContactList";

const COLS = [
  { label: "First Name", fieldName: "FirstName", editable: true },
  { label: "Last Name", fieldName: "LastName", editable: true },
  { label: "Email", fieldName: "Email", type: "email", editable: true }
];

export default class RefreshDemoLwc extends LightningElement {
  columns = COLS;
  draftValues = [];

  @wire(getContactList)
  contacts;

  handleSave(event) {
    console.log(event.detail.draftValues);
    const recordInputs = event.detail.draftValues.slice().map((draft) => {
      const fields = Object.assign({}, draft);
      return { fields };
    });
    console.log("recordInputs", recordInputs);
    const promises = recordInputs.map((recordInput) =>
      updateRecord(recordInput)
    );
    Promise.all(promises)
      .then(() => {
        this.showToast("Success!!", "Contacts Updated");
        this.draftValues = [];
        return refreshApex(this.contacts);
      })
      .catch((err) => {
        this.showToast("Error!!", err.body.message, "error");
      });
  }

  showToast(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({
        title,
        message,
        variant: variant || "success"
      })
    );
  }
}
