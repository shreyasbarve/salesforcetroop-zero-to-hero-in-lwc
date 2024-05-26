import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { MessageContext, publish } from "lightning/messageService";

export default class LmsComponentA extends LightningElement {
  inputValue;

  @wire(MessageContext)
  context;

  inputHandler(e) {
    this.inputValue = e.target.value;
  }

  publishMessage() {
    const message = {
      lmsData: {
        value: this.inputValue
      }
    };

    publish(this.context, SAMPLEMC, message);
  }
}
