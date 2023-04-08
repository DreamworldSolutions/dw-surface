import { html, css } from "lit-element";
import { DwSurface } from "../src/dw-surface";
import { ThemeStyle } from "@dreamworld/material-styles/theme";

export class extendedSurfaceDemo extends DwSurface {
  static get styles() {
    return [
      DwSurface.styles,
      css`
        :host {
          padding: 24px;
          margin: 24px;
          width: 288px;
        }
      `,
    ];
  }

  get _getContentTemplate() {
    return html`
      <div>Extended surface demo, with the elevasion of ${this.elevation}.</div>
      ${this.interactive
        ? html` <div>Interactive surface (focus and hover)</div>`
        : ``}
      <div>background in ${this.bg}.</div>
    `;
  }
}
customElements.define("extended-surface-demo", extendedSurfaceDemo);