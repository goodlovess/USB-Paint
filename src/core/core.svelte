<script lang="ts">
  import { onMount } from "svelte";
  import { getStroke } from "perfect-freehand";
  import type { LineOptionsType, ToolsConfigType } from "./core.interface";
  import Tools from "../components/tools.svelte";
  import { calcColorBrightness } from "../utils/calcColorBrightness";

  export let scale: number = 10;
  export let parentDom: HTMLElement;
  export let lineOptions: LineOptionsType;
  export let showTools: boolean;
  export let showScale: boolean;
  export let toolsConfig: ToolsConfigType;
  export let background: string | undefined;

  let usbdScale = `--USBD-SCALE: ${scale}px`;

  let canvasEl: HTMLCanvasElement | null;
  let ctx2d: CanvasRenderingContext2D;
  let isEraser: boolean = false;
  const eraserLineWidth: number = 25;
  let imgUrl: string = "";
  let colorBrightness: "white" | "black" = "white";

  let isPainted: boolean = false;

  onMount(() => {
    canvasEl = document.getElementById("usb-paint-canvas") as HTMLCanvasElement;
    if (canvasEl) {
      // 实例化canvas元素
      ctx2d = canvasEl.getContext("2d") as CanvasRenderingContext2D;
      transRatio(canvasEl, ctx2d);
      setCanvasBgc();
      freedomPaint();
    }
  });

  // 画笔工具
  const freedomPaint = () => {
    if (canvasEl && ctx2d) {
      colorBrightness = calcColorBrightness(canvasEl, ctx2d);
      let isDrawing = false; // 判断是否正在绘制
      let points: number[][] = [];

      ctx2d.globalCompositeOperation = "source-over";
      setPcCursor("paint");

      // 设置绘制样式
      if (lineOptions.lineColor) {
        ctx2d.fillStyle = lineOptions.lineColor;
      }
      if (lineOptions.lineAlpha) {
        ctx2d.globalAlpha = lineOptions.lineAlpha;
      }

      ctx2d.lineCap = "round";
      ctx2d.lineJoin = "round";
      ctx2d.imageSmoothingEnabled = true;

      // 开始绘制
      canvasEl.addEventListener("pointerdown", e => {
        e.preventDefault();
        isDrawing = true;
        points = [[e.offsetX, e.offsetY]];

        // 捕获指针事件，以便在指针移出画布时仍然能继续绘制
        canvasEl?.setPointerCapture(e.pointerId);
      });

      // 绘制过程
      canvasEl.addEventListener("pointermove", e => {
        e.preventDefault();
        if (!isDrawing) return; // 如果未按下鼠标，则跳过

        // 已经绘画了
        isPainted = true;

        points.push([e.offsetX, e.offsetY]);
        const pathData = getStroke(points, {
          simulatePressure: true,
          size: isEraser ? eraserLineWidth : lineOptions.lineWidth, // 线条宽度
          smoothing: lineOptions.lineSmooth, // 平滑度
          thinning: lineOptions.lineThin, // 线条随压力变化
          streamline: lineOptions.lineStream, // 线条流畅度
          start: { taper: lineOptions.lineStart }, // 开始处圆滑过渡
          end: { taper: lineOptions.lineEnd }, // 结束处圆滑过渡
          easing: t => Math.sin((t * Math.PI) / 2), // 缓动函数
        });
        ctx2d.beginPath();
        pathData.forEach(([x, y], index) => {
          if (index === 0) {
            ctx2d.moveTo(x, y);
          } else {
            ctx2d.lineTo(x, y);
          }
        });
        ctx2d.fill();
        ctx2d.closePath();
      });

      // 停止绘制
      canvasEl.addEventListener("pointerup", e => {
        e.preventDefault();
        isDrawing = false;
        canvasEl?.releasePointerCapture(e.pointerId); // 释放指针捕获
      });

      // 离开画布时停止绘制（可选，防止异常情况下未释放）
      canvasEl.addEventListener("pointerleave", e => {
        e.preventDefault();
        isDrawing = false;
      });
    }
  };

  // 橡皮工具
  const eraserTool = () => {
    if (background) {
      ctx2d.fillStyle = background;
      ctx2d.globalCompositeOperation = "source-over";
    } else {
      ctx2d.globalCompositeOperation = "destination-out";
    }
  };

  // 设置canvas的分辨率，使线条清晰
  let transRatio = (cvs: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const width = parentDom.offsetWidth;
    const height = parentDom.offsetHeight;
    const ratio = window.devicePixelRatio || 1;
    cvs.width = width * ratio;
    cvs.height = height * ratio;
    cvs.style.width = width + "px";
    cvs.style.height = height + "px";
    ctx.scale(ratio, ratio);
  };

  // 设置背景色
  const setCanvasBgc = () => {
    if (canvasEl && ctx2d && background) {
      ctx2d.save();
      ctx2d.globalAlpha = 1;
      ctx2d.fillStyle = background;
      ctx2d.fillRect(0, 0, canvasEl.width, canvasEl.height);
      ctx2d.restore();
    }
  };

  // 选择工具后操作
  export const handleSelectTool = (event: { detail: { tool: string } }) => {
    let tool = event.detail.tool;
    isEraser = false;
    setPcCursor(tool);
    switch (tool) {
      case "paint":
        freedomPaint();
        break;
      case "eraser":
        isEraser = true;
        eraserTool();
        break;
      case "trash":
        if (canvasEl && ctx2d) {
          if (background) {
            setCanvasBgc();
          } else {
            ctx2d.clearRect(0, 0, canvasEl.width, canvasEl.height);
          }
          isPainted = false;
        }
        break;
      case "export":
        canvasEl && exportToFile(canvasEl);
        break;
      default:
        break;
    }
  };

  // 设置pc端的鼠标样式
  const setPcCursor = (type: string) => {
    if (!canvasEl) return;
    switch (type) {
      case "paint":
        const paintIcon =
          colorBrightness == "white"
            ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItZWRpdC0yIj48cGF0aCBkPSJNMTcgM2EyLjgyOCAyLjgyOCAwIDEgMSA0IDRMNy41IDIwLjUgMiAyMmwxLjUtNS41TDE3IDN6Ij48L3BhdGg+PC9zdmc+"
            : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWVkaXQtMiI+PHBhdGggZD0iTTE3IDNhMi44MjggMi44MjggMCAxIDEgNCA0TDcuNSAyMC41IDIgMjJsMS41LTUuNUwxNyAzeiI+PC9wYXRoPjwvc3ZnPg==";
        canvasEl.style.cursor = `url(${paintIcon}) 0 20, auto`;
        break;
      case "eraser":
        let eraserIcon =
          colorBrightness == "white"
            ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiPjwvY2lyY2xlPjwvc3ZnPg=="
            : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNpcmNsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiPjwvY2lyY2xlPjwvc3ZnPg==";
        canvasEl.style.cursor = `url(${eraserIcon}) 0 20, auto`;
        break;
      default:
        canvasEl.style.cursor = "default";
        break;
    }
  };

  // 导出为图片文件
  const exportToFile = (canvas: HTMLCanvasElement) => {
    canvas.toBlob(blob => {
      if (!blob) return;
      // 创建一个URL对象，指向Blob数据
      const url = URL.createObjectURL(blob);

      // 创建一个隐藏的下载链接
      const link = document.createElement("a");
      link.href = url;
      link.download = "canvas-image.png"; // 设置下载的文件名

      // 触发点击事件下载图片
      link.click();

      // 释放URL对象
      URL.revokeObjectURL(url);
    }, "image/png"); // 指定图片格式为PNG
  };

  export const isPaint = () => {
    return isPainted;
  };
</script>

<div style={usbdScale} class="usb-paint-container">
  {#if showTools}
    <Tools {toolsConfig} on:selectTool={handleSelectTool} />
  {/if}
  <canvas id="usb-paint-canvas" style="touch-action: none;"></canvas>
  <img src={imgUrl} style="height: 200px;" alt="" />
</div>

<style lang="scss">
  .usb-paint-container {
    height: 100%;
    width: 100%;
  }
</style>
