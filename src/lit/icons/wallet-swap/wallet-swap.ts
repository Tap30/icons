import {html} from "lit";
import {TapIcon} from "../../icon";

export class WalletSwapIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 5V3H4.99999L4.82372 3.00509C3.30723 3.09296 2.09295 4.30725 2.00508 5.82373L1.99999 6V11.2227H3.99999V8.829L4.14826 8.87737C4.41826 8.95717 4.70412 9 4.99999 9H20V19H13.48V21H20L20.1493 20.9945C21.1841 20.9182 22 20.0544 22 19V9L21.9945 8.85074C21.9182 7.81588 21.0543 7 20 7H4.99999L4.88337 6.99327C4.38603 6.93551 3.99999 6.51284 3.99999 6C3.99999 5.44772 4.4477 5 4.99999 5H20Z" fill="currentColor"/><path d="M15.5 15.5C16.3284 15.5 17 14.8284 17 14C17 13.1716 16.3284 12.5 15.5 12.5C14.6716 12.5 14 13.1716 14 14C14 14.8284 14.6716 15.5 15.5 15.5Z" fill="currentColor"/><path d="M5 17.6108V19.6108H0V14.6108H2L2.00007 16.1972L4.97487 13.2217L6.38909 14.6359L3.41429 17.6114L5 17.6108Z" fill="currentColor"/><path d="M6.47908 19.6108V17.6108H11.4791V22.6108H9.47908L9.479 21.0244L6.5042 23.9999L5.08999 22.5857L8.06479 19.6102L6.47908 19.6108Z" fill="currentColor"/></svg>`);
  }
}