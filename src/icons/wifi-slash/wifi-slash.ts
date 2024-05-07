import { html } from 'lit';
import { TapIcon } from '../../icon';

export class WifiSlashIcon extends TapIcon {
  render() {
    return this.renderIcon(html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_24_919)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.25 10.917C19.1832 9.84926 17.9209 8.99676 16.532 8.406C15.122 7.802 13.612 7.5 12 7.5C11.442 7.49985 10.8848 7.54163 10.333 7.625L8.208 5.5C8.82049 5.33306 9.44358 5.20777 10.073 5.125C10.7119 5.04119 11.3556 4.99943 12 5C13.972 5 15.813 5.368 17.52 6.104C19.1925 6.8157 20.7133 7.84117 22 9.125L20.25 10.917ZM16.917 14.208L16.312 13.604L15.708 13L12.708 10C13.8014 10.1024 14.8691 10.3912 15.865 10.854C16.8287 11.302 17.7064 11.9156 18.458 12.667L16.917 14.208ZM18.458 20.5L10.625 12.625C9.98953 12.7715 9.37669 13.0029 8.803 13.313C8.24395 13.6155 7.7344 14.0016 7.292 14.458L5.542 12.667C5.97869 12.2286 6.46035 11.8375 6.979 11.5C7.50174 11.162 8.05241 10.8692 8.625 10.625L6.75 8.75C6.18 9.042 5.65 9.364 5.157 9.718C4.663 10.073 4.194 10.472 3.75 10.917L2 9.125C2.444 8.681 2.906 8.281 3.386 7.927C3.865 7.573 4.375 7.237 4.916 6.917L3.166 5.167L4.334 4L19.668 19.333L18.459 20.5H18.458ZM12 19.167L9.062 16.208C9.438 15.833 9.875 15.538 10.375 15.323C10.8888 15.1051 11.4419 14.9951 12 15C12.558 14.9948 13.1111 15.1044 13.625 15.322C14.125 15.538 14.563 15.833 14.938 16.208L12 19.167Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_24_919">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    `);
  }
}
