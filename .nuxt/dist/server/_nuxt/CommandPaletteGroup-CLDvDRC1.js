import __nuxt_component_0 from "./Icon-yaeKMBOf.js";
import { _ as __nuxt_component_1 } from "./Avatar-Bo6m4WVK.js";
import __nuxt_component_0$1 from "./Kbd-B7cyYuGN.js";
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, renderSlot, createCommentVNode, openBlock, Fragment, renderList, computed, useId, useSSRContext } from "vue";
import { r as rt } from "./combobox-CuaG0EPH.js";
import { s } from "./keyboard-Duq8EHr3.js";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "./tooltip-CPSmt-Rg.js";
import "./form-DsUILy5F.js";
import "./active-element-history-Cer4cSOw.js";
import "./micro-task-B6uncIso.js";
import "./use-outside-click-DgYwH73n.js";
import "./focus-management-vHH7q6nP.js";
import "./use-resolve-button-type-BNXbruUH.js";
import "./calculate-active-index-Dujs8zvP.js";
import "./hidden-Dc_fFmis.js";
import "./open-closed-BDzQJ33n.js";
const _sfc_main = defineComponent({
  components: {
    HComboboxOption: rt,
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1,
    UKbd: __nuxt_component_0$1
  },
  props: {
    group: {
      type: Object,
      required: true
    },
    query: {
      type: String,
      default: ""
    },
    groupAttribute: {
      type: String,
      required: true
    },
    commandAttribute: {
      type: String,
      required: true
    },
    selectedIcon: {
      type: String,
      required: true
    },
    ui: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const label = computed(() => {
      const label2 = props.group[props.groupAttribute];
      return typeof label2 === "function" ? label2(props.query) : label2;
    });
    function highlight(text, { indices, value }) {
      if (text === value) {
        return "";
      }
      let content = "";
      let nextUnhighlightedIndiceStartingIndex = 0;
      indices.forEach((indice) => {
        const lastIndiceNextIndex = indice[1] + 1;
        const isMatched = lastIndiceNextIndex - indice[0] >= props.query.length;
        content += [
          value.substring(nextUnhighlightedIndiceStartingIndex, indice[0]),
          isMatched && "<mark>",
          value.substring(indice[0], lastIndiceNextIndex),
          isMatched && "</mark>"
        ].filter(Boolean).join("");
        nextUnhighlightedIndiceStartingIndex = lastIndiceNextIndex;
      });
      content += value.substring(nextUnhighlightedIndiceStartingIndex);
      const index = content.indexOf("<mark>");
      if (index > 60) {
        content = `...${content.substring(index - 60)}`;
      }
      return content;
    }
    s(() => useId());
    return {
      label,
      highlight
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HComboboxOption = resolveComponent("HComboboxOption");
  const _component_UIcon = __nuxt_component_0;
  const _component_UAvatar = __nuxt_component_1;
  const _component_UKbd = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.group.wrapper
  }, _attrs))}>`);
  if (_ctx.label) {
    _push(`<h2 class="${ssrRenderClass(_ctx.ui.group.label)}">${ssrInterpolate(_ctx.label)}</h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass(_ctx.ui.group.container)}"${ssrRenderAttr("aria-label", _ctx.group[_ctx.groupAttribute])}><!--[-->`);
  ssrRenderList(_ctx.group.commands, (command, index) => {
    _push(ssrRenderComponent(_component_HComboboxOption, {
      key: `${_ctx.group.key}-${index}`,
      value: command,
      disabled: command.disabled,
      as: "template"
    }, {
      default: withCtx(({ active, selected }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.group.command.base, active ? _ctx.ui.group.command.active : _ctx.ui.group.command.inactive, command.disabled ? "cursor-not-allowed" : "cursor-pointer"])}"${_scopeId}><div class="${ssrRenderClass(_ctx.ui.group.command.container)}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-icon`, {
            group: _ctx.group,
            command,
            active,
            selected
          }, () => {
            if (command.icon) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: command.icon,
                class: [_ctx.ui.group.command.icon.base, active ? _ctx.ui.group.command.icon.active : _ctx.ui.group.command.icon.inactive, command.iconClass],
                "aria-hidden": "true"
              }, null, _parent2, _scopeId));
            } else if (command.avatar) {
              _push2(ssrRenderComponent(_component_UAvatar, mergeProps({ ref_for: true }, { size: _ctx.ui.group.command.avatar.size, ...command.avatar }, {
                class: _ctx.ui.group.command.avatar.base,
                "aria-hidden": "true"
              }), null, _parent2, _scopeId));
            } else if (command.chip) {
              _push2(`<span class="${ssrRenderClass(_ctx.ui.group.command.chip.base)}" style="${ssrRenderStyle({ background: `#${command.chip}` })}"${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          _push2(`<div class="${ssrRenderClass([_ctx.ui.group.command.label, command.disabled && _ctx.ui.group.command.disabled])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-command`, {
            group: _ctx.group,
            command,
            active,
            selected
          }, () => {
            if (command.prefix) {
              _push2(`<span class="${ssrRenderClass([command.prefixClass || _ctx.ui.group.command.prefix, "flex-shrink-0"])}"${_scopeId}>${ssrInterpolate(command.prefix)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="${ssrRenderClass([{ "flex-none": command.suffix || command.matches?.length }, "truncate"])}"${_scopeId}>${ssrInterpolate(command[_ctx.commandAttribute])}</span>`);
            if (command.matches?.length) {
              _push2(`<span class="${ssrRenderClass([command.suffixClass || _ctx.ui.group.command.suffix, "truncate"])}"${_scopeId}>${_ctx.highlight(command[_ctx.commandAttribute], command.matches[0]) ?? ""}</span>`);
            } else if (command.suffix) {
              _push2(`<span class="${ssrRenderClass([command.suffixClass || _ctx.ui.group.command.suffix, "truncate"])}"${_scopeId}>${ssrInterpolate(command.suffix)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          }, _push2, _parent2, _scopeId);
          _push2(`</div></div>`);
          if (selected) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.selectedIcon,
              class: _ctx.ui.group.command.selectedIcon.base,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else if (active && (_ctx.group.active || _ctx.$slots[`${_ctx.group.key}-active`])) {
            ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-active`, {
              group: _ctx.group,
              command,
              active,
              selected
            }, () => {
              if (_ctx.group.active) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.active)}"${_scopeId}>${ssrInterpolate(_ctx.group.active)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            ssrRenderSlot(_ctx.$slots, `${_ctx.group.key}-inactive`, {
              group: _ctx.group,
              command,
              active,
              selected
            }, () => {
              if (command.shortcuts?.length) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.command.shortcuts)}"${_scopeId}><!--[-->`);
                ssrRenderList(command.shortcuts, (shortcut) => {
                  _push2(ssrRenderComponent(_component_UKbd, { key: shortcut }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(shortcut)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(shortcut), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></span>`);
              } else if (!command.disabled && _ctx.group.inactive) {
                _push2(`<span class="${ssrRenderClass(_ctx.ui.group.inactive)}"${_scopeId}>${ssrInterpolate(_ctx.group.inactive)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          }
          _push2(`</div>`);
        } else {
          return [
            createVNode("div", {
              class: [_ctx.ui.group.command.base, active ? _ctx.ui.group.command.active : _ctx.ui.group.command.inactive, command.disabled ? "cursor-not-allowed" : "cursor-pointer"]
            }, [
              createVNode("div", {
                class: _ctx.ui.group.command.container
              }, [
                renderSlot(_ctx.$slots, `${_ctx.group.key}-icon`, {
                  group: _ctx.group,
                  command,
                  active,
                  selected
                }, () => [
                  command.icon ? (openBlock(), createBlock(_component_UIcon, {
                    key: 0,
                    name: command.icon,
                    class: [_ctx.ui.group.command.icon.base, active ? _ctx.ui.group.command.icon.active : _ctx.ui.group.command.icon.inactive, command.iconClass],
                    "aria-hidden": "true"
                  }, null, 8, ["name", "class"])) : command.avatar ? (openBlock(), createBlock(_component_UAvatar, mergeProps({
                    key: 1,
                    ref_for: true
                  }, { size: _ctx.ui.group.command.avatar.size, ...command.avatar }, {
                    class: _ctx.ui.group.command.avatar.base,
                    "aria-hidden": "true"
                  }), null, 16, ["class"])) : command.chip ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: _ctx.ui.group.command.chip.base,
                    style: { background: `#${command.chip}` }
                  }, null, 6)) : createCommentVNode("", true)
                ]),
                createVNode("div", {
                  class: [_ctx.ui.group.command.label, command.disabled && _ctx.ui.group.command.disabled]
                }, [
                  renderSlot(_ctx.$slots, `${_ctx.group.key}-command`, {
                    group: _ctx.group,
                    command,
                    active,
                    selected
                  }, () => [
                    command.prefix ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: ["flex-shrink-0", command.prefixClass || _ctx.ui.group.command.prefix]
                    }, toDisplayString(command.prefix), 3)) : createCommentVNode("", true),
                    createVNode("span", {
                      class: ["truncate", { "flex-none": command.suffix || command.matches?.length }]
                    }, toDisplayString(command[_ctx.commandAttribute]), 3),
                    command.matches?.length ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: ["truncate", command.suffixClass || _ctx.ui.group.command.suffix],
                      innerHTML: _ctx.highlight(command[_ctx.commandAttribute], command.matches[0])
                    }, null, 10, ["innerHTML"])) : command.suffix ? (openBlock(), createBlock("span", {
                      key: 2,
                      class: ["truncate", command.suffixClass || _ctx.ui.group.command.suffix]
                    }, toDisplayString(command.suffix), 3)) : createCommentVNode("", true)
                  ])
                ], 2)
              ], 2),
              selected ? (openBlock(), createBlock(_component_UIcon, {
                key: 0,
                name: _ctx.selectedIcon,
                class: _ctx.ui.group.command.selectedIcon.base,
                "aria-hidden": "true"
              }, null, 8, ["name", "class"])) : active && (_ctx.group.active || _ctx.$slots[`${_ctx.group.key}-active`]) ? renderSlot(_ctx.$slots, `${_ctx.group.key}-active`, {
                key: 1,
                group: _ctx.group,
                command,
                active,
                selected
              }, () => [
                _ctx.group.active ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.ui.group.active
                }, toDisplayString(_ctx.group.active), 3)) : createCommentVNode("", true)
              ]) : renderSlot(_ctx.$slots, `${_ctx.group.key}-inactive`, {
                key: 2,
                group: _ctx.group,
                command,
                active,
                selected
              }, () => [
                command.shortcuts?.length ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: _ctx.ui.group.command.shortcuts
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(command.shortcuts, (shortcut) => {
                    return openBlock(), createBlock(_component_UKbd, { key: shortcut }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(shortcut), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ], 2)) : !command.disabled && _ctx.group.inactive ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: _ctx.ui.group.inactive
                }, toDisplayString(_ctx.group.inactive), 3)) : createCommentVNode("", true)
              ])
            ], 2)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.0_tsx@4.20.6_vite@7.1.12_@types+node@20.19.24_jiti@2.6.1_t_32e2b60713db3d07f60c2d3c3af648d7/node_modules/@nuxt/ui/dist/runtime/components/navigation/CommandPaletteGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommandPaletteGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CommandPaletteGroup as default
};
//# sourceMappingURL=CommandPaletteGroup-CLDvDRC1.js.map
