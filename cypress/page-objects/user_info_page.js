import { HeaderSection } from "./header_section";
import { HomePage } from "./home_page";

export class UserInfoPage extends HeaderSection {
  constructor() {
    super();
    this.firstnameInput = '[data-testid="chage-name-input"]';
    this.lastnameInput = '[data-testid="chage-surname-input"]';
    this.emailInput = '[data-testid="chage-email-input"]';
    this.phoneInput = '[data-testid="chage-phone-input"]';
    this.ageInput = '[data-testid="chage-age-input"]';
    this.saveChangesButton = '[data-testid="save-changes-button"]';
  }

  typeFirstname(fistname) {
    cy.get(this.firstnameInput).type(fistname);
    return this;
  }

  typeLastname(lastname) {
    cy.get(this.lastnameInput).type(lastname);
    return this;
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typePhone(phone) {
    cy.get(this.phoneInput).type(phone);
    return this;
  }

  typeAge(age) {
    cy.get(this.ageInput).type(age);
    return this;
  }

  clickSaveChangesButton() {
    cy.get(this.saveChangesButton).click();
    return new HomePage();
  }
}
