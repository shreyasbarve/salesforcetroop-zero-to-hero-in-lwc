import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  fullname = "Zero to Hero";
  title = "Aura";

  changeHandler(e) {
    this.title = e.target.value;
  }

  @track
  address = {
    city: "Melbourne",
    postalCode: 3008,
    country: "Australia"
  };

  trackHandler(e) {
    this.address.city = e.target.value; // wont work without track in complex objects
  }

  users = ["John", "Smith", "Dohn"];
  num1 = 10;
  num2 = 30;

  get firstUser() {
    return this.users[0];
  }

  get multiply() {
    return this.num1 * this.num2;
  }
}
