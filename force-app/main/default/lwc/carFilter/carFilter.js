import { LightningElement, wire } from "lwc";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";

// car schema
import CAR_OBJECT from "@salesforce/schema/Car__c";
import CATEGORY_FIELD from "@salesforce/schema/Car__c.Category__c";
import MAKE_FIELD from "@salesforce/schema/Car__c.Make__c";

// constants
const CATEGORY_ERROR = "Error loading categories";
const MAKE_ERROR = "Error loading make types";

// lightning message service
import { publish, MessageContext } from "lightning/messageService";
import CARS_FILTERED_MESSAGE from "@salesforce/messageChannel/CarsFiltered__c";

export default class CarFilter extends LightningElement {
  filters = {
    searchKey: "",
    maxPrice: 999999
  };
  categoryError = CATEGORY_ERROR;
  makeError = MAKE_ERROR;
  timer;

  // load context for lms
  @wire(MessageContext)
  messageContext;

  //   fetching object info
  @wire(getObjectInfo, { objectApiName: CAR_OBJECT })
  carObjectInfo;

  //   fetching category picklist values
  @wire(getPicklistValues, {
    recordTypeId: "$carObjectInfo.data.defaultRecordTypeId",
    fieldApiName: CATEGORY_FIELD
  })
  categories;

  //   fetching make picklist values
  @wire(getPicklistValues, {
    recordTypeId: "$carObjectInfo.data.defaultRecordTypeId",
    fieldApiName: MAKE_FIELD
  })
  makeType;

  handleSearchKeyChange(event) {
    console.log(event.target.value);
    this.filters = { ...this.filters, searchKey: event.target.value };
    this.sendDataToCarList();
  }

  handlerMaxPriceChange(event) {
    console.log(event.target.value);
    this.filters = { ...this.filters, maxPrice: event.target.value };
    this.sendDataToCarList();
  }

  handleCheckbox(event) {
    if (!this.filters.categories) {
      const categories = this.categories.data.values.map((item) => item.value);
      const makeType = this.makeType.data.values.map((item) => item.value);
      this.filters = { ...this.filters, categories, makeType };
    }
    console.log(this.filters);
    const { name, value } = event.target.dataset;
    // console.log("name", name);
    // console.log("value", value);
    try {
      if (event.target.checked) {
        if (!this.filters[name].includes(value)) {
          this.filters[name] = [...this.filters[name], value];
        }
      } else {
        this.filters[name] = this.filters[name].filter((item) => item !== value);
      }
      this.sendDataToCarList();
    } catch (error) {
      console.error(error);
    }
  }

  sendDataToCarList() {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      publish(this.messageContext, CARS_FILTERED_MESSAGE, {
        filters: this.filters
      });
    }, 400);
  }
}
