<template>
  <div class="app">
    <toolbar-component></toolbar-component>
    <router-view></router-view>
  </div>
</template>

<script>
//import { ApplicantTechSkillService } from "./jobit/services/applicant-tech-skill.service";
import ToolbarComponent from "./jobit/components/toolbar-component.vue";
export default {
  components: {
    ToolbarComponent,
  },
};
</script>

<style></style>
