import { LightningElement, api } from "lwc";
import {
  registerRefreshHandler,
  unregisterRefreshHandler
} from "lightning/refresh";
import getAccountRating from "@salesforce/apex/RefreshController.getAccountRating";

export default class RefreshCustomView extends LightningElement {
  @api recordId;
  ratingValue;
  refreshHandlerId;

  connectedCallback() {
    this.refreshHandlerId = registerRefreshHandler(this, this.refreshHandler);
    this.fetchRating();
  }

  disconnectedCallback() {
    unregisterRefreshHandler(this.refreshHandlerId);
  }

  refreshHandler() {
    console.log("something happened");
    return new Promise((resolve) => {
      this.fetchRating();
      resolve(true);
    });
  }

  fetchRating() {
    getAccountRating({ accountId: this.recordId })
      .then((response) => {
        console.log(response);
        this.ratingValue = response[0].Rating;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
