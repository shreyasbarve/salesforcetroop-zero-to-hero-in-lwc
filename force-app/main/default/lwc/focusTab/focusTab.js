import { LightningElement } from "lwc";
import {
  getAllTabInfo,
  focusTab,
  getFocusedTabInfo
} from "lightning/platformWorkspaceApi";

export default class FocusTab extends LightningElement {
  async setFocusHandler() {
    try {
      const allTabs = await getAllTabInfo();
      const { tabId } = await getFocusedTabInfo();
      const selectedTabIndex = allTabs.findIndex((nextTab) => {
        return nextTab.tabId === tabId;
      });
      const nextTabId = allTabs[selectedTabIndex + 1].tabId;
      await focusTab(nextTabId);
    } catch (error) {
      console.error(error);
    }
  }
}
