/*
 * @Author: haolian
 * @Date: 2024-11-04 10:35:27
 * @LastEditors: haolian
 * @LastEditTime: 2024-11-04 17:31:55
 * @Description: Do not edit
 * @FilePath: /USB-Paint/src/utils/calcColorBrightness.ts
 */
export const calcColorBrightness = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // 计算平均亮度
  let r = 0,
    g = 0,
    b = 0;
  const totalPixels = data.length / 4; // 每个像素有4个值 (R, G, B, A)

  for (let i = 0; i < data.length; i += 4) {
    r += data[i]; // 红色
    g += data[i + 1]; // 绿色
    b += data[i + 2]; // 蓝色
  }

  r = Math.floor(r / totalPixels);
  g = Math.floor(g / totalPixels);
  b = Math.floor(b / totalPixels);

  // 计算亮度
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  // 判断背景色是偏白还是偏黑
  if (brightness > 128 || brightness == 0) {
    return "white";
  } else {
    return "black";
  }
};
