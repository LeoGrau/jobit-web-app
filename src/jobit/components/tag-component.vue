<template>
  <div class="rectangle flex gap-1">
    <i
      class="hovered-icon"
      :class="[hoveredIcon ? 'bi bi-x-circle-fill' : 'bi bi-tag-fill']"
      @mouseover="hoveredIcon = true"
      @mouseleave="hoveredIcon = false"
      @click="emitDeleteEvent"
    ></i>
    <p>{{ tagName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: () => "Tag",
    },
  },
  data() {
    return {
      hoveredIcon: false,
    };
  },
  methods: {
    emitDeleteEvent() {
      this.$emit("delete-tag");
    },
  },
};
</script>

<style scoped>
.rectangle {
  background-color: var(--gray-300);
  width: fit-content;
  height: fit-content;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 13px;
}

.hovered-icon {
  transition: all 0.2s ease-in-out !important;
  cursor: pointer;
}
</style>
