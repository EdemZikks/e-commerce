/// <reference types="cypress" />

import SignUpPage from '../page-object/signUpPage'
import SignInPage from '../page-object/signInPage'


describe('User Registration', () => {
  const signUpPage = new SignUpPage()
  const signInPage = new SignInPage()

  before(() => {
    cy.visit('/')

    // Register ONCE before all tests
    signUpPage.createAccount()
  })

  beforeEach(() => {
    signInPage.logIn()
  })
  
  it('should login successfully', () => {
    cy.visit('/')
    cy.get('button[title="Sign Out"]').should('be.visible')
  })
  

})