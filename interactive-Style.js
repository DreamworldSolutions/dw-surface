import { css } from 'lit-element';

export const interactiveStyle = css`

  :host([disabled]) {
    pointer-events: none;
    color: var(--mdc-theme-text-disabled-on-surface);
  }

  :host([disabled][bg="primary"]),
  :host([disabled][bg="secondary"]),
  :host([disabled][bg="error"]) {
    background-color: var(--mdc-theme-surface);
  }

  /* STARTS: overlay styles for hover state */
  :host(:not([disabled])[interactive]) .overlay {
    pointer-events: auto;
  }

  :host([interactive]:hover) .overlay {
    background-color: rgba(0, 0, 0, 0.04);
  }

  :host([interactive][bg="primary"]:hover) .overlay,
  :host([interactive][bg="secondary"]:hover) .overlay,
  :host([interactive][bg="error"]:hover) .overlay {
    background-color: rgba(255, 255, 255, 0.08);
  }

  /* STARTS: overlay styles for focus state */
  :host([interactive]:focus) .overlay {
    background-color: rgba(0, 0, 0, 0.12);
  }

  :host([interactive][bg="primary"]:focus) .overlay,
  :host([interactive][bg="secondary"]:focus) .overlay,
  :host([interactive][bg="error"]:focus) .overlay {
    background-color: rgba(255, 255, 255, 0.24);
  }

  /* STARTS: overlay styles for hover with focus state */
  :host([interactive]:focus:hover) .overlay {
    background-color: rgba(0, 0, 0, 0.16);
  }

  :host([interactive][bg="primary"]:focus:hover) .overlay,
  :host([interactive][bg="secondary"]:focus:hover) .overlay,
  :host([interactive][bg="error"]:focus:hover) .overlay {
    background-color: rgba(255, 255, 255, 0.32);
  }

  /* STARTS: overlay styles for activated state */
  :host(:not([disabled])[activated]) {
    color: var(--mdc-theme-primary);
  }
  
  :host(:not([disabled])[activated]) .overlay {
    background-color: var(--mdc-theme-primary);
    opacity: 12%;
  }

  :host(:not([disabled])[activated][bg="primary"]),
  :host(:not([disabled])[activated][bg="secondary"]),
  :host(:not([disabled])[activated][bg="error"]) {
    color: var(--mdc-theme-surface);
  }

  :host(:not([disabled])[activated][bg="primary"]) .overlay,
  :host(:not([disabled])[activated][bg="secondary"]) .overlay,
  :host(:not([disabled])[activated][bg="error"]) .overlay {
    background-color: var(--mdc-theme-surface);
    opacity: 24%;
  }

  /* STARTS: overlay styles for selected state */

  :host(:not([disabled])[selected]) .overlay {
    pointer-events: auto;
  }

  :host(:not([disabled])[selected]) {
    color: var(--mdc-theme-primary);
  }
  
  :host(:not([disabled])[selected]) .overlay {
    background-color: var(--mdc-theme-primary);
    opacity: 8%;
  }

  :host([selected]:hover) .overlay {
    background-color: var(--mdc-theme-primary);
    opacity: 12%;
  }

  :host(:not([disabled])[selected][bg="primary"]),
  :host(:not([disabled])[selected][bg="secondary"]),
  :host(:not([disabled])[selected][bg="error"]) {
    color: var(--mdc-theme-surface);
  }

  :host(:not([disabled])[selected][bg="primary"]) .overlay,
  :host(:not([disabled])[selected][bg="secondary"]) .overlay,
  :host(:not([disabled])[selected][bg="error"]) .overlay {
    background-color: var(--mdc-theme-surface);
    opacity: 16%;
  }

  :host([selected][bg="primary"]:hover) .overlay,
  :host([selected][bg="secondary"]:hover) .overlay,
  :host([selected][bg="error"]:hover) .overlay {
    background-color: var(--mdc-theme-surface);
    opacity: 24%;
  }
`;