import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/fake-ui/",
  title: "fake-ui",
  description: "fake-ui vue3 progressive ui component study",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/components/index" },
    ],

    sidebar: [
      {
        text: "组件",
        items: [{ text: "Hello World", link: "/components/hello-world" }],
      },
    ],
  },
});
