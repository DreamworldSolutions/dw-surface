/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/**
 * ## Behavior
 *  - When hover, focus, and ripple are to be enabled, set interactive=true.
 *  - When selected = true, a selected overlay is shown in primary color.
 *  - When activated=true, an activated overlay is shown in the primary color.
 *
 * ## Implementation note
 *  - The opacity of various overlays will be different based on whether the surface is rendered in primary color or not.
 *  - The hover effect is visible even when focused or selected.
 */

import { html, css } from "lit-element";
import { LitElement } from "@dreamworld/pwa-helpers/lit-element.js";
import { Shadow } from "@dreamworld/material-styles/shadow";
import { interactiveStyle } from "./interactive-Style.js";
import "@dreamworld/dw-ripple";

export class DwSurface extends LitElement {
  static get styles() {
    return [
      Shadow,
      interactiveStyle,
      css`
        :host {
          display: block;
          outline: none;
          border-radius: 4px;
          background-color: var(--mdc-theme-surface, #fff);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        :host[hidden] {
          display: none;
        }

        /* STARTS: background color styles based on bg */
        :host([bg="primary"]) {
          background-color: var(--mdc-theme-primary);
        }

        :host([bg="secondary"]) {
          background-color: var(--mdc-theme-secondary);
        }

        :host([bg="error"]) {
          background-color: var(--mdc-theme-error);
        }
        /* ENDS: background color styles based on bg */

        /* STARTS: elevation styles based on elevation */
        :host([elevation="0"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z0);
        }

        :host([elevation="1"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z1);
        }

        :host([elevation="2"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z2);
        }

        :host([elevation="3"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z3);
        }

        :host([elevation="4"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z4);
        }

        :host([elevation="6"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z6);
        }

        :host([elevation="8"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z8);
        }

        :host([elevation="12"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z12);
        }

        :host([elevation="16"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z16);
        }

        :host([elevation="24"]:not([no-box-shadow])) {
          box-shadow: var(--mdc-elevation--z24);
        }
        /* ENDS: elevation styles based on elevation */

        /* STARTS: overlay styles for dark theme based on evevation */
        :host([elevation="1"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-1);
        }

        :host([elevation="2"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-2);
        }

        :host([elevation="3"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-3);
        }

        :host([elevation="4"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-4);
        }

        :host([elevation="6"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-6);
        }

        :host([elevation="8"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-8);
        }

        :host([elevation="12"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-12);
        }

        :host([elevation="16"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-16);
        }

        :host([elevation="24"]) .overlay {
          opacity: var(--dw-surface-overlay-opacitiy-elevation-24);
        }
        /* STARTS: overlay styles for dark theme based on evevation */

        .overlay,
        .overlay1 {
          background-color: var(--dw-surface-overlay-color);
          opacity: 0;
          pointer-events: none;
        }

        .fit {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .scroller {
          display: inherit;
          flex: inherit;
          flex-direction: inherit;
          overflow: auto;
        }

        ::slotted(*) {
          z-index: 1;
        }

        :host([elevation="0"][transparent]) {
          background-color: transparent;
        }
      `,
    ];
  }

  static get properties() {
    return {
      /**
       * Specifies the background color
       * possible values: `surface`, `primary`, `secondary`, `error`
       * Default value is `surface`
       */
      bg: {
        type: String,
        reflect: true,
      },

      /**
       * The z-depth of the card. Default is `0`.
       */
      elevation: {
        type: Number,
        reflect: true,
      },

      /**
       * When true and elevation is 0, background is transparent.
       * Default value false.
       */
      transparent: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Input property.
       * Set true to enabled hover, focus and ripple effect.
       */
      interactive: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Input property
       * Set to true to show surface selected.
       */
      selected: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Set true to show surface in activated statred.
       */
      activated: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  render() {
    return html`
      ${this.interactive ? html`<dw-ripple disableHover></dw-ripple>` : html``}
      <div class="overlay fit"></div>
      <!-- <div class="fit"> -->
      <section class="scroller">${this._getContentTemplate}</section>
      <!-- </div> -->
      <div class="overlay1 fit"></div>
    `;
  }

  constructor() {
    super();
    this.bg = "surface";
    this.elevation = 0;
    this.noBoxShadow = false;
  }

  get _getContentTemplate() {
    return html`<slot></slot>`;
  }
}

window.customElements.define("dw-surface", DwSurface);
