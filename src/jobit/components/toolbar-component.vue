<template>
  <div class="toolbar">
    <div class="authenticated" v-show="isAuthenticated">
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
                image="https://scontent.flim15-2.fna.fbcdn.net/v/t39.30808-6/322333749_827608328272598_6768139983573928056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEY7rG5VODPTxp0OZLFPMgVxhsSnoDSAMTGGxKegNIAxGdZIHBj4yg5EfjQdnNMk2T3PLH-XtRM518f31ix8UB7&_nc_ohc=ZeH72vc_YrMAX8seivS&_nc_ht=scontent.flim15-2.fna&oh=00_AfDyzsZInfjF59mhleATvffVAd7bJcaZiPGvLwoS2IT4ew&oe=63B4B97E"
                shape="circle"
              ></pv-avatar>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="!isAuthenticated" class="not-authenticated">
      <div class="nav flex justify-content-between align-items-center">
        <div class="logo flex flex-column">
          <h1 class="title">JoBit</h1>
          <hr class="line" />
        </div>
        <ul class="options flex gap-3">
          <li>
            <router-link class="text-white-alpha-80" to="login"
              >Join Us</router-link
            >
          </li>
          <li>
            <router-link class="text-white-alpha-80" to="register"
              >Register</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//Components
import IconToolbar from "./icon-toolbar.vue";

//Enums
import { labelIconsTypes } from "./enums/label-icon-types.js";

//Objects
import LabelIcon from "./objects/label-icon";

export default {
  components: { IconToolbar },
  props: {
    isAuthenticated: {
      type: Boolean,
      default: () => false,
    },
  },
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
.toolbar .authenticated {
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

.nav {
  position: fixed;
  top: 0;
  padding: 15px;
  width: 100%;
  height: 65px;
  z-index: 5;
}

/*Not authenticated style*/
.not-authenticated .logo {
  cursor: pointer;
}

.not-authenticated .logo .title {
  color: black;
}

.not-authenticated .logo:hover .line {
  width: 85px;
  border: 1px solid black;
  background: black;
  color: black;
}

.not-authenticated .logo .line {
  transition: all 0.25s ease-in-out;
  width: 0;
  border: 1px solid transparent;
  background: transparent;
  color: transparent;
}

.not-authenticated ul.options li :deep(a) {
  transition: all 0.2s ease-in-out;
}
.not-authenticated ul.options li:hover :deep(a) {
  color: white !important;
}

@media (max-width: 768px) {
  .not-authenticated .logo .title {
    color: white;
  }
  .not-authenticated .left {
    position: relative;
    background-blend-mode: darken;
    background-image: url("../../assets/image/login-background.jpg");
    background-size: cover;
    width: 100%;
  }
  .not-authenticated .right {
    display: none;
  }

  .not-authenticated .card {
    background-color: white;
  }

  .left .slogan {
    display: block;
    color: white;
  }

  .left .black {
    display: block;
  }
  .not-authenticated .logo:hover .line {
    border: 1px solid white;
    background: white;
    color: white;
  }
}
</style>
