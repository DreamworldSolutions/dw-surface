/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css} from 'lit-element';
import '../dw-surface.js';
import { ThemeStyle } from '@dreamworld/material-styles/theme';
import '@material/mwc-switch';
import '@material/mwc-formfield';

class DwSurfaceDemo extends LitElement {
  static get styles() {
    return [
      ThemeStyle,
      css`
        :host{
          display: inline-block;
        }

        .layout{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .square{
          width: 100px;
          height: 100px;
          padding: 16px;
          box-sizing: border-box;
        }

        dw-surface{
          margin: 16px;
        }

        .wrapper{
          width: 270px;
          border: 1px solid #d3d3d3;
          margin: 24px;
          display: inline-flex;
          color:#fff;
        }

        .dark{
          background: #292929;
          color: #fff;
        }

        mwc-formfield{
          display: block;
          padding-bottom: 24px;
          background: #fff;
        }

        .bg-error{
          color: var(--mdc-theme-on-error);
        }

        .bg-primary{
          color: var(--mdc-theme-on-primary);
        }

        .bg-secondary{
          color: var(--mdc-theme-on-secondary);
        }

        .bg-surface{
          color: var(--mdc-theme-on-surface);
        }
      `
    ];
  }

  render() {
    
    return html`
      <mwc-formfield label="Enable dark theme">
         <mwc-switch @change="${(e) => {
            if (e.target.checked) { 
              this.setAttribute('dark-theme', e.detail);
              return;
            }
            this.removeAttribute('dark-theme');
           }}">
          </mwc-switch>
      </mwc-formfield>

      <!-- Light theme -->
      <div class="layout wrapper bg-surface">
        <dw-surface elevation=0>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3>
          <div class="square">3dp</div>
        </dw-surface>

        <dw-surface elevation=4>
          <div class="square">4dp</div>
        </dw-surface>

        <dw-surface elevation=6>
          <div class="square">6dp</div>
        </dw-surface>

        <dw-surface elevation=8>
          <div class="square">8dp</div>
        </dw-surface>

        <dw-surface elevation=12>
          <div class="square">12dp</div>
        </dw-surface>

        <dw-surface elevation=16>
          <div class="square">16dp</div>
        </dw-surface>

        <dw-surface elevation=24>
          <div class="square">24dp</div>
        </dw-surface>
      </div>

      <!-- Primary background -->
      <div class="layout wrapper bg-primary">
        <dw-surface elevation=0 bg="primary">
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="primary">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="primary">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="primary">
          <div class="square">3dp</div>
        </dw-surface>

        <dw-surface elevation=4 bg="primary">
          <div class="square">4dp</div>
        </dw-surface>

        <dw-surface elevation=6 bg="primary">
          <div class="square">6dp</div>
        </dw-surface>

        <dw-surface elevation=8 bg="primary">
          <div class="square">8dp</div>
        </dw-surface>

        <dw-surface elevation=12 bg="primary">
          <div class="square">12dp</div>
        </dw-surface>

        <dw-surface elevation=16 bg="primary">
          <div class="square">16dp</div>
        </dw-surface>

        <dw-surface elevation=24 bg="primary">
          <div class="square">24dp</div>
        </dw-surface>
      </div>


      <!-- Secondary background -->
      <div class="layout wrapper bg-secondary">
        <dw-surface elevation=0 bg="secondary">
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="secondary">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="secondary">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="secondary">
          <div class="square">3dp</div>
        </dw-surface>

        <dw-surface elevation=4 bg="secondary">
          <div class="square">4dp</div>
        </dw-surface>

        <dw-surface elevation=6 bg="secondary">
          <div class="square">6dp</div>
        </dw-surface>

        <dw-surface elevation=8 bg="secondary">
          <div class="square">8dp</div>
        </dw-surface>

        <dw-surface elevation=12 bg="secondary">
          <div class="square">12dp</div>
        </dw-surface>

        <dw-surface elevation=16 bg="secondary">
          <div class="square">16dp</div>
        </dw-surface>

        <dw-surface elevation=24 bg="secondary">
          <div class="square">24dp</div>
        </dw-surface>
      </div>

      <!-- Error background -->
      <div class="layout wrapper bg-error">
        <dw-surface elevation=0 bg="error">
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="error">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="error">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="error">
          <div class="square">3dp</div>
        </dw-surface>

        <dw-surface elevation=4 bg="error">
          <div class="square">4dp</div>
        </dw-surface>

        <dw-surface elevation=6 bg="error">
          <div class="square">6dp</div>
        </dw-surface>

        <dw-surface elevation=8 bg="error">
          <div class="square">8dp</div>
        </dw-surface>

        <dw-surface elevation=12 bg="error">
          <div class="square">12dp</div>
        </dw-surface>

        <dw-surface elevation=16 bg="error">
          <div class="square">16dp</div>
        </dw-surface>

        <dw-surface elevation=24 bg="error">
          <div class="square">24dp</div>
        </dw-surface>
      </div>

    `;
  }

}

window.customElements.define('dw-surface-demo', DwSurfaceDemo);