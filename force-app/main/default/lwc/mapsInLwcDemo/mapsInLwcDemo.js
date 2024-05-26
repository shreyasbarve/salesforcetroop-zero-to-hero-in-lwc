import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/MapControllerLwc.getAccounts";

export default class MapsInLwcDemo extends LightningElement {
  mapMarkers = [];
  markersTitle = "Accounts Location";
  selectedMarkerValue;

  @wire(getAccounts)
  wireHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.formatResponse(data);
    }
    if (error) {
      console.error(error);
    }
  }

  formatResponse(data) {
    this.mapMarkers = data.map((item) => {
      return {
        location: {
          street: item.BillingStreet || "",
          City: item.BillingCity || "",
          PostalCode: item.BillingPostalCode || "",
          State: item.BillingState || "",
          Country: item.BillingCountry || ""
        },
        icon: "utility:salesforce1",
        title: item.Name,
        value: item.Name,
        description: item.Description
      };
    });
    this.selectedMarkerValue =
      this.mapMarkers.length && this.mapMarkers[0].value;
  }

  callMarkerHandler(event) {
    this.selectedMarkerValue = event.detail.selectedMarkerValue;
  }
}
