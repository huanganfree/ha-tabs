<template>
  <div id="app">
    <ha-tabs v-model="activeItem" @tabs-click="handleTabsClick">
      <ha-tabs-head>
        <ha-tabs-item :name="1">1</ha-tabs-item>
        <ha-tabs-item :name="2">2</ha-tabs-item>
        <ha-tabs-item :name="3">3</ha-tabs-item>
      </ha-tabs-head>
      <ha-tabs-body>
        <ha-tabs-pane :name="1">ha 1</ha-tabs-pane>
        <ha-tabs-pane :name="2">ha 2</ha-tabs-pane>
        <ha-tabs-pane :name="3">ha 3</ha-tabs-pane>
      </ha-tabs-body>
    </ha-tabs>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      activeItem: 1
    };
  },
  methods: {
    handleTabsClick(data) {
      console.log(data);
    }
  }
};
</script>
