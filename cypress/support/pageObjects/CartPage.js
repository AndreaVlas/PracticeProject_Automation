class CartPage {
  sumOfProducts() {
    let sum = 0;

    return cy
      .get("tr td:nth-child(4) strong")
      .each(($el) => {
        const amount = Number($el.text().split(" ")[1].trim());
        sum += amount;
      })
      .then(() => {
        return cy.wrap(sum);
      });
  }
}
export default CartPage;
