<template>
  <div class="sketch">
    <profile-photo-upload></profile-photo-upload>
  </div>
</template>

<script>
import ProfilePhotoUpload from "../../../src/jobit/components/profile-photo-upload.vue";
export default {
  components: {
    ProfilePhotoUpload,
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
