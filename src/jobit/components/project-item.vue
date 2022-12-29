<template>
  <div class="project-item">
    <img src="https://miro.medium.com/max/1200/0*vm0eS5ebSgziJ_II" alt="" />
    <div class="info">
      <h3>Drunkies-API</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
};
</script>

<style scoped>
.project-item {
}
.project-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
</style>
