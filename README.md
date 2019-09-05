# dw-surface

## Usage
There are 2 different ways to use it:
1. Extend `DWSurface` and specify `_contentTemplate()`. (Most used case)
2. Use `dw-surface` in local dom of any other element & provide it's content as light dom (`slot`). (Rare used case)

## properties
- `bg`. In which color background should be rendered. 
Possible values: `primary`, `secondary`, `error` and `surface`. Default value is `surface`.
- `elevation` (Number). Default value `0`. drop-shadow changes based on this. 
In dark-theme opacity of the background is changed on different elevation. Those can be configured through custom css
properties.

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

> It's already been declrared with default values of material style in 
> [`material-styles`](https://github.com/DreamworldSolutions/material-styles). 
> So, In most cases you don't need to customize them unless you really intended to do so.


