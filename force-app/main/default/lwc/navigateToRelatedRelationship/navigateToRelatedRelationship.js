import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class NavigateToRelatedRelationship extends NavigationMixin(
  LightningElement
) {
  navigateToRelatedList() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordRelationshipPage",
      attributes: {
        recordId: "0011m00000qZXAQAA4",
        objectApiName: "Account",
        relationshipApiName: "Contacts",
        actionName: "view"
      }
    });
  }
}
