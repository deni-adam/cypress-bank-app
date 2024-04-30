import { LoginPage } from "../page-objects/login_page";

describe("atomic tests on dashboard", { testIsolation: false }, () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openTegBUrl()
      .typeUsername("User126")
      .typePassword("tajneheslo")
      .clickLoginButton();
  });
  
  context("Header section tests", () => {
    it('', () => {
        
    });
    it('', () => {
        
    });
  })

  context("Menu section tests", () => {
    it('', () => {
        
    });
    it('', () => {
        
    });
  })

  context("Home page tests", () => {
    it('Profile', () => {
        
    });
    it('Accounts', () => {
        
    });
  })
});
