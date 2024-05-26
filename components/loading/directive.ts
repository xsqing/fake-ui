import type { Directive, DirectiveBinding } from 'vue';
import { INSTANCE_KEY, type ElementLoading, type LoadingOptions } from './type';
import { Loading } from './service';

const createInstace = (el: ElementLoading, binding: DirectiveBinding<boolean>) => {
  const options: LoadingOptions = {
    target: el,
    visible: binding.value,
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options),
  };
};

export const loadingDirective: Directive<ElementLoading, boolean> = {
  mounted(el, binding) {
    if (binding.value) {
      createInstace(el, binding);
    }
  },
  updated(el, binding) {
    const app = el[INSTANCE_KEY];
    if (binding.value) {
      app.instance.show();
    } else {
      app.instance.close();
    }
  },
};
