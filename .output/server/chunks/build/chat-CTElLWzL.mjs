import __nuxt_component_2 from './Button-CzYLx3lF.mjs';
import __nuxt_component_1 from './index-0vvINzLF.mjs';
import __nuxt_component_3 from './Input-DS-K8VmZ.mjs';
import __nuxt_component_3$1 from './Modal-C5lvBGMH.mjs';
import __nuxt_component_4 from './Card-Bg1XFqAv.mjs';
import __nuxt_component_1$1 from './Form-C-6Cuk9j.mjs';
import __nuxt_component_2$1 from './FormGroup-BHNbwERn.mjs';
import __nuxt_component_7 from './Textarea-DvyjjE0a.mjs';
import { ref, reactive, mergeProps, withCtx, createVNode, unref, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { a as useRouter, u as useHead } from './server.mjs';
import './Link-lersgEI5.mjs';
import './nuxt-link-BaDZinDb.mjs';
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
import './ohash.D__AXeF1-DqcdtjQw.mjs';
import './link-Bz3Wc5MF.mjs';
import './Icon-yaeKMBOf.mjs';
import './tooltip-CPSmt-Rg.mjs';
import './useButtonGroup-CmlPsf0K.mjs';
import './button-Bz5rwL6o.mjs';
import 'perfect-debounce';
import './useFormGroup-2eEELX00.mjs';
import './index-BLXEZ1Ia.mjs';
import './transition-SVkoAT_R.mjs';
import './portal-BoVYkj6E.mjs';
import './focus-management-vHH7q6nP.mjs';
import './keyboard-Duq8EHr3.mjs';
import './use-outside-click-DgYwH73n.mjs';
import './hidden-Dc_fFmis.mjs';
import './active-element-history-Cer4cSOw.mjs';
import './micro-task-B6uncIso.mjs';
import './open-closed-BDzQJ33n.mjs';
import './description-BmqggpRU.mjs';
import './index-CdtLKm1D.mjs';
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
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const rooms = ref([]);
    const currentRoom = ref(null);
    const currentRoomName = ref("");
    const messages = ref([]);
    const messageInput = ref("");
    const onlineUsers = ref([]);
    const showCreateRoom = ref(false);
    const creatingRoom = ref(false);
    const roomForm = reactive({
      name: "",
      description: ""
    });
    function sendMessage() {
      if (!messageInput.value.trim() || true) return;
    }
    async function createRoom() {
      creatingRoom.value = true;
      try {
        const token = localStorage.getItem("auth_token");
        const newRoom = await $fetch("/api/chat/rooms", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: roomForm,
          baseURL: "http://localhost:3001"
        });
        rooms.value.push(newRoom.room);
        showCreateRoom.value = false;
        roomForm.name = "";
        roomForm.description = "";
      } catch (error) {
        console.error("Failed to create room:", error);
      } finally {
        creatingRoom.value = false;
      }
    }
    function formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString();
    }
    useHead({
      title: "Chat - Chat App",
      meta: [
        { name: "description", content: "Join real-time conversations" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2;
      const _component_Icon = __nuxt_component_1;
      const _component_UInput = __nuxt_component_3;
      const _component_UModal = __nuxt_component_3$1;
      const _component_UCard = __nuxt_component_4;
      const _component_UForm = __nuxt_component_1$1;
      const _component_UFormGroup = __nuxt_component_2$1;
      const _component_UTextarea = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 dark:bg-gray-900" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="grid grid-cols-1 lg:grid-cols-4 gap-6 h-screen"><div class="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-4"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-semibold text-gray-900 dark:text-white"> Chat Rooms </h3>`);
      _push(ssrRenderComponent(_component_UButton, {
        size: "sm",
        color: "primary",
        variant: "soft",
        onClick: ($event) => showCreateRoom.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "i-heroicons-plus" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "i-heroicons-plus" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-2"><!--[-->`);
      ssrRenderList(unref(rooms), (room) => {
        var _a;
        _push(`<div class="${ssrRenderClass([
          "p-3 rounded-lg cursor-pointer transition-colors",
          unref(currentRoom) === room._id ? "bg-primary-100 dark:bg-primary-900" : "hover:bg-gray-100 dark:hover:bg-gray-700"
        ])}"><div class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(room.name)}</div><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(((_a = room.members) == null ? void 0 : _a.length) || 0)} members </div></div>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col">`);
      if (!unref(currentRoom)) {
        _push(`<div class="flex-1 flex items-center justify-center"><div class="text-center"><h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2"> Welcome to Chat App </h3><p class="text-gray-600 dark:text-gray-400"> Select a room from the sidebar to start chatting </p></div></div>`);
      } else {
        _push(`<div class="flex-1 flex flex-col"><div class="p-4 border-b border-gray-200 dark:border-gray-700"><h3 class="text-lg font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(currentRoomName))}</h3><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(onlineUsers).length)} users online </div></div><div class="flex-1 p-4 overflow-y-auto chat-messages"><!--[-->`);
        ssrRenderList(unref(messages), (message) => {
          var _a, _b;
          _push(`<div class="mb-4"><div class="flex items-start space-x-3"><div class="flex-shrink-0"><div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"><span class="text-white text-sm font-medium">${ssrInterpolate((_b = (_a = message.username) == null ? void 0 : _a[0]) == null ? void 0 : _b.toUpperCase())}</span></div></div><div class="flex-1"><div class="flex items-center space-x-2"><span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(message.username)}</span><span class="text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(formatTime(message.timestamp))}</span></div><div class="text-gray-700 dark:text-gray-300">${ssrInterpolate(message.content)}</div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="p-4 border-t border-gray-200 dark:border-gray-700"><div class="flex space-x-4">`);
        _push(ssrRenderComponent(_component_UInput, {
          modelValue: unref(messageInput),
          "onUpdate:modelValue": ($event) => isRef(messageInput) ? messageInput.value = $event : null,
          placeholder: "Type your message...",
          onKeyup: sendMessage,
          class: "flex-1"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          onClick: sendMessage,
          color: "primary",
          variant: "solid"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Send `);
            } else {
              return [
                createTextVNode(" Send ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        modelValue: unref(showCreateRoom),
        "onUpdate:modelValue": ($event) => isRef(showCreateRoom) ? showCreateRoom.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="text-lg font-semibold"${_scopeId2}>Create New Room</h3>`);
                } else {
                  return [
                    createVNode("h3", { class: "text-lg font-semibold" }, "Create New Room")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    state: unref(roomForm),
                    onSubmit: createRoom,
                    class: "space-y-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Room Name",
                          name: "name"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: unref(roomForm).name,
                                "onUpdate:modelValue": ($event) => unref(roomForm).name = $event,
                                placeholder: "Enter room name",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: unref(roomForm).name,
                                  "onUpdate:modelValue": ($event) => unref(roomForm).name = $event,
                                  placeholder: "Enter room name",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Description",
                          name: "description"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UTextarea, {
                                modelValue: unref(roomForm).description,
                                "onUpdate:modelValue": ($event) => unref(roomForm).description = $event,
                                placeholder: "Enter room description (optional)"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UTextarea, {
                                  modelValue: unref(roomForm).description,
                                  "onUpdate:modelValue": ($event) => unref(roomForm).description = $event,
                                  placeholder: "Enter room description (optional)"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex justify-end space-x-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          onClick: ($event) => showCreateRoom.value = false,
                          variant: "soft"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UButton, {
                          type: "submit",
                          color: "primary",
                          loading: unref(creatingRoom)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Create Room `);
                            } else {
                              return [
                                createTextVNode(" Create Room ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            label: "Room Name",
                            name: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: unref(roomForm).name,
                                "onUpdate:modelValue": ($event) => unref(roomForm).name = $event,
                                placeholder: "Enter room name",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Description",
                            name: "description"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UTextarea, {
                                modelValue: unref(roomForm).description,
                                "onUpdate:modelValue": ($event) => unref(roomForm).description = $event,
                                placeholder: "Enter room description (optional)"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex justify-end space-x-3" }, [
                            createVNode(_component_UButton, {
                              onClick: ($event) => showCreateRoom.value = false,
                              variant: "soft"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              type: "submit",
                              color: "primary",
                              loading: unref(creatingRoom)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Create Room ")
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      state: unref(roomForm),
                      onSubmit: createRoom,
                      class: "space-y-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          label: "Room Name",
                          name: "name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: unref(roomForm).name,
                              "onUpdate:modelValue": ($event) => unref(roomForm).name = $event,
                              placeholder: "Enter room name",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Description",
                          name: "description"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UTextarea, {
                              modelValue: unref(roomForm).description,
                              "onUpdate:modelValue": ($event) => unref(roomForm).description = $event,
                              placeholder: "Enter room description (optional)"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex justify-end space-x-3" }, [
                          createVNode(_component_UButton, {
                            onClick: ($event) => showCreateRoom.value = false,
                            variant: "soft"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_UButton, {
                            type: "submit",
                            color: "primary",
                            loading: unref(creatingRoom)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Create Room ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["state"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("h3", { class: "text-lg font-semibold" }, "Create New Room")
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    state: unref(roomForm),
                    onSubmit: createRoom,
                    class: "space-y-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        label: "Room Name",
                        name: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: unref(roomForm).name,
                            "onUpdate:modelValue": ($event) => unref(roomForm).name = $event,
                            placeholder: "Enter room name",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Description",
                        name: "description"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UTextarea, {
                            modelValue: unref(roomForm).description,
                            "onUpdate:modelValue": ($event) => unref(roomForm).description = $event,
                            placeholder: "Enter room description (optional)"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex justify-end space-x-3" }, [
                        createVNode(_component_UButton, {
                          onClick: ($event) => showCreateRoom.value = false,
                          variant: "soft"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_UButton, {
                          type: "submit",
                          color: "primary",
                          loading: unref(creatingRoom)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Create Room ")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["state"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-CTElLWzL.mjs.map
