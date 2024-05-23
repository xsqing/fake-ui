import { createApp } from 'vue';
import Loading from '../components/loading';
import App from './app';
createApp(App).use(Loading).mount('#app');
