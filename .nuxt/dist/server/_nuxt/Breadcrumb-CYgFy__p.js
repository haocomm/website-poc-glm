import __nuxt_component_0 from "./Link-lersgEI5.js";
import __nuxt_component_0$1 from "./Icon-yaeKMBOf.js";
import { defineComponent, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, toRef, useSSRContext } from "vue";
import { _ as _export_sfc, m as mergeConfig, d as twJoin, t as twMerge, c as appConfig } from "../server.mjs";
import { u as useUI } from "./tooltip-CPSmt-Rg.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { a as getULinkProps } from "./link-Bz3Wc5MF.js";
import "./nuxt-link-BaDZinDb.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "./ohash.D__AXeF1-DqcdtjQw.js";
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
import "#internal/nuxt/paths";
import "/workspaces/website-poc-glm/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspaces/website-poc-glm/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/@unhead+vue@2.0.19_vue@3.5.22/node_modules/@unhead/vue/dist/index.mjs";
import "./index-0vvINzLF.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "./client-only-DWA_6udX.js";
const breadcrumb = {
  wrapper: "relative min-w-0",
  ol: "flex items-center gap-x-1.5",
  li: "flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",
  base: "flex items-center gap-x-1.5 group font-semibold min-w-0",
  label: "block truncate",
  icon: {
    base: "flex-shrink-0 w-5 h-5",
    active: "",
    inactive: ""
  },
  divider: {
    base: "flex-shrink-0 w-5 h-5 rtl:rotate-180"
  },
  active: "text-primary-500 dark:text-primary-400",
  inactive: " hover:text-gray-700 dark:hover:text-gray-200",
  default: {
    divider: "i-heroicons-chevron-right-20-solid"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.breadcrumb, breadcrumb);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1,
    ULink: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    divider: {
      type: String,
      default: () => config.default.divider
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
    const { ui, attrs } = useUI("breadcrumb", toRef(props, "ui"), config, toRef(props, "class"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      getULinkProps,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0;
  const _component_UIcon = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    "aria-label": "Breadcrumb",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><ol class="${ssrRenderClass(_ctx.ui.ol)}"><!--[-->`);
  ssrRenderList(_ctx.links, (link, index) => {
    _push(`<li class="${ssrRenderClass(_ctx.ui.li)}">`);
    _push(ssrRenderComponent(_component_ULink, mergeProps({
      as: "span",
      class: [_ctx.ui.base, index === _ctx.links.length - 1 ? _ctx.ui.active : !!link.to ? _ctx.ui.inactive : ""],
      "aria-current": index === _ctx.links.length - 1 ? "page" : void 0
    }, { ref_for: true }, _ctx.getULinkProps(link), {
      onClick: link.click
    }), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "icon", {
            link,
            index,
            isActive: index === _ctx.links.length - 1
          }, () => {
            if (link.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: link.icon,
                class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, index === _ctx.links.length - 1 ? _ctx.ui.icon.active : !!link.to ? _ctx.ui.icon.inactive : ""), link.iconClass)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          ssrRenderSlot(_ctx.$slots, "default", {
            link,
            index,
            isActive: index === _ctx.links.length - 1
          }, () => {
            if (link.label) {
              _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>${ssrInterpolate(link.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "icon", {
              link,
              index,
              isActive: index === _ctx.links.length - 1
            }, () => [
              link.icon ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: link.icon,
                class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, index === _ctx.links.length - 1 ? _ctx.ui.icon.active : !!link.to ? _ctx.ui.icon.inactive : ""), link.iconClass)
              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
            ]),
            renderSlot(_ctx.$slots, "default", {
              link,
              index,
              isActive: index === _ctx.links.length - 1
            }, () => [
              link.label ? (openBlock(), createBlock("span", {
                key: 0,
                class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
              }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    if (index < _ctx.links.length - 1) {
      ssrRenderSlot(_ctx.$slots, "divider", {}, () => {
        if (_ctx.divider) {
          _push(`<!--[-->`);
          if (_ctx.divider.startsWith("i-")) {
            _push(ssrRenderComponent(_component_UIcon, {
              name: _ctx.divider,
              class: _ctx.ui.divider.base,
              role: "presentation"
            }, null, _parent));
          } else {
            _push(`<span role="presentation">${ssrInterpolate(_ctx.divider)}</span>`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ol></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.0_tsx@4.20.6_vite@7.1.12_@types+node@20.19.24_jiti@2.6.1_t_32e2b60713db3d07f60c2d3c3af648d7/node_modules/@nuxt/ui/dist/runtime/components/navigation/Breadcrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Breadcrumb as default
};
//# sourceMappingURL=Breadcrumb-CYgFy__p.js.map
