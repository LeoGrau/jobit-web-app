<template>
  <div class="professional-info">
    <div class="card-content">
      <form action="" class="p-fluid">
        <div class="inputs">
          <section>
            <div class="flex align-items-center pb-4 gap-2">
              <h3 class="">Main Specialty</h3>
              <p class="text-gray-500 note">* You can add more lately</p>
            </div>
            <div class="grid">
              <div class="col-6 mb-3">
                <div class="p-float-label">
                  <pv-dropdown
                    v-model="career"
                    :options="careers"
                    optionLabel="name"
                    :filter="true"
                    :showClear="true"
                    style="height: 39px"
                  >
                    <template #value="slotProps">
                      <div
                        class="career-item career-item-value"
                        v-if="slotProps.value"
                      >
                        <span>{{ slotProps.value.name }}</span>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="career-item">
                        <span>{{ slotProps.option.name }}</span>
                      </div>
                    </template>
                  </pv-dropdown>
                  <label for="country">Career</label>
                </div>
              </div>
              <div class="col-6 mb-3">
                <div class="p-float-label">
                  <pv-dropdown
                    v-model="degree"
                    :options="degrees"
                    optionLabel="name"
                    :filter="true"
                    :showClear="true"
                    style="height: 39px"
                  >
                    <template #value="slotProps">
                      <div
                        class="career-item career-item-value"
                        v-if="slotProps.value"
                      >
                        <span>{{ slotProps.value.name }}</span>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="career-item">
                        <span>{{ slotProps.option.name }}</span>
                      </div>
                    </template>
                  </pv-dropdown>
                  <label for="country">Degree</label>
                </div>
              </div>
              <div class="col-6 mb-3" v-if="hasDegree">
                <div class="p-float-label">
                  <pv-calendar
                    class="format"
                    v-model="startDate"
                    :showIcon="true"
                  ></pv-calendar>
                  <label for="start-date">Start Date</label>
                </div>
              </div>
              <div class="col-6 mb-3" v-if="hasDegree">
                <div class="p-float-label">
                  <pv-calendar
                    class="format"
                    v-model="endDate"
                    :showIcon="true"
                  ></pv-calendar>
                  <label for="end-date">End Date</label>
                </div>
              </div>
            </div>
          </section>
          <pv-divider></pv-divider>
          <section>
            <h3 class="pb-4">Related Tags</h3>
            <div class="field">
              <div class="flex gap-3">
                <div class="p-float-label">
                  <pv-input-text></pv-input-text>
                  <label for="">Tag</label>
                </div>
                <pv-button
                  class="p-button-success w-max"
                  label="Add"
                  icon="bi bi-plus"
                ></pv-button>
              </div>
            </div>
          </section>
          <pv-divider></pv-divider>
          <section>
            <h3 class="pb-3">Upload CV</h3>
            <div class="field">
              <div class="p-float-label">
                <pv-file-upload mode="basic"></pv-file-upload>
              </div>
            </div>
          </section>
          <pv-divider></pv-divider>
          <section>
            <h3 class="pb-3">Introducing Card</h3>
            <div class="field">
              <div class="p-float-label">
                <pv-text-area :autoResize="true"></pv-text-area>
                <label for=""></label>
              </div>
            </div>
          </section>
        </div>
        <div class="buttons flex justify-content-between">
          <pv-button label="Prev" />
          <pv-button label="Next" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      career: undefined,
      degree: undefined,
      startDate: undefined,
      endDate: undefined,
      careers: [
        {
          id: 1,
          name: "Software Engineering",
        },
      ],
      degrees: [
        {
          id: 1,
          name: "Autodidact",
        },
        {
          id: 2,
          name: "College Student",
        },
      ],
    };
  },
  computed: {
    hasDegree() {
      return this.degree ? this.degree?.id != 1 : this.degree;
    },
  },
  methods: {
    clearDates() {
      this.endDate = this.startDate = undefined;
    },
  },
  watch: {
    startDate(after, before) {
      console.log("after", after, "before", before);
    },
    endDate(after, before) {
      console.log("after", after, "before", before);
    },
    degree(current) {
      if (current) {
        this.clearDates();
      }
    },
  },
};
</script>

<style scoped>
.buttons button {
  max-width: 200px;
}

.note {
  font-size: 14px;
}
</style>
