import { LightningElement } from "lwc";

export default class HelloQuerySelectorDemo extends LightningElement {
  usernames = ["John", "Smith", "Nik", "Mike"];
  fetchDetailHandler() {
    const elem = this.template.querySelector("h1");
    elem.style.border = "1px solid red";
    console.log(elem.innerText);
    const userElems = this.template.querySelectorAll(".name");
    Array.from(userElems).forEach((item) => {
      console.log("OUTPUT : ", item.innerText);
      item.setAttribute("title", item.innerText);
    });

    // lwc:dom="manual" demo
    const childElem = this.template.querySelector(".child");
    childElem.innerHTML = "<p>Hey I am a child</p>";
  }
}
