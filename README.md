# @dreamworld/dw-surface

A Material Design surface/card Lit Web Component (`<dw-surface>`) providing elevation shadows, background color variants, interactive states (hover, focus, ripple), and dark-theme overlay tinting.

---

## 1. User Guide

### Installation & Setup

Install via npm/yarn:

```sh
yarn add @dreamworld/dw-surface
```

**Peer dependencies** (must be resolvable in your project):

| Package | Version |
|---|---|
| `@dreamworld/dw-ripple` | `^3.0.0` |
| `@dreamworld/material-styles` | `^3.2.4` |
| `@dreamworld/pwa-helpers` | `^1.13.1` |

**Run the demo locally:**

```sh
yarn start
# Runs: wds --node-resolve --app-index demo/index.html --open --watch
```

---

### Basic Usage

There are two consumption patterns.

#### Pattern 1 — Light DOM slot (direct use)

Import the component and place content inside the element. Content is rendered via an unnamed `<slot>`.

```html
<script type="module">
  import '@dreamworld/dw-surface';
</script>

<dw-surface elevation="2">
  <div>Card content goes here.</div>
</dw-surface>
```

#### Pattern 2 — Class extension (recommended for component authors)

Extend `DwSurface` and override the `_getContentTemplate` getter to provide content in Shadow DOM. Call `DwSurface.styles` in your static `styles` getter to inherit all base styles.

```js
import { html, css } from 'lit-element';
import { DwSurface } from '@dreamworld/dw-surface';

class MyCard extends DwSurface {
  static get styles() {
    return [
      DwSurface.styles,
      css`
        :host {
          padding: 24px;
          width: 288px;
        }
      `,
    ];
  }

  get _getContentTemplate() {
    return html`
      <h2>My Card Title</h2>
      <p>Elevation: ${this.elevation}</p>
      ${this.interactive ? html`<p>Interactive mode active</p>` : ''}
    `;
  }
}

customElements.define('my-card', MyCard);
```

```html
<my-card elevation="4" interactive tabindex="0"></my-card>
```

---

### API Reference

#### Properties / Attributes

All properties are reflected to their corresponding HTML attributes.

| Name | Type | Default | Description |
|---|---|---|---|
| `bg` | `String` | `"surface"` | Background color variant. Accepted values: `"surface"`, `"primary"`, `"secondary"`, `"error"`. |
| `elevation` | `Number` | `0` | Z-depth level. Controls `box-shadow` via Material elevation tokens. Valid values: `0`, `1`, `2`, `3`, `4`, `6`, `8`, `12`, `16`, `24`. |
| `transparent` | `Boolean` | `false` | When `true` **and** `elevation` is `0`, the background is rendered transparent. Has no effect when `elevation > 0`. |
| `interactive` | `Boolean` | `false` | Enables hover overlay, keyboard focus overlay, and ripple effect on the surface. Set `tabindex="0"` on the element to make it keyboard-focusable. |
| `selected` | `Boolean` | `false` | Renders a persistent selected-state overlay in `--mdc-theme-primary` color. |
| `activated` | `Boolean` | `false` | Renders a persistent activated-state overlay in `--mdc-theme-primary` color. |

#### HTML-only Attribute

| Attribute | Description |
|---|---|
| `no-box-shadow` | When present, suppresses the `box-shadow` that would otherwise be applied by `elevation`. Handled entirely via CSS attribute selector; not a declared Lit property. |

#### Events

