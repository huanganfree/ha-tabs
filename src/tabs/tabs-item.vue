<template>
  <div class="tabs-item" :class="{ active: isActive }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HaTabsItem',
  props: ['name'],
  inject: ['root'],
  computed: {
    isActive() {
      return this.root.currentName === this.name;
    }
  }
};
</script>

<style scoped lang="less">
.tabs-item {
  padding: 0.3em 1em;
  font-size: 1em;
  cursor: pointer;
  position: relative;
  left: 0px;
}
.active {
  font-weight: bolder;
  color: blue;
}
</style>
