<template>
  <div class="social-contact flex justify-content-between align-items-center">
    <section class="flex gap-2 align-items-center">
      <img
        src="https://logo.clearbit.com/github.com"
        alt=""
        class="social-type-icon"
      />
      <div class="flex flex-column">
        <span>{{ socialContact.companyName }}</span>
        <a
          class="url-text"
          v-show="!isEditing"
          :href="socialContact.urlContact"
          target="_blank"
          rel="noopener noreferrer"
          >{{ socialContact.urlContact }}</a
        >
        <pv-input-text
          v-show="isEditing"
          v-model="contactUrl"
          placeholder="Contact Link"
        ></pv-input-text>
      </div>
    </section>
    <div class="actions flex align-items-center gap-2">
      <button
        @click="
          updateContactUrl();
          isEditing = !isEditing;
        "
        v-show="isEditing"
        type="button"
        class="pi pi-save p-button-text p-button-rounded"
      ></button>
      <button
        @click="
          isEditing = !isEditing;
          contactUrl = socialContact.urlContact;
        "
        type="button"
        class="bi bi-pencil-fill p-button-text p-button-rounded"
      ></button>
      <button
        @click="deleteContactUrl()"
        type="button"
        class="bi-trash-fill p-button-text p-button-rounded"
      ></button>
    </div>
  </div>
</template>

<script>
import SocialContact from "../models/social-contact";
export default {
  props: {
    socialContact: {
      type: SocialContact,
      default: () => undefined,
    },
  },
  data() {
    return {
      //Inputs
      contactUrl: "",
      //Flags
      isEditing: false,
      isSaved: false,
      //Data
      updatedSocialContact: undefined,
      socialType: undefined,
    };
  },
  created() {
    this.updatedContactUrl = this.socialContact.urlContact;
    this.updatedSocialContact = this.socialContact;
  },
  methods: {
    updateContactUrl() {
      this.updatedSocialContact.urlContact = this.contactUrl;
      this.$emit("update-contact", this.socialContact.urlContact);
    },
    deleteContactUrl() {
      this.$emit("delete-contact");
    },
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
  width: 35%;
  min-width: 400px;
  max-width: 470px;
  height: 100px;
  padding: 20px;
  background-color: var(--blue-100);
  border-radius: 10px;
}

.actions button {
  cursor: pointer;
  color: var(--blue-300);
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  transition: color 0.1s ease-in-out;
}
.actions button:hover {
  color: var(--blue-600);
}
</style>
