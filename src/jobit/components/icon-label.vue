<template>
  <div class="icon-label flex align-items-center gap-1">
    <i
      class="p-button-text p-button-secondary"
      :class="[clickedIcon ? iconClickedClass : iconNotClickedClass]"
      @click="
        clickedIcon = !clickedIcon;
        action();
      "
    ></i>
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    iconClickedClass: String,
    iconNotClickedClass: String,
  },
  data() {
    return {
      clickedIcon: false,
    };
  },
  methods: {
    action() {
      this.$emit("custom-action");
    },
  },
};
</script>

<style scoped>
.icon-label > span {
  font-size: 12px;
}
</style>
