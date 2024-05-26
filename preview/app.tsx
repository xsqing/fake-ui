import { defineComponent, onMounted } from 'vue';
import { LoadingService } from '../components/loading';
export default defineComponent({
  setup() {
    onMounted(() => {
      const loading = LoadingService({
        visible: true,
        target: '#test',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    });
    const render = () => {
      return (
        <>
          <div>
            <div
              style={{
                height: '100vh',
                backgroundColor: '#333333',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                fontSize: '48px',
                color: '#ffffff',
              }}
              id="test"
            >
              hello world
            </div>
          </div>
        </>
      );
    };
    return render;
  },
});
