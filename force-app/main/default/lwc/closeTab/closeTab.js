import { LightningElement } from "lwc";
import { closeTab, getFocusedTabInfo } from "lightning/platformWorkspaceApi";

export default class CloseTab extends LightningElement {
  closeHandler() {
    getFocusedTabInfo()
      .then((tabInfo) => {
        console.log(tabInfo);
        closeTab(tabInfo.tabId);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async closeAsyncHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      await closeTab(tabId);
    } catch (error) {
      console.error(error);
    }
  }
}
