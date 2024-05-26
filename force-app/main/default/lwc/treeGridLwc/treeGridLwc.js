import { LightningElement, wire } from "lwc";
import allAccountsWithContacts from "@salesforce/apex/AccountContact.allAccountsWithContacts";

export default class TreeGridLwc extends LightningElement {
  gridData = [];
  @wire(allAccountsWithContacts)
  accountsWithContactsResult({ data, error }) {
    if (data) {
      console.log(data);
      this.formatGridData(data);
    }
    if (error) {
      console.error(error);
    }
  }

  //   columns
  gridColumns = [
    {
      label: "Name",
      fieldName: "Name",
      type: "text"
    },
    {
      label: "Phone",
      fieldName: "Phone",
      type: "text"
    },
    {
      label: "Account Website",
      fieldName: "Website",
      type: "url",
      typeAttributes: {
        target: "_blank"
      }
    }
  ];

  dummyData = [
    {
      Name: "Salesforce",
      Email: "Salesforce@gmail.com",
      Website: "salesforce.com"
    },
    {
      Name: "Gmail",
      Email: "Gmail@gmail.com",
      Website: "gmail.com"
    }
  ];

  formatGridData(result) {
    this.gridData = result.map((item) => {
      const { Contacts, ...accounts } = item;
      //   dummy Data to add another level of children
      //   const updatedContact =
      //     Contacts &&
      //     Contacts.map((cont) => {
      //       return { ...cont, _children: updatedContact };
      //     });
      //   dummy data end
      return { ...accounts, _children: Contacts };
    });
    console.log(this.gridData);
  }
}
