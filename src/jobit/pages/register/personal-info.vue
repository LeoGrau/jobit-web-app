<template>
  <div class="personal-info">
    <div class="card-content">
      <form action="" class="p-fluid">
        <section>
          <h3 class="pb-3">Profile Photo</h3>
          <profile-photo-upload></profile-photo-upload>
        </section>
        <pv-divider></pv-divider>
        <section>
          <h3 class="pb-3">Personal Data</h3>
          <div class="inputs">
            <div class="field">
              <div class="p-float-label">
                <pv-input-text
                  class="format"
                  v-model="username"
                ></pv-input-text>
                <label for="username">Username</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-input-text
                  class="format"
                  v-model="firstname"
                ></pv-input-text>
                <label for="firstname">Firstname</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-input-text
                  class="format"
                  v-model="lastname"
                ></pv-input-text>
                <label for="lastname">Lastname</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-input-text class="format" v-model="email"></pv-input-text>
                <label for="email">Email</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-password class="format" v-model="password" toggleMask>
                  <template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer="sp">
                    {{ sp.level }}
                    <pv-divider />
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                    </ul>
                  </template>
                </pv-password>
                <label for="email">Password</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-password
                  class="format"
                  v-model="confirmPassword"
                  :feedback="false"
                  toggleMask
                >
                </pv-password>
                <label for="email">Confirm Password</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-calendar
                  class="format"
                  v-model="birthday"
                  :showIcon="true"
                ></pv-calendar>
                <label for="email">Date of birth</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-dropdown
                  v-model="country"
                  :options="countries"
                  optionLabel="name"
                  :filter="true"
                  :showClear="true"
                  style="height: 39px"
                >
                  <template #value="slotProps">
                    <div
                      class="country-item country-item-value flex flex-row align-items-center gap-1"
                      v-if="slotProps.value"
                    >
                      <country-flag
                        :country="slotProps.value.code"
                        size="small"
                      ></country-flag>
                      <span>{{ slotProps.value.name }}</span>
                    </div>
                    <span v-else>
                      {{ slotProps.placeholder }}
                    </span>
                  </template>
                  <template #option="slotProps">
                    <div
                      class="country-item flex flex-row align-items-center gap-1"
                    >
                      <country-flag
                        :country="slotProps.option.code"
                        size="small"
                      ></country-flag>
                      <span>{{ slotProps.option.name }}</span>
                    </div>
                  </template>
                </pv-dropdown>
                <label for="country">Country</label>
              </div>
            </div>
            <div class="field">
              <div class="p-float-label">
                <pv-input-number
                  placeholder=""
                  v-model="cellphone"
                ></pv-input-number>
                <label for="cell">Cellphone Number</label>
              </div>
            </div>
          </div>
        </section>
        <div class="flex justify-content-end">
          <pv-button class="next" label="Next" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import profilePhotoUpload from "../../components/profile-photo-upload.vue";
import CountriesService from "../../services/countries.service";
export default {
  components: { profilePhotoUpload },
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthday: "",
      country: "",
      cell: "",
      tags: [],
      countries: [],
    };
  },
  created() {
    this.setCountries();
  },
  methods: {
    setCountries() {
      CountriesService.getAllCountries().then((res) => {
        console.log(res);
        this.countries = res;
      });
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 1.6rem;
}

.buttons {
  width: 100%;
}

.inputs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.next {
  max-width: 200px;
}

.country-item img {
  width: 17px;
  margin-right: 0.5rem;
}
</style>
