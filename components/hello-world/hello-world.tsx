import { computed, defineComponent, toRef, type PropType } from 'vue';
import './styles/index.less';
import { WorldType } from './type';
import withInstall from '../../utils/withInstall';
const HelloWorld = defineComponent({
  props: {
    // 给组件加入参数type,jsx不能通过defineProps设定参数
    type: {
      default: WorldType.NORMAL,
      type: String as PropType<WorldType>,
    },
  },
  name: 'HelloWorld',
  setup(props) {
    const worldType = toRef(props.type);

    const worldMsg = computed(() => {
      switch (worldType.value) {
        case WorldType.NORMAL:
          return 'boring world';
        case WorldType.PEACE:
          return 'hello world';
        case WorldType.DANGER:
          return 'danger world';
        case WorldType.BIGGER:
          return '广阔天地、大有作为';
        default:
          return 'world 404~~';
      }
    });
    const render = () => {
      return (
        <>
          <div class={[`world-${worldType.value}`, 'world']}>{worldMsg.value}</div>
        </>
      );
    };
    return render;
  },
});
export default withInstall(HelloWorld);
