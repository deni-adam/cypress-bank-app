import { customElement } from "../helpers/custom_element";
import { LoginPage } from "./login_page";

export class HeaderSection {
  constructor() {
    this.logo = customElement('[data-testid="logo-img"]');
    this.title = customElement(".app-title");
    this.logoutButton = customElement(".logout-link");
  }


  clickLogoutButton() {
    this.logoutButton.get().click();
    return new LoginPage();
  }
}
