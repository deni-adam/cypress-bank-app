import { UserApi } from "../api/users_api";

describe("create users account with API", () => {
  beforeEach(() => {
    // cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
  });

  it("create account", () => {
    const userApi = new UserApi();
    userApi.login("User124", "tajneheslo").as("login_response");
    cy.get("@login_response").then((response) => {
    //   expect(response.status).to.eq(201);
      const accessTokenValue = response.body.access_token;
      cy.setCookie("access_token", accessTokenValue);
      cy.log(accessTokenValue);
      userApi.createAccount(1000, accessTokenValue).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
