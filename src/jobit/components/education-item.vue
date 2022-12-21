<template>
  <div class="education-item flex flex-row gap-2 align-items-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png"
      alt="education image"
    />
    <div class="education-info flex flex-column">
      <p>Universidad Peruana de Ciencias Aplicadas</p>
      <p><strong>Time: </strong> 2019 - 2024</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationItem",
};
</script>

<style scoped>
.education-item > img {
  width: 50px;
}
.education-info p {
  font-size: 0.85rem;
}
</style>
