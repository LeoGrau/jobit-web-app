<template>
  <div class="social-contact flex gap-2 align-items-center">
    <img
      src="https://logo.clearbit.com/github.com"
      alt=""
      class="social-type-icon"
    />
    <div class="flex flex-column">
      <span>{{ socialContact.companyName }}</span>
      <a
        :href="socialContact.urlContact"
        target="_blank"
        rel="noopener noreferrer"
        >{{ socialContact.urlContact }}</a
      >
    </div>
  </div>
</template>

<script>
import SocialContact from "../models/social-contact";
export default {
  data() {
    return {
      socialContact: new SocialContact("https://github.com/LeoGrau", "Github"),
      socialType: undefined,
    };
  },
};
</script>

<style scoped>
.social-type-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.social-contact {
  padding: 20px;
  background-color: var(--blue-100);
  border-radius: 10px;
}
</style>
