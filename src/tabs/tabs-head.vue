
<script>
export default {
  name: 'HaTabsHead',
  data() {
    return {
      lineDOMStyles: null
    };
  },
  created() {
    if (this.root) {
      this.root.$on('input', this.calculateLineDOMStyle);
    }
  },
  inject: ['root'],
  mounted() {
    this.calculateLineDOMStyle();
  },
  methods: {
    judgeVal(el) {
      return el && el.componentOptions.propsData.name;
    },
    calculateLineDOMStyle() {
      let lineLeft = 0;
      let lineWidth = 0;
      this.$children &&
        this.$children.every((vm) => {
          if (vm.$options.propsData.name === this.root.currentName) {
            const {
              width: itemWidth,
              left: itemLeft
            } = vm.$el.getBoundingClientRect(); // window.getComputedStyle($el)并不适用
            const { left: headLeft } = this.$refs.head.getBoundingClientRect();
            lineLeft = itemLeft - headLeft;
            lineWidth = itemWidth;
            return false;
          }
          return true;
        });
      this.lineDOMStyles = {
        left: lineLeft + 'px',
        width: lineWidth + 'px'
      };
    }
  },
  render() {
    // 过滤掉text VNode（猜测），并且指定需要的组件实例ha-tabs-item
    const tabsItemArr = this.$slots.default.filter(
      (vnode) => vnode.tag && vnode.componentOptions.tag === 'ha-tabs-item'
    );
    return (
      <div class="tabs-head" ref="head">
        <div class="tabs-content">
          {tabsItemArr.map((item) => {
            return (
              <div
                onClick={ev =>
                  this.$parent.changeCurrValue(this.judgeVal(item), ev)
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        <div class="line">
          <div class="line-content" style={this.lineDOMStyles}></div>
        </div>
      </div>
    );
  }
};
</script>

<style scoped lang="less">
.tabs-head {
  .tabs-content {
    display: flex;
  }
  .line {
    background: #ddd;
    height: 1px;
    position: relative;
    .line-content {
      position: absolute;
      background: blue;
      height: 2px;
      transition: left 350ms;
      left: 0;
    }
  }
}
</style>
