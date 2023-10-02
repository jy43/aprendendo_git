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
export default {

saveRegister () {
    cy.get(elements.buttons.register)
        .click()
},

fillName(name) {
    cy.get(elements.fields.name)
        .type(name)
},

fillEmail(email) {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
},

fillPassword(password) {
    cy.get(elements.fields.password)
    .should('be.visible')
    .type(password)
},

checkMessage(message) {
    cy.get(elements.fields.name)
    cy.get(elements.messages.error)
        .should('be.visible')
        .should('have.text', message)
},

checkMsgcadastro(msgcadastro) {
    cy.get(elements.messages.sucessTitle)
        .should('have.text', msgcadastro)
},

checkMsgwelcome(msgwelcome) {
    cy.get(elements.messages.sucessSubtitle, {timeout: 3000})
        .should('have.text', msgwelcome)
}


}