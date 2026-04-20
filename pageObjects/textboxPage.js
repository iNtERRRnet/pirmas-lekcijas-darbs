import { BasePage } from "../pageObjects/basePage";

export class TextboxPage extends BasePage 
{
  static get url()
  {
    return "/text-box";
  }

  static get fullNameField()
  {
    return cy.get("#userName");
  }

  static get emailField()
  {
    return cy.get("[id='userEmail']");
  }
  static get currentAddressField()
  {
    return cy.get("#currentAddress");
  }
  static get permamentAddressField()
  {
    return cy.get("#permanentAddress");
  }
  static get submitButton()
  {
    return cy.get("#submit");
  }
  static get nameValidation()
  {
    return cy.get("#name");
  }
  static get emailValidation()
  {
    return cy.get("#email");
  }
  static get currentAddressValidation()
  {
    return cy.get("p#currentAddress");
  }
  static get permamentAddressValidation()
  {
    return cy.get("p#permanentAddress");
  }
}