import { HomePage } from "../page-objects/home_page";
import { LoginPage } from "../page-objects/login_page";
import { MenuSection } from "../page-objects/menu_section";

describe("atomic tests on dashboard", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openTegBUrl()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLoginButton();
  });

  context("Header section tests", () => {
    it("Logo is visible", () => {
      new HomePage().logo.isVisible();
    });
    it("Title is visible", () => {
      new HomePage().title.isVisible();
    });
    it("Title has text", () => {
      new HomePage().title.hasText("TEG#B Dashboard");
    });
    it("Logout Button is visible", () => {
      new HomePage().logoutButton.isVisible();
    });
    it("Logout Button has text", () => {
      new HomePage().logoutButton.hasText("Odhlásit se");
    });
  });

  context("Menu section tests", () => {
    it("'Domů' in Menu is visible", () => {
      new MenuSection().domuXPath.XPathIsVisible();
    });
    it("'Domů' in Menu has text", () => {
      new MenuSection().domuXPath.XPathHasText("Domů");
    });
    it("'Účty' in Menu is visible", () => {
      new MenuSection().uctyXPath.XPathIsVisible();
    });
    it("'Účty' in Menu has text", () => {
      new MenuSection().uctyXPath.XPathHasText("Účty");
    });
    it("'Transakce' in Menu is visible", () => {
      new MenuSection().transakceXPath.XPathIsVisible();
    });
    it("'Transakce' in Menu has text", () => {
      new MenuSection().transakceXPath.XPathHasText("Transakce");
    });
    it("'Podpora' in Menu is visible", () => {
      new MenuSection().podporaXPath.XPathIsVisible();
    });
    it("'Podpora' in Menu has text", () => {
      new MenuSection().podporaXPath.XPathHasText("Podpora");
    });
  });

  context("Profile section tests", () => {
    it("Profile Summary is visible", () => {
      new HomePage().profileSummary.isVisible();
    });
    it("Users name input is visible", () => {
      new HomePage().userFirstname.isVisible();
    });
    it("Users name input contains 'Jméno'", () => {
      new HomePage().userFirstname.containsText('Jméno:')
    });
    it("Users surname input is visible", () => {
      new HomePage().userLastname.isVisible();
    });
    it("Users surname input contains 'Příjmení'", () => {
      new HomePage().userLastname.containsText('Příjmení:')
    });
    it("Users phone input is visible", () => {
      new HomePage().userPhone.isVisible();
    });
    it("Users phone input contains 'Telefon'", () => {
      new HomePage().userPhone.containsText('Telefon:')
    });
    it("Users email input is visible", () => {
      new HomePage().userEmail.isVisible();
    });
    it("Users email input contains 'Email'", () => {
      new HomePage().userEmail.containsText('Email:')
    });
    it("Users age input is visible", () => {
      new HomePage().userAge.isVisible();
    });
    it("Users age input contains 'Věk'", () => {
      new HomePage().userAge.containsText('Věk:')
    });
    it("Profile Summary Title is visible", () => {
      new HomePage().profileSummaryTitle.isVisible();
    });
    it("Profile Summary Title has text", () => {
      new HomePage().profileSummaryTitle.hasText("Detaily Profilu");
    });
    it("Edit Profile Button is visible", () => {
      new HomePage().editProfileButton.isVisible();
    });
    it("Edit Profile Button has text", () => {
      new HomePage().editProfileButton.hasText("Upravit profil");
    });
  });

  context("Accounts section tests", () => {
    it("Accounts List Title is visible", () => {
      new HomePage().accountsListTitle.isVisible();
    });
    it("Accounts List Title has text", () => {
      new HomePage().accountsListTitle.hasText("Účty");
    });
    it("Account Number Title is visible", () => {
      new HomePage().accountNumberTitle.isVisible();
    });
    it("Account Number Title has text", () => {
      new HomePage().accountNumberTitle.hasText("Číslo účtu");
    });
    it("Account Balance Title is visible", () => {
      new HomePage().accountBalanceTitle.isVisible();
    });
    it("Account Balance Title has text", () => {
      new HomePage().accountBalanceTitle.hasText("Zůstatek");
    });
    it("Account Type Title is visible", () => {
      new HomePage().accountTypeTitle.isVisible();
    });
    it("Account Type Title has text", () => {
      new HomePage().accountTypeTitle.hasText("Typ účtu");
    });
  });
});
