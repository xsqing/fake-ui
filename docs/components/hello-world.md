---
outline: deep
---

# hello world

say hello to the world!

## 代码演示

世界类型有四种：normal、peace、danger、bigger

<script setup>
import { HelloWorld } from '../../components'
import { ref } from 'vue'
const isDark = ref(false)
const onClick = function(){
    isDark.value = !isDark.value
    document.documentElement.setAttribute('theme-mode', isDark.value ? 'dark' : 'light');
}
</script>

<button @click=onClick>切换模式</button>

<div :class="$style['world-container']">
    <HelloWorld type='normal' />
    <HelloWorld type='peace' />
    <HelloWorld type='danger' />
    <HelloWorld type='bigger' />
</div>

<style module>
.world-container {
  display:flex;
  justify-content:space-around;
}
</style>

```vue
<script setup>
import { HelloWorld } from '../../components';
</script>

<HelloWorld />

<div :class="$style['world-container']">
    <HelloWorld type='normal' />
    <HelloWorld type='peace' />
    <HelloWorld type='danger' />
    <HelloWorld type='bigger' />
</div>

<style module>
.world-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
```

## API

通过设置世界不同的类型来展示不同的样式和文字。

| 属性 | 说明       | 类型   | 默认值 |
| ---- | ---------- | ------ | ------ |
| type | 世界的类型 | String | normal |
