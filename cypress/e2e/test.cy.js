
it('Google Serach', () => {
    cy.visit('https://google.com/')
    cy.wait(2000)
    cy.get('.gLFyf', {timeout:5000}).type('steam {Enter}');
    // cy.xpath("(//input[@name='btnK'])[2]").click();
    cy.xpath("(//div[@class='YmvwI'][normalize-space()='News'])[1]").click();
 })