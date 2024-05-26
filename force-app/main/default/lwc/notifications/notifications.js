import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class Notifications extends LightningElement {
  showToast(title, message, variant) {
    const evt = new ShowToastEvent({
      title,
      message,
      variant,
      messageData: [
        "Salesforce",
        {
          url: "https://www.salesforce.com",
          label: "Click Here"
        }
      ],
      mode: "sticky"
    });
    this.dispatchEvent(evt);
  }

  toastHandlerSuccess() {
    // here {0} means the first value of messageData: here it will be Salesforce
    this.showToast("Success!!", "{0} Account Created!! {1}", "success");
  }

  toastHandlerError() {
    this.showToast("Error!!", "Account Created Failed!!", "error");
  }

  toastHandlerWarning() {
    this.showToast(
      "Warning!!",
      "Password should have 15 characters!!",
      "warning"
    );
  }

  toastHandlerInfo() {
    this.showToast("Info!!", "Summer 20 release is available!!", "info");
  }
}
