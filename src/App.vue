<template>
  <div class="app">
    <toolbar-component></toolbar-component>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolbarComponent from "./jobit/components/toolbar-component.vue";
export default {
  components: {
    ToolbarComponent,
  },
};
</script>

<style></style>
