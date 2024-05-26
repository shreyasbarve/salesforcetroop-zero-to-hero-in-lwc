import { LightningElement } from "lwc";
import { getFocusedTabInfo, closeTab } from "lightning/platformShowToastEvent";

export default class CloseSubTab extends LightningElement {
  async closeAllSubtabsHandler() {
    try {
      const tabInfo = await getFocusedTabInfo();
      if (tabInfo.subtabs) {
        tabInfo.subtabs.forEach(async (tab) => {
          await closeTab(tab.tabId);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  //   to close specific subtabs
  async closeAllOppSubtabs() {
    try {
      const tabInfo = await getFocusedTabInfo();
      if (tabInfo.subtabs) {
        tabInfo.subtabs.forEach(async (tab) => {
          if (tab.iconAlt === "Opportunity") {
            await closeTab(tab.tabId);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}
