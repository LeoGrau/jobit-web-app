<template>
  <div class="social-info">
    <form action="" class="p-fluid">
      <section>
        <h3 class="pb-4">Add social network</h3>
        <div class="grid">
          <div class="field col-6">
            <div class="p-float-label">
              <pv-input-text
                class="format"
                v-model="socialNetwork"
              ></pv-input-text>
              <label for="username">Social Network</label>
            </div>
          </div>
          <div class="col-6">
            <pv-button class="" icon="bi bi-plus" label="Add"> </pv-button>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialNetwork: "",
    };
  },
};
</script>

<style scoped>
</style>
