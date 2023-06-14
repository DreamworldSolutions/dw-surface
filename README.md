# dw-surface

## Usage

There are 2 different ways to use it:

1. Extend `DWSurface` and specify `_contentTemplate()`. (Most used case)
2. Use `dw-surface` in local dom of any other element & provide it's content as light dom (`slot`). (Rare used case)
3. For Scroll, use the custom CSS property `--dw-surface-scroller-max-height` or `--dw-surface-scroller-height`.
    - __Note:__ To enable scrolling, it is recommended to always use the custom CSS property instead of directly set `max-height` or `height` on `DWSurface`. When you need scroll and padding both at the same time than also use `--dw-surface-scroller-padding` for padding.
## properties

| Name          | Type      | Default   | Description                                                                                                                                                                    |
| ------------- | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bg`          | `String`  | `surface` | In which color background should be rendered. Possible values: `primary`, `secondary`, `error` and `surface`.                                                                  |
| `elevation`   | `Number`  | `0`       | Drop-shadow changes based on this. In the dark-theme, the opacity of the background is changed on different elevations. Those can be configured through custom CSS properties. |
| `transparent` | `Boolean` | `false`   | For a transparent background, set `true` elevation to `0`.                                                                                                                     |
| `interactive` | `Boolean` | `false`   | Set `true` to enable `hover`, `focus` and `ripple` effects.                                                                                                                    |
| `selected`    | `Boolean` | `false`   | Set to `true` to show the surface selected.                                                                                                                                    |
| `activated`   | `Boolean` | `false`   | Set to `true` to display the surface in an activated state.                                                                                                                    |

## Custom CSS Properties

- `--dw-surface-overlay-color`
- `--dw-surface-overlay-opacitiy-elevation-1`
- `--dw-surface-overlay-opacitiy-elevation-2`
- `--dw-surface-overlay-opacitiy-elevation-3`
- `--dw-surface-overlay-opacitiy-elevation-4`
- `--dw-surface-overlay-opacitiy-elevation-6`
- `--dw-surface-overlay-opacitiy-elevation-8`
- `--dw-surface-overlay-opacitiy-elevation-12`
- `--dw-surface-overlay-opacitiy-elevation-16`
- `--dw-surface-overlay-opacitiy-elevation-24`
- `--dw-surface-ripple-z-index`
- `--dw-surface-scroller-height`
- `--dw-surface-scroller-max-height`
- `--dw-surface-scroller-padding`

> It's already been declrared with default values of material style in
> [`material-styles`](https://github.com/DreamworldSolutions/material-styles).
> So, In most cases you don't need to customize them unless you really intended to do so.
