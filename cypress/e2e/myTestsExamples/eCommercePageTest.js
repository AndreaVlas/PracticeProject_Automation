import ConfirmationPage from "../../support/pageObjects/ConfirmationPage";
import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";

describe("Open my page", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Submit order", function () {
    const productName = this.data.productName;
    const homePage = new HomePage();
    homePage.goTo(Cypress.env("url") + "/loginpagePractise/#");
    cy.successfulLogin(this.data.username, this.data.password).then(() => {
      const productPage = new ProductPage();
      productPage.pageValidation();
      productPage.verifyCardLimit();
      productPage.selectProduct(productName);
      productPage.selectFirstProduct();
      const cartPage = productPage.goToCart();
      cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
      });
      const confirmationPage = new ConfirmationPage();
      confirmationPage.submitFormDetails();
      confirmationPage.getAlertMessage();
    });
  });
});
