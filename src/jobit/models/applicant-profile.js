export default class ApplicantProfile {
  constructor(
    applicantId,
    firstname,
    lastname,
    photoUrl,
    description,
    profession,
    applicantTechSkills
  ) {
    this.applicantId = applicantId;
    this.firstname = firstname;
    this.lastname = lastname;
    this.photoUrl = photoUrl;
    this.description = description;
    this.profession = profession;
    this.applicantTechSkills = applicantTechSkills;
  }
}
