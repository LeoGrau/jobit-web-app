<template>
  <div class="sketch">
    <tag-component></tag-component>
  </div>
</template>

<script>
import TagComponent from "../components/tag-component.vue";
export default {
  components: {
    TagComponent,
  },
};
</script>

<style scoped>
.sketch {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
