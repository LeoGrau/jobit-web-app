<template>
  <div class="profile-photo-upload">
    <div class="circle flex align-items-center justify-content-center">
      <i class="bi bi-person-fill text-blue-300 text-6xl"></i>
    </div>
    <div class="upload-container">
      <pv-file-upload
        class="file-upload"
        mode="basic"
        uploadIcon="pi pi-camera"
        chooseLabel="Photo"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-photo-upload {
  position: relative;
  width: 150px;
  height: 150px;
}
.circle {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--blue-100);
  border: 4px dashed var(--blue-300);
}
.upload-container {
  position: absolute !important;
  bottom: 0 !important;
  right: 0 !important;
}
</style>
