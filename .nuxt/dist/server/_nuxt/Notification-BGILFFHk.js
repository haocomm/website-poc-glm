import __nuxt_component_0$1 from "./Icon-yaeKMBOf.js";
import { _ as __nuxt_component_1 } from "./Avatar-Bo6m4WVK.js";
import __nuxt_component_2 from "./Button-CzYLx3lF.js";
import { ref, computed, defineComponent, mergeProps, toRef, watch, watchEffect, useSSRContext } from "vue";
import { _ as _export_sfc, m as mergeConfig, t as twMerge, d as twJoin, c as appConfig } from "../server.mjs";
import { u as useUI } from "./tooltip-CPSmt-Rg.js";
import { f as useTimestamp } from "./index-CdtLKm1D.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import "./index-0vvINzLF.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "./client-only-DWA_6udX.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
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
import "/workspaces/website-poc-glm/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspaces/website-poc-glm/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/@unhead+vue@2.0.19_vue@3.5.22/node_modules/@unhead/vue/dist/index.mjs";
import "./Link-lersgEI5.js";
import "./nuxt-link-BaDZinDb.js";
import "./ohash.D__AXeF1-DqcdtjQw.js";
import "./link-Bz3Wc5MF.js";
import "./useButtonGroup-CmlPsf0K.js";
import "./button-Bz5rwL6o.js";
import "./index-BLXEZ1Ia.js";
const notification = {
  wrapper: "w-full pointer-events-auto",
  container: "relative overflow-hidden",
  inner: "w-0 flex-1",
  title: "text-sm font-medium text-gray-900 dark:text-white",
  description: "mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400",
  descriptionOnly: "mt-0 leading-5",
  actions: "flex items-center gap-2 mt-3 flex-shrink-0",
  background: "bg-white dark:bg-gray-900",
  shadow: "shadow-lg",
  rounded: "rounded-lg",
  padding: "p-4",
  gap: "gap-3",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    color: "text-{color}-500 dark:text-{color}-400"
  },
  avatar: {
    base: "flex-shrink-0 self-center",
    size: "md"
  },
  progress: {
    base: "absolute bottom-0 end-0 start-0 h-1",
    background: "bg-{color}-500 dark:bg-{color}-400"
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: "transform ease-out duration-300 transition",
    enterFromClass: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterToClass: "translate-y-0 opacity-100 sm:translate-x-0",
    leaveActiveClass: "transition ease-in duration-100",
    leaveFromClass: "opacity-100",
    leaveToClass: "opacity-0"
  },
  default: {
    color: "primary",
    icon: null,
    timeout: 5e3,
    closeButton: {
      icon: "i-heroicons-x-mark-20-solid",
      color: "gray",
      variant: "link",
      padded: false
    },
    actionButton: {
      size: "xs",
      color: "white"
    }
  }
};
function useTimer(cb, interval, options) {
  let timer = null;
  const { pause: tPause, resume: tResume, timestamp } = useTimestamp({ ...{}, controls: true });
  const startTime = ref(null);
  const remaining = computed(() => {
    if (!startTime.value) {
      return 0;
    }
    return interval - (timestamp.value - startTime.value);
  });
  function set(...args) {
    timer = setTimeout(() => {
      timer = null;
      startTime.value = null;
      cb(...args);
    }, remaining.value);
  }
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function start() {
    startTime.value = Date.now();
    set();
  }
  function stop() {
    clear();
    tPause();
  }
  function pause() {
    clear();
    tPause();
  }
  function resume() {
    set();
    tResume();
    startTime.value = (startTime.value || 0) + (Date.now() - timestamp.value);
  }
  start();
  return {
    start,
    stop,
    pause,
    resume,
    remaining
  };
}
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.notification, notification);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1,
    UAvatar: __nuxt_component_1,
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: () => config.default.icon
    },
    avatar: {
      type: Object,
      default: null
    },
    closeButton: {
      type: Object,
      default: () => config.default.closeButton
    },
    timeout: {
      type: Number,
      default: () => config.default.timeout
    },
    actions: {
      type: Array,
      default: () => []
    },
    callback: {
      type: Function,
      default: null
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return ["gray", ...appConfig.ui.colors].includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    pauseTimeoutOnHover: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("notification", toRef(props, "ui"), config);
    let timer = null;
    const remaining = ref(props.timeout);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper,
        ui.value.background?.replaceAll("{color}", props.color),
        ui.value.rounded,
        ui.value.shadow,
        ui.value.ring?.replaceAll("{color}", props.color)
      ), props.class);
    });
    const progressClass = computed(() => {
      return twJoin(
        ui.value.progress.base,
        ui.value.progress.background?.replaceAll("{color}", props.color)
      );
    });
    const progressStyle = computed(() => {
      const remainingPercent = remaining.value / props.timeout * 100;
      return { width: `${remainingPercent || 0}%` };
    });
    const iconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.color?.replaceAll("{color}", props.color)
      );
    });
    function onMouseover() {
      if (props.pauseTimeoutOnHover && timer) {
        timer.pause();
      }
    }
    function onMouseleave() {
      if (props.pauseTimeoutOnHover && timer) {
        timer.resume();
      }
    }
    function onClose() {
      if (timer) {
        timer.stop();
      }
      if (props.callback) {
        props.callback();
      }
      emit("close");
    }
    function onAction(action) {
      if (timer) {
        timer.stop();
      }
      if (action.click) {
        action.click();
      }
      emit("close");
    }
    function initTimer() {
      if (timer) {
        timer.stop();
      }
      if (!props.timeout) {
        return;
      }
      timer = useTimer(() => {
        onClose();
      }, props.timeout);
      watchEffect(() => {
        remaining.value = timer.remaining.value;
      });
    }
    watch(() => props.timeout, initTimer);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      progressClass,
      progressStyle,
      iconClass,
      onMouseover,
      onMouseleave,
      onClose,
      onAction,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$1;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UButton = __nuxt_component_2;
  _push(`<template><div${ssrRenderAttrs(mergeProps({
    class: _ctx.wrapperClass,
    role: "status"
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass([_ctx.ui.container, _ctx.ui.rounded, _ctx.ui.ring])}"><div class="${ssrRenderClass([[_ctx.ui.padding, _ctx.ui.gap, { "items-start": _ctx.description || _ctx.$slots.description, "items-center": !_ctx.description && !_ctx.$slots.description }], "flex"])}">`);
  if (_ctx.icon) {
    _push(ssrRenderComponent(_component_UIcon, {
      name: _ctx.icon,
      class: _ctx.iconClass
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (_ctx.avatar) {
    _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
      class: _ctx.ui.avatar.base
    }), null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.title || _ctx.$slots.title) {
    _push(`<p class="${ssrRenderClass(_ctx.ui.title)}">`);
    ssrRenderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => {
      _push(`${ssrInterpolate(_ctx.title)}`);
    }, _push, _parent);
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.description, !_ctx.title && !_ctx.$slots.title && _ctx.ui.descriptionOnly))}">`);
    ssrRenderSlot(_ctx.$slots, "description", { description: _ctx.description }, () => {
      _push(`${ssrInterpolate(_ctx.description)}`);
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.description || _ctx.$slots.description) && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.actions)}"><!--[-->`);
    ssrRenderList(_ctx.actions, (action, index) => {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ref_for: true }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
        onClick: ($event) => _ctx.onAction(action)
      }), null, _parent));
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.closeButton || !_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
    _push(`<div class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.actions, "mt-0"))}">`);
    if (!_ctx.description && !_ctx.$slots.description && _ctx.actions.length) {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.actions, (action, index) => {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ key: index }, { ref_for: true }, { ..._ctx.ui.default.actionButton || {}, ...action }, {
          onClick: ($event) => _ctx.onAction(action)
        }), null, _parent));
      });
      _push(`<!--]-->`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.closeButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({ "aria-label": "Close" }, { ..._ctx.ui.default.closeButton || {}, ..._ctx.closeButton }, { onClick: _ctx.onClose }), null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (_ctx.timeout) {
    _push(`<div class="${ssrRenderClass(_ctx.progressClass)}" style="${ssrRenderStyle(_ctx.progressStyle)}"></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></template>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.0_tsx@4.20.6_vite@7.1.12_@types+node@20.19.24_jiti@2.6.1_t_32e2b60713db3d07f60c2d3c3af648d7/node_modules/@nuxt/ui/dist/runtime/components/overlays/Notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Notification-BGILFFHk.js.map
