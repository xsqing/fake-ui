import type { UnwrapRef } from 'vue';
import type { LoadingApp } from './loading';

// 内部处理后参数
export type LoadingOptionsResolved = {
  /**
   * @description v-show使用
   */
  visible: boolean;

  /**
   * @description 父级元素
   */
  parent: HTMLElement;

  target: HTMLElement;
};

export type LoadingOptions = Partial<Omit<LoadingOptionsResolved, 'parent' | 'target'>> & {
  /**
   * @description loading覆盖的目标元素，如果传递string，则使用document.querySelector获取
   */
  target: string | HTMLElement;
};

export const INSTANCE_KEY = Symbol('loading');

// 需要loading的元素
export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]: {
    instance: LoadingApp;
    options: LoadingOptions;
  };
}
