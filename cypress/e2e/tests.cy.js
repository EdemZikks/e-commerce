/// <reference types="cypress" />
import SignUpPage from '../page-object/signUpPage'

  // Store credentials at the describe level
  // Credentials stored in testCredentials variable (persist across all test)

  //let testCredentials

  // before() method runs and registers the account
  // Register ONCE before all test

  before(() => {
    cy.visit('/')


    // Register the user
    it('should register a new user', () => {
      signUpPage.CreateAccount()
    })

  })
