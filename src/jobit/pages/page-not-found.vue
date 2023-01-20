<template>
  <div
    class="page-not-found flex flex-column justify-content-center align-items-center"
  >
    <img src="../../assets/image/warning.png" alt="warning image" />
    <h1>Error 404</h1>
    <h2>Oops! There is nothing here.</h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-not-found {
  height: calc(100vh - 65px);
}
h1 {
  font-size: 7rem;
}
img {
  width: 100px;
  height: 100px;
}
</style>
