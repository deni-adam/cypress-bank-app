import accountsData from "../fixtures/account_balance_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../page-objects/login_page";
import { UserApi } from "../api/users_api";

describe("create accounts and check accounting balances", () => {
  let username = faker.internet.userName();
  let password = faker.internet.password();
  let email = faker.internet.exampleEmail();

  beforeEach(() => {
    // TODO registraci a login potrebuji jen jednou - nahradit beforeEach jen beforem?
    new LoginPage()
      .openTegBUrl()
      .clickRegistrationButton()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegisterButton();

    // TODO nahradit waity intercepty, pokud lze
    cy.wait(20000);

    new LoginPage()
      .openTegBUrl()
      .typeUsername(username)
      .typePassword(password)
      .clickLoginButton();

    cy.wait(7000);
  });

  accountsData.forEach((accountData) => {
    it(`create account no. ${accountData.row + 1}`, () => {
      let accountType =
        accountData.accountName + faker.number.int({ max: 99999 });

      const userApi = new UserApi();
      userApi.login(username, password).as("login_response");
      cy.get("@login_response").then((response) => {
        const accessTokenValue = response.body.access_token;
        cy.setCookie("access_token", accessTokenValue);
        userApi.createAccount(
          Number(accountData.balance),
          accountType,
          accessTokenValue
        );

        cy.reload();
        cy.wait(7000);
        cy.get(
          `[data-testid="account-row-${accountData.row}"] [data-testid="account-balance"]`
        ).should("have.text", `${Number(accountData.balance).toFixed(2)} Kč`);
      });

      // TODO kontrola vytvoreneho uctu - predelat? vhodnejsi selektor (napr. pomoci row a dedicnosti?)? nejak nahradit posledni get?
    });
  });

  // TODO kdy pouzivat context - treba tu registraci??
});
