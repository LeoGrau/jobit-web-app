<template>
  <div class="toolbar">
    <div class="logo">
      <h1>JoBit</h1>
    </div>
    <div class="menu-options">
      <ul>
        <li v-for="optionIcon in optionIcons" :key="optionIcon.iconKey">
          <icon-toolbar :labelIcon="optionIcon.labelIcon"></icon-toolbar>
        </li>
        <li>
          <router-link to="/applicant-profile/1">
            <pv-avatar
              image="https://scontent.flim15-2.fna.fbcdn.net/v/t39.30808-6/297570371_371964115095464_3592931005646396479_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGmCOPr__eoON2CXg2MQrr5vF7QytY0Zwm8XtDK1jRnCaX5zASgLJF7zwl4B60rLMgGfMTPiRHSeDDWN2tgC5_-&_nc_ohc=of0OUqq1xDUAX8qZdQb&_nc_ht=scontent.flim15-2.fna&oh=00_AfCe8wCPH0bjpUryGxTedWAgxI5xA5JguVGngzTIjZ-RRw&oe=63A78B5E"
              shape="circle"
            ></pv-avatar>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconToolbar from "./icon-toolbar.vue";
import LabelIcon from "./objects/label-icon";
import { labelIconsTypes } from "./enums/label-icon-types.js";

export default {
  components: { IconToolbar },
  data() {
    return {
      types: Object,
      optionIcons: [
        {
          iconKey: 1,
          labelIcon: new LabelIcon(
            "bi bi-house-door-fill",
            "Home",
            labelIconsTypes.NotiLabel
          ),
        },
        {
          iconKey: 2,
          labelIcon: new LabelIcon(
            "bi bi-chat-dots-fill",
            "Messages",
            labelIconsTypes.CountLabel
          ),
        },
        {
          iconKey: 3,
          labelIcon: new LabelIcon(
            "bi bi-bell-fill",
            "Notifications",
            labelIconsTypes.CountLabel
          ),
        },
      ],
    };
  },
  created() {
    this.types = labelIconsTypes;
  },
};
</script>

<style scoped>
.toolbar {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background: var(--prussian-light-blue);
  background: linear-gradient(
    90deg,
    var(--prussian-light-blue) 50%,
    var(--prussian-sky-blue) 200%
  );
}

.logo h1 {
  font-family: "Chakra Petch", sans-serif;
  color: var(--turquoise-75);
  font-size: 2rem;
}

.menu-options {
  width: 20%;
  height: 37.8px;
}

.menu-options > ul {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.menu-options > ul > li {
  width: 100%;
}
</style>
