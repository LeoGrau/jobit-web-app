<template>
  <div class="login flex justify-content-center">
    <div class="left">
      <div class="black"></div>
      <div class="content flex-column">
        <!-- <h1 class="slogan">
          <span class="left-bracket">{</span>
          <span style=""> Let's start coding with sauce </span>
          <span class="right-bracket">}</span>
        </h1> -->
        <pv-card class="card">
          <template v-slot:content>
            <div class="card-content flex flex-column">
              <form action="" class="p-fluid">
                <div class="field">
                  <div class="p-float-label">
                    <pv-input-text
                      class="format"
                      id="email"
                      v-model="email"
                    ></pv-input-text>
                    <label for="email">Email*</label>
                  </div>
                </div>
                <div class="field">
                  <div class="p-float-label">
                    <pv-password
                      class="format"
                      id="password"
                      toggleMask
                      v-model="password"
                      :feedback="false"
                    >
                    </pv-password>
                    <label for="password">Password*</label>
                  </div>
                </div>
                <div class="not-account pb-0">
                  <p class="text-center">
                    Forgot your password?
                    <router-link to="/register">Click here.</router-link>
                  </p>
                </div>
                <div
                  class="flex gap-2 pb-2 text-700 flex-row align-items-center justify-content-center"
                >
                  <pv-divider></pv-divider>
                  <span>or</span>
                  <pv-divider></pv-divider>
                </div>
                <div class="sign-in-methods flex flex-column gap-1 mb-3">
                  <button
                    class="google p-2 flex justify-content-center"
                    aria-label="Google"
                  >
                    <i class="pi pi-google px-2"></i>
                    <span class="px-3">Sign In with Google</span>
                  </button>
                  <button
                    class="facebook p-2 flex justify-content-center"
                    aria-label="Google"
                  >
                    <i class="pi pi-facebook px-2"></i>
                    <span class="px-3">Sign In with Facebook</span>
                  </button>
                  <button
                    class="github p-2 flex justify-content-center"
                    aria-label="Google"
                  >
                    <i class="pi pi-github px-2"></i>
                    <span class="px-3">Sign In with Github</span>
                  </button>
                </div>
                <div class="not-account pb-3">
                  <p class="text-center">
                    Don't have account yet?
                    <router-link to="/register">Sign Up</router-link>
                  </p>
                </div>
                <div
                  class="button-contain max-w-12 flex justify-content-center"
                >
                  <pv-button class="w-max" type="submit" label="Login" />
                </div>
              </form>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
    <div class="right">
      <div class="content">
        <div
          class="items flex flex-column justify-content-between align-items-center"
        >
          <header></header>
          <main class="text-center">
            <h1 class="slogan">
              <span class="left-bracket">{</span>
              <span style=""> Let's start coding with sauce </span>
              <span class="right-bracket">}</span>
            </h1>
            <p>
              Show them your skills <br />
              Get a developer job <br />
              Have fun and get paid for it <br />
            </p>
          </main>
          <footer class="flex justify-content-between p-2" style="width: 100%">
            <ul class="flex flex-row gap-2">
              <li>
                <i class="pi pi-facebook social" style="font-size: 26px"></i>
              </li>
              <li>
                <i class="pi pi-instagram social" style="font-size: 26px"></i>
              </li>
              <li>
                <i class="pi pi-linkedin social" style="font-size: 26px"></i>
              </li>
            </ul>
          </footer>
        </div>
        <div class="black"></div>
        <img src="../../assets/image/login-background.jpg" alt="" />
      </div>
    </div>
    <div class="nasty align-self-end h-max">
      <h4 class="align-self-end">NastyPad</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>

<style scoped>
h4 {
  cursor: pointer;
  font-family: "Nabla", cursive;
  margin-right: 5px;
  transition: all 0.1s ease-in;
}

h4:hover {
  transform: scale(1.1);
}

.not-account {
  font-size: 0.9rem;
}

