import {html} from "lit";
import {TapIcon} from "../../icon";

export class ClockArrowCirclepathIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2233 19.8009C10.8028 19.9334 11.3952 20.0012 11.9894 20.0024L11.9853 22.0024C11.2421 22.0009 10.5016 21.9161 9.77759 21.7506L10.2233 19.8009ZM15.4558 19.2154L16.3193 21.0194L16.2275 21.0628C15.5787 21.3653 14.9076 21.5954 14.2214 21.7524L13.7755 19.8027C14.2145 19.7023 14.6462 19.5643 15.0678 19.3888L15.4558 19.2154ZM7.01667 18.2611C7.48198 18.6308 7.98745 18.9475 8.52311 19.2055L7.6551 21.0074C6.98599 20.685 6.35432 20.2893 5.7725 19.827L7.01667 18.2611ZM11.9999 2C17.5228 2 22 6.47715 22 12C22 14.9538 20.71 17.6978 18.5213 19.5813L18.2744 19.787L17.0187 18.2304C18.8912 16.7198 20 14.4519 20 12C20 7.58172 16.4182 4 11.9999 4C9.72892 4 7.6144 4.9506 6.11172 6.58426L5.93605 6.782L7.25795 7.89156C7.46949 8.06906 7.49708 8.38443 7.31958 8.59597C7.25259 8.6758 7.16234 8.73271 7.06143 8.75873L2.79004 9.86039C2.52265 9.92936 2.24998 9.7685 2.18101 9.50111C2.16724 9.44768 2.16239 9.39234 2.16669 9.33734L2.50989 4.93954C2.53138 4.66423 2.77197 4.45847 3.04728 4.47996C3.15117 4.48806 3.24994 4.52843 3.32977 4.59542L4.40305 5.496L4.61303 5.25944C6.49155 3.20105 9.1492 2 11.9999 2ZM4.81523 15.5187C5.07904 16.058 5.39849 16.5603 5.76816 17.02L4.2095 18.2732C3.74708 17.6981 3.34778 17.0703 3.01868 16.3976L4.81523 15.5187ZM3.99801 12.0539C4.00157 12.6464 4.07131 13.2376 4.20735 13.8179L2.26015 14.2744C2.08983 13.5479 2.0025 12.8076 1.99805 12.0659L3.99801 12.0539ZM13 8V12H16V14H11V8H13Z" fill="currentColor"/></svg>`);
  }
}