<template>
  <div class="home-view">
    <post-card
      :postJob="postJob"
      v-for="postJob in postJobs"
      :key="postJob.id"
    ></post-card>
  </div>
</template>

<script>
//Services
import PostJobService from "../services/post-job.service";
//Models
//import PostJob from "../models/post-jobs";
//Components
import PostCard from "../components/post-card.vue";
export default {
  components: {
    PostCard,
  },
  data() {
    return {
      postJobs: [],
    };
  },
  created() {
    PostJobService.getAllPostJobs().then((response) => {
      this.postJobs = response.data;
      console.log(response.data);
      console.log(this.postJobs);
    });
  },
  methods: {
    setPostJobs(postJobs) {
      this.postJobs = postJobs;
    },
  },
};
</script>

<style scoped>
.home-view {
  padding: 15px;
}
</style>
