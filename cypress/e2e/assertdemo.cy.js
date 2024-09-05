it('Assert Demo', () =>{
    cy.visit('https://store.steampowered.com/');
    cy.xpath("//a[@class='pulldown_desktop'][normalize-space()='New & Noteworthy']").click();
    cy.xpath("//a[@class='popup_menu_item'][normalize-space()='Top Sellers']").click();
    cy.xpath("//div[@class='_1kLTg9HHfMgVo8gDstT8uR _kbFJdSwEh7bc98Yq_gZ2']").should('have.class', '_1kLTg9HHfMgVo8gDstT8uR _kbFJdSwEh7bc98Yq_gZ2');
    cy.xpath("//div[@class='_3sJkwsBQuiAc_i3VOWX4tv']").should('be.visible');
    cy.xpath("//div[@class='_1kLTg9HHfMgVo8gDstT8uR _kbFJdSwEh7bc98Yq_gZ2']/h1").should('have.text', 'Top Sellers');
    cy.xpath("//div[@class='_1kLTg9HHfMgVo8gDstT8uR _kbFJdSwEh7bc98Yq_gZ2']/h1").should('contain.text', 'Top Sellers');
})