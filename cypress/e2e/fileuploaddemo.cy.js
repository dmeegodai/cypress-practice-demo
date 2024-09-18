///<reference types="cypress"/>

it("File upload demo", () => {
  cy.visit("https://trytestingthis.netlify.app/");
  cy.get("#myfile").attachFile("example.json");
  cy.get("#myfile").attachFile("Screenshot 2023-08-07 104750.png");
});
