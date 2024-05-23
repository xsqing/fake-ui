import { Loading as LoadingService } from './service';
import { loadingDirective } from './directive';

import type { App } from 'vue';
export const Loading = {
  install(app: App) {
    app.directive('loading', loadingDirective);
    app.config.globalProperties.$loading = LoadingService;
  },
  directive: loadingDirective,
  setvice: LoadingService,
};

export default Loading;

export { loadingDirective, LoadingService };
