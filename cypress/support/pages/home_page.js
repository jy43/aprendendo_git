/// <reference types='cypress' />

export default {
    accessRegisterPage(){
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

    }
}