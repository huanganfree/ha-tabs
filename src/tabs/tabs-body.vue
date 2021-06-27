<script>
export default {
  name: 'HaTabsBody',
  inject: ['root'],
  render() {
    const tabsItemArr = this.$slots.default.filter(vnode => vnode.tag && vnode.componentOptions.tag === 'ha-tabs-pane');
    const activeBody = tabsItemArr.filter(
      item => item.componentOptions.propsData.name === this.root.currentName
    );
    return (
      <div class="tabs-body">
        <div class="tabs-body-content">{activeBody}</div>
      </div>
    );
  }
};
</script>

<style scoped lang="less">
.tabs-body {
  padding: 1em 0 0 1em;
  .tabs-body-content {
    display: flex;
  }
}
</style>
