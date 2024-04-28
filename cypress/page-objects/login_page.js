import { HomePage } from "./home_page";
import { RegistrationPage } from "./registration_page";

export class LoginPage {
  constructor() {
    // kontrola loga, placeholderu atd. - pouzit custom.el. ??
    this.TegB = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    // TODO: Cypress.env(tegb_url);
    this.usernameInput = '[data-testid="username-input"]';
    this.passwordInput = '[data-testid="password-input"]';
    this.loginButton = '[data-testid="submit-button"]';
    this.registrationButton = '[data-testid="register-button"]';
  }

  openTegBUrl() {
    cy.visit(this.TegB);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
    return new HomePage();
  }

  clickRegistrationButton() {
    cy.get(this.registrationButton).click();
    return new RegistrationPage();
  }
}
