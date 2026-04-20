import { BasePage } from "../pageObjects/basePage";

export class ButtonsPage extends BasePage 
{
  static get url()
  {
    return "/buttons";
  }

  static get doubleButton()
  {
    return cy.get("#doubleClickBtn");
  }

  static get rightButton()
  {
    return cy.get("#rightClickBtn");
  }

  static get button()
  {
    return cy.contains("button", /^Click Me/);
  }

  static get doubleMessage()
  {
    return cy.get("#doubleClickMessage");
  }

  static get rightMessage()
  {
    return cy.get("#rightClickMessage");
  }

  static get message()
  {
    return cy.get("#dynamicClickMessage");
  }
}