import { LitElement, html, css } from '@dreamworld/pwa-helpers/lit.js';
import '../dw-surface.js';
import { ThemeStyle } from '@dreamworld/material-styles/theme';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import './extended-surface-demo.js';
class DwSurfaceDemo extends LitElement {
  static get styles() {
    return [
      ThemeStyle,
      css`
        :host{
          display: inline-block;
          background: var(--mdc-theme-surface);
          padding: 24px;
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
          background: var(--mdc-theme-surface);
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

        .blue {
          background-color: blue;
        }

        div {
          padding: 12px 8px;
        }
      `
    ];
  }

  render() {
    
    return html`
      <mwc-formfield label="Enable dark theme">
         <mwc-switch @click="${(e) => {
            if (e.target.selected) { 
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

        <dw-surface elevation=1>
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

      <div class="layout wrapper bg-surface">
        <div>Without box-shadow </div>
        <dw-surface elevation=0 no-box-shadow >
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 no-box-shadow>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 no-box-shadow>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 no-box-shadow>
          <div class="square">3dp</div>
        </dw-surface>

        <dw-surface elevation=4 no-box-shadow>
          <div class="square">4dp</div>
        </dw-surface>

        <dw-surface elevation=6 no-box-shadow>
          <div class="square">6dp</div>
        </dw-surface>

        <dw-surface elevation=8 no-box-shadow>
          <div class="square">8dp</div>
        </dw-surface>

        <dw-surface elevation=12 no-box-shadow>
          <div class="square">12dp</div>
        </dw-surface>

        <dw-surface elevation=16 no-box-shadow>
          <div class="square">16dp</div>
        </dw-surface>

        <dw-surface elevation=24 no-box-shadow>
          <div class="square">24dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface blue">
        <div>Transparent background for 0 elevation </div>
        <dw-surface elevation=0 transparent>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 transparent>
          <div class="square">1dp</div>
        </dw-surface>
      </div>
      
      <div class="layout wrapper bg-surface">
        <div>Interactive surface (focus and hover)</div>
        <dw-surface elevation=0 interactive tabindex="0">
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 interactive tabindex="0">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 interactive tabindex="0">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 interactive tabindex="0">
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Interactive surface (focus and hover) in primary </div>
        <dw-surface elevation=0 bg="primary" interactive tabindex="0" >
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="primary" interactive tabindex="0">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="primary" interactive tabindex="0">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="primary" interactive tabindex="0">
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Interactive surface (focus and hover) in secondary </div>
        <dw-surface elevation=0 bg="secondary" interactive tabindex="0">
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="secondary" interactive tabindex="0">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="secondary" interactive tabindex="0">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="secondary" interactive tabindex="0">
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Interactive surface (focus and hover) in errorr</div>
        <dw-surface elevation=0 bg="error" interactive tabindex="0">
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="error" interactive tabindex="0">
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="error" interactive tabindex="0">
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="error" interactive tabindex="0">
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Selected selected state</div>
        <dw-surface elevation=0 selected>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 selected>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 selected>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 selected>
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Selected selected state in primary </div>
        <dw-surface elevation=0 bg="primary" selected>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="primary" selected>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="primary" selected>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="primary" selected>
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Selected surface state in secondary </div>
        <dw-surface elevation=0 bg="secondary" selected>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="secondary" selected>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="secondary" selected>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="secondary" selected>
          <div class="square">3dp</div>
        </dw-surface>
      </div>
      
      <div class="layout wrapper bg-surface">
        <div>Selected surface state in errorr</div>
        <dw-surface elevation=0 bg="error" selected>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="error" selected>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="error" selected>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="error" selected>
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Activated selected state</div>
        <dw-surface elevation=0 activated>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 activated>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 activated>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 activated>
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Activated selected state in primary </div>
        <dw-surface elevation=0 bg="primary" activated>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="primary" activated>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="primary" activated>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="primary" activated>
          <div class="square">3dp</div>
        </dw-surface>
      </div>

      <div class="layout wrapper bg-surface">
        <div>Activated surface state in secondary </div>
        <dw-surface elevation=0 bg="secondary" activated>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="secondary" activated>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="secondary" activated>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="secondary" activated>
          <div class="square">3dp</div>
        </dw-surface>
      </div>
      
      <div class="layout wrapper bg-surface">
        <div>Activated surface state in errorr</div>
        <dw-surface elevation=0 bg="error" activated>
          <div class="square">0dp</div>
        </dw-surface>

        <dw-surface elevation=1 bg="error" activated>
          <div class="square">1dp</div>
        </dw-surface>

        <dw-surface elevation=2 bg="error" activated>
          <div class="square">2dp</div>
        </dw-surface>

        <dw-surface elevation=3 bg="error" activated>
          <div class="square">3dp</div>
        </dw-surface>

        
      </div>

      <div style="display: flex; height: 400px;">
        <dw-surface elevation=3 interactive style="width: 300px;">
          <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </div>
        </dw-surface>
      </div>

      <extended-surface-demo class="bg-surface" elevation="4" interactive tabindex="0"></extended-surface-demo>
    `;
  }

}

customElements.define('dw-surface-demo', DwSurfaceDemo);
