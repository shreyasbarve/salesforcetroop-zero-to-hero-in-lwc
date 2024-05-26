import { LightningElement, api } from "lwc";
import generatePDF from "@salesforce/apex/pdfController.generatePDF";

export default class PdfGenerationDemo extends LightningElement {
  @api recordId;

  imageUrl = "https://picsum.photos/200/300";

  invoiceData = {
    invoiceNo: "123",
    invoiceCreated: "January 1, 2019",
    invoiceDue: "January 10, 2020",
    companyName: "Sparksuite, Inc.",
    address1: "12345 Sunny Road",
    address2: " Sunnyville, CA 12345"
  };

  clientData = {
    client: "Acmen Corp",
    username: "John Doe",
    email: "john@example.com"
  };

  services = [
    { name: "Consultation fee", amount: 1000.0 },
    { name: "Website Design", amount: 300.0 },
    { name: "Hosting (3 months)", amount: 75.0 }
  ];

  get totalAmount() {
    return this.services.reduce((total, service) => {
      return (total = total + service.amount);
    }, 0);
  }

  pdfHandler() {
    let content = this.template.querySelector(".container");
    generatePDF({ recordId: this.recordId, htmlData: content.outerHTML })
      .then((res) => {
        console.log("attachement id", res);
        window.open(
          `https://power-energy-6286-dev-ed.scratch.file.force.com/servlet/servlet.FileDownload?file=${res.Id}`
        );
      })
      .catch((err) => console.error(err));
  }
}
