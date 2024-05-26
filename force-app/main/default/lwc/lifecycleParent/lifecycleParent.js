import { LightningElement } from "lwc";

export default class LifecycleParent extends LightningElement {
  constructor() {
    super();
    console.log("parent constructor called");
  }

  connectedCallback() {
    console.log("parent connectedCallBack called");
  }

  renderedCallback() {
    console.log("parent renderedCallBack called");
  }

  //   to show the rerender behaviour of renderedCallBack() method on state or change
  //   name;
  //   changeHandler(e) {
  //     this.name = e.target.value;
  //   }

  isChildVisible = false;
  handleShowChild() {
    this.isChildVisible = true;
  }

  handleHideChild() {
    this.isChildVisible = false;
  }

  errorCallback(error, stack) {
    console.log(error.message);
    console.log(stack);
  }
}
