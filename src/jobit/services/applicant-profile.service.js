import http from "../core/services/http-common";
class ApplicantProfileService {
  getProfileById(applicantId) {
    return http.get(`/applicantprofile/${applicantId}`);
  }
}

export default new ApplicantProfileService();
