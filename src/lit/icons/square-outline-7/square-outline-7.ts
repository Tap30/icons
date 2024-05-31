import {html} from "lit";
import {TapIcon} from "../../icon";

export class SquareOutline7Icon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2243 14.9635C13.0296 15.8632 12.9275 16.6794 12.9182 17.4122H11.1652C11.1652 16.3409 11.0736 15.3472 10.8904 14.4313C10.7072 13.5154 10.4638 12.6586 10.16 11.8609C9.85622 11.0632 9.51071 10.3119 9.12346 9.60696C8.73622 8.90203 8.34086 8.22493 7.93738 7.57566L9.4052 6.63653C9.75303 7.2116 10.0661 7.77392 10.3443 8.32348C10.6226 8.87305 10.8719 9.41913 11.0922 9.96174C11.3125 10.5044 11.5072 11.0493 11.6765 11.5965C11.8458 12.1438 11.9977 12.7026 12.1322 13.273C12.2991 12.6284 12.4858 11.9733 12.6922 11.3078C12.8985 10.6423 13.1119 10.0093 13.3322 9.4087C13.5525 8.80812 13.7716 8.26203 13.9896 7.77044C14.2075 7.27884 14.4116 6.88464 14.6017 6.58783L16.0626 7.52696C15.9049 7.78203 15.7438 8.07537 15.5791 8.40696C15.4145 8.73855 15.2487 9.09682 15.0817 9.48174C14.9148 9.86667 14.7467 10.2748 14.5774 10.7061C14.4081 11.1374 14.2423 11.5803 14.08 12.0348C13.7043 13.0875 13.4191 14.0638 13.2243 14.9635Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill="currentColor"/></svg>`);
  }
}