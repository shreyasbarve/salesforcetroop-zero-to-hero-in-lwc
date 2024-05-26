import { LightningElement } from "lwc";

export default class SlotChildDemo extends LightningElement {
  handleFooterChange() {
    const footerEl = this.template.querySelector(".slds-card__footer");

    if (footerEl) {
      footerEl.classList.remove("slds-hide");
    }
  }
}
