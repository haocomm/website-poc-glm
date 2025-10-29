import { defineComponent, toRef, computed, h } from "vue";
import { m as mergeConfig, g as getSlotsChildren, t as twMerge, d as twJoin, c as appConfig } from "../server.mjs";
import { u as useUI } from "./tooltip-CPSmt-Rg.js";
import { u as useProvideButtonGroup } from "./useButtonGroup-CmlPsf0K.js";
import { b as button } from "./button-Bz5rwL6o.js";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "/workspaces/website-poc-glm/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "#internal/nuxt/paths";
import "/workspaces/website-poc-glm/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspaces/website-poc-glm/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/@unhead+vue@2.0.19_vue@3.5.22/node_modules/@unhead/vue/dist/index.mjs";
import "vue/server-renderer";
const buttonGroup = {
  wrapper: {
    horizontal: "inline-flex -space-x-px",
    vertical: "inline-flex flex-col -space-y-px"
  },
  rounded: "rounded-md",
  shadow: "shadow-sm",
  orientation: {
    "rounded-none": { horizontal: { start: "rounded-s-none", end: "rounded-e-none" }, vertical: { start: "rounded-t-none", end: "rounded-b-none" } },
    "rounded-sm": { horizontal: { start: "rounded-s-sm", end: "rounded-e-sm" }, vertical: { start: "rounded-t-sm", end: "rounded-b-sm" } },
    "rounded": { horizontal: { start: "rounded-s", end: "rounded-e" }, vertical: { start: "rounded-t", end: "rounded-b" } },
    "rounded-md": { horizontal: { start: "rounded-s-md", end: "rounded-e-md" }, vertical: { start: "rounded-t-md", end: "rounded-b-md" } },
    "rounded-lg": { horizontal: { start: "rounded-s-lg", end: "rounded-e-lg" }, vertical: { start: "rounded-t-lg", end: "rounded-b-lg" } },
    "rounded-xl": { horizontal: { start: "rounded-s-xl", end: "rounded-e-xl" }, vertical: { start: "rounded-t-xl", end: "rounded-b-xl" } },
    "rounded-2xl": { horizontal: { start: "rounded-s-2xl", end: "rounded-e-2xl" }, vertical: { start: "rounded-t-2xl", end: "rounded-b-2xl" } },
    "rounded-3xl": { horizontal: { start: "rounded-s-3xl", end: "rounded-e-3xl" }, vertical: { start: "rounded-t-3xl", end: "rounded-b-3xl" } },
    "rounded-full": { horizontal: { start: "rounded-s-full", end: "rounded-e-full" }, vertical: { start: "rounded-t-full", end: "rounded-b-full" } }
  }
};
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const buttonGroupConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.buttonGroup, buttonGroup);
const ButtonGroup = defineComponent({
  name: "ButtonGroup",
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { slots }) {
    const { ui, attrs } = useUI("buttonGroup", toRef(props, "ui"), buttonGroupConfig);
    const children = computed(() => getSlotsChildren(slots));
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper[props.orientation],
        ui.value.rounded,
        ui.value.shadow
      ), props.class);
    });
    const rounded = computed(() => ui.value.orientation[ui.value.rounded][props.orientation]);
    useProvideButtonGroup({ orientation: toRef(props, "orientation"), size: toRef(props, "size"), ui, rounded });
    return () => h("div", { class: wrapperClass.value, ...attrs.value }, children.value);
  }
});
export {
  ButtonGroup as default
};
//# sourceMappingURL=ButtonGroup-Dzi-QPvf.js.map
