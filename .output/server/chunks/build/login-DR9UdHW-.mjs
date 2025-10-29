import { _ as __nuxt_component_0 } from './nuxt-link-BaDZinDb.mjs';
import __nuxt_component_1 from './Form-C-6Cuk9j.mjs';
import __nuxt_component_2 from './FormGroup-BHNbwERn.mjs';
import __nuxt_component_3 from './Input-DS-K8VmZ.mjs';
import __nuxt_component_2$1 from './Button-CzYLx3lF.mjs';
import { reactive, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp, a as useRouter, u as useHead } from './server.mjs';
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
import './index-CdtLKm1D.mjs';
import './index-BLXEZ1Ia.mjs';
import './tooltip-CPSmt-Rg.mjs';
import './Icon-yaeKMBOf.mjs';
import './index-0vvINzLF.mjs';
import 'perfect-debounce';
import './useFormGroup-2eEELX00.mjs';
import './useButtonGroup-CmlPsf0K.mjs';
import './Link-lersgEI5.mjs';
import './ohash.D__AXeF1-DqcdtjQw.mjs';
import './link-Bz3Wc5MF.mjs';
import './button-Bz5rwL6o.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { $client } = useNuxtApp();
    const router = useRouter();
    const form = reactive({
      email: "",
      password: ""
    });
    const loading = ref(false);
    const error = ref("");
    async function handleLogin() {
      var _a;
      loading.value = true;
      error.value = "";
      try {
        const response = await $fetch("/api/auth/login", {
          method: "POST",
          body: form,
          baseURL: "http://localhost:3001"
        });
        localStorage.setItem("auth_token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        await router.push("/chat");
      } catch (err) {
        error.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) || "Login failed";
      } finally {
        loading.value = false;
      }
    }
    useHead({
      title: "Login - Chat App",
      meta: [
        { name: "description", content: "Sign in to your Chat App account" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900" }, _attrs))}><div class="max-w-md w-full space-y-8 p-8"><div class="text-center"><h2 class="text-3xl font-bold text-gray-900 dark:text-white"> Sign in to your account </h2><p class="mt-2 text-sm text-gray-600 dark:text-gray-400"> Or `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register",
        class: "text-primary-600 hover:text-primary-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` create a new account `);
          } else {
            return [
              createTextVNode(" create a new account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
      _push(ssrRenderComponent(_component_UForm, {
        state: unref(form),
        onSubmit: handleLogin,
        class: "space-y-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Email",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    placeholder: "Enter your email",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      placeholder: "Enter your email",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "Password",
              name: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    placeholder: "Enter your password",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      placeholder: "Enter your password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              type: "submit",
              color: "primary",
              variant: "solid",
              size: "lg",
              loading: unref(loading),
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign in `);
                } else {
                  return [
                    createTextVNode(" Sign in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "Email",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    placeholder: "Enter your email",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "Password",
                name: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    placeholder: "Enter your password",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                type: "submit",
                color: "primary",
                variant: "solid",
                size: "lg",
                loading: unref(loading),
                class: "w-full"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Sign in ")
                ]),
                _: 1
              }, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(error)) {
        _push(`<div class="text-red-500 text-sm text-center">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DR9UdHW-.mjs.map
