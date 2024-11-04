<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import type { ToolsConfigType } from "../core/core.interface";

  const dispatch = createEventDispatcher();
  export let toolsConfig: ToolsConfigType;

  const toolsIcon: { [key: string]: { type: string; icon: string } } = {
    paint: {
      type: "paint",
      icon: `<path clipRule="evenodd" d="m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"/><path d="m11.25 5.417 3.333 3.333" />`,
    },
    eraser: {
      type: "eraser",
      icon: `<path stroke="none" d="M0 0h24v24H0z" fill="none" transform="scale(0.9)"></path><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" transform="scale(0.9)"></path><path d="M18 13.3l-6.3 -6.3" transform="scale(0.9)"></path>`,
    },
    trash: {
      type: "trash",
      icon: `<path stroke-width="1.25" d="M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"></path>`,
    },
    panel: {
      type: "panel",
      icon: `<g transform="scale(0.9)"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l-4 7h8z"></path><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path></g>`,
    },
    export: {
      type: "export",
      icon: `<g transform="scale(0.9)"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5"></path><path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4"></path><path d="M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598"></path><path d="M19 16v6"></path><path d="M22 19l-3 3l-3 -3"></path></g>`,
    },
  };

  let styleStr: string = "";
  let poiClass: string = "usb-paint-tools ";
  let activeIcon: string = "paint";

  onMount(() => {
    setToolsStyle();
  });

  // 设置工具栏的样式
  const setToolsStyle = () => {
    if (toolsConfig?.backgroud) {
      toolsConfig.backgroud?.color && (styleStr += `background-color: ${toolsConfig.backgroud.color};`);
      toolsConfig.backgroud?.border && (styleStr += `border: ${toolsConfig.backgroud.border};`);
      toolsConfig.backgroud?.radius && (styleStr += `border-radius: ${toolsConfig.backgroud.radius}px;`);
    }
    if (toolsConfig.position) {
      if (toolsConfig.position instanceof Object && !isNaN(toolsConfig.position.x) && !isNaN(toolsConfig.position.y)) {
        styleStr += `left: ${toolsConfig.position.x}px;`;
        styleStr += `top: ${toolsConfig.position.y}px;`;
        styleStr += `flex-direction: ${toolsConfig.position.direction || "column"};`;
      }
      if (toolsConfig.position && ["left", "right", "top", "bottom"].includes(toolsConfig.position as string)) {
        poiClass += toolsConfig.position;
      }
    }
  };

  // 选择/改变操作工具
  const selectTool = (tool: string) => {
    activeIcon = tool;
    dispatch("selectTool", { tool });

    // 清空画布后默认选择绘画
    if (["trash", "export"].includes(tool)) {
      let timer = setTimeout(() => {
        selectTool("paint");
        clearTimeout(timer);
      }, 300);
    }
  };
</script>

<div style={styleStr} class={poiClass}>
  <div class="gap" />
  {#each toolsConfig.tools || [] as tool (tool)}
    {#if toolsIcon[tool]}
      <svg
        on:click={selectTool(tool)}
        viewBox="0 0 20 20"
        width={toolsConfig.iconsConfig?.size}
        height={toolsConfig.iconsConfig?.size}
        stroke={toolsConfig.iconsConfig?.color}
        stroke-width={toolsConfig.iconsConfig?.width}
        fill={toolsConfig.iconsConfig?.fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        class={`tool-svg ${activeIcon === tool && "tool-svg-active"}`}
      >
        {@html toolsIcon[tool].icon}
      </svg>
    {/if}
  {/each}
  <div class="gap" />
</div>

<style lang="scss">
  .usb-paint-tools {
    position: absolute;
    z-index: 99;
    display: flex;
    .gap {
      width: 8px;
    }
  }
  .left {
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right {
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .top {
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .bottom {
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .tool-svg {
    margin: 5px;
    padding: 3px;
  }
  .tool-svg-active {
    background-color: #e0dfff;
    border-radius: 5px;
  }
</style>
