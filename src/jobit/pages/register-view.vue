<template>
  <div class="register flex justify-content-center">
    <pv-toast />

    <div class="content flex flex-column gap-2">
      <pv-card class="card">
        <template #content>
          <div>
            <pv-steps :model="items" :readonly="true" aria-label="Form Steps" />
          </div>
        </template>
      </pv-card>

      <pv-card>
        <template #content>
          <div>
            <router-view
              class="card"
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
      </pv-card>
    </div>
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
        {
          label: "Profesional Information",
          to: "/register/professional-info",
        }
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
  width: 100%;
  height: 100vh;
}

.register .content {
  width: 80%;
}
.full {
  height: 100vh;
}
</style>
