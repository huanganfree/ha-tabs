<template>
  <div class="tabs" ref="tabsRef">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HaTabs',
  data() {
    return {
      currentName: this.value
    };
  },
  props: ['value'],
  provide() {
    return {
      root: this
    };
  },
  methods: {
    changeCurrValue(val) {
      this.currentName = val;
      this.$emit('input', val);
      this.$emit('tabs-click', this.$refs.tabsRef);
    }
  }
};
</script>

<style scoped lang="less">
</style>
