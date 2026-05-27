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
    
}



export default ProductListingPage