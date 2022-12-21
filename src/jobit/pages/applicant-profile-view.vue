<template>
  <div class="applicant-profile-component">
    <section class="banner">
      <div class="background-container flex">
        <img src="https://wallpaperaccess.com/full/1101997.png" alt="" />
        <div class="social">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      <div
        class="user-main flex flex-row align-items-center gap-1"
        style="position: absolute"
      >
        <circle-photo></circle-photo>
        <div class="text flex flex-column align-self-end">
          <p>Leonardo Manuel Grau Vargas</p>
          <p>Software Engineer</p>
        </div>
      </div>
    </section>
    <div class="flex flex-column align-items-center">
      <section class="about profile-card">
        <div class="title flex flex-row align-items-center">
          <h1>About</h1>
          <i class="bi bi-person-fill"></i>
        </div>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          vero porro, illo ut alias at amet ea, asperiores quidem error, enim
          repudiandae praesentium mollitia reprehenderit nobis. Perferendis
          optio blanditiis dolore.
        </p>
      </section>
      <section class="tech-skills profile-card">
        <div class="title flex flex-row align-items-center">
          <h1>Tech Skills</h1>
          <i class="bi bi-laptop"></i>
        </div>
        <ul class="flex flex-column gap-2">
          <li v-for="userTechSkill in userTechSkills" :key="userTechSkill.key">
            <tech-skill></tech-skill>
          </li>
        </ul>
      </section>
      <section class="education profile-card">
        <div class="title flex flex-row align-items-center">
          <h1>Education</h1>
          <i class="bi bi-mortarboard-fill"></i>
        </div>
        <ul class="flex flex-column gap-2">
          <li v-for="userTechSkill in userTechSkills" :key="userTechSkill.key">
            <education-item></education-item>
          </li>
        </ul>
      </section>
    </div>
    <section class="projects profile-card">
      <div class="title flex flex-row align-items-center">
        <h1>Projects</h1>
        <i class="bi bi-file-earmark-code-fill"></i>
      </div>
      <ul class="flex flex-column gap-2">
        <li v-for="userTechSkill in userTechSkills" :key="userTechSkill.key">
          <education-item></education-item>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
//Components
import CirclePhoto from "../components/circle-photo.vue";
import TechSkill from "../components/tech-skill.vue";
import EducationItem from "../components/education-item.vue";
//Models
import UserTechSkill from "../models/UserTechSkill.js";
export default {
  components: {
    CirclePhoto,
    TechSkill,
    EducationItem,
  },
  data() {
    return {
      userTechSkills: [
        {
          key: 1,
          userTechSkill: new UserTechSkill("React", 3, ""),
        },
        {
          key: 2,
          userTechSkill: new UserTechSkill("Vue", 2, ""),
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  margin-bottom: 20px;
}
.applicant-profile-component {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 50%);
  padding: 15px;
  gap: 0;
}

section.banner {
  width: 100%;
  grid-column: 1 / 3;
}

section.projects {
  grid-column: 2 / 3;
}

section.banner {
  height: 250px;
}

.background-container {
  position: relative;
  width: 100%;
  height: 160px;
}

.background-container > img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  height: 160px;
  z-index: 1;
}

.profile-card {
  padding: 15px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgb(117, 117, 117);
}

.user-main {
  transform: translateY(70px);
  top: 100px;
  z-index: 2;
}

.user-main .text {
  transform: translateY(-25px);
}

/*Title*/
.title {
  display: flex;
  gap: 10px;
}

.title i {
  font-size: 2rem;
}
/*Social*/
.social {
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 3;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.582);
  width: 60px;
  height: 60px;
}
</style>
