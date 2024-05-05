import { customElement } from "../helpers/custom_element";
import { HomePage } from "./home_page";
import { RegistrationPage } from "./registration_page";

export class LoginPage {
  constructor() {
    // kontrola loga, placeholderu atd. - pouzit custom.el. ??
    this.TegB = Cypress.env("tegb_url");
    this.usernameInput = '[data-testid="username-input"]';
    this.passwordInput = '[data-testid="password-input"]';
    this.loginButton = '[data-testid="submit-button"]';
    this.registrationButton = '[data-testid="register-button"]';
    this.logo = customElement(".title");
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
