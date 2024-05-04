import { customElement } from "../helpers/custom_element";
import { HeaderSection } from "./header_section";
import { UserInfoPage } from "./user_info_page";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.editProfileButton = customElement(
      '[data-testid="toggle-edit-profile-button"]'
    );
    this.profileSummary = customElement('[data-testid="account-summary"]');
    this.profileSummaryTitle = customElement(
      '[data-testid="profile-details-title"]'
    );
    this.accountsList = customElement(".accounts");
    this.accountsListTitle = customElement('[data-testid="accounts-title"]');
    this.accountNumberTitle = customElement(
      '[data-testid="account-number-heading"]'
    );
    this.accountBalanceTitle = customElement(
      '[data-testid="account-balance-heading"]'
    );
    this.accountTypeTitle = customElement(
      '[data-testid="account-type-heading"]'
    );
    this.userFirstname = customElement('[data-testid="name"]');
    this.userLastname = customElement('[data-testid="surname"]');
    this.userEmail = customElement('[data-testid="email"]');
    this.userPhone = customElement('[data-testid="phone"]');
    this.userAge = customElement('[data-testid="age"]');
    this.accountBalance = customElement(
      '[data-testid="account-row-0"] [data-testid="account-balance"]'
    );
    this.accountType = customElement('[data-testid="account-type"]');
  }

  checkListOfAccounts(accountNo, accountBalance) {
    cy.get(
      `[data-testid="account-row-${accountNo}"][data-testid="account-balance"]`
    ).should("have.text", `${Number(accountBalance).toFixed(2)} Kč`);
  }

  clickEditProfileButton() {
    this.editProfileButton.get().click();
    return new UserInfoPage();
  }

  userFirstnameHasText(firstname) {
    this.userFirstname.get().should("have.text", `Jméno: ${firstname}`);
    return this;
  }

  userLastnameHasText(lastname) {
    this.userLastname.get().should("have.text", `Příjmení: ${lastname}`);
    return this;
  }

  userEmailHasText(email) {
    this.userEmail.get().should("have.text", `Email: ${email}`);
    return this;
  }

  userPhoneHasText(phone) {
    this.userPhone.get().should("have.text", `Telefon: ${phone}`);
    return this;
  }

  userAgeHasText(age) {
    this.userAge.get().should("have.text", `Věk: ${age}`);
    return this;
  }

  accountBalanceHasText(accountBalance) {
    this.accountBalance
      .get()
      .should("have.text", `${Number(accountBalance).toFixed(2)} Kč`);
    return this;
  }

  accountTypeHasText(accountType) {
    this.accountType.get().should("have.text", accountType);
    return this;
  }
}
