describe("Open my page", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });

  it("search for a item and add it to the cart", () => {
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".products").find(".product").should("have.length", 4);
    // cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });

  it("will print the title", () => {
    cy.get(".brand").then(function (logo) {
      cy.log(logo.text());
    });
  });
});
