import { html } from 'lit';
import { TapIcon } from '../../icon';

export class MagnifierIcon extends TapIcon {
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.3588 18.4034 14.0782 17.3912 15.4772L21.682 19.7678L20.2678 21.182L16.0359 16.9503C14.5487 18.2279 12.6145 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2ZM10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4Z"
          fill="currentColor"
        />
      </svg>
    `);
  }
}
