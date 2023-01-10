<template>
  <div class="profile-photo">
    <img
      src="https://scontent.flim15-2.fna.fbcdn.net/v/t39.30808-6/322333749_827608328272598_6768139983573928056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEY7rG5VODPTxp0OZLFPMgVxhsSnoDSAMTGGxKegNIAxGdZIHBj4yg5EfjQdnNMk2T3PLH-XtRM518f31ix8UB7&_nc_ohc=ZeH72vc_YrMAX8seivS&_nc_ht=scontent.flim15-2.fna&oh=00_AfDyzsZInfjF59mhleATvffVAd7bJcaZiPGvLwoS2IT4ew&oe=63B4B97E"
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
