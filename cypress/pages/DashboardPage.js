class DashboardPage {
    //element call section
    elements = {
        languageSelectButton: () => cy.get(':nth-child(2) > .mantine-ActionIcon-transparent'),
        languageMenu: () => cy.get('div[role="menu"]'),
        selectEnglish: () => cy.get('button').contains('English (CA)'),
        selectFrench: () => cy.get('button').contains('Francais (CA)')       

    }
    //action call section
    openLanguageOption = () => {
        this.elements.languageSelectButton().click()
        this.elements.languageMenu().should('be.visible')
    }
    
    selectEnglish = () => {
        this.elements.selectEnglish().click()
        //add optional language verification
    }

    selectFrench = () => {
        this.elements.selectFrench().click()
        //add optional language verification
    }
    
}

module.exports = new DashboardPage();