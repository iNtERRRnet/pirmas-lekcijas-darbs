import { BasePage } from "../pageObjects/basePage";

export class RadiobuttonPage extends BasePage 
{
  static get url()
  {
    return "/radio-button";
  }

  static get yesRadio()
  {
    return cy.get("#yesRadio");
  }

  static get impressiveRadio()
  {
    return cy.get("#impressiveRadio");
  }

  static get noRadio()
  {
    return cy.get("#noRadio");
  }

  static get textSuccess()
  {
    return cy.get('.text-success');
  }
}