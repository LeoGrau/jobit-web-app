<template>
  <p>
    <span>{{ dynamicText }}</span>
    <span
      class="clickable"
      @click="readMorePressed = !readMorePressed"
      v-show="!readMorePressed"
    >
      Read more...
    </span>
    <span
      class="clickable"
      @click="readMorePressed = !readMorePressed"
      v-show="readMorePressed"
    >
      Read less
    </span>
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => "",
    },
  },
  name: "ReducibleText",
  data() {
    return {
      readMorePressed: false,
    };
  },
  computed: {
    dynamicText() {
      if (!this.readMorePressed) return this.text.slice(0, 90);
      else return this.text;
    },
  },
};
</script>

<style scoped>
span {
  font-size: 13px;
  cursor: pointer;
}
span.clickable {
  color: rgb(60, 58, 177);
}

span.clickable:hover {
  text-decoration: underline;
}
</style>
