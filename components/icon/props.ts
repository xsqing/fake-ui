import type { CSSProperties, PropType } from 'vue';

export const props = {
  style: {
    type: Object as PropType<CSSProperties>,
    default: null,
  },
  height: {
    type: Number,
    default: 16,
  },
  width: {
    type: Number,
    default: 16,
  },
  fill: {
    type: String,
    default: '#000000',
  },
  name: {
    type: String,
    default: 'home',
  },
  // 传入组件
  component: {
    type: Function,
    default: null,
  },
};

export type IconProps = typeof props;
