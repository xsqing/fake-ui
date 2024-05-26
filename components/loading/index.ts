import { Loading as LoadingService } from './service';
import { loadingDirective } from './directive';
import '../loading/style/index.less';
import type { App } from 'vue';
export const Loading = {
  install(app: App) {
    app.directive('loading', loadingDirective);
    app.config.globalProperties.$loading = LoadingService;
  },
  directive: loadingDirective,
  service: LoadingService,
};

export default Loading;

export { loadingDirective, LoadingService };
