import __nuxt_component_0 from './Icon-yaeKMBOf.mjs';
import { defineComponent, mergeProps, toRef, computed, useSSRContext } from 'vue';
import { _ as _export_sfc, m as mergeConfig, t as twMerge, d as twJoin, c as appConfig } from './server.mjs';
import { u as useUI } from './tooltip-CPSmt-Rg.mjs';
import { a as useInjectButtonGroup } from './useButtonGroup-CmlPsf0K.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './index-0vvINzLF.mjs';
import 'perfect-debounce';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'node:events';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const badge = {
  base: "inline-flex items-center",
  rounded: "rounded-md",
  font: "font-medium",
  size: {
    xs: "text-xs px-1.5 py-0.5",
    sm: "text-xs px-2 py-1",
    md: "text-sm px-2 py-1",
    lg: "text-sm px-2.5 py-1.5"
  },
  gap: {
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-1",
    lg: "gap-1.5"
  },
  color: {
    white: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"
    },
    gray: {
      solid: "ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"
    },
    black: {
      solid: "text-white dark:text-gray-900 bg-gray-900 dark:bg-white"
    }
  },
  variant: {
    solid: "bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",
    outline: "text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",
    soft: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",
    subtle: "bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"
  },
  icon: {
    base: "flex-shrink-0",
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-5 w-5"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.badge, badge);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
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
  setup(props) {
    const { ui, attrs } = useUI("badge", toRef(props, "ui"), config);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.trailing || props.trailingIcon;
    });
    const badgeClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color)
      ), props.class);
    });
    const leadingIconName = computed(() => {
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value]
      );
    });
    return {
      attrs,
      isLeading,
      isTrailing,
      badgeClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.badgeClass }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
    if (_ctx.isLeading && _ctx.leadingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    if (_ctx.label !== void 0 && _ctx.label !== null) {
      _push(`<span>${ssrInterpolate(_ctx.label)}</span>`);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
    if (_ctx.isTrailing && _ctx.trailingIconName) {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass,
        "aria-hidden": "true"
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.0_tsx@4.20.6_vite@7.1.12_@types+node@20.19.24_jiti@2.6.1_t_32e2b60713db3d07f60c2d3c3af648d7/node_modules/@nuxt/ui/dist/runtime/components/elements/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as default };
//# sourceMappingURL=Badge-brJIIkPA.mjs.map
