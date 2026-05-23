/// <reference types="cypress" />

import SignUpPage from '../page-object/signUpPage'


describe('User Registration', () => {
  const signUpPage = new SignUpPage()

  before(() => {
    cy.visit('/')

    // Register ONCE before all tests
    signUpPage.createAccount()
  })

  it('should login successfully', () => {
    // your test here
  })

})