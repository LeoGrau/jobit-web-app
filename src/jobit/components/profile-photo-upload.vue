<template>
  <div class="profile-photo-upload">
    <div
      :class="[
        previewImage ? 'uploaded-background' : 'not-uploaded-background',
      ]"
      :style="{
        backgroundImage: `url(${previewImage})`,
        backgroundSize: 'cover',
      }"
    ></div>
    <input
      ref="fileInput"
      class="d-none"
      type="file"
      @input="pickImageFromFileBrowser"
    />
    <button @click="selectImage">
      <i class="bi bi-camera-fill"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickImageFromFileBrowser() {
      console.log("xd");
      let input = this.$refs.fileInput;
      let selectedFile = input.files; //The tag isn't multiple, so it's just 1 file.
      console.log(selectedFile.length);
      if (selectedFile.length > 0) {
        let reader = new FileReader();
        //Set event 'on load()'
        reader.onload = (event) => {
          console.log(event);
          this.previewImage = event.target.result;
          console.log(this.previewImage);
        };
        console.log(selectedFile[0]);
        reader.readAsDataURL(selectedFile[0]);
        this.$emit("input", selectedFile[0]);
      }
    },
  },
};
</script>

<style scoped>
.uploaded-background {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.not-uploaded-background {
  width: 0px;
  height: 0px;
}
.profile-photo-upload {
  position: relative;
  width: 150px;
  height: 150px;
}
</style>
