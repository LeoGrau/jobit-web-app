import http from "../core/services/http-common";

class PostJobService {
  getAllPostJobs() {
    return http.get(`/postjob`);
  }
}

export default new PostJobService();
