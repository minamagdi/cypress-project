export default class Login {

// page elements
   homeLoginBtn() {
      return cy.get('.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr');
   }

   emailField() {
      return cy.get('[type="email"]');
   }

   continueBtn() {
      return cy.get('.css-1w9zxjf.css-1edgkow');
   }

   passwordField() {
      return cy.get('#password');
   }

   loginBtn() {
      return cy.get('#login-submit');
   }
   board() {
      return cy.get('.oa4owxzJKsbQhS').last();
   }
// page actions

   clickHomeLoginBtn() {
      this.homeLoginBtn().first().click();
   }
   
   setEmail(email) {
      this.emailField().type(email);
   }

   clickContinueBtn() {
      this.continueBtn().click();
   }

   setPassword(password) {
      this.passwordField().type(password);
   }

   clickLoginBtn() {
      this.loginBtn().click();
   }
   

// page assertion

   assertBoardIsVisible() {
      this.board().should('be.visible');
   }

}
