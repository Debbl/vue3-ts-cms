/* eslint-disable */
// 申明一个 文件 为 一个模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare const $store: any;
