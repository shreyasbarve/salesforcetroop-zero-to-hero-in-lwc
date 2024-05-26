import { LightningElement } from "lwc";

export default class RefsDemo extends LightningElement {
  submitHandler() {
    const nameVal = this.refs.nameRef.value;
    const ageVal = this.refs.ageRef.value;

    console.log("nameVal", nameVal);
    console.log("ageVal", ageVal);

    this.refs.responseRef.innerHTML = `<p>Submitted name is ${nameVal} and Age is ${ageVal}`;
  }
}
