import { defineComponent } from 'vue';
import { props } from './props';
import withInstall from '../../utils/withInstall';
import './style/index.less';
const Icon = defineComponent({
  props,

  setup(props) {
    return () => {
      if (props.component) {
        return props.component();
      } else {
        return (
          <svg
            class="svg-icon"
            style={{ width: props.width, height: props.height, ...props.style }}
            aria-hidden="true"
          >
            <use xlinkHref={`#${props.name}`} />
          </svg>
        );
      }
    };
  },
});

export default withInstall(Icon);
