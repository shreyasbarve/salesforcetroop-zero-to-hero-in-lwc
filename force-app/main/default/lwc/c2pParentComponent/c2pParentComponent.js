import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  showModal = false;
  msg;
  clickHandler() {
    this.showModal = true;
  }

  closeHandler(e) {
    this.showModal = false;
    this.msg = e.detail.msg;
  }
}
