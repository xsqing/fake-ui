import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref(true);
    setTimeout(() => {
      visible.value = false;
    }, 2000);
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
              v-loading={visible.value}
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
