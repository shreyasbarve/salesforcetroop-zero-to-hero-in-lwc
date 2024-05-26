import { LightningElement, wire } from "lwc";
import { getRelatedListRecords } from "lightning/uiRelatedListApi";

export default class GetRelatedListRecordsDemo extends LightningElement {
  recordList;
  @wire(getRelatedListRecords, {
    parentRecordId: "001H30000059xhvIAA",
    relatedListId: "Contacts",
    fields: ["Contact.Name", "Contact.Id"]
  })
  listRecordsHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.recordList = data.records;
    }
    if (error) {
      console.error(error);
    }
  }
}
