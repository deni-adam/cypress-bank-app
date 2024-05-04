import { LoginPage } from "./login_page";

export class RegistrationPage {
  constructor() {
    this.usernameInput = '[data-testid="username-input"]';
    this.passwordInput = '[data-testid="password-input"]';
    this.emailInput = '[data-testid="email-input"]';
    this.registerButton = '[data-testid="submit-button"]';
    this.goBackButton = ".link-button";
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  clickRegisterButton() {
    cy.get(this.registerButton).click();
    return this;
  }

  clickGoBackButton() {
    cy.get(this.goBackButton).click();
    return new LoginPage();
  }
}
