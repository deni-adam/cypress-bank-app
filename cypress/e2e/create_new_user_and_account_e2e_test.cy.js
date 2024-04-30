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
    cy.log(username);
    cy.log(password);
    cy.log(email);
    new LoginPage()
      .clickRegistrationButton()
      .typeUsername(username)
      .typePassword(password)
      .typeEmail(email)
      .clickRegisterButton();

    cy.wait(30000);

    const userApi = new UserApi();
    userApi.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      //   expect(response.status).to.eq(201);
      const accessTokenValue = response.body.access_token;
      cy.setCookie("access_token", accessTokenValue);
      cy.log(accessTokenValue);
      userApi
        .createAccount(1000, "testovaci ucet", accessTokenValue)
        .then((response) => {
          expect(response.status).to.eq(201);
        });
    });

    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickLoginButton();

    cy.wait(15000);

    new HomePage()
      .clickEditProfileButton()
      .typeFirstname(firstname)
      .typeLastname(lastname)
      .typeEmail(email)
      .typePhone(phone)
      .typeAge(age)
      .clickSaveChangesButton();
  });

  // TODO intercepty, odstranit waity
  // TODO kontrola vyplnenych uzivatelskych udaju a noveho accountu - custom el.??
  // TODO odhlaseni
});
