import { LightningElement } from "lwc";

export default class NewConditionalDirectives extends LightningElement {
  showText = false;

  get getLabel() {
    return this.showText ? "Hide Text" : "Show Text";
  }

  showTextHandler() {
    this.showText = !this.showText;
  }

  // getter demo
  country = "India";
  get isCountryIndia() {
    return this.country === "India";
  }

  get isCountryCanada() {
    return this.country === "Canada";
  }

  changeHandler(event) {
    this.country = event.target.value;
  }
}
