import { HeaderSection } from "./header_section";
import { UserInfoPage } from "./user_info_page";

export class HomePage extends HeaderSection{
    constructor(){
        super();
        this.editProfileButton = '[data-testid="toggle-edit-profile-button"]';
    }

    clickEditProfileButton(){
        cy.get(this.editProfileButton).click();
        return UserInfoPage();
    }
}