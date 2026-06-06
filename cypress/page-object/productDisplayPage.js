class ProductDisplayPage {
  viewProductDetails() {
    cy.contains('div.bg-white', 'Airpods')
      .within(() => {
        cy.contains('button', 'View Details').click()
      })

    cy.contains('div', 'Product Details')
      .should('be.visible')

    cy.get('div.bg-white')
      .within(() => {
        cy.get('svg.lucide-plus').parent().click()
        cy.contains('button', 'Add').click()
      })
  }
}

export default ProductDisplayPage