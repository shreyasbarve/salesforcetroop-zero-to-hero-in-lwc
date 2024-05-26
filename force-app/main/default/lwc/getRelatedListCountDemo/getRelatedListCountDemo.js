import { LightningElement, wire } from "lwc";
import { getRelatedListCount } from "lightning/uiRelatedListApi";

export default class GetRelatedListCountDemo extends LightningElement {
  relatedData;
  @wire(getRelatedListCount, {
    parentRecordId: "001H30000059xhvIAA", // The ID of the parent record that you want to get related list for
    relatedListId: "Contacts" // The API name of the related list object (plural)
  })
  listCountHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.relatedData = data;
    }
    if (error) {
      console.error(error);
    }
  }
}
