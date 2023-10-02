/// <reference types="cypress" />

describe('Interacoes',() => {

    it('Digitar em um campo', () => {
        cy.visit("/")
            .get('.header-logo')
        
        cy.get('.form-control')
            .type('123@gmail.com')
            
            })
    
    //click normal
    it('Click', () => {
        cy.visit('/')
            .get('.header-logo')
        
    //    cy.get('.fa-user')
    //        .click()
    
    //click duplo
    //    cy.get('.fa-user')
    //        .dblclick()
    
    //click botão direito
    //    cy.get('.fa-user')
    //        .rightclick()
    
    //click por cordenadas
    //    cy.get('.fa-user')
    //        .click(100, 100, {force: true} )
    
    //Apertar ENTER
        cy.get('.form-control')
            .type('123@gmail.com{enter}')


    })

    it ('Select', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get ('.footer_one_widget') 
            .contains('Checkout View Two')
            .click()   

        cy.get('#country') 
            .select('Colombia')
    })

    it ('Checkox e radio button', () => {
        cy.visit('/')
            .get('.header-logo')
        
        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        //checkbox
        cy.get('#materialUnchecked')
            .check()
            .uncheck()
        
        //radio button
        cy.get('#css')
            .check()
    })
    //    it('E-mail inválido', () => {
//      
//    })
//
//    it('Senha inválida', () => {
//       
//    })
})