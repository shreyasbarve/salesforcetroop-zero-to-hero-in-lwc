import { LightningElement, wire } from "lwc";

// navigation
import { NavigationMixin } from "lightning/navigation";

// function used to get field values
import { getFieldValue } from "lightning/uiRecordApi";

// car schema
import CAR_OBJECT from "@salesforce/schema/Car__c";
import NAME_FIELD from "@salesforce/schema/Car__c.Name";
import PICTURE_URL_FIELD from "@salesforce/schema/Car__c.Picture_URL__c";
import CATEGORY_FIELD from "@salesforce/schema/Car__c.Category__c";
import MAKE_FIELD from "@salesforce/schema/Car__c.Make__c";
import MSRP_FIELD from "@salesforce/schema/Car__c.MSRP__c";
import FUEL_FIELD from "@salesforce/schema/Car__c.Fuel_Type__c";
import SEATS_FIELD from "@salesforce/schema/Car__c.Number_of_Seats__c";
import CONTROL_FIELD from "@salesforce/schema/Car__c.Control__c";

// lightning message service
import { subscribe, unsubscribe, MessageContext } from "lightning/messageService";
import CAR_SELECTED_MESSAGE from "@salesforce/messageChannel/CarSelected__c";

export default class CarCard extends NavigationMixin(LightningElement) {
  // load context for lms
  @wire(MessageContext)
  messageContext;

  // exposing fields to make them availabel in template
  categoryField = CATEGORY_FIELD;
  makeField = MAKE_FIELD;
  msrpField = MSRP_FIELD;
  fuelField = FUEL_FIELD;
  seatsField = SEATS_FIELD;
  controlField = CONTROL_FIELD;

  //   id of car to display
  recordId;

  //   car fields displayed with specific format
  carName;
  carPictureUrl;

  // subscription reference for car selected
  carSelectedSubscription;

  connectedCallback() {
    this.subscribeHandler();
  }

  subscribeHandler() {
    this.carSelectedSubscription = subscribe(this.messageContext, CAR_SELECTED_MESSAGE, (message) => this.handleCarSelected(message));
  }

  handleCarSelected(message) {
    this.recordId = message.carId;
  }

  handleRecordLoaded(event) {
    const { records } = event.detail;
    const recordData = records[this.recordId];
    this.carName = getFieldValue(recordData, NAME_FIELD);
    this.carPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD);
  }

  disconnectedCallback() {
    unsubscribe(this.carSelectedSubscription);
    this.carSelectedSubscription = null;
  }

  // navigate to record page
  handleNavigateToRecord() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.recordId,
        objectApiName: CAR_OBJECT.objectApiName,
        actionName: "view"
      }
    });
  }
}
