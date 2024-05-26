import { LightningElement } from "lwc";
import {
  getFocusedTabInfo,
  setTabHighlighted
} from "lightning/platformWorkspaceApi";

export default class HighlightTab extends LightningElement {
  async successHighlightHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      setTabHighlighted(tabId, true, {
        state: "success",
        pulse: true
      });
    } catch (error) {
      console.error(error);
    }
  }

  async warningHighlightHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      setTabHighlighted(tabId, true, {
        state: "warning",
        pulse: true
      });
    } catch (error) {
      console.error(error);
    }
  }

  async errorHighlightHandler() {
    try {
      const { tabId } = await getFocusedTabInfo();
      setTabHighlighted(tabId, true, {
        state: "error",
        pulse: true
      });
    } catch (error) {
      console.error(error);
    }
  }
}
