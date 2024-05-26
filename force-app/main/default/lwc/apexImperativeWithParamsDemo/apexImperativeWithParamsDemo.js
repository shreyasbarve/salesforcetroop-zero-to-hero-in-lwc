import { LightningElement } from "lwc";
import findAccounts from "@salesforce/apex/AccountController.findAccounts";

export default class ApexImperativeWithParamsDemo extends LightningElement {
  searchKey = "";
  accounts;
  timer;

  searchHandler(event) {
    window.clearTimeout(this.timer);
    this.searchKey = event.target.value;

    this.timer = setTimeout(() => {
      this.callApex();
    }, 1000);
  }

  callApex() {
    findAccounts({ searchKey: this.searchKey })
      .then((res) => {
        this.accounts = res;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
