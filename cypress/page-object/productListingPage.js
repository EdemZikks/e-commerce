class ProductListingPage {
    addProduct() {
        cy.contains('div.bg-white', 'Phone Case')
          .find('button')
          .contains('Add')
          .click()

        cy.contains('div.bg-white', 'Noise-Cancelling Headphones')
          .find('button')
          .contains('Add')
          .click()

    }
    addMultipleQuantity() {
      cy.contains('div','Desk Lamp LED')
        .within(() => {
          for (let i = 0; i < 4; i++){
            cy.get('svg.lucide-plus').click()
          }
          cy.contains('button', 'Add').click()
        })
    }
    searchProducts() {
      cy.get('[placeholder="Search products..."]').type('Jacket')
        cy.contains('div.bg-white', 'Jacket')
          .find('button')
          .contains('Add')
          .click()
    }
    dropDownSearch() {
      cy.get('select').select('Electronics')
        .contains('div.bg-white', 'Monitor27')
        .find('button')
        .contains('Add')
        .click()

    }
    
}



export default ProductListingPage