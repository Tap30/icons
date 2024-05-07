import { html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

export class Icon extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.style.display = 'block';
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    if (this.height) this.style.height = `${this.height}px`;
    if (this.width) this.style.width = `${this.width}px`;
    if (this.color) this.style.color = this.color;
  }

  @property({ reflect: true }) color?: string = 'inherit';

  @property({ reflect: true, type: Number }) width? = 24;

  @property({ reflect: true, type: Number }) height? = 24;

  render() {
    return html` <slot part="icon"></slot>`;
  }

  renderIcon(content: unknown) {
    return html`
      <tap-icon color=${this.color} width=${this.width} height=${this.height}>
        ${content}
      </tap-icon>
    `;
  }
}
