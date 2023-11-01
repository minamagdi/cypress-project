it.only('should be able to add boards',()=>{
   cy.visit('/home');

   cy.get('.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr').first().click();
   cy.origin('https://id.atlassian.com',()=>{
      cy.get('[type="email"]').type('mina.m.halim642@gmail.com');
      cy.get('.css-1w9zxjf.css-1edgkow').click();
      cy.get('#password').type('Trello123!');
      cy.get('#login-submit').click();
   });

   cy.get('[data-testid="AddIcon"]').click();
   cy.get('[data-testid="header-create-board-button"] > .kgXqyT2weJmrQm').click();
   cy.get('[data-testid="create-board-title-input"]').type('QA Testing');
   cy.get('[data-testid="create-board-submit-button"]').click();
   cy.wait(5000);
   cy.get('[data-testid="board-name-display"]').last().should('have.text','QA Testing');
   
});
