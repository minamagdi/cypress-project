it.only('should be able to add boards',()=>{
   cy.visit('/home');
   cy.get('.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr').first().click(); //loginBtn
   cy.origin('https://id.atlassian.com',()=>{
      cy.get('[type="email"]').type('mina.m.halim642@gmail.com');
      cy.get('.css-1w9zxjf.css-1edgkow').click();
      cy.get('#password').type('Trello123!');
      cy.get('#login-submit').click();
   });
   
   cy.request({
      method:'POST',
      url:'https://trello.com/1/boards',
      body:{
         defaultLists: false,
         dsc: "75bbcba5adb866d8fe6c21962be6533cd87b757f44e59af074b1877ccace905f",
         idOrganization: "64f33846c6a59c17a2769f12",
         name: "tttttttt",
         prefs_background_url: "https://images.unsplash.com/photo-1696144706485-ff7825ec8481?ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjk4MjY4MjQ5fA&ixlib=rb-4.0.3&w=2560&h=2048&q=90",
         prefs_permissionLevel: "org",
         prefs_selfJoin: true
      }
   }
   )
   
   cy.get('[data-testid="board-name-display"]').last().should('have.text','tttttttt');
   
});