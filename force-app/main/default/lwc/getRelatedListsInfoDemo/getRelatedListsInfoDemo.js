import { LightningElement, wire } from "lwc";
import { getRelatedListsInfo } from "lightning/uiRelatedListApi";

export default class GetRelatedListsInfoDemo extends LightningElement {
  relatedData;

  @wire(getRelatedListsInfo, {
    parentObjectApiName: "Account"
    // recordTypeId - optional
  })
  listsInfoHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.relatedData = data.relatedLists;
    }
    if (error) {
      console.error(error);
    }
  }
}
