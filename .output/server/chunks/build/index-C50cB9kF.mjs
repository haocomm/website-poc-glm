import __nuxt_component_2 from './Button-CzYLx3lF.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BaDZinDb.mjs';
import { u as useHead, n as navigateTo } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './Link-lersgEI5.mjs';
import './ohash.D__AXeF1-DqcdtjQw.mjs';
import './link-Bz3Wc5MF.mjs';
import './Icon-yaeKMBOf.mjs';
import './index-0vvINzLF.mjs';
import 'perfect-debounce';
import './tooltip-CPSmt-Rg.mjs';
import './useButtonGroup-CmlPsf0K.mjs';
import './button-Bz5rwL6o.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:net';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

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

export { _sfc_main as default };
//# sourceMappingURL=index-C50cB9kF.mjs.map
