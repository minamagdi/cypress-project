 import Login from "../pageObjects/loginPage.js";
 const loginPage = new Login();
describe('login functionality',()=>{
   it.only('should be able to login sucessfully',()=>{
      //const login = new Login();
      cy.visit('/home');
      loginPage.clickHomeLoginBtn();

      cy.origin('https://id.atlassian.com', () => {
         const Login = Cypress.require('../pageObjects/loginPage')
         const login = new Login();
         login.setEmail('mina.m.halim642@gmail.com');
         login.clickContinueBtn();
         login.setPassword('Trello123!');
         login.clickLoginBtn();
      });
     // login.assertBoardIsVisible();
   });

   it('should not be able to login sucessfully with invalid e-mail',()=>{
      cy.visit('/home');
      cy.get('.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr').first().click();
      cy.origin('https://id.atlassian.com',()=>{
         cy.get('[type="email"]').type('minahalim642@gmail.com');
         cy.get('.css-1w9zxjf.css-1edgkow').click();
         cy.get('.css-azin1o').should('have.text','Sign up to continue');
      });  
   });

   it('should not be able to login sucessfully with invalid password',()=>{
      cy.visit('/home');
      cy.get('.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr').first().click();
      cy.origin('https://id.atlassian.com',()=>{
         cy.get('[type="email"]').type('mina.m.halim642@gmail.com');
         cy.get('.css-1w9zxjf.css-1edgkow').click();
         cy.get('#password').type('Trello123');
         cy.get('#login-submit').click();
         cy.get('.css-azin1o').should('have.text','Log in to continue');
      });
   });
});