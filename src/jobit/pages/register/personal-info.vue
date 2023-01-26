<template>
  <div id="personal-info" class="stepsdemo-content">
    <pv-card>
      <template v-slot:title> Personal Information </template>
      <template v-slot:subtitle> Enter your personal information </template>
      <template v-slot:content>
        <div class="p-fluid">
          <div class="field">
            <label for="firstname">Firstname</label>
            <pv-input-text
              id="firstname"
              v-model="firstname"
              :class="{ 'p-invalid': validationErrors.firstname && submitted }"
            />
            <small
              v-show="validationErrors.firstname && submitted"
              class="p-error"
              >Firstname is required.</small
            >
          </div>
          <div class="field">
            <label for="lastname">Lastname</label>
            <pv-input-text
              id="lastname"
              v-model="lastname"
              :class="{ 'p-invalid': validationErrors.lastname && submitted }"
            />
            <small
              v-show="validationErrors.lastname && submitted"
              class="p-error"
              >Lastname is required.</small
            >
          </div>
          <div class="field">
            <label for="age">Age</label>
            <pv-input-number id="age" v-model="age" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="grid grid-nogutter justify-content-between">
          <i></i>
          <pv-button
            label="Next"
            @click="nextPage()"
            icon="pi pi-angle-right"
            iconPos="right"
          />
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  data() {
    return {
      firstname: "",
      lastname: "",
      age: null,
      submitted: false,
      validationErrors: {},
    };
  },
  methods: {
    nextPage() {
      this.submitted = true;
      if (this.validateForm()) {
        this.$emit("next-page", {
          formData: {
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
          },
          pageIndex: 0,
        });
      }
    },
    validateForm() {
      if (!this.firstname.trim()) this.validationErrors["firstname"] = true;
      else delete this.validationErrors["firstname"];

      if (!this.lastname.trim()) this.validationErrors["lastname"] = true;
      else delete this.validationErrors["lastname"];

      return !Object.keys(this.validationErrors).length;
    },
  },
};
</script>
