import Tabs from './tabs.vue';
import TabsItem from './tabs-item.vue';
import TabsBody from './tabs-body.vue';
import TabsPane from './tabs-pane.vue';
import TabsHead from './tabs-head.vue';

const componentArr = [Tabs, TabsItem, TabsBody, TabsPane, TabsHead];

// 目的就是注册为全局组件
const install = function(Vue) {
  componentArr.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Tabs,
  TabsItem,
  TabsBody,
  TabsPane,
  TabsHead
};
