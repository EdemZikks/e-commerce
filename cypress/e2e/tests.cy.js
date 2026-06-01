/// <reference types="cypress" />

import SignUpPage from '../page-object/signUpPage'
import SignInPage from '../page-object/signInPage'
import ProductListingPage from '../page-object/productListingPage'


describe('User Registration', () => {
  const signUpPage = new SignUpPage()
  const signInPage = new SignInPage()
  const productListingPage = new ProductListingPage()

  before(() => {
    cy.visit('/')

    // Register ONCE before all tests
    signUpPage.createAccount()
  })

  beforeEach(() => {
    signInPage.logIn()
    cy.visit('/')
  })

  it('Should Login Successfully', () => {
    cy.visit('/')
    cy.get('button[title="Sign Out"]').should('be.visible')
  })

  it('Should Add Products on PLP', () => {
    productListingPage.addProduct()
  })

  it('Should Add Multiple Quantity of A Product', () => {
    productListingPage.addMultipleQuantity()
  })

  it('Should Search for a product and add to Cart', () => {
    productListingPage.searchProducts()
  })

    it('Should Search using dropdown and add to Cart', () => {
    productListingPage.searchProducts()
  })





})