This component dispatches **no custom events**. It listens internally to the native `mousedown` and `blur` DOM events to manage focus-ring suppression (see [Architecture](#architecture-overview)).

#### Slots

| Slot | Description |
|---|---|
| *(default)* | Content rendered inside the `.scroller` section. Only used in Pattern 1 (direct use). In Pattern 2 (extension), override `_getContentTemplate` instead. |

---

### CSS Custom Properties

#### Elevation Overlay (dark-theme tinting)

These control the opacity of the white overlay applied over the surface in dark themes to lighten elevated surfaces per Material Design spec. Default values are declared in `@dreamworld/material-styles` and rarely need overriding.

| Property | Applies at elevation |
|---|---|
| `--dw-surface-overlay-color` | All elevations (color of the overlay) |
| `--dw-surface-overlay-opacitiy-elevation-1` | `elevation="1"` |
| `--dw-surface-overlay-opacitiy-elevation-2` | `elevation="2"` |
| `--dw-surface-overlay-opacitiy-elevation-3` | `elevation="3"` |
| `--dw-surface-overlay-opacitiy-elevation-4` | `elevation="4"` |
| `--dw-surface-overlay-opacitiy-elevation-6` | `elevation="6"` |
| `--dw-surface-overlay-opacitiy-elevation-8` | `elevation="8"` |
| `--dw-surface-overlay-opacitiy-elevation-12` | `elevation="12"` |
| `--dw-surface-overlay-opacitiy-elevation-16` | `elevation="16"` |
| `--dw-surface-overlay-opacitiy-elevation-24` | `elevation="24"` |
| `--dw-surface-overlay-border-radius` | Border radius of both overlay divs |

> **Note:** The property names contain a typo (`opacitiy`) that is present in the source code. Use the exact spelling above.

#### Interactive State Overlay Opacities

These customize the opacity of hover, focus, selected, and activated state overlays. Default values are shown in parentheses. The applicable color token (`background-color`) is also listed.

| Property | Default | State | `bg` variant |
|---|---|---|---|
| `--mdc-theme-on-surface-overlay-opacity-hover` | `0.04` | hover | `surface` |
| `--mdc-theme-on-primary-overlay-opacity-hover` | `0.08` | hover | `primary` |
| `--mdc-theme-on-secondary-overlay-opacity-hover` | `0.08` | hover | `secondary` |
| `--mdc-theme-on-error-overlay-opacity-hover` | `0.08` | hover | `error` |
| `--mdc-theme-on-surface-overlay-opacity-focus` | `0.12` | focus | `surface` |
| `--mdc-theme-on-primary-overlay-opacity-focus` | `0.24` | focus | `primary` |
| `--mdc-theme-on-secondary-overlay-opacity-focus` | `0.24` | focus | `secondary` |
| `--mdc-theme-on-error-overlay-opacity-focus` | `0.24` | focus | `error` |
| `--mdc-theme-on-surface-overlay-opacity-selected` | `0.08` | selected | `surface` |
| `--mdc-theme-on-primary-overlay-opacity-selected` | `0.16` | selected | `primary` |
| `--mdc-theme-on-secondary-overlay-opacity-selected` | `0.16` | selected | `secondary` |
| `--mdc-theme-on-error-overlay-opacity-selected` | `0.16` | selected | `error` |
| `--mdc-theme-on-surface-overlay-opacity-activated` | `0.08` | activated | `surface` |
| `--mdc-theme-on-primary-overlay-opacity-activated` | `0.24` | activated | `primary` |
| `--mdc-theme-on-secondary-overlay-opacity-activated` | `0.24` | activated | `secondary` |
| `--mdc-theme-on-error-overlay-opacity-activated` | `0.24` | activated | `error` |
| `--mdc-theme-on-surface-overlay-opacity-activated-selected` | `0.12` | activated + selected | `surface` |
| `--mdc-theme-on-surface-overlay-opacity-activated-selected-hover` | `0.16` | activated + selected + hover | `surface` |

#### MDC Theme Tokens (consumed but not declared by this component)

These must be provided by the host application or by `@dreamworld/material-styles`:

```
--mdc-theme-surface
--mdc-theme-primary
--mdc-theme-secondary
--mdc-theme-error
--mdc-theme-on-surface
--mdc-theme-on-primary
--mdc-theme-on-secondary
--mdc-theme-on-error
--mdc-elevation--z0  (through --mdc-elevation--z24)
```

#### Ripple Z-Index

| Property | Description |
|---|---|
| `--dw-surface-ripple-z-index` | Controls the `z-index` of the `<dw-ripple>` element rendered inside the surface when `interactive` is set. |

---

### Advanced Usage

#### Interactive Surface with Keyboard Focus

When using `interactive`, add `tabindex="0"` so the element is reachable by keyboard:

```html
<dw-surface elevation="1" interactive tabindex="0">
  <div>Click or tab to me</div>
</dw-surface>
```

The focus ring overlay is suppressed after a mouse click (restored on `blur`). Keyboard navigation always shows the focus overlay.

#### Transparent Surface

`transparent` only takes effect when `elevation="0"`:

```html
<!-- Background becomes transparent -->
<dw-surface elevation="0" transparent>
  <div>Floating content</div>
</dw-surface>

<!-- transparent has NO effect here; bg is still applied -->
<dw-surface elevation="1" transparent>
  <div>Still has surface background</div>
</dw-surface>
```

#### Suppressing Box Shadow

Use the `no-box-shadow` attribute to retain elevation overlay tinting (dark theme) without the `box-shadow`:

```html
<dw-surface elevation="4" no-box-shadow>
  <div>Elevated tint, no shadow</div>
</dw-surface>
```

#### Combined Selected + Activated State

Both `selected` and `activated` can be set simultaneously. The CSS applies a combined overlay with dedicated opacity tokens:

```html
<dw-surface selected activated>
  <div>Selected and activated</div>
</dw-surface>
```

---

## 2. Developer Guide / Architecture

### Architecture Overview

`DwSurface` is a [`LitElement`](https://lit.dev/) custom element following the **Web Components v1** standard (Custom Elements + Shadow DOM).

#### Rendered DOM Structure

```
<dw-surface> (shadow root)
  ├── <dw-ripple disableHover>   ← only when [interactive]
  ├── <div class="overlay fit">  ← dark-theme elevation tinting
  ├── <section class="scroller">
  │     └── <slot> / _getContentTemplate content
  └── <div class="overlay1 fit"> ← interactive state overlay (hover/focus/selected/activated)
```

#### Design Patterns

| Pattern | Where used |
|---|---|
| **Template Method** | `_getContentTemplate` getter — base class returns `<slot>`, subclasses override to provide Shadow DOM content |
| **Attribute-reflected properties** | All public properties use `reflect: true`, enabling pure-CSS state machine via attribute selectors |
| **CSS State Machine** | `interactive-Style.js` drives all visual state transitions entirely in CSS using `:host([attr])` selectors — no JS state logic for hover/focus/selected/activated overlays |
| **Separation of Concerns** | `interactiveStyle` is a separate CSS module imported and composed into the component styles array |

#### Overlay Architecture

Two absolutely-positioned `div.fit` layers sit over the content:

- **`.overlay`** — Handles dark-theme elevation tinting. Opacity is set per elevation level via `--dw-surface-overlay-opacitiy-elevation-N` custom properties. Invisible (`opacity: 0`) in light theme unless customized.
- **`.overlay1`** — Handles all interactive state overlays (hover, focus, selected, activated). Driven entirely by CSS rules in `interactive-Style.js` reacting to reflected HTML attributes.

Both layers use `pointer-events: none` and are not part of the tab order.

#### Focus Ring Suppression

Mouse interactions should not show the focus ring; keyboard navigation should. This is implemented without JS state management for the visual effect:

1. `connectedCallback` attaches `mousedown` → sets `_noFocusEffect = true` → reflects as `[no-focus-effect]` attribute.
2. `disconnectedCallback` removes both listeners.
3. `blur` event → sets `_noFocusEffect = false` → removes `[no-focus-effect]` attribute.
4. CSS in `interactive-Style.js` excludes the focus overlay when `[no-focus-effect]` is present:
   ```css
   :host(:not([activated]):not([no-focus-effect])[interactive]:focus:not(:focus-within)) .overlay1 { ... }
   ```

#### Ripple

`<dw-ripple disableHover>` is conditionally rendered only when `interactive=true`. The `disableHover` flag means the ripple component itself does not render hover effects — hover is handled exclusively by the `.overlay1` CSS layer. The ripple fires only on pointer/click interaction.

#### Module Entry Point

```
dw-surface.js          ← exports class DwSurface, defines <dw-surface>
interactive-Style.js   ← exports interactiveStyle (CSS tagged template)
```
