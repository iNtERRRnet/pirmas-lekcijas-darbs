import { TextboxPage } from "../pageObjects/textboxPage";
import { CheckboxPage } from "../pageObjects/checkboxPage";
import { RadiobuttonPage } from "../pageObjects/radiobuttonPage";
import { ButtonsPage } from "../pageObjects/buttonsPage";
import { WebtablePage } from "../pageObjects/webtablePage";

describe("DEMOQA", () =>
{
  context("Text Box Tests", () =>
  {
    beforeEach(() =>
    {
      TextboxPage.visit();
    });

    //it.skip - skips test
    //it.only - runs only tagged tests
    it("Text Box", () =>
    {
      TextboxPage.fullNameField.type("RealName");
      TextboxPage.emailField.type("realemail@scam.com");
      TextboxPage.currentAddressField.type("Down the road near the mall");
      TextboxPage.permamentAddressField.type("111 John Street, Real City");
      TextboxPage.submitButton.click();
      TextboxPage.nameValidation.should("have.text", "Name:RealName");
      TextboxPage.emailValidation.should("have.text", "Email:realemail@scam.com");
      TextboxPage.currentAddressValidation.should("have.text", "Current Address :Down the road near the mall ");
      TextboxPage.permamentAddressValidation.should("have.text", "Permananet Address :111 John Street, Real City");
    });

    it("Text Box - Negative", () =>
    {
      TextboxPage.emailField.should("not.have.class", "field-error");
      TextboxPage.emailField.type("realemail@super@scam.com");
      TextboxPage.submitButton.click();
      TextboxPage.emailField.should("have.class", "field-error");
    });
  });

  context("Checkbox Tests", () =>
  {
    beforeEach(() =>
    {
      CheckboxPage.visit();
    });

    it("Checkbox", () =>
    {
      CheckboxPage.expandFolder("Home");
      CheckboxPage.expandFolder("Desktop");
      CheckboxPage.checkTheBox("Notes");
      CheckboxPage.expandFolder("Documents");
      CheckboxPage.expandFolder("Office");
      CheckboxPage.checkTheBox("Private");
      CheckboxPage.resultBox.should("have.text", "You have selected :notesprivate");
      CheckboxPage.textSuccess.should("contain.text", "notes");
      CheckboxPage.textSuccess.should("contain.text", "private");
    });

    it("Checkbox - Select All", () =>
    {
      CheckboxPage.expandFolder("Home");
      CheckboxPage.expandFolder("Desktop");
      CheckboxPage.expandFolder("Documents");
      CheckboxPage.expandFolder("WorkSpace");
      CheckboxPage.expandFolder("Office");
      CheckboxPage.expandFolder("Downloads");
      CheckboxPage.checkTheBox("Home");
      CheckboxPage.textSuccess.should("contain.text", "homedesktopdocumentsdownloadsnotescommandsworkspaceofficewordFileexcelFilereactangularveupublicprivateclassifiedgeneral");
    });
  });

  context("Radio Button Tests", () =>
  {
    beforeEach(() =>
    {
      RadiobuttonPage.visit();
    });

    it("Radio Buttons", () =>
    {
      RadiobuttonPage.yesRadio.click();
      RadiobuttonPage.textSuccess.should("contain.text", "Yes");
      RadiobuttonPage.impressiveRadio.click();
      RadiobuttonPage.textSuccess.should("contain.text", "Impressive");
      RadiobuttonPage.noRadio.should("have.class", "disabled");
    });
  });

  context("Button Tests", () =>
  {
    beforeEach(() =>
    {
      ButtonsPage.visit();
    });

    it("Buttons", () =>
    {
      ButtonsPage.doubleButton.dblclick();
      ButtonsPage.doubleMessage.should("have.text", "You have done a double click")
      ButtonsPage.rightButton.rightclick();
      ButtonsPage.rightMessage.should("have.text", "You have done a right click")
      ButtonsPage.button.click();
      ButtonsPage.message.should("have.text", "You have done a dynamic click")
    });
  });

  context("Web Table Tests", () =>
  {
    beforeEach(() =>
    {
      WebtablePage.visit();
    });

    it("Web Tables", () =>
    {
      const data = {name: "Man", surname: "The Myth", email: "man.themyth@real.co", age: "31", salary: "3000", department: "Money"};

      WebtablePage.addButton.click();
      WebtablePage.nameField.type(data.name);
      WebtablePage.surnameField.type(data.surname);
      WebtablePage.emailField.type(data.email);
      WebtablePage.ageField.type(data.age);
      WebtablePage.salaryField.type(data.salary);
      WebtablePage.departmentField.type(data.department);
      WebtablePage.submitButton.click();
      WebtablePage.searchBox.type(data.email);
      WebtablePage.rows.should("have.length", "1");
    });
  });
});