import { html } from 'lit';
import { TapIcon } from '../../icon';

export class CallLeftSlashIcon extends TapIcon {
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
          d="M3.06484 4.69648L19.5648 21.6965L21 20.3035L4.5 3.30352L3.06484 4.69648Z"
          fill="currentColor"
        />
        <path
          d="M5.30242 14.82C4.19242 15.18 3.00242 15.38 1.77242 15.38C1.23242 15.38 0.782419 15.83 0.782419 16.37V19.82C0.782419 20.37 1.06242 21 1.77242 21C5.78069 21 9.4998 19.5598 12.4318 17.1748L10.615 15.3089C9.75037 15.9959 8.82641 16.5797 7.88242 17.03L6.31242 15.06C6.04242 14.79 5.65242 14.7 5.30242 14.82Z"
          fill="currentColor"
        />
        <path
          d="M12.0996 13.9668C13.1884 12.8491 14.1151 11.5659 14.7724 10.2L12.8224 8.54C12.5524 8.26 12.4724 7.87 12.5824 7.52C12.9524 6.41 13.1424 5.22 13.1424 3.99C13.1424 3.45 13.5924 3 14.1324 3H17.5924C18.1324 3 18.7824 3.24 18.7824 3.99C18.7824 8.55857 16.913 12.7475 13.9091 15.8252L12.0996 13.9668Z"
          fill="currentColor"
        />
      </svg>
    `);
  }
}
