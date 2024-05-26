import { LightningElement } from "lwc";
import LightningAlert from "lightning/alert";

export default class LightningAlertDemo extends LightningElement {
  alertHandler(event) {
    const { name } = event.target;
    LightningAlert.open({
      message: "This is the alert message",
      variant: "headerless",
      label: `I am ${name} Alert Header`,
      theme: name
    });
  }
}
