import { LightningElement } from "lwc";
import LightningPrompt from "lightning/prompt";
import LightningAlert from "lightning/alert";

export default class LightningPromptDemo extends LightningElement {
  async promptHandler() {
    const result = await LightningPrompt.open({
      message: "Please enter your age",
      label: "Check your voting eligibility",
      theme: "info",
      defaultValue: 30
    });

    if (result && Number(result) > 18) {
      this.alertHandler("You are eligible to vote", "Success!!", "success");
    } else {
      this.alertHandler("You are not eligible to vote", "Error!!", "error");
    }
  }

  alertHandler(message, label, theme) {
    LightningAlert.open({
      message,
      label,
      theme
    });
  }
}
