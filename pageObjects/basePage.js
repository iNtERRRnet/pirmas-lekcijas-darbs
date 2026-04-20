export class BasePage 
{
  static get url()
  {
    return "";
  }

  static visit()
  {
    cy.visit("https://demoqa.com" + this.url);
  }
}