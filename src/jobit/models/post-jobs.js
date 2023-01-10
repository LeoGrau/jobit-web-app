class PostJob {
  constructor(
    title,
    description,
    companyId,
    jobName,
    salary,
    place,
    jobModality,
    timeModality
  ) {
    this.title = title;
    this.description = description;
    this.companyId = companyId;
    this.jobName = jobName;
    this.salary = salary;
    this.place = place;
    this.jobModality = jobModality;
    this.timeModality = timeModality;
  }
}

export default PostJob;
