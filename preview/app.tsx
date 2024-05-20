import { defineComponent } from 'vue';
import Icon from '../components/icon';
import './statics/icons/test.svg';

const TestIcon = function () {
  return <Icon name="icon-test" width={200} height={200} />;
};

export default defineComponent({
  setup() {
    const render = () => {
      return (
        <>
          <Icon component={TestIcon} />
          <TestIcon />
        </>
      );
    };
    return render;
  },
});
