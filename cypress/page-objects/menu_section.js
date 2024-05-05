import { customElement } from "../helpers/custom_element";

export class MenuSection {
  constructor() {
    this.domuXPath = customElement("//li[contains(text(),'Domů')]");
    this.uctyXPath = customElement("//li[contains(text(),'Účty')]");
    this.transakceXPath = customElement("//li[contains(text(),'Transakce')]");
    this.podporaXPath = customElement("//li[contains(text(),'Podpora')]");
  }
}
