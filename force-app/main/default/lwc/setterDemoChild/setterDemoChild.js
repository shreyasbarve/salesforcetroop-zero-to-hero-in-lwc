import { LightningElement, api } from "lwc";

export default class SetterDemoChild extends LightningElement {
  userDetail;

  @api
  get detail() {
    return this.userDetail;
  }

  set detail(data) {
    this.userDetail = { ...data, age: data.age * 2, location: "Melbourne" };
  }
}
