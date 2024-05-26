import { LightningElement } from "lwc";
import { refreshTab, getFocusedTabInfo } from "lightning/platformWorkspaceApi";

export default class RefreshFocusedTab extends LightningElement {
  async refreshTabHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      await refreshTab(tabId, {
        includeAllSubtabs: true
      });
    } catch (error) {
      console.error(error);
    }
  }
}
