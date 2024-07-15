import { When, Then, AfterAll, BeforeAll } from '@badeball/cypress-cucumber-preprocessor';

When('I navigate to Google homepage', () => {
  cy.visit(`https://www.google.co.uk`);
});
Then('I can access a search input', () => {
  cy.get('textarea').should('exist');
});

Before(() => {
 cy.log('##############');
  cy.log("BEFORE");
  cy.log('################');
});

AfterAll(() => {
  cy.log('##############');
  cy.log('# After All #');
  cy.log('##############');
  
  cy.writeFile(
    '../../browserDetails.json',
    Cypress.browser
  );
});
