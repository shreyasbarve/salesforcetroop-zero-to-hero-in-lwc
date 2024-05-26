import { LightningElement } from "lwc";
import { getFocusedTabInfo, setTabLabel } from "lightning/platformWorkspaceApi";

export default class SetLabelOfTab extends LightningElement {
  async setLabelHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      setTabLabel(tabId, "Hurray!!");
    } catch (error) {
      console.error(error);
    }
  }
}
