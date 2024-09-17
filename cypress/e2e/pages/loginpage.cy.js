export class LoginPage {
  usernameFeild = "//input[@placeholder='Username']";
  passwordFeild = "//input[@placeholder='Password']";
  loginButton = ".oxd-button";
  userDeatils = ".oxd-userdropdown-name";

  enterUsername(username) {
    cy.xpath(this.usernameFeild).type(username);
  }

  enterPassword(password) {
    cy.xpath(this.passwordFeild).type(password);
  }

  adminLogin() {
    cy.get(this.loginButton).click();
  }

  userDetailsClick() {
    cy.get(this.userDeatils).click();
  }
}
