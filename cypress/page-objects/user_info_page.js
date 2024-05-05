import { customElement } from "../helpers/custom_element";
import { HeaderSection } from "./header_section";
import { HomePage } from "./home_page";

export class UserInfoPage extends HeaderSection {
  constructor() {
    super();
    this.firstnameInput = customElement('[data-testid="chage-name-input"]');
    this.lastnameInput = customElement('[data-testid="chage-surname-input"]');
    this.emailInput = customElement('[data-testid="chage-email-input"]');
    this.phoneInput = customElement('[data-testid="chage-phone-input"]');
    this.ageInput = customElement('[data-testid="chage-age-input"]');
    this.saveChangesButton = '[data-testid="save-changes-button"]';
    this.cancelButton = 'data-testid="toggle-edit-profile-button"';
  }

  typeFirstname(fistname) {
    this.firstnameInput.get().type(fistname);
    return this;
  }

  typeLastname(lastname) {
    this.lastnameInput.get().type(lastname);
    return this;
  }

  typeEmail(email) {
    this.emailInput.get().type(email);
    return this;
  }

  typePhone(phone) {
    this.phoneInput.get().type(phone);
    return this;
  }

  typeAge(age) {
    this.ageInput.get().type(age);
    return this;
  }

  clickSaveChangesButton() {
    cy.get(this.saveChangesButton).click();
    return new HomePage();
  }
}
