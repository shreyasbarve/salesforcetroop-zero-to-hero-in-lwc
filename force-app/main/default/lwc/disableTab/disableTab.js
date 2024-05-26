import { LightningElement } from "lwc";
import {
  getFocusedTabInfo,
  disableTabClose
} from "lightning/platformWorkspaceApi";

export default class DisableTab extends LightningElement {
  async disableHandler(event) {
    try {
      const { tabId } = await getFocusedTabInfo();
      await disableTabClose(tabId, event.detail.checked);
    } catch (error) {
      console.error(error);
    }
  }
}
