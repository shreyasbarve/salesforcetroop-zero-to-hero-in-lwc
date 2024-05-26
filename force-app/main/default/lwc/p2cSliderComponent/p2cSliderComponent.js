import { LightningElement, api } from "lwc";

export default class P2cSliderComponent extends LightningElement {
  val = 20;

  changeHandler(e) {
    this.val = e.target.value;
  }

  @api
  resetSlider() {
    this.val = 50;
  }
}
