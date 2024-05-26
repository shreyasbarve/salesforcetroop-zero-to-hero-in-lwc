import { LightningElement } from "lwc";

export default class HelloConditionalRendering extends LightningElement {
  isVisible = false;
  name;
  handleClick() {
    this.isVisible = true;
  }

  changeHandler(e) {
    this.name = e.target.value;
  }

  get helloMethod() {
    if (this.name === "hello") {
      return true;
    }
    return false;
  }
}
