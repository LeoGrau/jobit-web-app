<template>
  <div class="tech-skill flex flex-row gap-2 align-items-center">
    <img :src="applicantTechSkillShow.photoUrl" alt="tech-skill image" />
    <div class="tech-skill-info flex flex-column">
      <p>{{ applicantTechSkillShow.techName }}</p>
      <p><strong>Experience:</strong> 3 Years</p>
    </div>
  </div>
</template>

<script>
import ApplicantTechSkill from "../models/applicant-tech-skill";
export default {
  props: {
    applicantTechSKillProp: Object,
  },
  data() {
    return {
      applicantTechSkillShow: ApplicantTechSkill.prototype,
    };
  },
  created() {
    console.log("undefined?", this.applicantTechSKillProp);
    this.setApplicantTechSkill();
  },

  methods: {
    async setApplicantTechSkill() {
      await (this.applicantTechSkillShow = new ApplicantTechSkill(
        this.applicantTechSKillProp["techName"],
        this.applicantTechSKillProp["experienceTime"],
        this.applicantTechSKillProp["photoUrl"]
      ));
    },
  },
};
</script>

<style scoped>
.tech-skill img {
  width: 50px;
}
.tech-skill-info p {
  font-size: 0.85rem;
}
</style>
