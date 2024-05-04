import { UserApi } from "../api/users_api";
import { LoginPage } from "../page-objects/login_page";

describe("create users account with API", () => {
  beforeEach(() => {
    new LoginPage().openTegBUrl();
  });

  it("create account", () => {
    let username = Cypress.env("tegb_username");
    let password = Cypress.env("tegb_password");

    const userApi = new UserApi();

    userApi.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      expect(response.status).to.eq(201);
      cy.log(response.body.access_token);
      cy.wrap(response).its('body.access_token').should("exist");
    });
  });
});
