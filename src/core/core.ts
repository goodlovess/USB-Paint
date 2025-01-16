/*
 * @Author: haolian
 * @Date: 2024-10-22 14:01:01
 * @LastEditors: haolian
 * @LastEditTime: 2025-01-16 15:44:54
 * @Description: Do not edit
 * @FilePath: /USB-Paint/src/core/core.ts
 */
import Core from "./core.svelte";
import type { SvelteComponent } from "svelte";
import type { USBPaintOptionsType } from "./core.interface";

export class USBPaint {
  public option: USBPaintOptionsType = {};
  public isInited: boolean = false;

  protected mainInstance: SvelteComponent | undefined;

  constructor(opt?: USBPaintOptionsType) {
    this.option = opt || {};

    this.isInited = false;

    // try to init || 初始化
    const _onload = () => {
      if (this.isInited) {
        return;
      }
      this._initRun();
    };

    let _timer: NodeJS.Timeout;
    // check if document is ready || 轮训文档流状态
    const _pollingDocument = () => {
      if (!!document && document.readyState == "complete") {
        _timer && clearTimeout(_timer);
        _onload();
      } else {
        _timer = setTimeout(_pollingDocument, 10);
      }
    };
    // if document is ready, call onload || 如果文档已经准备好，立即调用onload
    if (document !== undefined) {
      if (document.readyState === "loading") {
        _timer = setTimeout(_pollingDocument, 10);
      } else {
        _onload();
      }
    } else {
      // if document does not exist, wait for it  || 如果文档不存在，等待它10ms轮训
      _timer = setTimeout(_pollingDocument, 10);
    }
  }

  // init || 初始化
  private _initRun(): void {
    this.isInited = true;
    // load element || 加载节点
    let target: HTMLElement;
    if (typeof this.option.target === "string") {
      target = document.querySelector(this.option.target) as HTMLElement;
    } else if (this.option.target instanceof HTMLElement) {
      target = this.option.target;
    }
    // @ts-ignore
    if (!(target instanceof HTMLElement)) {
      return;
    }
    let tools: string[] = [];
    if (this.option?.toolsConfig?.tools === "all") {
      tools = ["paint", "eraser", "trash", "export"]; //TODO:  "panel",
    } else if (this.option?.toolsConfig?.tools instanceof Array) {
      tools = this.option.toolsConfig.tools;
    }

    this.mainInstance = new Core({
      target: target, // 挂载点
      props: {
        parentDom: target,
        scale: this.option.scale || 10,
        lineOptions: {
          lineWidth: this.option?.lineOptions?.lineWidth || 4,
          lineColor: this.option?.lineOptions?.lineColor || "#000",
          lineAlpha: this.option?.lineOptions?.lineAlpha || 1,
          lineSmooth: this.option?.lineOptions?.lineSmooth || 1,
          lineThin: this.option?.lineOptions?.lineThin || 0.6,
          lineStream: this.option?.lineOptions?.lineStream || 1,
          lineStart: isNaN(this.option?.lineOptions?.lineStart) ? 0 : this.option?.lineOptions?.lineStart,
          lineEnd: isNaN(this.option?.lineOptions?.lineEnd) ? 100 : this.option?.lineOptions?.lineEnd,
        },
        showTools: !!this.option?.showTools,
        toolsConfig: {
          tools,
          position: this.option?.toolsConfig?.position || "top",
          iconsConfig: {
            size: this.option?.toolsConfig?.iconsConfig?.size || 20,
            width: this.option?.toolsConfig?.iconsConfig?.width || 1.25,
            color: this.option?.toolsConfig?.iconsConfig?.color || "#000",
            fill: this.option?.toolsConfig?.iconsConfig?.fill || "none",
          },
          backgroud: {
            color: this.option?.toolsConfig?.backgroud?.color || "#fff",
            border: this.option?.toolsConfig?.backgroud?.border || "1px solid rgba(0,0,0,0.1)",
            radius: this.option?.toolsConfig?.backgroud?.radius || 10,
          },
        },
        showScale: !!this.option?.showScale,
        background: this.option?.background,
      },
    });
  }

  // 获取canvas的图片数据（base64）
  public exportToImage(): string {
    const canvas = document.getElementById("usb-paint-canvas") as HTMLCanvasElement;
    if (canvas) {
      let imgType = "image/png";
      const imageData = canvas.toDataURL(imgType);
      return imageData;
    } else {
      return "";
    }
  }

  // 触发橡皮擦工具
  public eraserTool = () => {
    this.mainInstance?.handleSelectTool({
      detail: { tool: "eraser" },
    });
  };

  // 触发绘画工具
  public freeDrawTool = () => {
    this.mainInstance?.handleSelectTool({
      detail: { tool: "paint" },
    });
  };

  // 触发全部清除工具
  public clearTool = () => {
    this.mainInstance?.handleSelectTool({
      detail: { tool: "trash" },
    });
  };

  // 是否已经绘画了
  public isPaint = () => {
    return this.mainInstance?.isPaint();
  };
}
