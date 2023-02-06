<template>
  <div class="social-info">
    <form action="" class="p-fluid">
      <section>
        <h3 class="pb-4">Add social network</h3>
        <div class="grid">
          <div class="col-2">
            <div class="p-float-label">
              <pv-dropdown
                v-model="social"
                :options="socialTypes"
                :filter="true"
                :showClear="true"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value">
                    <span>{{ slotProps.value.name }}</span>
                  </div>
                </template>
                <template #option="slotProps">
                  <div>
                    <span>{{ slotProps.option.name }}</span>
                  </div>
                </template>
              </pv-dropdown>
              <label for="country">Social Network</label>
            </div>
          </div>
          <div class="field col-4">
            <div class="p-float-label">
              <pv-input-text
                class="format"
                v-model="socialNetwork"
              ></pv-input-text>
              <label for="username">Social Url</label>
            </div>
          </div>
          <div class="col-6 w-max">
            <pv-button class="" icon="bi bi-plus" label="Add"> </pv-button>
          </div>
        </div>
      </section>
      <section>
        <h3>Socials</h3>
        <div class="added-socials"></div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: undefined,
      socialNetwork: "",
      //Collections
      socialTypes: [
        {
          id: 1,
          name: "Github",
        },
        {
          id: 2,
          name: "LinkedIn",
        },
        {
          id: 3,
          name: "Reddit",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
