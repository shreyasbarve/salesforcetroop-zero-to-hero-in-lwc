import { LightningElement } from "lwc";
import signinTemplate from "./signinTemplate.html";
import signupTemplate from "./signupTemplate.html";
import renderTemplate from "./renderMethod.html";

export default class RenderMethod extends LightningElement {
  render() {
    return this.selectedBtn === "SignUp"
      ? signupTemplate
      : this.selectedBtn === "SignIn"
        ? signinTemplate
        : renderTemplate;
  }

  selectedBtn = "";
  handleClick(e) {
    this.selectedBtn = e.target.label;
  }
}
