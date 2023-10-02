// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types='cypress' />


// Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '#errorMessageFirstName',
        sucessTitle: '#swal2-title',
        sucessSubtitle: '#swal2-html-container'
    }
}

// Ações/Métodos/Funções

Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.register)
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
    .should('be.visible')
    .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.fields.name)
    cy.get(elements.messages.error)
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkMsgcadastro', (msgcadastro) => {
    cy.get(elements.messages.sucessTitle)
        .should('have.text', msgcadastro)
})

Cypress.Commands.add('checkMsgwelcome', (msgwelcome) => {
    cy.get(elements.messages.sucessSubtitle, {timeout: 3000})
        .should('have.text', msgwelcome)
})

