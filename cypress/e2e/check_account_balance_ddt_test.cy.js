import accountsData from "../fixtures/account_balance_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../page-objects/login_page";
import { UserApi } from "../api/users_api";
import { HomePage } from "../page-objects/home_page";

describe("create accounts and check accounting balances", () => {
  let username = faker.internet.userName();
  let password = faker.internet.password();
  let email = faker.internet.exampleEmail();

  before(() => {
    cy.intercept("/tegb/register").as("registration_loading");

    new LoginPage()
      .openTegBUrl()
      .clickRegistrationButton()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegisterButton();

    cy.wait("@registration_loading");
  });

  beforeEach(() => {
    new LoginPage()
      .openTegBUrl()
      .typeUsername(username)
      .typePassword(password)
      .clickLoginButton();
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

        cy.intercept("/tegb/accounts").as("accounts_loading");
        cy.reload();
        cy.wait("@accounts_loading");

        new HomePage().checkListOfAccounts(
          accountData.row,
          accountData.balance
        );
      });
    });
  });
});
