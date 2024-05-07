import { html } from 'lit';
import { TapIcon } from '../../icon';

export class CardSparkFillIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4C21.0544 4 21.9182 4.81588 21.9945 5.85074L22 6V9H2V6C2 4.94564 2.81588 4.08183 3.85074 4.00549L4 4H20Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 11H22V18C22 19.0544 21.1841 19.9182 20.1493 19.9945L20 20H17.687L19.74 16.4501L19.767 16.3871C19.7867 16.3223 19.7839 16.2528 19.759 16.1898C19.7341 16.1268 19.6886 16.074 19.63 16.0401L19.583 16.0181C19.55 16.0062 19.5151 16.0001 19.48 16.0001H17.286L17.781 12.5441L17.783 12.4741C17.7769 12.4068 17.7482 12.3434 17.7015 12.2944C17.6549 12.2454 17.593 12.2136 17.526 12.2041L17.454 12.2021C17.4066 12.2069 17.361 12.2229 17.321 12.2489C17.281 12.2748 17.2477 12.3098 17.224 12.3511L14.212 17.5591L14.185 17.6221C14.1653 17.687 14.1681 17.7565 14.193 17.8195C14.2179 17.8825 14.2633 17.9353 14.322 17.9691L14.369 17.9911C14.402 18.0031 14.4369 18.0092 14.472 18.0091H16.665L16.3804 20H4C2.94564 20 2.08183 19.1841 2.00549 18.1493L2 18V11ZM10.0166 14H5.99512V16H10.0166V14Z"
          fill="currentColor"
        />
        <path
          d="M16.5892 21.7831C16.6476 21.7573 16.6962 21.7135 16.728 21.6581L17.687 20H16.3804L16.171 21.4651L16.169 21.5351C16.1746 21.5987 16.2004 21.6589 16.2425 21.7068C16.2847 21.7548 16.341 21.788 16.4034 21.8018C16.4657 21.8155 16.5308 21.8089 16.5892 21.7831Z"
          fill="currentColor"
        />
      </svg>
    `);
  }
}
