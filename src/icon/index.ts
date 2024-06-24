import { customElement } from 'lit/decorators.js';
import { Icon } from './icon.js';
import styles from './icon.style.js';

@customElement('tap-icon')
export class TapIcon extends Icon {
  static readonly styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'tap-icon': TapIcon;
  }
}
