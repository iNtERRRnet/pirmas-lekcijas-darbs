import { BasePage } from "../pageObjects/basePage";

export class WebtablePage extends BasePage 
{
  static get url()
  {
    return "/webtables";
  }

  static get addButton()
  {
    return cy.get("#addNewRecordButton");
  }

  static get nameField()
  {
    return cy.get("#firstName");
  }

  static get surnameField()
  {
    return cy.get("#lastName");
  }

  static get emailField()
  {
    return cy.get("#userEmail");
  }

  static get ageField()
  {
    return cy.get("#age");
  }

  static get salaryField()
  {
    return cy.get("#salary");
  }

  static get departmentField()
  {
    return cy.get("#department");
  }

  static get submitButton()
  {
    return cy.get("#submit");
  }

  static get searchBox()
  {
    return cy.get("#searchBox");
  }

  static get rows()
  {
    return cy.get("table tbody tr");
  }

  static editRecord(row)
  {
    cy.get("#edit-record-" + row).click();
  }

  static deleteRecord(row)
  {
    cy.get("delete-record-" + row).click();
  }
}