.nasty {
  position: absolute;
  z-index: 7;
  bottom: 10px;
  right: 10px;
}

button {
  cursor: pointer !important;
}
.login {
  height: 100vh;
}
.card {
  background-color: rgba(255, 255, 255, 0.85);
  max-width: 400px;
  width: 88%;
}

.field {
  margin-bottom: 1.5rem;
}

.right,
.left {
  height: 100%;
  position: relative;
}

.right {
  width: calc(100% * 3 / 5);
}

.left .slogan {
  display: none;
}

.left {
  width: calc(100% * 2 / 5);
  height: 100%;
}

.left .content {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.left .black {
  display: none;
}

.right > .content {
  position: relative;
  width: 100%;
  height: 100%;
}

.right > .content > .black,
.right > .content > img,
.right .content .items {
  position: absolute;
}

.right .content .items {
  color: white;
  z-index: 3;
  width: 100%;
  height: 100%;
}

.right > .content > img {
  z-index: 1;
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.black {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.logo {
  color: black;
}

.text {
  color: white;
}

.text h1 {
  font-size: 4rem;
}

.text p {
  font-size: 0.94rem;
  text-align: center;
}

.nav {
  position: fixed;
  top: 0;
  padding: 15px;
  width: 100%;
  z-index: 5;
}

.sign-in-methods button {
  font-size: 15px;
}

.format {
  font-size: 13px;
}

label {
  font-size: 14px;
}
/*Google Button*/
.sign-in-methods .google {
  background: linear-gradient(to left, var(--red-600) 50%, var(--red-800) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-radius: 3px;
  border: none;
}

.sign-in-methods .google:hover {
  background-position: left bottom !important;
}
/*Facebook*/
.sign-in-methods .facebook {
  background: linear-gradient(
    to left,
    var(--blue-700) 50%,
    var(--blue-900) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-radius: 3px;
  border: none;
}

.sign-in-methods .facebook:hover {
  background-position: left bottom !important;
}

/*Github*/
.sign-in-methods .github {
  background: linear-gradient(
    to left,
    var(--bluegray-600) 50%,
    var(--bluegray-800) 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.5s ease-out;
  color: #fff;
  border-radius: 3px;
  border: none;
}

.sign-in-methods .github:hover {
  background-position: left bottom !important;
}

main.text-center h1 {
  cursor: pointer;
}

main.text-center h1:not(:hover) span.left-bracket,
main.text-center h1:not(:hover) span.right-bracket {
  display: inline-block;
  transform: translateX(0);
  transition: 0.3s;
}

h1.slogan:hover span.left-bracket {
  display: inline-block;
  transform: translateX(-10px);
  transition: 0.3s;
}
h1.slogan:hover span.right-bracket {
  display: inline-block;
  transform: translateX(+10px);
  transition: 0.3s;
}

.social {
  transition: all 0.3s ease-in-out;
}

.social:hover {
  transform: translateY(-10px);
}

.logo {
  cursor: pointer;
}

.logo:hover .line {
  width: 85px;
  border: 1px solid black;
  background: black;
  color: black;
}

.line {
  transition: all 0.25s ease-in-out;
  width: 0;
  border: 2px solid transparent;
  background: transparent;
  color: transparent;
}

ul.options li :deep(a) {
  transition: all 0.2s ease-in-out;
}
ul.options li:hover :deep(a) {
  color: white !important;
}

@media (max-width: 768px) {
  .title {
    color: white;
  }
  .left {
    position: relative;
    background-blend-mode: darken;
    background-image: url("../../assets/image/login-background.jpg");
    background-size: cover;
    width: 100%;
  }
  .right {
    display: none;
  }

  .card {
    background-color: white;
  }

  .left .slogan {
    display: block;
    color: white;
  }

  .left .black {
    display: block;
  }

  .slogan {
    font-size: 1.5rem;
  }
  .logo:hover .line {
    border: 1px solid white;
    background: white;
    color: white;
  }
}
</style>
