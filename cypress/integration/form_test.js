describe('Check inputs & Check Button Functionality', ()=> {

    it('can navigate to the site', () =>{
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })

    it('get name and input test name', ()=>{
        cy.get('input[name=firstname]')
        .type('testname')
        .should('have.value', 'testname')
        cy.get('input[name=lastname]').type('Hernandez')
    })

    it('get email and input test email', ()=>{
        cy.get('input[name=email]')
        .type('testemail@email.com')
        // .should('have.value', 'testname')
    })
    it('get password and input test password', ()=>{
        cy.get('input[name=password]')
        .type('testpassword')
        // .should('have.value', 'testname')
    })
    it('get checkbox and test check', ()=>{
        cy.get('input[type=checkbox]')
        .check()
    })
    it('can submit', () =>{
        cy.get('button').click()
    })
})

describe('Validation test', ()=>{
    beforeEach(()=>{
          cy.get('input[name=firstname]').clear()
          cy.get('input[name=lastname]').clear()
          cy.get('input[name=email]').clear()
          cy.get('input[name=password]').clear()
          cy.get('input[type=checkbox]').uncheck()
    })
    
    it('does not validate incorrect string', ()=>{
        cy.get('input[name=firstname]').type('t')
        cy.get('.errors').find('div:nth-of-type(1)').contains('First Name must be at least 2 characters')
        cy.get('input[name=lastname]').type('jet')
        cy.get('.errors').find('div:nth-of-type(2)').contains('Lastname must be at least 4 characters')
        cy.get('input[name=email]').type('miss')
        cy.get('.errors').find('div:nth-of-type(3)').contains('Email must be valid')
        cy.get('input[name=password]').type('pass')
        cy.get('.errors').find('div:nth-of-type(4)').contains('Password should be at least 8 characters')
    })

    it('displays error for empty fields',()=>{
        cy.get('.errors').find('div:nth-of-type(1)').contains('First Name is required')
        cy.get('.errors').find('div:nth-of-type(2)').contains('Last Name is required')
        cy.get('.errors').find('div:nth-of-type(3)').contains('Email is required')
        cy.get('.errors').find('div:nth-of-type(4)').contains('Password is required')
        cy.get('.errors').find('div:nth-of-type(5)').contains('Must Accept Terms of Service')
    })
})