import { BasePage } from "../pageObjects/basePage";

export class CheckboxPage extends BasePage 
{
  static get url()
  {
    return "/checkbox";
  }

  static expandFolder(folderName)
  {
    cy.get(".rc-tree-title").contains(folderName).parent().parent().find(".rc-tree-switcher").click();
  }

  static checkTheBox(itemName)
  {
    cy.get(".rc-tree-title").contains(itemName).parent().parent().find(".rc-tree-checkbox").click();
  }

  static get resultBox()
  {
    return cy.get("#result");
  }

  static get textSuccess()
  {
    return cy.get('.text-success');
  }
}