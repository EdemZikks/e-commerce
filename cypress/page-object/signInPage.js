import {testCredentials} from "./signUpPage"

class SignInPage{
    logIn(){
        cy.session(testCredentials.email, () => {
            cy.visit('/')
            cy.contains('Sign In').click()
            cy.get('#email').type(testCredentials.email)
            cy.get('#password').type(testCredentials.password)
            cy.contains('Sign In').click()
            cy.get('button[title="Sign Out"]').should('be.visible')

        })
    }
}
export default SignInPage