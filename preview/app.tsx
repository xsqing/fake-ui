import { defineComponent } from 'vue';
import HelloWorld from '../dist/es/hello-world';
export default defineComponent({
  setup() {
    const render = () => {
      return (
        <>
          <HelloWorld />
        </>
      );
    };
    return render;
  },
});
