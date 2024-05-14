import { defineComponent } from 'vue';
import HelloWorld from '../components/hello-world';
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
