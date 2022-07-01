import { css } from 'lit-element';

export const interactiveStyle = css`

  :host([interactive]) .overlay {
    pointer-events: auto;
  }

  :host([disabled]) .overlay {
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.38);
  }
  /* STARTS: overlay styles for hover */
  :host(:not([disabled])[interactive]:hover) .overlay {
    background-color: rgba(0, 0, 0, 0.04)
  }

  :host(:not([disabled])[interactive][bg="primary"]:hover) .overlay,
  :host(:not([disabled])[interactive][bg="secondary"]:hover) .overlay,
  :host(:not([disabled])[interactive][bg="error"]:hover) .overlay {
    background-color: rgba(255, 255, 255, 0.08)
  }

  /* STARTS: overlay styles for focus */
  :host(:not([disabled])[interactive]:focus) .overlay {
    background-color: rgba(0, 0, 0, 0.12)
  }

  :host(:not([disabled])[interactive][bg="primary"]:focus) .overlay,
  :host(:not([disabled])[interactive][bg="secondary"]:focus) .overlay,
  :host(:not([disabled])[interactive][bg="error"]:focus) .overlay {
    background-color: rgba(255, 255, 255, 0.24)
  }

  /* STARTS: overlay styles for hover with focus */
  :host(:not([disabled])[interactive]:focus:hover) .overlay {
    background-color: rgba(0, 0, 0, 0.16)
  }

  :host(:not([disabled])[interactive][bg="primary"]:focus:hover) .overlay,
  :host(:not([disabled])[interactive][bg="secondary"]:focus:hover) .overlay,
  :host(:not([disabled])[interactive][bg="error"]:focus:hover) .overlay {
    background-color: rgba(255, 255, 255, 0.32)
  }
`;