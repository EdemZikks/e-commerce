let testCredentials

class SignUpPage{
    createAccount(){
        const uniqueEmail = `user${Date.now()}@test.com`
        const password = 'testing_123@'
        testCredentials = {email:uniqueEmail, password}

        cy.contains('Sign In').click()
        cy.contains('Sign Up').click()
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type(password)
        cy.contains('Sign Up').click()
        cy.get('button[title="Sign Out"]').should('be.visible')
        cy.get('button[title="Sign Out"]').click()

    }
}

export default SignUpPage
