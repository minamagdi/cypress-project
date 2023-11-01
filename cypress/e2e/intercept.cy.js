
describe('intercept',()=> {
   it('should be able to assert QA Testing [ get ]',()=>{
      cy.intercept( {
         method : 'GET',
         url:'/1/boards/653e9e19b153dcc0b927a3f8/plugins?filter=enabled'
      }).as('boardReload');

      cy.intercept( {
         method : 'POST',
         url:'/1/boards/653ea48998b6028b1e5faf13/markAsViewed'
      }).as('board#2');
   
      cy.visit('/b/WHdSEY9S/qa-testing-intercept');
   
      cy.setCookie(
         'cloud.session.token',
         'eyJraWQiOiJzZXNzaW9uLXNlcnZpY2UvcHJvZC0xNTkyODU4Mzk0IiwiYWxnIjoiUlMyNTYifQ.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YjIwMWZhMWUzNzlhYTE4YTllZjFiMjAiLCJlbWFpbERvbWFpbiI6ImdtYWlsLmNvbSIsImltcGVyc29uYXRpb24iOltdLCJjcmVhdGVkIjoxNjk4NTk5OTA5LCJyZWZyZXNoVGltZW91dCI6MTY5ODYwMDUwOSwidmVyaWZpZWQiOnRydWUsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6IjgxM2JjNGJlLTVjNGItNDZjMC05YWNhLTQ4OGFkOGJlOGI1OSIsInN0ZXBVcHMiOltdLCJhdWQiOiJhdGxhc3NpYW4iLCJuYmYiOjE2OTg1OTk5MDksImV4cCI6MTcwMTE5MTkwOSwiaWF0IjoxNjk4NTk5OTA5LCJlbWFpbCI6Im1pbmEubS5oYWxpbTY0MkBnbWFpbC5jb20iLCJqdGkiOiI4MTNiYzRiZS01YzRiLTQ2YzAtOWFjYS00ODhhZDhiZThiNTkifQ.zzRsN5R6XKDn5m5kpsfbIqhuISdzHm4kMPerYH5x7sL524QXab9A2xOoYwOy2OLEg-kiZ2P0OUux_ENGH7KXTViJhVJif0B4Ouy2GebczmZTqtlNcow7jPFRtH1ISOZhPhP_wRw3u6YEwAYItMrhuZ4MwiIE5F1A3TICyAQUgyNih_QslDSBt0Rx4x4eNY8R_jWBbbVG91SCeBJy2R2R4kEfmAxVeLnNSIipWQkJfzDLjZR0XnUCTtgMVqVy4sZSe33nHcK9CxnmZ8A7Gpd2U2glPM8ybknjYDOKDG7LL7Y-SCPbnrKxHoRD_UvUgPcmSU8B0fPtns8Micl5UDD1Tg');
      cy.reload();   
   
   
      cy.wait('@boardReload'); // == cy.wait(5000);
      cy.get('[data-testid="board-name-display"]').last().should('have.text','QA Testing Intercept');
   });

   it.only('should be able to add new board QA Testing [ Post ]',()=>{
      cy.intercept( {
         method : 'POST',
         url:'/gateway/api/gasv3/api/v1/batch'
      }).as('pageReload');

      cy.intercept( {
         method : 'POST',
         url:'/1/boards'
      }).as('board#2');
      cy.visit('/u/mina_magdi/boards');
   
      cy.setCookie(
         'cloud.session.token',
         'eyJraWQiOiJzZXNzaW9uLXNlcnZpY2UvcHJvZC0xNTkyODU4Mzk0IiwiYWxnIjoiUlMyNTYifQ.eyJhc3NvY2lhdGlvbnMiOltdLCJzdWIiOiI1YjIwMWZhMWUzNzlhYTE4YTllZjFiMjAiLCJlbWFpbERvbWFpbiI6ImdtYWlsLmNvbSIsImltcGVyc29uYXRpb24iOltdLCJjcmVhdGVkIjoxNjk4NTk5OTA5LCJyZWZyZXNoVGltZW91dCI6MTY5ODYwMDUwOSwidmVyaWZpZWQiOnRydWUsImlzcyI6InNlc3Npb24tc2VydmljZSIsInNlc3Npb25JZCI6IjgxM2JjNGJlLTVjNGItNDZjMC05YWNhLTQ4OGFkOGJlOGI1OSIsInN0ZXBVcHMiOltdLCJhdWQiOiJhdGxhc3NpYW4iLCJuYmYiOjE2OTg1OTk5MDksImV4cCI6MTcwMTE5MTkwOSwiaWF0IjoxNjk4NTk5OTA5LCJlbWFpbCI6Im1pbmEubS5oYWxpbTY0MkBnbWFpbC5jb20iLCJqdGkiOiI4MTNiYzRiZS01YzRiLTQ2YzAtOWFjYS00ODhhZDhiZThiNTkifQ.zzRsN5R6XKDn5m5kpsfbIqhuISdzHm4kMPerYH5x7sL524QXab9A2xOoYwOy2OLEg-kiZ2P0OUux_ENGH7KXTViJhVJif0B4Ouy2GebczmZTqtlNcow7jPFRtH1ISOZhPhP_wRw3u6YEwAYItMrhuZ4MwiIE5F1A3TICyAQUgyNih_QslDSBt0Rx4x4eNY8R_jWBbbVG91SCeBJy2R2R4kEfmAxVeLnNSIipWQkJfzDLjZR0XnUCTtgMVqVy4sZSe33nHcK9CxnmZ8A7Gpd2U2glPM8ybknjYDOKDG7LL7Y-SCPbnrKxHoRD_UvUgPcmSU8B0fPtns8Micl5UDD1Tg');
      cy.reload();   

      cy.wait('@pageReload');   // wait page to load and then create new board #2
      cy.get('[data-testid="AddIcon"]').click();
      cy.get('[data-testid="header-create-board-button"] > .kgXqyT2weJmrQm').click();
      cy.get('[data-testid="create-board-title-input"]').type('board #2');
      cy.get('[data-testid="create-board-submit-button"]').click();
      
      
   
      // wait board to be apears
      cy.wait('@board#2').then((board)=> {   
         expect(board.response.statusCode).to.eq(200);
         cy.get('[data-testid="board-name-display"]').last().should('have.text','board #2');
         
      }) ;
   });
});
