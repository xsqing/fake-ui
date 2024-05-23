import type { Directive, DirectiveBinding } from 'vue';
import { isObject } from '@vue/shared';
import {
  INSTANCE_KEY,
  type ElementLoading,
  type LoadingBinding,
  type LoadingOptions,
} from './type';
import { Loading } from './service';
const getBindingProp = <K extends keyof LoadingOptions>(
  key: K,
  binding: DirectiveBinding<LoadingBinding>,
) => {
  return isObject(binding.value) ? binding.value[key] : binding.value;
};
const createInstace = (el: ElementLoading, binding: DirectiveBinding<LoadingBinding>) => {
  const options: LoadingOptions = {
    target: el,
    visible: getBindingProp('visible', binding) ?? false,
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options),
  };
};

export const loadingDirective: Directive<ElementLoading, LoadingBinding> = {
  mounted(el, binding) {
    if (binding.value) {
      createInstace(el, binding);
    }
  },
  updated(el, binding) {
    const app = el[INSTANCE_KEY];
    app.instance;
  },
};
