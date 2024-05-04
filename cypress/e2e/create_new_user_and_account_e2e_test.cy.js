import { UserApi } from "../api/users_api";
import { HomePage } from "../page-objects/home_page";
import { LoginPage } from "../page-objects/login_page";
import { faker } from "@faker-js/faker";

describe("register new user, create users account with API, login and edit users profile", () => {
  let username;
  let password;
  let email;
  let firstname;
  let lastname;
  let phone;
  let age;
  let balance;

  beforeEach(() => {
    new LoginPage().openTegBUrl();
  });

  it("register user", () => {
    username = faker.internet.userName();
    password = faker.internet.password();
    email = faker.internet.exampleEmail();
    firstname = faker.person.firstName();
    lastname = faker.person.lastName();
    age = faker.number.int({
      min: 18,
      max: 100,
    });
    phone = faker.phone.number();
    balance = faker.number.int({
      min: 1000,
      max: 1000000,
    });

    cy.log(username);
    cy.log(password);
    cy.log(email);

    cy.intercept("/tegb/register").as("registration_loading");

    new LoginPage()
      .clickRegistrationButton()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegisterButton();

    cy.wait("@registration_loading");

    const userApi = new UserApi();
    userApi.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      //   expect(response.status).to.eq(201);
      const accessTokenValue = response.body.access_token;
      cy.setCookie("access_token", accessTokenValue);
      cy.log(accessTokenValue);
      userApi
        .createAccount(balance, "testovaci ucet", accessTokenValue)
        .then((response) => {
          expect(response.status).to.eq(201);
        });
    });

    cy.intercept("/tegb/profile").as("profile_loading");
    cy.intercept("/tegb/accounts").as("accounts_loading");

    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLoginButton();

    cy.wait("@profile_loading");
    cy.wait("@accounts_loading");

    new HomePage()
      .clickEditProfileButton()
      .typeFirstname(firstname)
      .typeLastname(lastname)
      .typeEmail(email)
      .typePhone(phone)
      .typeAge(age)
      .clickSaveChangesButton()
      .userFirstnameHasText(firstname)
      .userLastnameHasText(lastname)
      .userPhoneHasText(phone)
      .userEmailHasText(email)
      .userAgeHasText(age)
      .accountBalanceHasText(balance)
      .accountTypeHasText("testovaci ucet")
      .clickLogoutButton();
  });
});
