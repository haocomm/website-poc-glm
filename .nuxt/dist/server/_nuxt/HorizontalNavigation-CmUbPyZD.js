import __nuxt_component_0 from "./Link-lersgEI5.js";
import { _ as __nuxt_component_1 } from "./Avatar-Bo6m4WVK.js";
import __nuxt_component_0$1 from "./Icon-yaeKMBOf.js";
import __nuxt_component_3 from "./Badge-brJIIkPA.js";
import { defineComponent, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, createTextVNode, toDisplayString, toRef, computed, useSSRContext } from "vue";
import { _ as _export_sfc, m as mergeConfig, d as twJoin, t as twMerge, c as appConfig } from "../server.mjs";
import { u as useUI } from "./tooltip-CPSmt-Rg.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
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
import "./useButtonGroup-CmlPsf0K.js";
const horizontalNavigation = {
  wrapper: "relative w-full flex items-center justify-between",
  container: "flex items-center min-w-0",
  inner: "min-w-0",
  base: "group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",
  before: "before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
  after: "after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",
  active: "text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",
  inactive: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
  label: "truncate relative",
  icon: {
    base: "flex-shrink-0 w-5 h-5 relative",
    active: "text-gray-700 dark:text-gray-200",
    inactive: "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  badge: {
    base: "flex-shrink-0 ms-auto relative rounded",
    color: "gray",
    variant: "solid",
    size: "xs"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.horizontalNavigation, horizontalNavigation);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0$1,
    UAvatar: __nuxt_component_1,
    UBadge: __nuxt_component_3,
    ULink: __nuxt_component_0
  },
  inheritAttrs: false,
  props: {
    links: {
      type: Array,
      default: () => []
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
    const { ui, attrs } = useUI("horizontalNavigation", toRef(props, "ui"), config, toRef(props, "class"));
    const sections = computed(() => Array.isArray(props.links[0]) ? props.links : [props.links]);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      sections,
      getULinkProps,
      twMerge,
      twJoin
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UIcon = __nuxt_component_0$1;
  const _component_UBadge = __nuxt_component_3;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.sections, (section, sectionIndex) => {
    _push(`<ul class="${ssrRenderClass(_ctx.ui.container)}"><!--[-->`);
    ssrRenderList(section, (link, index) => {
      _push(`<li class="${ssrRenderClass(_ctx.ui.inner)}">`);
      _push(ssrRenderComponent(_component_ULink, mergeProps({ ref_for: true }, _ctx.getULinkProps(link), {
        class: [_ctx.ui.base, _ctx.ui.before, _ctx.ui.after],
        "active-class": _ctx.ui.active,
        "inactive-class": _ctx.ui.inactive,
        onClick: link.click,
        onKeyup: ($event) => $event.target.blur()
      }), {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", {
              link,
              isActive
            }, () => {
              if (link.avatar) {
                _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "icon", {
              link,
              isActive
            }, () => {
              if (link.icon) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {
              link,
              isActive
            }, () => {
              if (link.label) {
                _push2(`<span class="${ssrRenderClass(_ctx.twMerge(_ctx.ui.label, link.labelClass))}"${_scopeId}>`);
                if (isActive) {
                  _push2(`<span class="sr-only"${_scopeId}> Current page: </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "badge", {
              link,
              isActive
            }, () => {
              if (link.badge) {
                _push2(ssrRenderComponent(_component_UBadge, mergeProps({ ref_for: true }, {
                  size: _ctx.ui.badge.size,
                  color: _ctx.ui.badge.color,
                  variant: _ctx.ui.badge.variant,
                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                }, {
                  class: _ctx.ui.badge.base
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", {
                link,
                isActive
              }, () => [
                link.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                  key: 0,
                  ref_for: true
                }, { size: _ctx.ui.avatar.size, ...link.avatar }, {
                  class: [_ctx.ui.avatar.base]
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "icon", {
                link,
                isActive
              }, () => [
                link.icon ? (openBlock(), createBlock(_component_UIcon, {
                  key: 0,
                  name: link.icon,
                  class: _ctx.twMerge(_ctx.twJoin(_ctx.ui.icon.base, isActive ? _ctx.ui.icon.active : _ctx.ui.icon.inactive), link.iconClass)
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "default", {
                link,
                isActive
              }, () => [
                link.label ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.twMerge(_ctx.ui.label, link.labelClass)
                }, [
                  isActive ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "sr-only"
                  }, " Current page: ")) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.label), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              renderSlot(_ctx.$slots, "badge", {
                link,
                isActive
              }, () => [
                link.badge ? (openBlock(), createBlock(_component_UBadge, mergeProps({
                  key: 0,
                  ref_for: true
                }, {
                  size: _ctx.ui.badge.size,
                  color: _ctx.ui.badge.color,
                  variant: _ctx.ui.badge.variant,
                  ...typeof link.badge === "string" || typeof link.badge === "number" ? { label: link.badge } : link.badge
                }, {
                  class: _ctx.ui.badge.base
                }), null, 16, ["class"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
  });
  _push(`<!--]--></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.0_tsx@4.20.6_vite@7.1.12_@types+node@20.19.24_jiti@2.6.1_t_32e2b60713db3d07f60c2d3c3af648d7/node_modules/@nuxt/ui/dist/runtime/components/navigation/HorizontalNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HorizontalNavigation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HorizontalNavigation as default
};
//# sourceMappingURL=HorizontalNavigation-CmUbPyZD.js.map
