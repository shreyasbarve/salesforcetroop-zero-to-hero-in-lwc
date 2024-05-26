import { LightningElement, wire } from "lwc";

// car method apex
import getCars from "@salesforce/apex/CarController.getCars";

// lightning message service
import { publish, subscribe, MessageContext, unsubscribe } from "lightning/messageService";
import CARS_FILTERED_MESSAGE from "@salesforce/messageChannel/CarsFiltered__c";
import CAR_SELECTED_MESSAGE from "@salesforce/messageChannel/CarSelected__c";

export default class CarTileList extends LightningElement {
  cars = [];
  error;
  filters = {};
  carFilterSubscription;

  @wire(getCars, { filters: "$filters" })
  carsHandler({ data, error }) {
    if (data) {
      console.log(data);
      this.cars = data;
    }
    if (error) {
      console.error(error);
      this.error = error;
    }
  }

  // load context for lms
  @wire(MessageContext)
  messageContext;

  connectedCallback() {
    this.subscribeHandler();
  }

  subscribeHandler() {
    this.carFilterSubscription = subscribe(this.messageContext, CARS_FILTERED_MESSAGE, (message) => this.handleFilterChange(message));
  }

  handleFilterChange(message) {
    console.log(message);
    this.filters = { ...message.filters };
  }

  handleCarSelected(event) {
    publish(this.messageContext, CAR_SELECTED_MESSAGE, { carId: event.detail });
  }

  disconnectedCallback() {
    unsubscribe(this.carFilterSubscription);
    this.carFilterSubscription = null;
  }
}
