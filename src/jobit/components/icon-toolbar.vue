<template>
  <div class="icon-toolbar">
    <router-link :to="target">
      <div class="icon">
        <i style="position: relative" :class="labelIcon.icon">
          <div class="notif" v-if="labelIcon.type == 1">
            <div class="circle warning">1</div>
          </div>
        </i>
        <p>{{ labelIcon.label }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import LabelIcon from "./objects/label-icon";
import { labelIconsTypes } from "./enums/label-icon-types.js";

export default {
  props: {
    labelIcon: {
      type: LabelIcon,
      default: () =>
        new LabelIcon("bi bi-house-door-fill", "Home", this.types.CountLabel),
    },
    target: {
      type: String,
      default: () => "/home",
    },
    data() {
      return {
        types: Object,
      };
    },
  },
  created() {
    this.types = labelIconsTypes;
  },
};
</script>

<style scoped>
.icon-toolbar > .label-icon > .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.icon-toolbar {
  position: relative;
}

.icon {
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon-toolbar .notif {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(15px);
  font-size: 12px;
  font-style: normal;
}

.icon-toolbar:hover p,
.icon-toolbar:hover .icon > i {
  color: var(--ducky-yellow-lighter);
  text-decoration: none;
}

.icon i {
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-in;
  font-size: 1.3rem;
}

/*font-family: "Chakra Petch", sans-serif;*/

.icon p {
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease-in;
}

.notif > .circle {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.warning {
  background-color: rgb(161, 3, 3);
  color: white;
}
</style>
