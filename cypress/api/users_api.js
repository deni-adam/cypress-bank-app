export class UserApi {
  createAccount(balance, access_token) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
      headers: {
        authorization: "Bearer " + access_token,
      },
      body: {
        startBalance: balance,
        type: "sporak",
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
