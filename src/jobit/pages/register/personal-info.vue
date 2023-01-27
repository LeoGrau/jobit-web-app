<template>
  <div class="personal-info">
    <div class="card-content">
      <form action="" class="p-fluid">
        <div class="field">
          <div class="p-float-label">
            <pv-input-text class="format" v-model="username"></pv-input-text>
            <label for="username">Username</label>
          </div>
        </div>
        <div class="field">
          <div class="p-float-label">
            <pv-input-text class="format" v-model="firstname"></pv-input-text>
            <label for="firstname">Firstname</label>
          </div>
        </div>
        <div class="field">
          <div class="p-float-label">
            <pv-input-text class="format" v-model="lastname"></pv-input-text>
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
            <label for="email">Birthday</label>
          </div>
        </div>
        <div class="flex justify-content-end">
          <pv-button class="next" label="Next" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthday: "",
    };
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

.next {
  bottom: 4px;
  right: 4px;
  max-width: 200px;
}
</style>
