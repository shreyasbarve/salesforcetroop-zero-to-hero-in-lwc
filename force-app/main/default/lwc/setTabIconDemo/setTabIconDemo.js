import { LightningElement } from "lwc";
import { getFocusedTabInfo, setTabIcon } from "lightning/platformWorkspaceApi";

const ICON_NAME = "utility:alert";
const ICON_ALT_TEXT = "Alert";

export default class SetTabIconDemo extends LightningElement {
  async setIconHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      setTabIcon(tabId, ICON_NAME, {
        iconAlt: ICON_ALT_TEXT
      });
    } catch (error) {
      console.error(error);
    }
  }
}
