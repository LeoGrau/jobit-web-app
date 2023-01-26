<template>
  <div class="register">
    <pv-toast />

    <div class="card">
      <pv-steps :model="items" :readonly="true" aria-label="Form Steps" />
    </div>

    <router-view
      v-slot="{ Component }"
      :formData="formObject"
      @prevPage="prevPage($event)"
      @nextPage="nextPage($event)"
      @complete="complete"
    >
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComponent: "personal-info",
      items: [
        {
          label: "Personal Information",
          to: "/register",
        },
      ],
      formObject: {},
    };
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      console.log("event: ", event);
      console.log("wups: ", this.formObject);
      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      this.$toast.add({
        severity: "success",
        summary: "Order submitted",
        detail:
          "Dear, " +
          this.formObject.firstname +
          " " +
          this.formObject.lastname +
          " your order completed.",
      });
    },
  },
};
</script>

<style scoped>
.register {
  transform: translateY(65px);
  height: 100vh;
}
.full {
  height: 100vh;
}
</style>
