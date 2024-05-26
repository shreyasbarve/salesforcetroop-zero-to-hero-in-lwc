import { LightningElement, wire } from "lwc";
import { getRelatedListInfo } from "lightning/uiRelatedListApi";

export default class GetRelatedListInfoDemo extends LightningElement {
  relatedListData;
  @wire(getRelatedListInfo, {
    parentObjectApiName: "Account",
    relatedListId: "Contacts"
  })
  listInfoHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.relatedListData = data.displayColumns;
    }
    if (error) {
      console.error(error);
    }
  }
}
