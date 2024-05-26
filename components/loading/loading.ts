import { createApp, defineComponent, h, reactive, vShow, withDirectives } from 'vue';
import type { LoadingOptionsResolved } from './type';
export function createLoadingElement(options: LoadingOptionsResolved) {
  // 响应式数据、
  const data = reactive({
    ...options,
  });
  const loadingElement = defineComponent({
    setup() {
      return () => {
        const sinpperText = h('p', { class: 'text-center' }, '正在加载中...');
        const loadingContainer = h('div', { class: 'loading-container' }, sinpperText);

        // 如果要使用v-show, 则需要使用withDirectives
        return withDirectives(loadingContainer, [[vShow, data.visible]]);
      };
    },
  });
  const close = function () {
    data.visible = false;
  };
  const show = function () {
    data.visible = true;
  };
  // loadingApp
  const loadingApp = createApp(loadingElement);
  // loadingInstance是根组件实例，也就是通过执行应用实例挂载方法，返回了根组件的实例，也就是loadingElement的实例，
  const loadingInstance = loadingApp.mount(document.createElement('div'));
  return {
    loadingInstance,
    data,
    close,
    show,
  };
}

export type LoadingApp = ReturnType<typeof createLoadingElement>;
