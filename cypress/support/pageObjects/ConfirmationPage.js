class ConfirmationPage {
  submitFormDetails() {
    cy.contains("button", "Checkout").click();
    cy.get("#country").type("Romania").wait(6000);
    cy.get(".suggestions > ul > li > a").click({ force: true });
    cy.get(".checkbox").click();
    cy.get(".ng-untouched > .btn").click();
  }
  getAlertMessage() {
    cy.get(".alert").should("contain", "Success");
  }
}
export default ConfirmationPage;
