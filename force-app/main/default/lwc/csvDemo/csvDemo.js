import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/CsvController.getAccounts";
import { exportCSVFile } from "c/utils";

export default class CsvDemo extends LightningElement {
  accountData = [];
  accountHeaders = {
    Id: "Record Id",
    Name: "Name",
    AnnualRevenue: "Annual Revenue",
    Industry: "Annual Revenue",
    Phone: "Phone"
  };

  @wire(getAccounts)
  accountHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.accountData = data;
    }
    if (error) {
      console.error(error);
    }
  }

  csvGenerator() {
    exportCSVFile(this.accountHeaders, this.accountData, "Account_Records");
  }
}
