// 通过指令创建loading元素
import { createLoadingElement, type LoadingApp } from './loading';
import type { LoadingOptions, LoadingOptionsResolved } from './type';
import { isString } from '@vue/shared';
// 创建loading元素
export const Loading = function (options: LoadingOptions): LoadingApp {
  const resolvedOptions = resolveOptions(options);
  const loadingApp = createLoadingElement(resolvedOptions);
  // 将loading元素添加到指定位置
  resolvedOptions.parent.appendChild(loadingApp.loadingInstance.$el);
  addClassList(resolvedOptions);
  return loadingApp;
};

const addClassList = function (options: LoadingOptionsResolved) {
  // 给loading父元素添加class
  options.parent.classList.add('loading-parent--reative');
};

// 解析options
const resolveOptions = (options: LoadingOptions): LoadingOptionsResolved => {
  let target: HTMLElement;
  if (isString(options.target)) {
    target = document.querySelector<HTMLElement>(options.target) ?? document.body;
  } else {
    target = options.target || document.body;
  }

  return {
    parent: target === document.body ? document.body : target,
    target,
    visible: options.visible,
  };
};
