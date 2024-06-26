import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I navigate to Google homepage', () => {
  cy.visit(`https://www.google.co.uk`);
});
Then('I can access a search input', () => {
  cy.get('textarea').should('exist');
});
