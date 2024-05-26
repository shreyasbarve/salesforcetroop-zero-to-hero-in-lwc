import { LightningElement, wire } from "lwc";
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import {
  subscribe,
  MessageContext,
  APPLICATION_SCOPE,
  unsubscribe
} from "lightning/messageService";

export default class LmsComponentB extends LightningElement {
  receivedMessage;
  subscription;
  @wire(MessageContext)
  context;

  handleMessage(message) {
    this.receivedMessage = message.lmsData.value
      ? message.lmsData.value
      : "No Message Published";
  }

  subscribeMessage() {
    this.subscription = subscribe(
      this.context,
      SAMPLEMC,
      (message) => {
        this.handleMessage(message);
      },
      { scope: APPLICATION_SCOPE }
    );
  }

  connectedCallback() {
    this.subscribeMessage();
  }

  unsubscribeMessage() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }
}
