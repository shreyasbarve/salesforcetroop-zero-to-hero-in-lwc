import { LightningElement, api, wire } from "lwc";
import {
  getRecord,
  getFieldValue,
  getFieldDisplayValue
} from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import OWNER_FIELD from "@salesforce/schema/Account.Owner.Name";
import ANNUAL_REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";

export default class GetRecordDemo extends LightningElement {
  name;
  owner;
  annualRevenue;
  @api recordId;
  //   ** wire adapter using fields **
  @wire(getRecord, {
    recordId: "$recordId",
    fields: [NAME_FIELD, OWNER_FIELD, ANNUAL_REVENUE_FIELD]
  })

  // ** wire adapter using layout **
  //   @wire(getRecord, {
  //     recordId: "$recordId",
  //     layoutTypes: ["Full"],
  //     modes: ["View"]
  //   })
  accountHandler({ data, error }) {
    if (data) {
      console.log(data);
      //   without using getFieldValue we have to write a big code
      //   this.name = data.fields.Name.displayValue
      //     ? data.fields.Name.displayValue
      //     : data.fields.Name.value;

      // this.owner = data.fields.Owner.displayValue
      // ? data.fields.Owner.displayValue
      // : data.fields.Owner.value;

      // this.annualRevenue = data.fields.AnnualRevenue.displayValue
      // ? data.fields.AnnualRevenue.displayValue
      // : data.fields.AnnualRevenue.value;

      // using getFieldValue - Displays the value in plain text
      //   this.name = getFieldValue(data, NAME_FIELD);
      //   this.owner = getFieldValue(data, OWNER_FIELD);
      //   this.annualRevenue = getFieldValue(data, ANNUAL_REVENUE_FIELD);

      // using getFieldDisplayValue - Displays the value in formatted text like $ for currency
      this.name = getFieldDisplayValue(data, NAME_FIELD);
      this.owner = getFieldDisplayValue(data, OWNER_FIELD);
      this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD);
    }
    if (error) {
      console.error(error);
    }
  }
}
