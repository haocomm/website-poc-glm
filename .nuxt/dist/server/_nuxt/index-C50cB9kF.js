import __nuxt_component_2 from "./Button-CzYLx3lF.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BaDZinDb.js";
import { u as useHead, n as navigateTo } from "../server.mjs";
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "./Link-lersgEI5.js";
import "./ohash.D__AXeF1-DqcdtjQw.js";
import "./link-Bz3Wc5MF.js";
import "./Icon-yaeKMBOf.js";
import "./index-0vvINzLF.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "./client-only-DWA_6udX.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "./tooltip-CPSmt-Rg.js";
import "./useButtonGroup-CmlPsf0K.js";
import "./button-Bz5rwL6o.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
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
import "/workspaces/website-poc-glm/node_modules/.pnpm/unctx@2.4.1/node_modules/unctx/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/h3@1.15.4/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspaces/website-poc-glm/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs";
import "/workspaces/website-poc-glm/node_modules/.pnpm/@unhead+vue@2.0.19_vue@3.5.22/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Chat App - Real-time Conversations",
      meta: [
        { name: "description", content: "Connect with others in real-time conversations" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="text-center"><h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4"> Welcome to Chat App </h1><p class="text-lg text-gray-600 dark:text-gray-300 mb-8"> Connect with others in real-time conversations </p><div class="space-y-4">`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "xl",
        color: "primary",
        variant: "solid",
        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/auth/login")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started `);
          } else {
            return [
              createTextVNode(" Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-sm text-gray-500 dark:text-gray-400"> Already have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "text-primary-600 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in `);
          } else {
            return [
              createTextVNode(" Sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C50cB9kF.js.map
