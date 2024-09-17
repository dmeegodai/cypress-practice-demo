///<reference types="cypress"/>
before(function(){
    cy.fixture('example.json').as('test_data');
})

it('Read file data from fixture file', ()=>{
    cy.fixture('example.json').then((data) =>{
        cy.log(data.name);
        cy.log(data.email);
        cy.log(data.test);     
    })
})
it('Read the data from before()', function (){
    cy.log(this.test_data);
})
it('Read file through readFile()', ()=>{
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.test);
        cy.log(data.name);
        cy.log(data.email)
    })
})
it('Write file through writeFile()', ()=>{
    cy.writeFile('sample.txt', 'This is created through writeFile() method\n');
    cy.writeFile('sample.txt', 'Second line added\n', {flag: 'a+'});
    cy.writeFile('sample.txt', 'Third line added\n', {flag: 'a+'});
})