///<reference types="cypress"/>
///<reference types="cypress-downloadfile"/>
it("File download demo", () => {
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );
});
