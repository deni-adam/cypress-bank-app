export class UserApi {
  createAccount(balance, accountType, access_token) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "/tegb/accounts/create",
      headers: {
        authorization: "Bearer " + access_token,
      },
      body: {
        startBalance: balance,
        type: accountType,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: Cypress.env("tegb_api_url") + "/tegb/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
