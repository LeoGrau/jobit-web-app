<template>
  <div class="profile-photo-upload">
    <div
      @click="selectImage"
      class="circle flex justify-content-center align-items-center cursor-pointer"
      :class="previewImage ? 'uploaded-border' : 'not-uploaded-border'"
    >
      <i
        v-if="!previewImage"
        class="bi bi-person-fill"
        :style="{ fontSize: '48px', color: 'var(--blue-300)' }"
      ></i>
      <img v-if="previewImage" :src="previewImage" />
    </div>
    <input
      ref="fileInput"
      class="d-none"
      type="file"
      @input="pickImageFromFileBrowser"
    />
    <button
      type="button"
      class="upload-button cursor-pointer"
      @click="selectImage"
    >
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
      let input = this.$refs.fileInput;
      let selectedFile = input.files; //The tag isn't multiple, so it's just 1 file.
      console.log(selectedFile.length);
      if (selectedFile.length > 0) {
        let reader = new FileReader();
        //Set event for 'load()'
        reader.onload = (event) => {
          console.log(event);
          this.previewImage = event.target.result;
          console.log(this.previewImage);
        };
        reader.readAsDataURL(selectedFile[0]); //When data reads, the event load is generated.
      }
    },
    doSomething() {
      console.log("Say Hello");
    },
  },
};
</script>

<style scoped>
.profile-photo-upload {
  position: relative;
  width: 120px;
  height: 120px;
}
/*Border*/
.not-uploaded-border {
  border: 3px dashed var(--blue-500);
  background-color: var(--blue-100);
}
.uploaded-border {
  border: none;
}

.upload-button {
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: var(--blue-600);
  color: white;
  font-size: 19px;
}

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}
.circle > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
