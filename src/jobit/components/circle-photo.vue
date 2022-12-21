<template>
  <div class="profile-photo">
    <img
      src="https://scontent.flim15-2.fna.fbcdn.net/v/t39.30808-6/297570371_371964115095464_3592931005646396479_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGmCOPr__eoON2CXg2MQrr5vF7QytY0Zwm8XtDK1jRnCaX5zASgLJF7zwl4B60rLMgGfMTPiRHSeDDWN2tgC5_-&_nc_ohc=of0OUqq1xDUAX8qZdQb&_nc_ht=scontent.flim15-2.fna&oh=00_AfCe8wCPH0bjpUryGxTedWAgxI5xA5JguVGngzTIjZ-RRw&oe=63A78B5E"
      alt="user profile picture"
    />
  </div>
</template>

<script>
export default {
  name: "CirclePhoto",
};
</script>

<style scoped>
.profile-photo > img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>
