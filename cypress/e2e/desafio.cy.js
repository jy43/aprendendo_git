/// <reference types='cypress' />
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio.json')

const name = faker.person.fullName()

const screens = ['desktop', 'iphone-x', 'samsung-s10']

screens.forEach(element => {

    describe('Cadastro de usuário', () => {

        beforeEach('Acessando página de cadstro', () => {
           
            if(element != 'desktop') {
                cy.viewport(element)    
            }
        //    teste
            //Acessando tela de cadastro de usuário
            home_page.accessRegisterPage()
        })
        it('Validar campo nome vazio', () =>{
            register_page.saveRegister()
            register_page.checkMessage('O campo nome deve ser prenchido')
        })
        it('Validar campo e-mail vazio', () =>{
            register_page.fillName(name)
            register_page.saveRegister()
                cy.get('#email')
                cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
        })
        it('Validar campo e-mail inválido', () =>{
            register_page.fillName(name)
            register_page.fillEmail('123kldfkmdfkimd')
            register_page.saveRegister()
                cy.get('#email')
                cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
        })
        it('Validar campo senha vazio', () =>{
            register_page.fillName(name)
            register_page.fillEmail(user_data.email)
            register_page.saveRegister()
                cy.get('#password')
                .should('be.empty')
                cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        })
        it('Validar campo senha inválida', () =>{
            register_page.fillName(name)
            register_page.fillEmail(user_data.email)
            register_page.fillPassword('123')
            register_page.saveRegister()
                cy.get('#password')
                cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        })
        it('validar Cadastro realizado com sucesso', () =>{
            register_page.fillName(name)
            register_page.fillEmail(user_data.email)
            register_page.fillPassword(user_data.password)
            register_page.saveRegister()
            register_page.checkMsgcadastro('Cadastro realizado!')
        })
        it('Validar Bem-vindo ...', () =>{
            register_page.fillName(name)
            register_page.fillEmail(user_data.email)
            register_page.fillPassword(user_data.password)
            register_page.saveRegister()
            register_page.checkMsgwelcome(`Bem-vindo ${name}`)
        })
    })
});