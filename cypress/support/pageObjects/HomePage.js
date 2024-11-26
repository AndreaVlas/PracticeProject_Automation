import ProductPage from "./ProductPage";

class HomePage {
  goTo(url) {
    cy.visit(url);
  }

  successfulLogin() {
    cy.successfulLogin();
    return new ProductPage();
  }
}
export default HomePage;
