import { css } from 'lit-element';

export const interactiveStyle = css`

  @media (hover: hover) {
    /* STARTS: overlay styles for hover state */
    :host([bg="primary"]:hover) {
      --mdc-ripple-hover-opacity: var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08);
    }

    :host([bg="secondary"]:hover) {
      --mdc-ripple-hover-opacity: var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08);
    }

    :host([bg="error"]:hover) {
      --mdc-ripple-hover-opacity: var(--mdc-theme-on-error-overlay-opacity-hover, 0.08);
    }

    /* STARTS: overlay styles for focus with hover state */
    :host(:focus:hover) {
      --mdc-ripple-focus-opacity: calc(var(--mdc-theme-on-surface-overlay-opacity-focus, 0.12) + var(--mdc-theme-on-surface-overlay-opacity-hover, 0.04))
    }

    :host([bg="primary"]:focus:hover) {
      --mdc-ripple-focus-opacity: calc(var(--mdc-theme-on-primary-overlay-opacity-focus, 0.24) + var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08));
    }

    :host([bg="secondary"]:focus:hover) {
      --mdc-ripple-focus-opacity: calc(var(--mdc-theme-on-secondary-overlay-opacity-focus, 0.24) + var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08));
    }

    :host([bg="error"]:focus:hover) {
      --mdc-ripple-focus-opacity: calc(var(--mdc-theme-on-error-overlay-opacity-focus, 0.24) + var(--mdc-theme-on-error-overlay-opacity-hover, 0.08));
    }

    /* STARTS: overlay styles for selected with hover state */
    :host([selected][bg="primary"]:hover) {
      --mdc-ripple-hover-opacity: calc(var(--mdc-theme-on-primary-overlay-opacity-selected, 0.16) + var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08));
    }

    :host([selected][bg="secondary"]:hover) {
      --mdc-ripple-hover-opacity: calc(var(--mdc-theme-on-secondary-overlay-opacity-selected, 0.16) + var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08));
    }

    :host([selected][bg="error"]:hover) {
      --mdc-ripple-hover-opacity: calc(var(--mdc-theme-on-error-overlay-opacity-selected, 0.16) + var(--mdc-theme-on-error-overlay-opacity-hover, 0.08));
    }

    /* STARTS: overlay styles for activated with hover state */
    :host([activated][bg="primary"]:hover) {
      --mdc-ripple-hover-opacity: calc(var(--mdc-theme-on-primary-overlay-opacity-activated, 0.24) + var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08));
    }

    :host([activated][bg="secondary"]:hover) {
      --mdc-ripple-hover-opacity: calc(var(--mdc-theme-on-secondary-overlay-opacity-activated, 0.24) + var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08));
    }

    :host([activated][bg="error"]:hover) {
      --mdc-ripple-hover-opacity: calc(var(--mdc-theme-on-error-overlay-opacity-activated, 0.24) + var(--mdc-theme-on-error-overlay-opacity-hover, 0.08));
    }
  }

  /* STARTS: overlay styles for focus state */
  :host([bg="primary"]:focus) {
    --mdc-ripple-focus-opacity: var(--mdc-theme-on-primary-overlay-opacity-focus, 0.24);
  }

  :host([bg="secondary"]:focus) {
    --mdc-ripple-focus-opacity: var(--mdc-theme-on-secondary-overlay-opacity-focus, 0.24);
  }

  :host([bg="error"]:focus) {
    --mdc-ripple-focus-opacity: var(--mdc-theme-on-error-overlay-opacity-focus, 0.24);
  }

  /* STARTS: overlay styles for selected state */
  :host([selected]) .overlay1 {
    background-color: var(--mdc-theme-primary);
    opacity: var(--mdc-theme-on-surface-overlay-opacity-selected, 0.08);
  }

  :host([selected][bg="primary"]) .overlay1 {
    background-color: var(--mdc-theme-on-primary);
    opacity: var(--mdc-theme-on-primary-overlay-opacity-selected, 0.16);
  }

  :host([selected][bg="secondary"]) .overlay1 {
    background-color: var(--mdc-theme-on-secondary);
    opacity: var(--mdc-theme-on-secondary-overlay-opacity-selected, 0.16);
  }

  :host([selected][bg="error"]) .overlay1 {
    background-color: var(--mdc-theme-on-error);
    opacity: var(--mdc-theme-on-error-overlay-opacity-selected, 0.16);
  }

  /* STARTS: overlay styles for activated state */
  :host([activated][bg="surface"]) {
    color: var(--mdc-theme-primary);
  }
  
  :host([activated]) .overlay1 {
    background-color: var(--mdc-theme-primary);
    opacity: var(--mdc-theme-on-surface-overlay-opacity-activated, 0.12);
  }

  :host([activated][bg="primary"]) .overlay1 {
    background-color: var(--mdc-theme-on-primary);
    opacity: var(--mdc-theme-on-primary-overlay-opacity-activated, 0.24);
  }

  :host([activated][bg="secondary"]) .overlay1 {
    background-color: var(--mdc-theme-on-secondary);
    opacity: var(--mdc-theme-on-secondary-overlay-opacity-activated, 0.24);
  }

  :host([activated][bg="error"]) .overlay1 {
    background-color: var(--mdc-theme-on-error);
    opacity: var(--mdc-theme-on-error-overlay-opacity-activated, 0.24);
  }
`;