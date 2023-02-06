<template>
  <div class="sketch">
    <added-social-contact></added-social-contact>
  </div>
</template>

<script>
import AddedSocialContact from "../components/added-social-contact.vue";
export default {
  components: {
    AddedSocialContact,
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
