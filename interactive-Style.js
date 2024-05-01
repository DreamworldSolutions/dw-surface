import { css } from "@dreamworld/pwa-helpers/lit.js";

export const interactiveStyle = css`
  @media (hover: hover) {
    /* STARTS: overlay styles for hover state */
    :host([interactive]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-surface);
      opacity: var(--mdc-theme-on-surface-overlay-opacity-hover, 0.04);
    }

    :host([interactive][bg="primary"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-primary);
      opacity: var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08);
    }

    :host([interactive][bg="secondary"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-secondary);
      opacity: var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08);
    }

    :host([interactive][bg="error"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-error);
      opacity: var(--mdc-theme-on-error-overlay-opacity-hover, 0.08);
    }

    /* STARTS: overlay styles for focus with hover state */
    :host(:not([activated])[interactive]:focus:hover) .overlay1 {
      background-color: var(--mdc-theme-on-surface);
      opacity: calc(
        var(--mdc-theme-on-surface-overlay-opacity-focus, 0.12) +
          var(--mdc-theme-on-surface-overlay-opacity-hover, 0.04)
      );
    }

    :host([interactive][bg="primary"]:focus:hover) .overlay1 {
      background-color: var(--mdc-theme-on-primary);
      opacity: calc(
        var(--mdc-theme-on-primary-overlay-opacity-focus, 0.24) +
          var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08)
      );
    }

    :host([interactive][bg="secondary"]:focus:hover) .overlay1 {
      background-color: var(--mdc-theme-on-secondary);
      opacity: calc(
        var(--mdc-theme-on-secondary-overlay-opacity-focus, 0.24) +
          var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08)
      );
    }

    :host([interactive][bg="error"]:focus:hover) .overlay1 {
      background-color: var(--mdc-theme-on-error);
      opacity: calc(
        var(--mdc-theme-on-error-overlay-opacity-focus, 0.24) +
          var(--mdc-theme-on-error-overlay-opacity-hover, 0.08)
      );
    }

    /* STARTS: overlay styles for selected with hover state */
    :host([interactive][selected]:hover) .overlay1 {
      background-color: var(--mdc-theme-primary);
      opacity: calc(
        var(--mdc-theme-on-surface-overlay-opacity-selected, 0.08) +
          var(--mdc-theme-on-error-overlay-opacity-hover, 0.04)
      );
    }

    :host([interactive][selected][bg="primary"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-primary);
      opacity: calc(
        var(--mdc-theme-on-primary-overlay-opacity-selected, 0.16) +
          var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08)
      );
    }

    :host([interactive][selected][bg="secondary"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-secondary);
      opacity: calc(
        var(--mdc-theme-on-secondary-overlay-opacity-selected, 0.16) +
          var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08)
      );
    }

    :host([interactive][selected][bg="error"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-error);
      opacity: calc(
        var(--mdc-theme-on-error-overlay-opacity-selected, 0.16) +
          var(--mdc-theme-on-error-overlay-opacity-hover, 0.08)
      );
    }

    /* STARTS: overlay styles for activated with hover state */
    :host([activated]:hover) .overlay1 {
      background-color: var(--mdc-theme-primary);
      opacity: calc(
        var(--mdc-theme-on-surface-overlay-opacity-activated, 0.08) +
          var(--mdc-theme-on-surface-overlay-opacity-hover, 0.04)
      );
    }

    :host([activated][bg="primary"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-primary);
      opacity: calc(
        var(--mdc-theme-on-primary-overlay-opacity-activated, 0.24) +
          var(--mdc-theme-on-primary-overlay-opacity-hover, 0.08)
      );
    }

    :host([activated][bg="secondary"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-error);
      opacity: calc(
        var(--mdc-theme-on-secondary-overlay-opacity-activated, 0.24) +
          var(--mdc-theme-on-secondary-overlay-opacity-hover, 0.08)
      );
    }

    :host([activated][bg="error"]:hover) .overlay1 {
      background-color: var(--mdc-theme-on-error);
      opacity: calc(
        var(--mdc-theme-on-error-overlay-opacity-activated, 0.24) +
          var(--mdc-theme-on-error-overlay-opacity-hover, 0.08)
      );
    }
  }

  /* STARTS: overlay styles for focus state */
  :host(:not([activated]) :not([no-focus-effect])[interactive]:focus) .overlay1 {
    background-color: var(--mdc-theme-on-surface);
    opacity: var(--mdc-theme-on-surface-overlay-opacity-focus, 0.12);
  }

  :host([interactive][bg="primary"]:focus) .overlay1 {
    background-color: var(--mdc-theme-on-primary);
    opacity: var(--mdc-theme-on-primary-overlay-opacity-focus, 0.24);
  }

  :host([interactive][bg="secondary"]:focus) .overlay1 {
    background-color: var(--mdc-theme-on-error);
    opacity: var(--mdc-theme-on-secondary-overlay-opacity-focus, 0.24);
  }

  :host([interactive][bg="error"]:focus) .overlay1 {
    background-color: var(--mdc-theme-on-error);
    opacity: var(--mdc-theme-on-error-overlay-opacity-focus, 0.24);
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


  :host([activated]) .overlay1 {
    background-color: var(--mdc-theme-primary);
    opacity: var(--mdc-theme-on-surface-overlay-opacity-activated, 0.08);
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
