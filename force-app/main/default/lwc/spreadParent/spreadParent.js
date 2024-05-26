import { LightningElement } from "lwc";

export default class SpreadParent extends LightningElement {
  childProps = {
    userName: "Salesforcetroop",
    age: 23,
    city: "Melbourne"
  };
}
