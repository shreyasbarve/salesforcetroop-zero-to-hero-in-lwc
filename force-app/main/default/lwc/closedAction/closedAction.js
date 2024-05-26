import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { updateRecord } from "lightning/uiRecordApi";
import STAGENAME_FIELD from "@salesforce/schema/Opportunity.StageName";
import ID_FIELD from "@salesforce/schema/Opportunity.Id";

export default class ClosedAction extends LightningElement {
  @api recordId;

  @api invoke() {
    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[STAGENAME_FIELD.fieldApiName] = "Closed";

    const recordInput = { fields };

    updateRecord(recordInput)
      .then(() => {
        this.showToast(
          "Success!!",
          "Opportunity Closed successfully",
          "success"
        );
      })
      .catch((error) => {
        this.showToast("Error!!", error.message, "error");
        // error handling
      });
  }

  showToast(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({
        title,
        message,
        variant
      })
    );
  }
}
