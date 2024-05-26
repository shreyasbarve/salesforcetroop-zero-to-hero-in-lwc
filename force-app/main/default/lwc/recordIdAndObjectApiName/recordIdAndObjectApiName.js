import { LightningElement, api } from "lwc";

export default class RecordIdAndObjectApiName extends LightningElement {
  @api
  recordId;
  @api
  objectApiName;
}
