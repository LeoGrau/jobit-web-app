import http from "../core/services/http-common";

export class ApplicantTechSkillService {
  getAllApplicantTechSkillsByApplicantId(applicantId) {
    return http.get(`/applicant-tech-skill/${applicantId}`);
  }
}
