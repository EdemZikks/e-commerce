

  // Store credentials at the describe level
  // Credentials stored in testCredentials variable (persist across all test)

  let testCredentials

  // before() method runs and registers the account
  // Register ONCE before all test

  before(() => {
    cy.visit('/')
    const uniqueEmail = `user${Date.now()}@test.com`
    const password = 'testing_123@'
    testCredentials = {email:uniqueEmail, password}

    // Register the user
    
  })
