<template>
  <div class="post-card">
    <header class="flex flex-row justify-content-between">
      <div class="company-info flex">
        <router-link to="/applicant-profile/1">
          <pv-avatar
            image="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
            shape="circle"
          ></pv-avatar>
        </router-link>
        <div class="company-info-right flex flex-column">
          <p>Google, LLC</p>
          <p>Technology, information and internet</p>
        </div>
      </div>
      <div class="actions flex gap-2">
        <pv-button
          label="Apply"
          icon="bi bi-person-check-fill"
          class="p-button-rounded p-button-warning"
        />
        <pv-button
          @click="bookmarkActive = !bookmarkActive"
          class="p-button-text p-button-secondary"
          :style="{ color: 'black' }"
          :class="{
            'bi bi-bookmark': !bookmarkActive,
            'bi bi-bookmark-fill': bookmarkActive,
          }"
          label=" "
        />
      </div>
    </header>
    <main class="content">
      <h3>Web Developer</h3>
      <reducible-text :text="description"></reducible-text>
      <h4>Recruiters</h4>
      <div class="flex gap-2">
        <router-link to="/applicant-profile/1">
          <pv-avatar
            image="https://scontent.flim15-2.fna.fbcdn.net/v/t39.30808-6/297570371_371964115095464_3592931005646396479_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGmCOPr__eoON2CXg2MQrr5vF7QytY0Zwm8XtDK1jRnCaX5zASgLJF7zwl4B60rLMgGfMTPiRHSeDDWN2tgC5_-&_nc_ohc=of0OUqq1xDUAX8qZdQb&_nc_ht=scontent.flim15-2.fna&oh=00_AfCe8wCPH0bjpUryGxTedWAgxI5xA5JguVGngzTIjZ-RRw&oe=63A78B5E"
            shape="circle"
          ></pv-avatar>
        </router-link>
        <div class="user-info">
          <p>Leonardo Manuel Grau Vargas</p>
          <p>Software Engineer at Google</p>
        </div>
      </div>
      <h4>Job Description</h4>
      <ul class="job-description">
        <li
          v-for="jobAttributeLabel in jobAttributeLabels"
          :key="jobAttributeLabel.attributeName"
          class="flex align-items-center"
        >
          <i :class="jobAttributeLabel.attributeIcon"></i>
          <span>{{
            jobAttributeLabel.attributeName + ": " + "Not defined"
          }}</span>
        </li>
      </ul>
    </main>
    <footer>
      <div class="actions flex flex-row justify-content-center">
        <pv-button
          @click="commend = !commend"
          class="p-button-text p-button-secondary flex justify-content-center"
          :style="{ color: 'black', width: '50%' }"
          :class="{
            'bi bi-hand-thumbs-up': !commend,
            'bi bi-hand-thumbs-up-fill': commend,
          }"
          label=" "
        >
          <p>Commend</p>
        </pv-button>
        <pv-button
          @click="comment = !comment"
          class="p-button-text p-button-secondary flex justify-content-center"
          :style="{ color: 'black', width: '50%' }"
          :class="{
            'bi bi-chat-square-text': !comment,
            'bi bi-chat-square-text-fill': comment,
          }"
          label=" "
        >
          <p>Comment</p>
        </pv-button>
      </div>
    </footer>
  </div>
</template>

<script>
import ReducibleText from "../components/reducible-text.vue";
import AttributeJob from "../components/objects/attribute-job";
export default {
  components: {
    ReducibleText,
  },
  name: "PostCard",
  data() {
    return {
      jobAttributeLabels: [
        new AttributeJob("Salary", "bi bi-cash-coin"),
        new AttributeJob("Job", "bi bi-briefcase-fill"),
        new AttributeJob("Job Modality", "bi bi-person-workspace"),
        new AttributeJob("Time Modality", "bi bi-alarm"),
        new AttributeJob("Place", "bi bi-geo-alt-fill"),
      ],
      description:
        "Hey! Being bored? What happened? Being awesome. What happened? Well, that's all right. Hey! Being bored? What happened? Being awesome. What happened? Well, that's all right. Hey! Being bored? What happened? Being awesome. What happened? Well, that's all right.",
      readMoreActivated: false,
      attributeIcons: ["bi bi-cash-coin", "bi bi-briefcase-fill"],
      bookmarkActive: false,
      commend: false,
      comment: false,
    };
  },
};
</script>

<style scoped>
.post-card {
  width: 600px;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgb(117, 117, 117);
  padding: 10px;
}
.post-card .content {
  font-size: 16px;
}

.post-card .content .user-info p:nth-child(1),
.post-card header .company-info .company-info-right p:nth-child(1) {
  font-size: 14px;
}

.post-card .content .user-info p:nth-child(2),
.post-card header .company-info .company-info-right p:nth-child(2) {
  font-size: 12px;
  color: grey;
}

i.bi {
  color: var(--prussian-light-blue);
  font-size: 20px;
  padding-right: 5px;
}

.job-description {
  font-size: 12px;
}

h4 {
  padding-bottom: 6px;
}

.actions .p-button-rounded.p-button-warning {
  font-weight: 500;
  font-size: 13px;
}

footer > .actions .p-button-text.p-button-secondary p {
  font-size: 14px;
  padding-left: 4px;
  width: fit-content;
}

ul.job-description {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
