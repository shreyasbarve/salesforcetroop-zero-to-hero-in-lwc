import { LightningElement } from "lwc";

export default class LifecycleChild extends LightningElement {
  constructor() {
    super();
    console.log("child constructor called");
  }

  connectedCallback() {
    console.log("child connectedCallBack called");
    throw new Error("Loading child component failed");
  }

  renderedCallback() {
    console.log("child renderedCallBack called");
  }

  disconnectedCallback() {
    alert("Child disconnectedCallback called");
  }
}
