import { UserApi } from "../api/users_api";
import { LoginPage } from "../page-objects/login_page";

describe("register new user, create users account with API, login and edit users profile", () => {
//   beforeEach(() => {
//     new LoginPage()
//       .openTegBUrl()
//       .typeUsername("User123")
//       .typePassword("tajneheslo")
//       .clickLoginButton();
//   });

  it("login", () => {
    new LoginPage()
      .openTegBUrl()
      .typeUsername("User123")
      .typePassword("tajneheslo")
      .clickLoginButton();

      const userApi = new UserApi();
      userApi.createAccount(balance).then((response) => {
        expect(response.status).to.eq(201);
      });
  });
});
