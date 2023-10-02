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

Cypress.Commands.add('accessRegisterPage', () => {

    //acesso a aplicação
    cy.visit('/')
    .get('.header-logo')

    //entrou no registro
    cy.get('.fa-lock')
    //    .contains('Cadastro')
        .click()

    //Verifica se está na página de cadastro
    cy.get('#user')
        .should('be.visible')

})