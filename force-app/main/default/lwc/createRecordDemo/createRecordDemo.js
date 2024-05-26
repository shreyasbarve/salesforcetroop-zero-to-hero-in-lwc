import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { createRecord } from "lightning/uiRecordApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class CreateRecordDemo extends LightningElement {
  formFields = {};
  changeHandler(event) {
    const { name, value } = event.target;
    this.formFields[name] = value;
  }

  createContact() {
    const recordInput = {
      apiName: CONTACT_OBJECT.objectApiName,
      fields: this.formFields
    };
    createRecord(recordInput)
      .then((result) =>
        this.showToast(
          "Success Creating Record",
          `Contact Created with ID: ${result.id}`
        )
      )
      .catch((error) =>
        this.showToast("Error Creating Record", error.body.message, "error")
      );

    this.template.querySelector("form.createForm").reset();
    this.formFields = {};
  }

  showToast(title, message, variant) {
    this.dispatchEvent(
      new ShowToastEvent({ title, message, variant: variant || "success" })
    );
  }
}
