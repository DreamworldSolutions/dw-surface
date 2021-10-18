import { html, css } from "lit";
import { DwSurface } from "../dw-surface";
import { ThemeStyle } from '@dreamworld/material-styles/theme';

class DwSurfaceExtendDemo extends DwSurface {
  static styles = [
    DwSurface.styles,
    ThemeStyle,
    css`
      :host {
        display: flex;
        width: 100%;
        height: 100px;
        align-items: center;
        justify-content: center;
      }
    `
  ];

  constructor() {
    super();
    this.elevation = 4;
  }

  get _getContentTemplate() {
    return html`
      <div>Extended dw-surface demo</div>
    `;
  }
}

window.customElements.define('dw-surface-extend-demo', DwSurfaceExtendDemo);