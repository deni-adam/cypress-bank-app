import { HeaderSection } from "./header_section";
import { UserInfoPage } from "./user_info_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.editProfileButton = '[data-testid="toggle-edit-profile-button"]';
    this.userFirstname = '[data-testid="name"]';
    this.userLastname = '[data-testid="surname"]';
    this.userEmail = '[data-testid="email"]';
    this.userPhone = '[data-testid="phone"]';
    this.userAge = '[data-testid="age"]';
    this.accountBalance =
      '[data-testid="account-row-0"] [data-testid="account-balance"]';
    this.accountType = '[data-testid="account-type"]';
  }

  clickEditProfileButton() {
    cy.get(this.editProfileButton).click();
    return new UserInfoPage();
  }

  // accountHasBalance(balance) {
  //   cy.get(this.accountBalance).contains(balance);
  //   return this;
  // }

  //TODO kontrola uzivatelskych udaju na homepage - pouzit custom el.??
  // TODO jak zkontrolovat existenci noveho account?? - podle accountType nebo tak, ze pribyl novy radek v tabulce s accounty
}
