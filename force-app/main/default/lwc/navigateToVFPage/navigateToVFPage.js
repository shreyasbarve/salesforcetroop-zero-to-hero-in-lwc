import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToVFPage extends NavigationMixin(
  LightningElement
) {
  navigateToVFPage() {
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "/apex/navigateVFPage"
      }
    }).then((generatedUrl) => {
      window.open(generatedUrl, "_blank");
    });
  }
}
