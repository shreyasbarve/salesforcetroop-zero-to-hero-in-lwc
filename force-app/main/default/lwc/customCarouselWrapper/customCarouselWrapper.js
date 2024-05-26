import { LightningElement } from "lwc";
import CAROUSEL_IMAGES from "@salesforce/resourceUrl/carousel";

export default class CustomCarouselWrapper extends LightningElement {
  slides = [
    {
      image: `${CAROUSEL_IMAGES}/carousel/photo1.jpg`,
      heading: "Caption one",
      description: "Description one"
    },
    {
      image: `${CAROUSEL_IMAGES}/carousel/photo2.jpg`,
      heading: "Caption two",
      description: "Description two"
    },
    {
      image: `${CAROUSEL_IMAGES}/carousel/photo3.jpg`,
      heading: "Caption three",
      description: "Description three"
    }
  ];
}
