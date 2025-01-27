const {
  Lead,
  Theme,
  User,
  Communication,
  Payment,
} = require("./PlatformApplicationModels");

class Application {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
    this.theme = new Theme(config, applicationId);
    this.user = new User(config, applicationId);
    this.communication = new Communication(config, applicationId);
    this.payment = new Payment(config, applicationId);
  }
}

module.exports = Application;
