import __nuxt_component_2 from "./Button-CzYLx3lF.js";
import { ref, defineComponent, mergeProps, toRef, computed, useSSRContext } from "vue";
import { u as useScroll, a as useElementSize, b as useResizeObserver } from "./index-CdtLKm1D.js";
import { _ as _export_sfc, m as mergeConfig, t as twMerge, c as appConfig } from "../server.mjs";
import { u as useUI } from "./tooltip-CPSmt-Rg.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import "./Link-lersgEI5.js";
import "./nuxt-link-BaDZinDb.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/ufo@1.6.1/node_modules/ufo/dist/index.mjs";
import "./ohash.D__AXeF1-DqcdtjQw.js";
import "./link-Bz3Wc5MF.js";
import "./Icon-yaeKMBOf.js";
import "./index-0vvINzLF.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/perfect-debounce@2.0.0/node_modules/perfect-debounce/dist/index.mjs";
import "./client-only-DWA_6udX.js";
import "/workspaces/website-poc-glm/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs";
import "./useButtonGroup-CmlPsf0K.js";
import "./button-Bz5rwL6o.js";
import "./index-BLXEZ1Ia.js";
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
const carousel = {
  wrapper: "relative",
  container: "relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
  item: "flex flex-none snap-center",
  arrows: {
    wrapper: "flex items-center justify-between"
  },
  indicators: {
    wrapper: "absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",
    base: "rounded-full h-3 w-3",
    active: "bg-primary-500 dark:bg-primary-400",
    inactive: "bg-gray-100 dark:bg-gray-800"
  },
  default: {
    prevButton: {
      color: "black",
      class: "rtl:[&_span:first-child]:rotate-180 absolute start-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "black",
      class: "rtl:[&_span:last-child]:rotate-180 absolute end-4 top-1/2 transform -translate-y-1/2 rounded-full",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const useCarouselScroll = (el) => {
  ref(0);
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.carousel, carousel);
const _sfc_main = defineComponent({
  components: {
    UButton: __nuxt_component_2
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    arrows: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    dir: {
      type: String,
      default: "ltr"
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  setup(props, { expose }) {
    const { ui, attrs } = useUI("carousel", toRef(props, "ui"), config, toRef(props, "class"));
    const carouselRef = ref();
    const itemWidth = ref(0);
    const { x } = useScroll(carouselRef, { behavior: "smooth" });
    const { width: carouselWidth } = useElementSize(carouselRef);
    useCarouselScroll();
    useResizeObserver(carouselRef, (entries) => {
      const [entry] = entries;
      itemWidth.value = entry?.target?.firstElementChild?.clientWidth || 0;
    });
    const isRtl = computed(() => props.dir === "rtl");
    const currentPage = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      return isRtl.value ? Math.round(-x.value / itemWidth.value) + 1 : Math.round(x.value / itemWidth.value) + 1;
    });
    const pages = computed(() => {
      if (!itemWidth.value) {
        return 0;
      }
      const itemDivisions = Math.round(carouselWidth.value / itemWidth.value);
      if (props.items.length <= itemDivisions) {
        return 0;
      }
      return props.items.length - itemDivisions + 1;
    });
    const isFirst = computed(() => currentPage.value <= 1);
    const isLast = computed(() => currentPage.value === pages.value);
    function onClickNext() {
      x.value += isRtl.value ? -itemWidth.value : itemWidth.value;
    }
    function onClickPrev() {
      x.value -= isRtl.value ? -itemWidth.value : itemWidth.value;
    }
    function onClick(page) {
      x.value = (page - 1) * itemWidth.value * (isRtl.value ? -1 : 1);
    }
    expose({
      pages,
      page: currentPage,
      prev: onClickPrev,
      next: onClickNext,
      select: onClick
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isFirst,
      isLast,
      carouselRef,
      pages,
      currentPage,
      onClickNext,
      onClickPrev,
      onClick,
      twMerge
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { dir: _ctx.dir }, _attrs))} data-v-b76b0f59><div class="${ssrRenderClass([_ctx.ui.container, "no-scrollbar"])}" data-v-b76b0f59><!--[-->`);
  ssrRenderList(_ctx.items, (item, index) => {
    _push(`<div class="${ssrRenderClass(_ctx.ui.item)}"${ssrRenderAttr("role", _ctx.indicators ? "tabpanel" : null)} data-v-b76b0f59>`);
    ssrRenderSlot(_ctx.$slots, "default", {
      item,
      index
    }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  if (_ctx.arrows) {
    _push(`<div class="${ssrRenderClass(_ctx.ui.arrows.wrapper)}" data-v-b76b0f59>`);
    ssrRenderSlot(_ctx.$slots, "prev", {
      onClick: _ctx.onClickPrev,
      disabled: _ctx.isFirst
    }, () => {
      if (_ctx.prevButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isFirst }, { ..._ctx.ui.default.prevButton, ..._ctx.prevButton }, {
          class: _ctx.twMerge(_ctx.ui.default.prevButton.class, _ctx.prevButton?.class),
          "aria-label": "Prev",
          onClick: _ctx.onClickPrev
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    ssrRenderSlot(_ctx.$slots, "next", {
      onClick: _ctx.onClickNext,
      disabled: _ctx.isLast
    }, () => {
      if (_ctx.nextButton) {
        _push(ssrRenderComponent(_component_UButton, mergeProps({ disabled: _ctx.isLast }, { ..._ctx.ui.default.nextButton, ..._ctx.nextButton }, {
          class: _ctx.twMerge(_ctx.ui.default.nextButton.class, _ctx.nextButton?.class),
          "aria-label": "Next",
          onClick: _ctx.onClickNext
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.indicators) {
    _push(`<div role="tablist" class="${ssrRenderClass(_ctx.ui.indicators.wrapper)}" data-v-b76b0f59><!--[-->`);
    ssrRenderList(_ctx.pages, (page) => {
      ssrRenderSlot(_ctx.$slots, "indicator", {
        onClick: _ctx.onClick,
        active: page === _ctx.currentPage,
        page
      }, () => {
        _push(`<button type="button" role="tab"${ssrRenderAttr("aria-selected", page === _ctx.currentPage)} class="${ssrRenderClass([
          _ctx.ui.indicators.base,
          page === _ctx.currentPage ? _ctx.ui.indicators.active : _ctx.ui.indicators.inactive
        ])}"${ssrRenderAttr("aria-label", `set slide ${page}`)} data-v-b76b0f59></button>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.3_magicast@0.5.0_tsx@4.20.6_vite@7.1.12_@types+node@20.19.24_jiti@2.6.1_t_32e2b60713db3d07f60c2d3c3af648d7/node_modules/@nuxt/ui/dist/runtime/components/elements/Carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b76b0f59"]]);
export {
  Carousel as default
};
//# sourceMappingURL=Carousel-ttQtgnA2.js.map
