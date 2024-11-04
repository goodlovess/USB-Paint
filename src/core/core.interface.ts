/*
 * @Author: haolian
 * @Date: 2024-10-22 14:01:01
 * @LastEditors: haolian
 * @LastEditTime: 2024-11-03 16:57:59
 * @Description: Do not edit
 * @FilePath: /USB-Paint/src/core/core.interface.ts
 */

export interface USBPaintOptionsType {
  target?: string | HTMLElement;
  scale?: number;
  lineOptions?: LineOptionsType;
  showTools?: boolean;
  toolsConfig?: ToolsConfigType;
  showScale?: boolean;
  background?: string;
}

export interface LineOptionsType {
  lineWidth?: number;
  lineColor?: string;
  lineAlpha?: number;
  lineSmooth?: number;
  lineThin?: number;
  lineStream?: number;
  lineStart?: number;
  lineEnd?: number;
}

export interface ToolsConfigType {
  tools?: string[] | "all"; // 这里的类型可以根据具体工具的类型来定义
  position?: "left" | "right" | "top" | "bottom" | AxisType | string;
  iconsConfig?: {
    size?: number;
    width?: number;
    color?: string;
    fill?: string;
  };
  backgroud?: {
    color?: string;
    border?: string;
    radius?: number;
  };
}

export interface AxisType {
  x: number;
  y: number;
  direction?: "column" | "row";
}
