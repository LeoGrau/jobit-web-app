<template>
  <div class="profile-photo">
    <img :src="photoUrl" alt="user profile picture" />
  </div>
</template>

<script>
export default {
  props: {
    photoUrl: {
      type: String,
      default: () =>
        "https://wipy.tv/wp-content/uploads/2020/05/cicatriz-de-peter-parker-en-spider-man-3-1-1200x900.jpg",
    },
  },
  name: "CirclePhoto",
};
</script>

<style scoped>
.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}
.profile-photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
