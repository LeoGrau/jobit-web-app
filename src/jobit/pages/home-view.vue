<template>
  <div class="home-view">
    <post-card></post-card>
  </div>
</template>

<script>
import PostCard from "../components/post-card.vue";
export default {
  components: {
    PostCard,
  },
};
</script>

<style scoped>
.home-view {
  padding: 15px;
}
</style>
