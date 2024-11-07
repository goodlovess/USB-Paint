English | [简体中文](./README_CN.md)

# USB-Paint

A universal (**Universal**), simple (**Simple**), and beautiful (**Beautiful**) **Hand-drawn style** painting tool component—**USB-Paint**.
You can think of it as a plug-and-play drawing panel tool, like the ubiquitous **USB** interface, which can be quickly integrated into any frontend project (native HTML, Vue, React, Svelte, Angular).

![](https://fastly.jsdelivr.net/gh/haolian93/picbed/readme/20241107103746.png)

# Features

- **Universal**: Supports multiple frontend frameworks, such as native HTML, Vue, React, Svelte, and Angular
- **Simple**: Clean page structure with no complex styles or logic
- **Beautiful**: Attractive UI design with multi-color/style options and customization support
- Hand-drawn style
- Supports various drawing tools, including brush, eraser, clear, and export image functions

# Installation & Usage

## Method 1: Using npm/yarn (Recommended)

### Installation

```node
npm install usb-paint
or
yarn add usb-paint
```

### Usage

```js
import USBPaint from "usb-paint";

new USBPaint({
  target: document.querySelector("#root"),
});
```

## Method 2: Using CDN, directly inserted into HTML

```html
<script src="usbdraw.js" type="text/javascript"></script>
<script>
  let a = new USBPaint({
    target: document.querySelector("#root"),
  });
</script>
```

# Parameter Details

## Parameter Example

```js
import USBPaint from "usb-paint";

new USBPaint({
  target: document.querySelector("#root"),
  lineOptions: {
    lineWidth: 8,
    lineColor: "red",
    lineAlpha: 1,
    lineSmooth: 1,
    lineThin: 0.6,
    lineStream: 1,
    lineStart: 0,
    lineEnd: 80,
  },
  showTools: true,
  toolsConfig: {
    tools: "all", // ["eraser", "paint", "trash", "export" ],
    position: {
      x: 400,
      y: 400,
      direction: "column", // column row
    },
    iconsConfig: {
      size: 20,
      width: 0.5,
      color: "red",
      fill: "black",
    },
    backgroud: {
      color: "blue",
      border: "1px solid red",
      radius: 10,
    },
  },
  background: "black",
});
```

![](https://fastly.jsdelivr.net/gh/haolian93/picbed/readme/usbpaint1.png)

## Primary Parameters

| Parameter   | Required | Type            | Default         | Description                                                             |
| ----------- | -------- | --------------- | --------------- | ----------------------------------------------------------------------- |
| target      | No       | HTMLElement     | body element    | Target container, can be a DOM element or CSS selector                  |
| lineOptions | No       | LineOptionsType | (Details below) | Configuration for brush line                                            |
| showTools   | No       | boolean         | false           | Show toolbar or not                                                     |
| toolsConfig | No       | ToolsConfigType | (Details below) | Toolbar configuration when `showTools` is `true`                        |
| background  | No       | string          | -               | Transparent by default; accepts Hex/RGB/HSL/HSB/color names (e.g., red) |

## Secondary Parameters

### LineOptionsType

| Parameter  | Required | Type   | Default | Description                                           |
| ---------- | -------- | ------ | ------- | ----------------------------------------------------- |
| lineWidth  | No       | number | 4       | Brush line width                                      |
| lineColor  | No       | string | #000    | Brush line color; accepts Hex/RGB/HSL/HSB/color names |
| lineAlpha  | No       | number | 1       | Brush line opacity                                    |
| lineSmooth | No       | number | 1       | Softness of the brush line edges                      |
| lineThin   | No       | number | 0.6     | Brush pressure's effect on stroke size                |
| lineStream | No       | number | 1       | Degree of stroke simplification                       |
| lineStart  | No       | number | 0–100   | Tapering at the start of the line                     |
| lineEnd    | No       | number | 0–100   | Tapering options at the end of the line               |

### ToolsConfigType

| Parameter   | Required | Type            | Default | Description                                                                                                           |
| ----------- | -------- | --------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| tools       | No       | string/ array   | all     | Toolbar tools; accepts any combination of ["eraser", "paint", "trash", "export"]; "[]" hides toolbar, "all" shows all |
| position    | No       | string/AxisType | top     | Toolbar position; accepts "left"/"right"/"top"/"bottom" or AxisType position data (detailed below)                    |
| iconsConfig | No       | object          | -       | Icon configuration for the toolbar                                                                                    |
| backgroud   | No       | object          | -       | Background configuration for the toolbar                                                                              |

## Tertiary Parameters

### toolsConfig.position (AxisType)

| Parameter | Required | Type   | Default | Description                       |
| --------- | -------- | ------ | ------- | --------------------------------- |
| x         | Yes      | number | -       | Horizontal coordinate (px)        |
| y         | Yes      | number | -       | Vertical coordinate (px)          |
| direction | Yes      | string | -       | Arrangement direction: row/column |

### toolsConfig.iconsConfig

| Parameter | Required | Type   | Default | Description                                                                         |
| --------- | -------- | ------ | ------- | ----------------------------------------------------------------------------------- |
| size      | No       | number | 20      | Icon size (px)                                                                      |
| width     | No       | number | 1.25    | Icon line width                                                                     |
| color     | No       | string | #000    | Icon line color; accepts Hex/RGB/HSL/HSB/color names                                |
| fill      | No       | string | none    | Icon fill color; accepts Hex/RGB/HSL/HSB/color names, "none" for no fill by default |

### toolsConfig.background

| Parameter | Required | Type   | Default                   | Description                                           |
| --------- | -------- | ------ | ------------------------- | ----------------------------------------------------- |
| color     | No       | string | #fff                      | Background color; accepts Hex/RGB/HSL/HSB/color names |
| border    | No       | string | 1px solid rgba(0,0,0,0.1) | Border (CSS format)                                   |
| radius    | No       | number | 10                        | Border radius                                         |

# Event Triggers

| Event Name    | Description       | Return Data |
| ------------- | ----------------- | ----------- |
| exportToImage | Export image data | base64      |
| eraserTool    | Eraser            | -           |
| freeDrawTool  | Drawing           | -           |
| clearTool     | Clear             | -           |

## Event Trigger Example

```js
import USBPaint from "usb-paint";

const usbPaint = new USBPaint();
// Trigger image export
usbPaint.exportToImage();
// Activate eraser tool
usbPaint.eraserTool();
// Activate drawing tool
usbPaint.freeDrawTool();
// Clear the canvas
usbPaint.clearTool();
```
